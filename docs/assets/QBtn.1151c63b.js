import{c as s,h as g,g as N,Z as fe,K as z,A as ve,D as ge,t as ee,C as me,p as te,r as V,o as be,T as he,E as ye,s as w,v as ke}from"./index.2a52d71d.js";import{c as I,h as pe,f as M,d as xe}from"./render.4f443b9d.js";const K={xs:18,sm:24,md:32,lg:38,xl:46},ne={size:String};function ae(e,t=K){return s(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const D="0 0 24 24",F=e=>e,j=e=>`ionicons ${e}`,re={"mdi-":e=>`mdi ${e}`,"icon-":F,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":j,"ion-ios":j,"ion-logo":j,"iconfont ":F,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(re).join("|")+")"),Ee=new RegExp("^("+Object.keys(ue).join("|")+")"),H=new RegExp("^("+Object.keys(ie).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,Re=/^svguse:/,we=/^ion-/,Be=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var U=I({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=N(),i=ae(e),l=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),c=s(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const v=n.iconMapFn(a);if(v!==void 0)if(v.icon!==void 0){if(a=v.icon,a==="none"||!a)return{none:!0}}else return{cls:v.cls,content:v.content!==void 0?v.content:" "}}if($e.test(a)===!0){const[v,y=D]=a.split("|");return{svg:!0,viewBox:y,nodes:v.split("&&").map(k=>{const[r,p,h]=k.split("@@");return g("path",{style:p,d:r,transform:h})})}}if(Se.test(a)===!0)return{img:!0,src:a.substring(4)};if(Re.test(a)===!0){const[v,y=D]=a.split("|");return{svguse:!0,src:v.substring(7),viewBox:y}}let b=" ";const E=a.match(qe);if(E!==null)o=re[E[1]](a);else if(Be.test(a)===!0)o=a;else if(we.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(H.test(a)===!0){o="notranslate material-symbols";const v=a.match(H);v!==null&&(a=a.substring(6),o+=ie[v[1]]),b=a}else{o="notranslate material-icons";const v=a.match(Ee);v!==null&&(a=a.substring(2),o+=ue[v[1]]),b=a}return{cls:o,content:b}});return()=>{const o={class:l.value,style:i.value,"aria-hidden":"true",role:"presentation"};return c.value.none===!0?g(e.tag,o,pe(t.default)):c.value.img===!0?g("span",o,M(t.default,[g("img",{src:c.value.src})])):c.value.svg===!0?g("span",o,M(t.default,[g("svg",{viewBox:c.value.viewBox||"0 0 24 24"},c.value.nodes)])):c.value.svguse===!0?g("span",o,M(t.default,[g("svg",{viewBox:c.value.viewBox},[g("use",{"xlink:href":c.value.src})])])):(c.value.cls!==void 0&&(o.class+=" "+c.value.cls),g(e.tag,o,M(t.default,[c.value.content])))}}});const Le={size:{type:[Number,String],default:"1em"},color:String};function _e(e){return{cSize:s(()=>e.size in K?`${K[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ce=I({name:"QSpinner",props:{...Le,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=_e(e);return()=>g("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Pe(e,t){const n=e.style;for(const i in t)n[i]=t[i]}function Ze(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=fe(e)===!0?e.value:e;if(t)return t.$el||t}function Te(e,t=250){let n=!1,i;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),i=e.apply(this,arguments)),i}}function W(e,t,n,i){n.modifiers.stop===!0&&ee(e);const l=n.modifiers.color;let c=n.modifiers.center;c=c===!0||i===!0;const o=document.createElement("span"),a=document.createElement("span"),b=me(e),{left:E,top:v,width:y,height:k}=t.getBoundingClientRect(),r=Math.sqrt(y*y+k*k),p=r/2,h=`${(y-r)/2}px`,d=c?h:`${b.left-E-p}px`,f=`${(k-r)/2}px`,x=c?f:`${b.top-v-p}px`;a.className="q-ripple__inner",Pe(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${d},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const R=()=>{o.remove(),clearTimeout($)};n.abort.push(R);let $=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,$=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,$=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:t,value:n,arg:i}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||i,keyCodes:[].concat(l.keyCodes||13)}}var Me=xe({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const i={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){i.enabled===!0&&l.qSkipRipple!==!0&&l.type===(i.modifiers.early===!0?"pointerdown":"click")&&W(l,e,i,l.qKeyEvent===!0)},keystart:Te(l=>{i.enabled===!0&&l.qSkipRipple!==!0&&z(l,i.modifiers.keyCodes)===!0&&l.type===`key${i.modifiers.early===!0?"down":"up"}`&&W(l,e,i,!0)},300)};X(i,t),e.__qripple=i,ve(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&X(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),ge(t,"main"),delete e._qripple)}});const le={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(le),Oe={align:{type:String,validator:e=>Ae.includes(e)}};function je(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${le[t]}`})}function ze(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ke(e,t){for(const n in t){const i=t[n],l=e[n];if(typeof i=="string"){if(i!==l)return!1}else if(Array.isArray(l)===!1||l.length!==i.length||i.some((c,o)=>c!==l[o]))return!1}return!0}function G(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Ne(e,t){return Array.isArray(e)===!0?G(e,t):Array.isArray(t)===!0?G(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ne(e[n],t[n])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ve(e){const t=N(),{props:n,proxy:i}=t,l=ze(t),c=s(()=>n.disable!==!0&&n.href!==void 0),o=s(()=>l===!0&&n.disable!==!0&&c.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=s(()=>{if(o.value===!0)try{return i.$router.resolve(n.to)}catch{}return null}),b=s(()=>a.value!==null),E=s(()=>c.value===!0||b.value===!0),v=s(()=>n.type==="a"||E.value===!0?"a":n.tag||e||"div"),y=s(()=>c.value===!0?{href:n.href,target:n.target}:b.value===!0?{href:a.value.href,target:n.target}:{}),k=s(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const $=i.$route.matched;if($.length===0)return-1;const C=$.findIndex(Z.bind(null,R));if(C>-1)return C;const A=Y(f[x-2]);return x>1&&Y(R)===A&&$[$.length-1].path!==A?$.findIndex(Z.bind(null,f[x-2])):C}),r=s(()=>b.value===!0&&k.value>-1&&Ke(i.$route.params,a.value.params)),p=s(()=>r.value===!0&&k.value===i.$route.matched.length-1&&Ie(i.$route.params,a.value.params)),h=s(()=>b.value===!0?p.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":r.value===!0?` ${n.activeClass}`:"":"");function d(f){return n.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||n.target==="_blank"?!1:(te(f),i.$router[n.replace===!0?"replace":"push"](n.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:c,hasLink:E,linkTag:v,linkRoute:a,linkIsActive:r,linkIsExactActive:p,linkClass:h,linkProps:y,navigateToRouterLink:d}}const J={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},Fe=["button","submit","reset"],He=/[^\s]\/[^\s]/,Ue={...ne,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function We(e){const t=ae(e,De),n=je(e),{hasRouterLink:i,hasLink:l,linkTag:c,linkProps:o,navigateToRouterLink:a}=Ve("button"),b=s(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(f=>f in J?J[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):d}),E=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>v.value===!0?e.tabindex||0:-1),k=s(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=s(()=>{const d={tabindex:y.value};return l.value===!0?Object.assign(d,o.value):Fe.includes(e.type)===!0&&(d.type=e.type),c.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),i.value!==!0&&He.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),p=s(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${k.value} q-btn--${f}`+(d!==void 0?" "+d:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),h=s(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:b,innerClasses:h,attributes:r,hasRouterLink:i,hasLink:l,linkTag:c,navigateToRouterLink:a,isActionable:v}}const{passiveCapture:q}=ke;let B=null,L=null,_=null;var Ge=I({name:"QBtn",props:{...Ue,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:i}=N(),{classes:l,style:c,innerClasses:o,attributes:a,hasRouterLink:b,hasLink:E,linkTag:v,navigateToRouterLink:y,isActionable:k}=We(e),r=V(null),p=V(null);let h=null,d,f;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),$=s(()=>({center:e.round})),C=s(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),A=s(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:k.value===!0?{onClick:Q,onKeydown:oe,onMousedown:de,onTouchstart:ce}:{onClick:w}),se=s(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:c.value,...a.value,...A.value}));function Q(u){if(r.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const O=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",O,q),r.value!==null&&r.value.removeEventListener("blur",O,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",O,q),r.value.addEventListener("blur",O,q)}}if(b.value===!0){const m=()=>{u.__qNavigate=!0,y(u)};n("click",u,m),u.defaultPrevented!==!0&&m()}else n("click",u)}}function oe(u){r.value!==null&&(n("keydown",u),z(u,[13,32])===!0&&L!==r.value&&(L!==null&&P(),u.defaultPrevented!==!0&&(r.value.focus(),L=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,q)),w(u)))}function ce(u){r.value!==null&&(n("touchstart",u),u.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&P(),B=r.value,h=u.target,h.addEventListener("touchcancel",S,q),h.addEventListener("touchend",S,q)),d=!0,clearTimeout(f),f=setTimeout(()=>{d=!1},200)))}function de(u){r.value!==null&&(u.qSkipRipple=d===!0,n("mousedown",u),u.defaultPrevented!==!0&&_!==r.value&&(_!==null&&P(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,q)))}function S(u){if(r.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===r.value)){if(u!==void 0&&u.type==="keyup"){if(L===r.value&&z(u,[13,32])===!0){const m=new MouseEvent("click",u);m.qKeyEvent=!0,u.defaultPrevented===!0&&te(m),u.cancelBubble===!0&&ee(m),r.value.dispatchEvent(m),w(u),u.qKeyEvent=!0}n("keyup",u)}P()}}function P(u){const m=p.value;u!==!0&&(B===r.value||_===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(h!==null&&(h.removeEventListener("touchcancel",S,q),h.removeEventListener("touchend",S,q)),B=h=null),_===r.value&&(document.removeEventListener("mouseup",S,q),_=null),L===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,q),L=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(u){w(u),u.qSkipRipple=!0}return be(()=>{P(!0)}),Object.assign(i,{click:Q}),()=>{let u=[];e.icon!==void 0&&u.push(g(U,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&u.push(g("span",{class:"block"},[e.label])),u=M(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(g(U,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},u)),e.loading!==null&&m.push(g(he,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(Ce)])]:null)),ye(g(v.value,se.value,m),[[Me,R.value,void 0,$.value]])}}});export{U as Q,ae as a,Ce as b,Pe as c,Qe as d,Ve as e,Ge as f,Ze as g,ne as u,ze as v};
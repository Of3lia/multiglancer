import{c as f,a as g,h as y,b as x,i as p,D as C,J as V,g as b,P as m,R as B,S as $,U as n,V as r,X as P,Y as i,W as Q,a3 as h,af as c,Z as _,a1 as k,_ as F}from"./index.12ebd2f0.js";import{Q as S}from"./QSlider.790f07ac.js";var q=f({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:o}){const{proxy:{$q:a}}=b(),t=p(C);p(V,()=>{console.error("QPage needs to be child of QPageContainer")});const d=g(()=>{const e=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof s.styleFn=="function"){const l=t.isContainer.value===!0?t.containerHeight.value:a.screen.height;return s.styleFn(e,l)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-e+"px":a.screen.height===0?e!==0?`calc(100vh - ${e}px)`:"100vh":a.screen.height-e+"px"}}),u=g(()=>`q-page ${s.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:u.value,style:d.value},x(o.default))}});const w={style:{"text-align":"center",display:"inline-block",margin:"1em"}},z={style:{display:"flex"}},H=["viewBox","width","height"],U=["width","height"],j=["src","width","height"],D=m({__name:"ViewsComponent",setup(s){const{url:o,views:a,zoom:t}=B($());return(d,u)=>(n(!0),r(Q,null,P(i(a).filter(e=>e.enabled==!0),e=>(n(),r("div",w,[h("div",z,[h("p",null,c(e.name)+" "+c(e.width)+"x"+c(e.height),1)]),(n(),r("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:e.width*i(t)*e.scale,height:e.height*i(t)*e.scale,style:{"box-shadow":"0 0 10px black"}},[(n(),r("foreignObject",{width:e.width,height:e.height},[h("iframe",{src:i(o),width:e.width,height:e.height},null,8,j)],8,U))],8,H)),_(S,{min:.1,max:1,step:.1,modelValue:e.scale,"onUpdate:modelValue":l=>e.scale=l},null,8,["min","step","modelValue","onUpdate:modelValue"])]))),256))}}),N=m({__name:"IndexPage",setup(s){return(o,a)=>(n(),k(q,null,{default:F(()=>[_(D)]),_:1}))}});export{N as default};

import{u as e,a,_ as t}from"./app.7e6fee2b.js";import{g as s,d as l,E as o,o as c,c as r,b as n,e as i,p as u,A as v,B as d,C as f,F as m,q as p,j as k,k as h}from"./framework.ce6f7686.js";function x(){const a=e();return s((()=>a.value.frontmatter))}const y=v("data-v-5e2230bb");d("data-v-5e2230bb");const g={key:0,class:"home-hero"},b={key:0,class:"figure"},$={key:1,class:"title"},_={key:2,class:"description"};f();var I=l({expose:[],setup(e){const l=a(),v=x(),d=s((()=>v.value.heroImage||f.value||p.value||h.value)),f=s((()=>null!==v.value.heroText)),m=s((()=>v.value.heroText||l.value.title)),p=s((()=>null!==v.value.tagline)),k=s((()=>v.value.tagline||l.value.description)),h=s((()=>v.value.actionLink&&v.value.actionText)),I=s((()=>v.value.altActionLink&&v.value.altActionText));return y(((e,a)=>o(d)?(c(),r("header",g,[e.$frontmatter.heroImage?(c(),r("figure",b,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):i("",!0),o(f)?(c(),r("h1",$,u(o(m)),1)):i("",!0),o(p)?(c(),r("p",_,u(o(k)),1)):i("",!0),o(h)?(c(),r(t,{key:3,item:{link:o(v).actionLink,text:o(v).actionText},class:"action"},null,8,["item"])):i("",!0),o(I)?(c(),r(t,{key:4,item:{link:o(v).altActionLink,text:o(v).altActionText},class:"action alt"},null,8,["item"])):i("",!0)])):i("",!0)))}});I.__scopeId="data-v-5e2230bb";const A=v("data-v-793c2722");d("data-v-793c2722");const T={key:0,class:"home-features"},L={class:"wrapper"},j={class:"container"},w={class:"features"},B={key:0,class:"title"},C={key:1,class:"details"};f();var q=l({expose:[],setup(e){const a=x(),t=s((()=>a.value.features&&a.value.features.length>0)),l=s((()=>a.value.features?a.value.features:[]));return A(((e,a)=>o(t)?(c(),r("div",T,[n("div",L,[n("div",j,[n("div",w,[(c(!0),r(m,null,p(o(l),((e,a)=>(c(),r("section",{key:a,class:"feature"},[e.title?(c(),r("h2",B,u(e.title),1)):i("",!0),e.details?(c(),r("p",C,u(e.details),1)):i("",!0)])))),128))])])])])):i("",!0)))}});q.__scopeId="data-v-793c2722";const E={},F=v("data-v-41020908");d("data-v-41020908");const z={key:0,class:"footer"},D={class:"container"},G={class:"text"};f();const H=F(((e,a)=>e.$frontmatter.footer?(c(),r("footer",z,[n("div",D,[n("p",G,u(e.$frontmatter.footer),1)])])):i("",!0)));E.render=H,E.__scopeId="data-v-41020908";const J=v("data-v-cc1f894c");d("data-v-cc1f894c");const K={class:"home","aria-labelledby":"main-title"},M={class:"home-content"};f();var N=l({expose:[],setup:e=>J(((e,a)=>{const t=k("Content");return c(),r("main",K,[n(I),h(e.$slots,"hero"),n(q),n("div",M,[n(t)]),h(e.$slots,"features"),n(E),h(e.$slots,"footer")])}))});N.__scopeId="data-v-cc1f894c";export default N;

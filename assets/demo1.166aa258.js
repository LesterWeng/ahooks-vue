import{f as t,e,o as n,c as i,b as o,t as r,d as s}from"./app.988e7912.js";import{s as c,g as u}from"./lifeCircle.ff155094.js";import{u as d}from"./index.5722317b.js";import"./index.b36f4fe7.js";function l(e){const{state:n}=d(!1);return c((()=>{const i=u(e);if(!i)return;const o=function(t){if(!t)return!1;const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=t.getBoundingClientRect();if(i){const{top:t,bottom:o,left:r,right:s}=i;return o>0&&t<=n&&r<=e&&s>0}return!1}(i);n.value=o;const r=new IntersectionObserver((t=>{const e=t.every((t=>t.isIntersecting));n.value=e}));r.observe(i),t((()=>{r.disconnect()}))})),n}var a={setup(){const t=e(null);return{divRef:t,isInViewport:l(t)}}};const f={ref:"divRef",style:{width:"100px",height:"100px",background:"rgba(0, 0, 0, 0.1)","margin-bottom":"300px"}},m=s(" isInViewport: "),p={style:{color:"blue"}};a.render=function(t,e,s,c,u,d){return n(),i("div",null,[o("div",f,null,512),m,o("span",p,r(c.isInViewport),1)])};export{a as _};

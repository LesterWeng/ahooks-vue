import{G as t,b as e,o as n,e as i,f as o,t as r,C as s}from"./framework.f47b9a5e.js";import"./types.6ff06541.js";import{u as c}from"./index.f483effa.js";import{s as u,g as f}from"./lifeCircle.f50541f0.js";function d(e){const{state:n}=c(!1);return u((()=>{const i=f(e);if(!i)return;const o=function(t){if(!t)return!1;const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=t.getBoundingClientRect();if(i){const{top:t,bottom:o,left:r,right:s}=i;return o>0&&t<=n&&r<=e&&s>0}return!1}(i);n.value=o;const r=new IntersectionObserver((t=>{const e=t.every((t=>t.isIntersecting));n.value=e}));r.observe(i),t((()=>{r.disconnect()}))})),n}var a={setup(){const t=e(null);return{divRef:t,isInViewport:d(t)}}};const l={ref:"divRef",style:{width:"100px",height:"100px",background:"rgba(0, 0, 0, 0.1)","margin-bottom":"300px"}},m=s(" isInViewport: "),p={style:{color:"blue"}};a.render=function(t,e,s,c,u,f){return n(),i("div",null,[o("div",l,null,512),m,o("span",p,r(c.isInViewport),1)])};export{a as s};
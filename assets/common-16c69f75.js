import{o as e,b as n,d as o,e as s,q as t,A as r,c as i,x as a}from"./common-4df0cf94.js";import"./common-95f1f5c1.js";import{u}from"./common-16adbe08.js";import{g as v}from"./common-674127ab.js";function d(o,s){const{state:t,setFalse:r,setTrue:i}=u(!1),{onEnter:a,onLeave:d}=null!=s?s:{};function l(){i(),a&&a()}function c(){r&&r(),d&&d()}return e(()=>{const e=v(o);e&&(e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",c))}),n(()=>{const e=v(o);e&&(e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",c))}),t}var l={setup:()=>({isHovering:d(()=>document.getElementById("divRef"))})};const c=s("div",{id:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},null,-1),m=r(" isHovering: "),f={style:{color:"blue"}};l.render=function(e,n,r,a,u,v){return i(),o("div",null,[c,m,s("span",f,t(a.isHovering),1)])};var g={setup(){const e=a(null);return{isHovering:d(e),divRef:e}}};const p={ref:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},b=r(" isHovering: "),h={style:{color:"blue"}};g.render=function(e,n,r,a,u,v){return i(),o("div",null,[s("div",p,null,512),b,s("span",h,t(a.isHovering),1)])};export{l as a,g as s};
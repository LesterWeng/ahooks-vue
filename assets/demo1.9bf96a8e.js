import{H as e,o as n,c as s,b as t,p as r,D as o,u as i}from"./framework.ce6f7686.js";import"./types.5bcbc827.js";import{u as a}from"./index.61f4d4da.js";import{s as u,g as l}from"./lifeCircle.367bffa7.js";function v(n,s){const{state:t,setFalse:r,setTrue:o}=a(!1),{onEnter:i,onLeave:v}=null!=s?s:{};function d(){o(),i&&i()}function c(){r&&r(),v&&v()}return u((()=>{const e=l(n);e&&(e.addEventListener("mouseenter",d),e.addEventListener("mouseleave",c))})),e((()=>{const e=l(n);e&&(e.removeEventListener("mouseenter",d),e.removeEventListener("mouseleave",c))})),t}var d={setup:()=>({isHovering:v((()=>document.getElementById("divRef")))})};const c=t("div",{id:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},null,-1),f=o(" isHovering: "),m={style:{color:"blue"}};d.render=function(e,o,i,a,u,l){return n(),s("div",null,[c,f,t("span",m,r(a.isHovering),1)])};var p={setup(){const e=i(null);return{isHovering:v(e),divRef:e}}};const g={ref:"divRef",style:{width:"200px",height:"200px",background:"rgba(0, 0, 0, 0.2)"}},b=o(" isHovering: "),H={style:{color:"blue"}};p.render=function(e,o,i,a,u,l){return n(),s("div",null,[t("div",g,null,512),b,t("span",H,r(a.isHovering),1)])};export{p as _,d as a};

import{u as t}from"./framework.8cd85e4b.js";const e=(e=!1)=>{const{state:s,toggle:o}=function(e=!1,s){const o=t(e),r=t=>{o.value=t},a=void 0===s?!e:s;return{state:o,toggle:t=>{void 0===t&&(t=o.value===e?a:e),r(t)},setLeft:()=>{r(e)},setRight:()=>{r(a)}}}(e);return{state:s,toggle:()=>o(),setTrue:()=>o(!0),setFalse:()=>o(!1)}};export{e as u};

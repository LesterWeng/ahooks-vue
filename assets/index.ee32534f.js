import{b as i,q as e,G as t}from"./framework.f47b9a5e.js";function n(){const n=i(document.visibilityState),s=e((()=>"visible"===n.value));function a(){n.value=document.visibilityState}return document.addEventListener("visibilitychange",a),t((()=>{document.removeEventListener("visibilitychange",a)})),{visibilityState:n,isVisible:s}}export{n as u};
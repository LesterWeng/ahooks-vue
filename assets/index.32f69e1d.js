import{b as i,q as e,G as t}from"./framework.f47b9a5e.js";function n(n){const{onChange:s,onHidden:a,onVisible:o}=n??{},v=i(document.visibilityState),b=e((()=>"visible"===v.value));function l(){v.value=document.visibilityState,s&&s(document.visibilityState),"visible"===document.visibilityState?o&&o():a&&a()}return document.addEventListener("visibilitychange",l),t((()=>{document.removeEventListener("visibilitychange",l)})),{visibilityState:v,isVisible:b}}export{n as u};

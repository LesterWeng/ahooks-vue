import{d as i,a as n}from"./debounce.05bfc31b.js";function a(a,t,r){var e=!0,o=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return n(r)&&(e="leading"in r?!!r.leading:e,o="trailing"in r?!!r.trailing:o),i(a,t,{leading:e,maxWait:t,trailing:o})}export{a as t};

import{j as n,e as u,l as e,h as t,o,c as a,b as l,t as s,d}from"./app.988e7912.js";import"./index.b36f4fe7.js";var c={setup(){const o=u(0),a=function(o,a){var l;let s;s="function"==typeof o?n(o):o;const d=u(s.value),c=e.exports.debounce((()=>{d.value=s.value}),null!=(l=null==a?void 0:a.wait)?l:1e3,a);return t(s,c),d}(o,{wait:1e3});return{count:o,debouncedValue:a,addCount:function(){o.value++}}}};const r=d(" count: "),i=d(" debouncedValue: ");c.render=function(n,u,e,t,d,c){return o(),a("div",null,[l("p",null,[r,l("span",null,s(t.count),1)]),l("p",null,[i,l("span",null,s(t.debouncedValue),1)]),l("button",{onClick:u[1]||(u[1]=(...n)=>t.addCount&&t.addCount(...n))},"++count")])};export{c as _};
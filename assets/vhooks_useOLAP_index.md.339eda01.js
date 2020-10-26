import{t as s,r as n,j as a,B as e,G as t,x as o,d as u,c,k as p,e as i,C as l,E as r}from"./common-ec3338d0.js";import{O as C,C as E}from"./common-4578e2e0.js";const d={"=":(s,n)=>s===n,">":(s,n)=>s>n,"<":(s,n)=>s<n,">=":(s,n)=>s>=n,"<=":(s,n)=>s<=n,"!=":(s,n)=>s!==n};function m(u,c={}){t(u)||(u=o(u)),c.columns||(c.columns=a(()=>{var s;return Object.keys(null!=(s=u.value[0])?s:[]).reduce((s,n)=>(s[n]=n,s),{})})),t(c.columns)||(c.columns=o(c.columns));const p=function(e,t){const o=n({list:[],cur:{field:"",operator:C.等于,value:""}}),u=a(()=>t.value),c=C,p=a(()=>o.cur.field?Array.from(new Set(e.value.map(s=>s[o.cur.field]).filter(s=>void 0!==s))):[]);function i(){o.cur.field="",o.cur.operator=C.等于,o.cur.value=""}const l=a(()=>o.cur.field&&o.cur.operator&&o.cur.value);return{...s(o),fieldOptions:u,operatorOptions:c,valueOptions:p,resetFilter:i,canAddFilter:l,addFilter:function(){l.value&&(o.list.push({field:o.cur.field,operator:o.cur.operator,value:o.cur.value}),i())}}}(u,c.columns),{cubeSettings:i,cubeOptions:l}=function(s,o={},u={}){var c,p;const i=n({dimension:u.dimension,measure:u.measure,series:u.series,bySeries:null!=(c=u.bySeries)&&c,countField:null!=(p=u.countField)?p:E}),l=a(()=>o.dimensions?t(o.dimensions)?o.dimensions.value:o.dimensions:s.value),r=a(()=>o.measures?t(o.measures)?o.measures.value:o.measures:{[E]:"次数",...s.value}),C=a(()=>o.series?t(o.series)?o.series.value:o.series:s.value);e(l,()=>{var s;i.dimension&&l.value[i.dimension]||(i.dimension=Object.keys(null!=(s=l.value)?s:{})[0])},{immediate:!0}),e(r,()=>{var s;i.measure&&r.value[i.measure]||(i.measure=Object.keys(null!=(s=r.value)?s:{})[0])},{immediate:!0}),e(C,()=>{var s;i.series&&C.value[i.series]||(i.series=Object.keys(null!=(s=C.value)?s:{})[0])},{immediate:!0});const d=a(()=>({dimension:l.value,measure:r.value,series:C.value}));return{cubeSettings:i,cubeOptions:d}}(c.columns,c.options,c.defaultValues),{cube:r}=function(s,n,e){return{cube:a(()=>{const a=s.value.filter(s=>{for(const{field:a,operator:e,value:t}of n.value){if(!(0,d[e])(s[a],t))return!1}return!0}),{dimension:t,measure:o,series:u,bySeries:c,countField:p}=e;if(!t||!o||c&&!u)return[];function i(s,n,a){s[n]?s[n]+=o===p?1:Number(a[o])||0:s[n]=o===p?1:Number(a[o])||0}const l=[];if(c){const s={};for(const n of a){if(!(t in n))continue;const a=n[t];s[a]?s[a].push(n):s[a]=[n]}for(const n in s){const a={};for(const e of s[n])i(a,e[u],e);for(const s in a)l.push({[t]:n,[u]:s,[o]:a[s]})}}else{const s={};for(const n of a)t in n&&i(s,n[t],n);for(const n in s)l.push({[t]:n,[o]:s[n]})}return l})}}(u,p.list,i);return{cube:r,columns:c.columns,cubeSettings:i,cubeOptions:l,filter:p}}const D=[{date:"2020-08-05",name:"a",age:18,action:"push",score:13},{date:"2020-08-05",name:"b",age:20,action:"pull",score:0},{date:"2020-08-05",name:"c",age:24,action:"push",score:4},{date:"2020-08-05",name:"d",age:22,action:"pull",score:3},{date:"2020-08-06",name:"a",age:18,action:"pull",score:-3},{date:"2020-08-06",name:"d",age:22,action:"push",score:9},{date:"2020-08-07",name:"b",age:20,action:"pull",score:15},{date:"2020-08-07",name:"c",age:24,action:"push",score:0},{date:"2020-08-08",name:"a",age:18,action:"push",score:1},{date:"2020-08-08",name:"d",age:22,action:"pull",score:17},{date:"2020-08-09",name:"a",age:18,action:"push"}];var k={setup(){const{cube:s,cubeSettings:n}=m(D);return{cube:s,cubeSettings:n}}};k.render=function(s,n,a,e,t,o){return c(),u("div")};var F={components:{demo26:k}};const f='{"title":"useDocumentVisibility","frontmatter":{},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"参数","slug":"参数"}],"relativePath":"packages/vhooks/src/useOLAP/index.md","lastUpdated":1602817479457}',h=r('<h1 id="usedocumentvisibility"><a class="header-anchor" href="#usedocumentvisibility" aria-hidden="true">#</a> useDocumentVisibility</h1><p>分析多维数据的 hooks。</p><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>',4),g=r('<h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th style="text-align:right;">说明</th><th style="text-align:right;">类型</th><th style="text-align:right;">值</th></tr></thead><tbody><tr><td>documentVisibility</td><td style="text-align:right;">判断 document 是否在是否处于可见状态</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;visible&#39; | &#39;hidden&#39; | &#39;prerender&#39; | undefined</td></tr></tbody></table>',2);F.render=function(s,n,a,e,t,o){const r=p("demo26"),C=p("demo");return c(),u("div",null,[h,i("p",null,[i(C,{src:"./demo/demo.vue",language:"vue",title:"基本用法",desc:"分析多维数据",componentName:"demo26",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useOLAP%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40dewfall%2Fvhooks'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2Fdata'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20cubeSettings%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseOLAP%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20cubeSettings%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useOLAP%20%7D%20from%20'%40dewfall%2Fvhooks'%3B%0Aimport%20%7B%20data%20%7D%20from%20'.%2Fdata'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20cube%2C%20cubeSettings%20%7D%20%3D%20useOLAP(data)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20cube%2C%0A%20%20%20%20%20%20cubeSettings%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:l(()=>[i(r)]),_:1})]),g])};export default F;export{f as __pageData};

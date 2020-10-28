import{r as e,m as t,n,i as o,w as s,o as r,a as l,b as i,h as a,c,d as u,e as d,f as p,g as h,t as m,j as v,k as f,l as g,p as k,v as w,q as b,F as x,s as y,u as L,x as S,y as T,z as C,A as z,B as $,C as j,D as q}from"./common-4df0cf94.js";const E=Symbol();function B(){return function(){const e=o(E);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function D(e,t,n=!1){const o=document.getElementById("app").offsetTop,s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(s){const e=s.offsetTop-o-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function O(e,t){const n=Array.from(document.querySelectorAll("meta"));let o=!0;const r=e=>{o?o=!1:(n.forEach(e=>document.head.removeChild(e)),n.length=0,e&&e.length&&e.forEach(e=>{const t=function([e,t,n]){const o=document.createElement(e);for(const e in t)o.setAttribute(e,t[e]);n&&(o.innerHTML=n);return o}(e);document.head.appendChild(t),n.push(t)}))};s(()=>{const n=e.value,o=t.value,s=n&&n.title;document.title=(s?s+" | ":"")+o.title,r([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:o.description}],...o.head,...n&&n.frontmatter.head||[]])})}const _=Symbol();function A(){const e=o(_);if(!e)throw new Error("usePageData() is called without provider.");return e}const M="undefined"!=typeof window;function I(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),M){const e="/vhooks/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const V=new Set,N=()=>document.createElement("link");let H;const W=M&&(H=N())&&H.relList&&H.relList.supports&&H.relList.supports("prefetch")?e=>{const t=N();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const P={setup(){const e=B();return function(){if(!M)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:o}=t;if(!V.has(o)){V.add(o);const e=I(o);W(e)}}})}),t(()=>{document.querySelectorAll(".vitepress-content a").forEach(e=>{const{target:t,hostname:o,pathname:s}=e;"_blank"!==t&&o===location.hostname&&(s!==location.pathname?n.observe(e):V.add(s))})})};r(o),l(o),i(()=>{n&&n.disconnect()})}(),()=>e.contentComponent?a(e.contentComponent):null}};var F={setup:()=>({})};const R={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},U=d("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),K=d("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1);F.render=function(e,t,n,o,s,r){return c(),u("svg",R,[U,K])};var G={setup:()=>({})};const J={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},Y=d("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1);G.render=function(e,t,n,o,s,r){return c(),u("svg",J,[Y])};var X={};const Q={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},Z=d("g",null,[d("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})],-1);X.render=function(e,t,n,o,s,r){return c(),u("svg",Q,[Z])};var ee={};const te={t:"1547088289967",class:"icon",style:{},viewBox:"0 0 1170 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1952","xmlns:xlink":"http://www.w3.org/1999/xlink"},ne=d("path",{d:"M1028.571429 441.142857q63.428571 26.285714 102.571428 83.142857T1170.285714 650.857143q0 93.714286-67.428571 160.285714T940 877.714286q-2.285714 0-6.571429-0.285715t-6-0.285714H232q-97.142857-5.714286-164.571429-71.714286T0 645.142857q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857142-46.857143 0-65.714286 46.857142-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142858-141.714286t186.571428-53.714285q94.857143 0 174.857143 46T982.571429 248.571429t46.571428 172q0 3.428571-0.285714 10.285714t-0.285714 10.285714zM267.428571 593.142857q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714T519.428571 626.285714q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857T361.714286 594.285714q0-30.285714 22-49.714285t52.285714-19.428572q25.142857 0 48.285714 12t41.714286 31.428572 37.142857 42.857142 39.428572 46.857143 44 42.857143 55.428571 31.428572 69.428571 12q69.142857 0 116.857143-40.857143T936 594.857143q0-69.142857-48-109.714286t-118.285714-40.571428q-81.714286 0-137.714286 55.428571l53.142857 61.714286q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428572-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571T434.285714 444.571429q-69.714286 0-118.285714 40.285714T267.428571 593.142857z","p-id":"1953",fill:"#666"},null,-1);ee.render=function(e,t,n,o,s,r){return c(),u("svg",te,[ne])};var oe={};const se={t:"1547088313123",class:"icon",style:{},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2783","xmlns:xlink":"http://www.w3.org/1999/xlink"},re=d("path",{d:"M737.828571 166.857143l0.457143-0.228572h0.228572L512 36.571429 285.6 166.628571h-0.228571l0.8 0.342858L100 274.285714v475.428572L512 987.428571l412-237.714285V274.285714l-186.171429-107.428571zM478.514286 890.971429L314.971429 796.571429V637.028571L166.857143 552.914286V353.028571l311.657143 179.771429v358.171429zM199.085714 294.285714l153.942857-88.914285 158.742858 91.085714 158.971428-91.314286 154.514286 89.142857-313.028572 180.571429-313.142857-180.571429zM857.142857 553.485714l-147.2 83.542857v158.971429l-164.457143 94.857143V533.028571L857.142857 353.257143v200.228571z","p-id":"2784",fill:"#666"},null,-1);oe.render=function(e,t,n,o,s,r){return c(),u("svg",se,[re])};const le=e=>t=>{const n=t.match(e);return n&&n[1].trim()},ie=e=>JSON.parse(decodeURIComponent(e)),ae=/<script.*>([\s\S]+)<\/script>/,ce=/<style>([\s\S]+)<\/style>/,ue=/<template>([\s\S]+)<\/template>/,de=["codepen","jsfiddle"],pe={codepen:"https://codepen.io/pen/define",jsfiddle:"https://jsfiddle.net/api/post/library/pure",codesandbox:"https://codesandbox.io/api/v1/sandboxes/define"},he={codepen:"Codepen",jsfiddle:"JSFiddle",codesandbox:"CodeSandbox"};var me={name:"OnlineEdit",components:{codepen:X,jsfiddle:ee,codesandbox:oe},props:{platform:{type:String,required:!0,validator:e=>-1!==de.indexOf(e)},js:{type:String,default:""},css:{type:String,default:""},html:{type:String,default:""},jsPre:{type:String,default:"babel"},layout:{type:String,default:"left"},jsLibs:{type:Array,default:()=>[]},cssLibs:{type:Array,default:()=>[]},editors:{type:String,default:"101"}},computed:{jsTmpl:e=>`new Vue({\n\tel: '#app', \n\t${e.js.replace(/export\s+default\s*?\{\n*/,"").replace(/\n*\}\s*$/,"").trim()}\n})`,htmlTmpl:e=>`<div id="app">\n\n${e.html}\n\n</div>`,actionUrl:e=>pe[e.platform],resources:e=>e.jsLibsWithVue.concat(e.cssLibs).join(","),js_external:e=>e.jsLibsWithVue.join(";"),platformTip:e=>he[e.platform],css_external:e=>e.cssLibs.join(";"),jsLibsWithVue:e=>e.jsLibs.concat("https://unpkg.com/vue@3.0.0-beta.14/dist/vue.global.js"),codepenValue:e=>JSON.stringify({js:e.jsTmpl,css:e.css,html:e.htmlTmpl,layout:e.layout,editors:e.editors,js_external:e.js_external,css_external:e.css_external,js_pre_processor:e.jsPre})}};me.render=function(e,t,n,o,s,r){return c(),u("form",{class:"demo-and-code-online-edit-wrapper",target:"_blank",action:r.actionUrl,method:"post"},["codepen"===n.platform?(c(),u("input",{key:0,type:"hidden",name:"data",value:r.codepenValue},null,8,["value"])):p("",!0),d("button",{type:"submit","data-tip":r.platformTip},[(c(),u(h(n.platform)))],8,["data-tip"])],8,["action"])};var ve={props:{componentName:String,htmlStr:String,codeStr:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:F,codeSvg:G,OnlineEdit:me},setup(t){const n=v(()=>decodeURIComponent(t.htmlStr)),o=v(()=>decodeURIComponent(t.codeStr)),{showTip:s,copyCode:r}=function(t){const n=e({showTip:!1});return{...m(n),copyCode:function(){navigator.clipboard.writeText(t),n.showTip=!0,setTimeout(()=>{n.showTip=!1},5e3)}}}(o.value),{expand:l,toggleExpand:i,parsedCode:a}=function(t,n,o){const s=e({expand:!1}),r=v(()=>({js:le(ae)(t)||"",css:le(ce)(t)||"",html:le(ue)(t)||t.replace(ae,"").replace(ce,"").replace(ue,"").trim(),jsLibs:ie(n),cssLibs:ie(o)}));return{...m(s),toggleExpand:()=>s.expand=!s.expand,parsedCode:r}}(o.value,t.jsLibsStr,t.cssLibsStr);return{expand:l,toggleExpand:i,decodedHtmlStr:n,parsedCode:a,showTip:s,copyCode:r}}};const fe={class:"demo"},ge={class:"demo-slot"},ke={class:"demo-title-desc"},we={class:"demo-title"},be={class:"demo-desc"},xe={class:"demo-actions"},ye={class:"demo-platforms"},Le={class:"demo-buttons"},Se={class:"demo-actions-copy"},Te={class:"demo-actions-tip"};ve.render=function(e,t,n,o,s,r){const l=f("OnlineEdit"),i=f("copySvg"),a=f("codeSvg");return c(),u("article",fe,[d("div",ge,[g(e.$slots,"default")]),k(d("div",ke,[d("span",we,b(n.title),1),d("span",be,b(n.desc),1)],512),[[w,n.title||n.desc]]),d("div",xe,[d("div",ye,[(c(!0),u(x,null,y(n.platforms,e=>(c(),u(l,L({key:e},o.parsedCode,{platform:e}),null,16,["platform"]))),128))]),d("div",Le,[d("div",Se,[k(d("span",Te,"复制成功!",512),[[w,o.showTip]]),k(d(i,{onClick:o.copyCode,title:"复制"},null,8,["onClick"]),[[w,!o.showTip]])]),d(a,{class:"demo-actions-expand",onClick:t[1]||(t[1]=e=>o.toggleExpand()),title:"展开"})])]),k(d("div",{innerHTML:o.decodedHtmlStr,class:`language-${n.language} extra-class`},null,10,["innerHTML"]),[[w,o.expand]])])};const Ce=S((ze='{"lang":"en-US","title":"vhooks","description":"vue hooks","base":"/vhooks/","head":[],"themeConfig":{"lang":"en-US","locales":{"/":{"lang":"en-US","title":"vHooks","description":"vue hooks","label":"English","selectText":"Languages","nav":[{"text":"Guide","link":"/"},{"text":"Document","link":"/vhooks/useSize/"}],"sidebar":[{"text":"Getting started","link":"/"},{"text":"Dom","children":[{"link":"/vhooks/useSize/","text":"useSize"},{"link":"/vhooks/useKeyPress/","text":"useKeyPress"},{"link":"/vhooks/useFullscreen/","text":"useFullscreen"},{"link":"/vhooks/useDocumentVisibility/","text":"useDocumentVisibility"},{"link":"/vhooks/useHover/","text":"useHover"},{"link":"/vhooks/useInViewport/","text":"useInViewport"}]},{"text":"State","children":[{"link":"/vhooks/useToggle/","text":"useToggle"},{"link":"/vhooks/useLocalState/","text":"useLocalState"},{"link":"/vhooks/useThrottle/","text":"useThrottle"},{"link":"/vhooks/useDebounce/","text":"useDebounce"}]},{"text":"Data","children":[{"link":"/vhooks/useTable/","text":"useTable"}]},{"text":"Worker","children":[{"link":"/vhooks/useWorkerFunction/","text":"useWorkerFunction"}]}]},"/zh/":{"lang":"zh-CN","title":"vHooks","description":"vue hooks","label":"中文","selectText":"语言","nav":[{"text":"指南","link":"/"},{"text":"文档","link":"/zh/vhooks/useSize/"}],"sidebar":[{"text":"快速上手","link":"/zh/"},{"text":"Dom","children":[{"link":"/zh/vhooks/useSize/","text":"useSize"},{"link":"/zh/vhooks/useKeyPress/","text":"useKeyPress"},{"link":"/zh/vhooks/useFullscreen/","text":"useFullscreen"},{"link":"/zh/vhooks/useDocumentVisibility/","text":"useDocumentVisibility"},{"link":"/zh/vhooks/useHover/","text":"useHover"},{"link":"/zh/vhooks/useInViewport/","text":"useInViewport"}]},{"text":"State","children":[{"link":"/zh/vhooks/useToggle/","text":"useToggle"},{"link":"/zh/vhooks/useLocalState/","text":"useLocalState"},{"link":"/zh/vhooks/useThrottle/","text":"useThrottle"},{"link":"/zh/vhooks/useDebounce/","text":"useDebounce"}]},{"text":"Data","children":[{"link":"/zh/vhooks/useTable/","text":"useTable"}]},{"text":"Worker","children":[{"link":"/zh/vhooks/useWorkerFunction/","text":"useWorkerFunction"}]}]}},"search":{"searchMaxSuggestions":10},"repo":"dewfall123/vhooks","repoLabel":"Github","lastUpdated":true,"prevLink":true,"nextLink":true},"locales":{}}',T(JSON.parse(ze))));var ze;function $e(){return Ce}const je="undefined"!=typeof window;function qe(e,t){const n=function(e,t){t.sort((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length});for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function Ee(e=B()){return v(()=>function(e,t){if(je){const n=e.base.endsWith("/")?e.base.slice(0,-1):e.base;t=t.slice(n.length)}const n=qe(e.locales||{},t)||{},o=qe(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...o,locales:{}},locales:{}}}(Ce.value,e.path))}const Be=/#.*$/,De=/\.(md|html)$/,Oe=/\/$/,_e=/^[a-z]+:/i;function Ae(e){return($e().value.base+e).replace(/\/+/g,"/")}function Me(e){return _e.test(e)}function Ie(e){return decodeURI(e).replace(Be,"").replace(De,"")}const Ve={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Ne=d("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),He=d("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);const We={render:function(e,t){return c(),u("svg",Ve,[Ne,He])}},Pe=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var Fe=C({components:{OutboundLink:We},props:{item:{type:Object,required:!0}},setup(e){const t=e.item,n=B(),o=v(()=>({active:s.value,external:r.value})),s=v(()=>Pe(Ae(t.link))===Pe(n.path)),r=v(()=>Me(t.link)),l=v(()=>r.value?t.link:Ae(t.link)),i=v(()=>t.target?t.target:r.value?"_blank":""),a=v(()=>t.rel?t.rel:r.value?"noopener noreferrer":"");return{classes:o,isActiveLink:s,isExternalLink:r,href:l,target:i,rel:a}}});const Re={class:"nav-item"};Fe.render=function(e,t,n,o,s,r){const l=f("OutboundLink");return c(),u("div",Re,[d("a",{class:["nav-link",e.classes],href:e.href,target:e.target,rel:e.rel,"aria-label":e.item.ariaLabel},[z(b(e.item.text)+" ",1),e.isExternalLink?(c(),u(l,{key:0})):p("",!0)],10,["href","target","rel","aria-label"])])};var Ue=C({name:"DropdownLink",components:{NavBarLink:Fe},props:{item:{type:Object,required:!0}},setup(e){const t=S(!1),n=B();$(()=>n.path,()=>{t.value=!1});return{open:t,setOpen:e=>{t.value=e},isLastItemOfArray:(e,t)=>t.length&&t.indexOf(e)===t.length-1}}});const Ke={class:"nav-dropdown"},Ge={key:0},Je={key:1,class:"dropdown-subitem-wrapper"};Ue.render=function(e,t,n,o,s,r){const l=f("NavBarLink");return c(),u("div",{class:["dropdown-wrapper",{open:e.open}]},[d("button",{class:"dropdown-title",type:"button","aria-label":e.item.ariaLabel,onClick:t[1]||(t[1]=t=>e.setOpen(!e.open))},[d("span",null,b(e.item.text),1),d("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),d("ul",Ke,[(c(!0),u(x,null,y(e.item.items,(t,n)=>(c(),u("li",{key:t.link||n,class:"dropdown-item"},[t.items?(c(),u("h4",Ge,b(t.text),1)):p("",!0),t.items?(c(),u("ul",Je,[(c(!0),u(x,null,y(t.items,n=>(c(),u("li",{key:n.link,class:"dropdown-subitem"},[d(l,{item:n,onFocusout:o=>e.isLastItemOfArray(n,t.items)&&e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"])]))),128))])):(c(),u(l,{key:2,item:t,onFocusout:n=>e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"]))]))),128))])],2)};const Ye=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);var Xe={components:{NavBarLink:Fe,NavDropdownLink:Ue},setup(){const e=Ee(),t=$e(),n=B(),o=v(()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;let o=e.repoLabel;if(n){const e=/^https?:/.test(n)?n:"https://github.com/"+n;if(!o){const t=e.match(/^https?:\/\/[^/]+/);if(t){const e=t[0],n=Ye.find(([t,n])=>n.test(e));o=n&&n[0]}}return{link:e,text:o||"Source"}}return null}),s=v(()=>{const e=t.value.themeConfig.locales;if(!e)return null;const o=Object.keys(e);if(o.length<=1)return null;const s=M?t.value.base:"/",r=s.endsWith("/")?s.slice(0,-1):s,l=n.path.slice(r.length),i=o.find(e=>"/"!==e&&l.startsWith(e)),a=i?l.substring(i.length-1):l,c=o.map(t=>{const n=t.endsWith("/")?t.slice(0,-1):t;return{text:e[t].label||e[t].lang,link:`${n}${a}`}}),u=i||"/";return{text:e[u].selectText?e[u].selectText:"Languages",items:c}});return{navData:v(()=>e.value.themeConfig.nav),repoInfo:o,localeCandidates:s}}};const Qe={key:0,class:"nav-links"};Xe.render=function(e,t,n,o,s,r){const l=f("NavDropdownLink"),i=f("NavBarLink");return e.navData||e.repoInfo?(c(),u("nav",Qe,[e.navData?(c(!0),u(x,{key:0},y(e.navData,e=>(c(),u(x,null,[e.items?(c(),u(l,{key:0,item:e},null,8,["item"])):(c(),u(i,{key:1,item:e},null,8,["item"]))],64))),256)):p("",!0),e.localeCandidates?(c(),u(l,{key:1,item:e.localeCandidates},null,8,["item"])):p("",!0),e.repoInfo?(c(),u(i,{key:2,item:e.repoInfo},null,8,["item"])):p("",!0)])):p("",!0)};var Ze={components:{NavBarLinks:Xe},setup:()=>({withBase:Ae})};const et=d("div",{class:"flex-grow"},null,-1);Ze.render=function(e,t,n,o,s,r){const l=f("NavBarLinks");return c(),u(x,null,[d("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[e.$theme.logo?(c(),u("img",{key:0,class:"logo",src:e.withBase(e.$theme.logo),alt:"logo"},null,8,["src"])):p("",!0),d("span",null,b(e.$site.title),1)],8,["aria-label","href"]),et,d(l,{class:"hide-mobile"}),g(e.$slots,"search")],64)};var tt={emits:["toggle"]};const nt=d("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[d("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);function ot(){let e=null,t=null;const n=decodeURIComponent,o=e=>e&&e.classList.remove("active"),s=n=>{if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},a=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(e=>e.hash===t.hash)),o=document.getElementById("app").offsetTop,r=window.scrollY,l=e=>e.parentElement.offsetTop-o-15;for(let e=0;e<t.length;e++){const o=t[e],i=t[e+1];if(0===e&&0===r||r>=l(o)&&(!i||r<l(i))){const e=n(o.hash);return history.replaceState(null,document.title,e),void s(e)}}},c=function(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),o=!0,setTimeout(()=>{o=!1},t))}}(a,300);r(()=>{a(),window.addEventListener("scroll",c)}),l(()=>{s(n(location.hash))}),i(()=>{window.removeEventListener("scroll",c)})}tt.render=function(e,t,n,o,s,r){return c(),u("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[nt])};const st=e=>{const{item:{link:t,text:n,children:o}}=e,s=B(),r=$e(),l=(i=r.value.base,(c=t||"")?c.startsWith("#")?c:function(e,t){const n=e.endsWith("/"),o=t.startsWith("/");return n&&o?e.slice(0,-1)+t:n||o?e+t:`${e}/${t}`}(i,c):void 0);var i,c;const u=function(e,t){return void 0!==t&&Ie(e.path)===Ie(t)}(s,l);return a("li",{class:"sidebar-item"},[at(u,n,l),ct(u,o)])};var rt={components:{NavBarLinks:Xe,SideBarItem:st},setup(){const e=A(),t=Ee(),n=B();return ot(),{items:v(()=>{const{headers:o,frontmatter:{sidebar:s,sidebarDepth:r=2}}=e.value;if("auto"===s)return lt(o,r);if(Array.isArray(s))return it(s);if(!1===s)return[];{const{sidebar:e}=t.value.themeConfig;if("auto"===e)return lt(o,r);if(Array.isArray(e))return it(e);if(!1===e)return[];if("object"==typeof e)return function(e,t,n,o){const s=[t,Object.keys(e)[0]].map(t=>e[function(e){const t=e.split("/");return t[t.length-1]&&t.pop(),function(e){return/(\.html|\/)$/.test(e)?e:e+"/"}(t.join("/"))}(t)]).find(Boolean);if(Array.isArray(s))return it(s);if("auto"===s)return lt(n,o);return[]}(e,n.path,o,r)}})}}};function lt(e,t){const n=[];if(void 0===e)return[];let o=void 0;return e.forEach(({level:e,title:s,slug:r})=>{if(e-1>t)return;const l={text:s,link:"#"+r};2===e?(o=l,n.push(l)):o&&(o.children||(o.children=[])).push(l)}),n}function it(e,t){return e}function at(e,t,n){return a(n?"a":"p",{class:{"sidebar-link":!0,active:e},href:n},t)}function ct(e,t,n){return t&&t.length>0?a("ul",{class:"sidebar-items"},t.map(e=>a(st,{item:e}))):e&&n?ct(!1,function(e){return function e(t){return t.map(t=>({text:t.title,link:"#"+t.slug,children:t.children?e(t.children):void 0}))}(function(e){let t;return(e=e.map(e=>Object.assign({},e))).forEach(e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)}),e.filter(e=>2===e.level)}(e))}(n)):null}const ut={class:"sidebar"},dt=d("ul",{class:"slug"},null,-1);rt.render=function(e,t,n,o,s,r){const l=f("NavBarLinks"),i=f("SideBarItem");return c(),u(x,null,[d(l,{class:"show-mobile"}),g(e.$slots,"top"),d("ul",ut,[(c(!0),u(x,null,y(e.items,e=>(c(),u(i,{item:e},null,8,["item"]))),256))]),dt,g(e.$slots,"bottom")],64)};var pt={setup(){const e=A(),t=$e(),n=e=>{let n;return Object.keys(t.value.themeConfig.sidebar).some(o=>t.value.themeConfig.sidebar[o].some(t=>(Array.isArray(t.children)&&(n=t.children.find(t=>t.link===e)),!!n))),n},o=v(()=>{if(!1!==e.value.frontmatter.next)return"string"==typeof e.value.frontmatter.next?n(e.value.frontmatter.next):e.value.next}),s=v(()=>{if(!1!==e.value.frontmatter.prev)return"string"==typeof e.value.frontmatter.prev?n(e.value.frontmatter.prev):e.value.prev}),r=v(()=>!!o||!!s);return{next:o,prev:s,hasLinks:r}}};const ht={key:0,class:"links-wrapper"},mt={class:"prev-link"},vt={key:0},ft=z(" ← "),gt={class:"next-link"},kt={key:0},wt=z(" → ");pt.render=function(e,t,n,o,s,r){return e.hasLinks?(c(),u("div",ht,[d("div",mt,[e.prev?(c(),u("div",vt,[ft,d("a",{href:e.prev.link},b(e.prev.text),9,["href"])])):p("",!0)]),d("div",gt,[e.next?(c(),u("div",kt,[d("a",{href:e.next.link},b(e.next.text),9,["href"]),wt])):p("",!0)])])):p("",!0)};var bt={components:{OutboundLink:We},setup(){const e=A(),t=$e();return{editLink:v(()=>{const n=null==e.value.frontmatter.editLink?t.value.themeConfig.editLinks:e.value.frontmatter.editLink,{repo:o,docsDir:s="",docsBranch:r="master",docsRepo:l=o}=t.value.themeConfig,{relativePath:i}=e.value;return n&&i&&o?function(e,t,n,o,s){if(/bitbucket.org/.test(e)){return(Me(t)?t:e).replace(Oe,"")+`/src/${o}/`+(n?n.replace(Oe,"")+"/":"")+s+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}return(Me(t)?t:"https://github.com/"+t).replace(Oe,"")+`/edit/${o}/`+(n?n.replace(Oe,"")+"/":"")+s}(o,l||o,s,r,i):null}),editLinkText:v(()=>t.value.themeConfig.editLinkText||"Edit this page")}}};const xt={class:"page-edit"};bt.render=function(e,t,n,o,s,r){const l=f("OutboundLink");return c(),u("footer",xt,[e.editLink?(c(),u("a",{key:0,href:e.editLink,target:"_blank",rel:"noopener noreferrer"},[z(b(e.editLinkText)+" ",1),d(l)],8,["href"])):p("",!0)])};var yt={components:{NextAndPrevLinks:pt,PageEdit:bt}};const Lt={class:"content"};yt.render=function(e,t,n,o,s,r){const l=f("Content"),i=f("NextAndPrevLinks"),a=f("PageEdit");return c(),u("div",Lt,[g(e.$slots,"top"),d(l),d(i),d(a),g(e.$slots,"bottom")])};var St={components:{NavBar:Ze,ToggleSideBarButton:tt,SideBar:rt,Page:yt},setup(){const e=S(!1),t=B(),n=t=>{e.value="boolean"==typeof t?t:!e.value},o=n.bind(null,!1);return $(t,o),{open:e,toggleSidebar:n}}};const Tt={class:"theme"},Ct=z(" 1111111 ");St.render=function(e,t,n,o,s,r){const l=f("NavBar"),i=f("ToggleSideBarButton"),a=f("SideBar"),p=f("Page"),h=f("Debug");return c(),u(x,null,[d("div",Tt,[Ct,d("header",null,[d(l,null,{search:j(()=>[g(e.$slots,"navbar-search")]),_:1}),d(i,{onToggle:o.toggleSidebar},null,8,["onToggle"])]),d("aside",{class:{open:o.open}},[d(a,null,{top:j(()=>[g(e.$slots,"sidebar-top")]),bottom:j(()=>[g(e.$slots,"sidebar-bottom")]),_:1})],2),d("div",{class:["sidebar-mask",{"sidebar-open":o.open}],onClick:t[1]||(t[1]=e=>o.toggleSidebar(!1))},null,2),d("main",null,[d(p,null,{top:j(()=>[g(e.$slots,"page-top")]),bottom:j(()=>[g(e.$slots,"page-bottom")]),_:1})])]),d(h)],64)};const zt=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var $t={setup:()=>({getMsg:()=>zt[Math.floor(Math.random()*zt.length)]})};const jt={class:"theme"},qt=d("h1",null,"404",-1);$t.render=function(e,t,n,o,s,r){return c(),u("div",jt,[qt,d("blockquote",null,b(e.getMsg()),1),d("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,["href"])])};const Et={Layout:St,NotFound:$t},Bt=Et.NotFound||(()=>"404 Not Found");function Dt(){const o=S();let s,r=M;const l=function(o,s){const r=e({path:"/",contentComponent:null}),l="undefined"!=typeof window;function i(e){e=e||(l?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),l&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),a(e)}async function a(e,i=0){const a=new URL(e,"http://a.com"),c=r.path=a.pathname;try{let e=o(r);if("then"in e&&"function"==typeof e.then&&(e=await e),r.path===c){if(!e)throw new Error("Invalid route component: "+e);r.contentComponent=t(e),l&&n(()=>{if(a.hash&&!i){const e=document.querySelector(decodeURIComponent(a.hash));if(e)return void D(e,a.hash)}window.scrollTo(0,i)})}}catch(e){e.message.match(/fetch/)||console.error(e),r.path===c&&(r.contentComponent=s?t(s):null)}}return l&&(window.addEventListener("click",e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:o,hostname:s,pathname:r,hash:l,target:a}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===a||o!==c.protocol||s!==c.hostname||(e.preventDefault(),r===c.pathname?l&&l!==c.hash&&(history.pushState(null,"",l),D(t,l,t.classList.contains("header-anchor"))):i(n))}},{capture:!0}),window.addEventListener("popstate",e=>{a(location.href,e.state&&e.state.scrollPosition||0)}),window.addEventListener("hashchange",e=>{e.preventDefault()})),{route:r,go:i}}(e=>{let t=I(e.path);if(r&&(s=t),(r||s===t)&&(t=t.replace(/\.js$/,".lean.js")),M)return r=!1,import(t).then(e=>(e.__pageData&&(o.value=T(JSON.parse(e.__pageData))),e.default));{const e=require(t);return o.value=JSON.parse(e.__pageData),e.default}},Bt),i=q(Et.Layout);i.provide(E,l),i.provide(_,o),i.component("Content",P),i.component("Debug",()=>null),i.component("Demo",ve);const a=Ee(l.route);return M&&O(o,a),Object.defineProperties(i.config.globalProperties,{$site:{get:()=>Ce.value},$siteByRoute:{get:()=>a.value},$page:{get:()=>o.value},$theme:{get:()=>a.value.themeConfig}}),Et.enhanceApp&&Et.enhanceApp({app:i,router:l,siteData:a}),{app:i,router:l}}if(M){const{app:e,router:t}=Dt();t.go().then(()=>{e.mount("#app")})}export{Dt as createApp};
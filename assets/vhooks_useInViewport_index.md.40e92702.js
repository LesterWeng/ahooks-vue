import{k as e,d as t,e as a,C as s,E as r,c as o}from"./common-4df0cf94.js";import"./common-c3d33430.js";import"./common-95f1f5c1.js";import"./common-16adbe08.js";import"./common-674127ab.js";import{s as i}from"./common-10f527db.js";var n={components:{demo10:i}};const l='{"title":"useInViewport","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Pass in DOM element","slug":"pass-in-dom-element"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Result","slug":"result"}],"relativePath":"packages/vhooks/src/useInViewport/index.en-US.md","lastUpdated":1603363165990.1719}',d=r('<h1 id="useinviewport"><a class="header-anchor" href="#useinviewport" aria-hidden="true">#</a> useInViewport</h1><p>A hook to subscribe DOM element visibility change</p><h2 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="pass-in-dom-element"><a class="header-anchor" href="#pass-in-dom-element" aria-hidden="true">#</a> Pass in DOM element</h3>',4),p=r('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-ts"><pre><code><span class="token keyword">const</span> inViewPort <span class="token operator">=</span> <span class="token function">useInViewport</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>DOM element or Ref Object</td><td>HTMLElement | (() =&gt; HTMLElement) | React.MutableRefObject</td><td>-</td></tr></tbody></table><h3 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>inViewPort</td><td>Whether DOM elements are in the visible range</td><td>boolean</td></tr></tbody></table>',6);n.render=function(r,i,n,l,A,h){const m=e("demo10"),c=e("demo");return o(),t("div",null,[d,a("p",null,[a(c,{src:"./demo/demo1.vue",title:"Basic usage",desc:"Using ref to listen to visibility change.",componentName:"demo10",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%26lt%3Btemplate%26gt%3B%0A%20%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%26lt%3Bdiv%0A%20%20%20%20%20%20ref%3D%26quot%3BdivRef%26quot%3B%0A%20%20%20%20%20%20style%3D%26quot%3B%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20background%3A%20rgba(0%2C%200%2C%200%2C%200.1)%3B%0A%20%20%20%20%20%20%20%20margin-bottom%3A%20300px%3B%0A%20%20%20%20%20%20%26quot%3B%0A%20%20%20%20%26gt%3B%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20isInViewport%3A%20%26lt%3Bspan%20style%3D%26quot%3Bcolor%3A%20blue%26quot%3B%26gt%3B%7B%7B%20isInViewport%20%7D%7D%26lt%3B%2Fspan%26gt%3B%0A%20%20%26lt%3B%2Fdiv%26gt%3B%0A%26lt%3B%2Ftemplate%26gt%3B%0A%0A%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%26gt%3B%0Aimport%20%7B%20useInViewport%20%7D%20from%20%26%2339%3B%40dewfall%2Fvhooks%26%2339%3B%3B%0Aimport%20%7B%20ref%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20isInViewport%20%3D%20useInViewport(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20isInViewport%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%26lt%3B%2Fscript%26gt%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20ref%3D%22divRef%22%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20background%3A%20rgba(0%2C%200%2C%200%2C%200.1)%3B%0A%20%20%20%20%20%20%20%20margin-bottom%3A%20300px%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%3C%2Fdiv%3E%0A%20%20%20%20isInViewport%3A%20%3Cspan%20style%3D%22color%3A%20blue%22%3E%7B%7B%20isInViewport%20%7D%7D%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useInViewport%20%7D%20from%20'%40dewfall%2Fvhooks'%3B%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20isInViewport%20%3D%20useInViewport(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20isInViewport%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:s(()=>[a(m)]),_:1})]),p])};export default n;export{l as __pageData};
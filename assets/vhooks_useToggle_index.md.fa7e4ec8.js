import{k as a,d as s,e as n,C as t,E as e,c as p}from"./common-4df0cf94.js";import"./common-c3d33430.js";import"./common-95f1f5c1.js";import{s as o}from"./common-c8539e64.js";var c={components:{demo24:o}};const l='{"title":"useToggle","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Result","slug":"result"},{"level":3,"title":"Actions","slug":"actions"}],"relativePath":"packages/vhooks/src/useToggle/index.en-US.md","lastUpdated":1603363165990.1719}',u=e('<h1 id="usetoggle"><a class="header-anchor" href="#usetoggle" aria-hidden="true">#</a> useToggle</h1><p>A hook that switch value between two states.</p><h2 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="basic-usage"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h3>',4),E=e('<code src="./demo/demo1.tsx"></code><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> toggle<span class="token punctuation">,</span> setLeft<span class="token punctuation">,</span> setRight <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>\n  defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> toggle<span class="token punctuation">,</span> setLeft<span class="token punctuation">,</span> setRight <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>\n  defaultValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  reverseValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>defaultValue</td><td>Optional，set a default value</td><td><code>number</code> | <code>string</code> | <code>boolean</code> | <code>undefined</code></td><td>false</td></tr><tr><td>reverseValue</td><td>Optional，set a reverse value</td><td><code>number</code> | <code>string</code> | <code>boolean</code> | <code>undefined</code></td><td>-</td></tr></tbody></table><h3 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>state</td><td>state value</td><td>-</td></tr><tr><td>actions</td><td>Operation set</td><td><code>Actions</code></td></tr></tbody></table><h3 id="actions"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>toggle</td><td>Trigger state change</td><td><code>(state?: any) =&gt; void</code></td></tr><tr><td>setLeft</td><td>Set defaultValue</td><td><code>() =&gt; void</code></td></tr><tr><td>setRight</td><td>Set reverseValue</td><td><code>() =&gt; void</code></td></tr></tbody></table>',9);c.render=function(e,o,c,l,C,i){const d=a("demo24"),r=a("demo");return p(),s("div",null,[u,n("p",null,[n(r,{src:"./demo/demo.vue",language:"vue",title:"Basic usage",desc:"click the button, look at the value.",componentName:"demo24",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20state%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoggle()%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%82%B9%E5%87%BB%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useToggle%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40dewfall%2Fvhooks'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20state%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20toggle%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseToggle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20state%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20toggle%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%7B%7B%20state%20%7D%7D%3C%2Fp%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22toggle()%22%3E%E7%82%B9%E5%87%BB%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useToggle%20%7D%20from%20'%40dewfall%2Fvhooks'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20state%2C%20toggle%20%7D%20%3D%20useToggle()%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20toggle%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:t(()=>[n(d)]),_:1})]),E])};export default c;export{l as __pageData};
import{s as t,o as e,e as a,f as s,K as d,C as n}from"./framework.f47b9a5e.js";var o={components:{}};const l='{"title":"useFullscreen","description":"","frontmatter":{"map":{"path":"/hooks/use-fullscreen","realPath":"packages\\\\vhooks\\\\src\\\\useFullscreen\\\\index.zh-CN.md"}},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"传入目标元素","slug":"传入目标元素"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Params","slug":"params"},{"level":3,"title":"Options","slug":"options"},{"level":3,"title":"Result","slug":"result"}],"relativePath":"zh/hooks/use-fullscreen/index.md","lastUpdated":1609815987098.747}',r=d('<h1 id="usefullscreen"><a class="header-anchor" href="#usefullscreen" aria-hidden="true">#</a> useFullscreen</h1><p>一个用于处理 dom 全屏的 Hook</p><div class="tip custom-block"><p>Api 与<a href="https://ahooks.js.org/zh-CN/hooks/dom/use-fullscreen" target="_blank" rel="noopener noreferrer">ahooks</a>一致。</p></div><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>',5),c=s("h3",{id:"传入目标元素"},[s("a",{class:"header-anchor",href:"#传入目标元素","aria-hidden":"true"},"#"),n(" 传入目标元素")],-1),h=d('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-typescript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>isFullscreen<span class="token punctuation">,</span> <span class="token punctuation">{</span> setFull<span class="token punctuation">,</span> exitFull<span class="token punctuation">,</span> toggleFull <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useFullScreen</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span>Options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>DOM 节点或者 Ref 对象</td><td><code>HTMLElement</code> | <code>() =&gt; HTMLElement</code> | <code>React.MutableRefObject</code></td><td>-</td></tr><tr><td>options</td><td>设置(可选)</td><td><code>Options</code></td><td>-</td></tr></tbody></table><h3 id="options"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>onExitFull</td><td>监听退出全屏</td><td><code>()=&gt;void</code></td><td>-</td></tr><tr><td>onFull</td><td>监听全屏</td><td><code>()=&gt;void</code></td><td>-</td></tr></tbody></table><h3 id="result"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>isFullscreen</td><td>是否全屏</td><td><code>boolean</code></td></tr><tr><td>setFull</td><td>设置全屏</td><td><code>()=&gt;void</code></td></tr><tr><td>exitFull</td><td>退出全屏</td><td><code>()=&gt;void</code></td></tr><tr><td>toggleFull</td><td>切换全屏</td><td><code>()=&gt;void</code></td></tr></tbody></table>',8);o.render=function(d,n,o,l,u,p){const i=t("demo");return e(),a("div",null,[r,s("p",null,[s(i,{src:"./demo/demo1.vue",language:"vue",desc:"使用 ref 设置需要全屏的元素。"})]),c,s("p",null,[s(i,{src:"./demo/demo2.vue",language:"vue",desc:"传入一个元素。"})]),h])};export default o;export{l as __pageData};

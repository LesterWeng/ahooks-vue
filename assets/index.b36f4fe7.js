import{e}from"./app.988e7912.js";var n,a;(a=n||(n={}))["等于"]="=",a["大于"]=">",a["小于"]="<",a["大于等于"]=">=",a["小于等于"]="<=",a["不等于"]="!=";const t="_count",r=e=>n=>{const[a]=n.data;return Promise.resolve(e.fn(...a)).then((n=>{const a="auto"===e.transferable&&(t=n,"ArrayBuffer"in self&&t instanceof ArrayBuffer||"MessagePort"in self&&t instanceof MessagePort||"ImageBitmap"in self&&t instanceof ImageBitmap||"OffscreenCanvas"in self&&t instanceof OffscreenCanvas)?[n]:[];var t;postMessage(["SUCCESS",n],a)})).catch((e=>{postMessage(["ERROR",e],"")}))},s=(e,n,a)=>{const t=`\n    ${(e=>0===e.length?"":`importScripts('${e.map((e=>`${e}`)).toString()}')`)(n)};\n    onmessage=(${r})({\n      fn: (${e}),\n      transferable: '${a}'\n    })\n  `,s=new Blob([t],{type:"text/javascript"});return URL.createObjectURL(s)};var o,i,l,u;(i=o||(o={})).PENDING="PENDING",i.SUCCESS="SUCCESS",i.RUNNING="RUNNING",i.ERROR="ERROR",i.TIMEOUT_EXPIRED="TIMEOUT_EXPIRED",(u=l||(l={})).AUTO="auto",u.NONE="none";const f={timeout:void 0,remoteDependencies:[],autoTerminate:!0,transferable:l.AUTO};function c(n,a={}){const t=e(null);let r=null;const i=e(o.PENDING);function u(){var e;(null==(e=t.value)?void 0:e._url)&&(t.value.terminate(),URL.revokeObjectURL(t.value._url),t.value=null,r&&clearTimeout(r))}function c(e){i.value=e}function m(e){(null!=a.autoTerminate?a.autoTerminate:f.autoTerminate)&&u(),c(e)}const{remoteDependencies:v=f.remoteDependencies,timeout:R=f.timeout,transferable:E=f.transferable}=a,p=s(n,v,E);return t.value=new Worker(p),t.value._url=p,{callWokerFn:function(...e){const{transferable:n=f.transferable}=a;return new Promise(((a,s)=>{t.value||s("worker is not available!");const i=n===l.AUTO?e.filter((e=>"ArrayBuffer"in window&&e instanceof ArrayBuffer||"MessagePort"in window&&e instanceof MessagePort||"ImageBitmap"in window&&e instanceof ImageBitmap||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas)):[];c(o.RUNNING),t.value.postMessage([[...e]],i),t.value.onmessage=e=>{const[n,t]=e.data;switch(n){case o.SUCCESS:m(o.SUCCESS),a(t);break;default:m(o.ERROR),s(t)}},t.value.onerror=e=>{s(e),m(o.ERROR)},R&&(r=setTimeout((()=>{u(),s("timeout!"),c(o.TIMEOUT_EXPIRED)}),R))}))},killWorker:u,worker:t,status:i}}export{t as C,n as O,c as u};
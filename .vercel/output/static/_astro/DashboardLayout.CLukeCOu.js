import{r as c}from"./index.DiEladB3.js";var y={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j;function M(){if(j)return p;j=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(a,o,n){var l=null;if(n!==void 0&&(l=""+n),o.key!==void 0&&(l=""+o.key),"key"in o){n={};for(var h in o)h!=="key"&&(n[h]=o[h])}else n=o;return o=n.ref,{$$typeof:e,type:a,key:l,ref:o!==void 0?o:null,props:n}}return p.Fragment=r,p.jsx=s,p.jsxs=s,p}var w;function _(){return w||(w=1,y.exports=M()),y.exports}var t=_();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(...e)=>e.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=e=>{const r=S(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:n,iconNode:l,...h},u)=>c.createElement("svg",{ref:u,...A,width:r,height:r,stroke:e,strokeWidth:a?Number(s)*24/Number(r):s,className:C("lucide",o),...!n&&!$(h)&&{"aria-hidden":"true"},...h},[...l.map(([f,i])=>c.createElement(f,i)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(e,r)=>{const s=c.forwardRef(({className:a,...o},n)=>c.createElement(R,{ref:n,iconNode:r,className:C(`lucide-${E(z(e))}`,`lucide-${e}`,a),...o}));return s.displayName=z(e),s};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],L=d("box",I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],q=d("chart-no-axes-column",T);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],O=d("check",P);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],D=d("external-link",B);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],H=d("house",F);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],V=d("menu",J);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Q=d("message-square",U);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],W=d("monitor",Z);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],G=d("moon",Y);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],K=d("palette",X);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],te=d("search",ee);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ne=d("sun",re);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ae=d("x",se),oe=[{id:"default",name:"Original",color:"#3b82f6"},{id:"purple",name:"Purple Dream",color:"#a855f7"},{id:"mint",name:"Mint Fresh",color:"#10b981"},{id:"cyber",name:"Cyber Blue",color:"#06b6d4"}];function ie(){const[e,r]=c.useState(!1),[s,a]=c.useState("default"),[o,n]=c.useState("system");c.useEffect(()=>{const i=localStorage.getItem("theme-palette")||"default",g=localStorage.getItem("theme-mode")||"system";a(i),n(g),l(i),h(g)},[]);const l=i=>{document.documentElement.setAttribute("data-theme",i),i==="default"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme-palette",i)},h=i=>{i==="dark"||i==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme-mode",i)},u=i=>{a(i),l(i)},f=i=>{n(i),h(i)};return t.jsx("div",{className:"fixed top-4 right-4 z-50",children:t.jsxs("div",{className:"relative",children:[t.jsx("button",{onClick:()=>r(!e),className:"w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:scale-105 transition-transform","aria-label":"Theme Settings",children:t.jsx(K,{className:"w-5 h-5"})}),e&&t.jsxs("div",{className:"absolute top-12 right-0 w-64 bg-white dark:bg-zinc-950 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-4 animate-in fade-in zoom-in-95 duration-200 origin-top-right",children:[t.jsxs("div",{className:"flex justify-between items-center mb-4",children:[t.jsx("h3",{className:"font-semibold text-sm text-zinc-900 dark:text-white",children:"Apariencia"}),t.jsx("button",{onClick:()=>r(!1),className:"text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300",children:"Cerrar"})]}),t.jsx("div",{className:"grid grid-cols-3 gap-1 p-1 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg mb-6",children:[{id:"light",icon:ne,label:"Claro"},{id:"system",icon:W,label:"Auto"},{id:"dark",icon:G,label:"Oscuro"}].map(i=>t.jsxs("button",{onClick:()=>f(i.id),className:`
                    flex flex-col items-center justify-center py-2 rounded-md text-[10px] font-medium transition-all
                    ${o===i.id?"bg-white dark:bg-zinc-800 text-primary-600 shadow-sm":"text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"}
                  `,children:[t.jsx(i.icon,{className:"w-4 h-4 mb-1"}),i.label]},i.id))}),t.jsxs("div",{children:[t.jsx("h4",{className:"text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider",children:"Color de énfasis"}),t.jsx("div",{className:"space-y-1",children:oe.map(i=>t.jsxs("button",{onClick:()=>u(i.id),className:`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
                      ${s===i.id?"bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300":"hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"}
                    `,children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-4 h-4 rounded-full border border-black/10 dark:border-white/10",style:{backgroundColor:i.color}}),i.name]}),s===i.id&&t.jsx(O,{className:"w-4 h-4"})]},i.id))})]})]})]})})}let m=[],x=0;const b=4,le=e=>{let r=[],s={get(){return s.lc||s.listen(()=>{})(),s.value},lc:0,listen(a){return s.lc=r.push(a),()=>{for(let n=x+b;n<m.length;)m[n]===a?m.splice(n,b):n+=b;let o=r.indexOf(a);~o&&(r.splice(o,1),--s.lc||s.off())}},notify(a,o){let n=!m.length;for(let l of r)m.push(l,s.value,a,o);if(n){for(x=0;x<m.length;x+=b)m[x](m[x+1],m[x+2],m[x+3]);m.length=0}},off(){},set(a){let o=s.value;o!==a&&(s.value=a,s.notify(o))},subscribe(a){let o=s.listen(a);return a(s.value),o},value:e};return s};function ce(e,r,s){let a=new Set(r).add(void 0);return e.listen((o,n,l)=>{a.has(l)&&s(o,n,l)})}let v=(e,r)=>s=>{e.current!==s&&(e.current=s,r())};function de(e,{keys:r,deps:s=[e,r]}={}){let a=c.useRef();a.current=e.get();let o=c.useCallback(l=>(v(a,l)(e.value),r?.length>0?ce(e,r,v(a,l)):e.listen(v(a,l))),s),n=()=>a.current;return c.useSyncExternalStore(o,n,n)}const k=le("es");if(typeof window<"u"&&typeof localStorage<"u")try{const e=localStorage.getItem("ai-ranking-lang");(e==="es"||e==="en")&&k.set(e)}catch(e){console.warn("Failed to read language preference from localStorage:",e)}k.listen(e=>{if(typeof window<"u"&&typeof localStorage<"u")try{localStorage.setItem("ai-ranking-lang",e)}catch(r){console.warn("Failed to save language preference:",r)}});function N(e){k.set(e)}const me=(e,r)=>typeof e=="string"?e:e&&e[r]?e[r]:e?.es||"",ue=(e,r)=>Array.isArray(e)?e:e&&e[r]?e[r]:e?.es||[];function xe({children:e,activePage:r,sidebarExtras:s}){const[a,o]=c.useState(!1),n=de(k),l={home:{es:"Inicio",en:"Home"},explore:{es:"Explorar",en:"Explore"},models:{es:"Modelos",en:"Models"},compare:{es:"Comparar",en:"Compare"},prompts:{es:"Prompts",en:"Prompts"},suggest:{es:"Sugerir Cambio",en:"Suggest Change"}},h=[{id:"home",label:l.home[n],icon:H,href:"/"},{id:"explore",label:l.explore[n],icon:te,href:"/explore"},{id:"models",label:l.models[n],icon:L,href:"/models"},{id:"compare",label:l.compare[n],icon:q,href:"/compare"},{id:"prompts",label:l.prompts[n],icon:Q,href:"/prompts"}];return t.jsxs("div",{className:"flex h-screen overflow-hidden bg-slate-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 font-sans",children:[t.jsx(ie,{}),a&&t.jsx("div",{className:"fixed inset-0 z-40 bg-black/50 md:hidden",onClick:()=>o(!1)}),t.jsxs("aside",{className:`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 
        transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${a?"translate-x-0":"-translate-x-full"}
        flex flex-col
      `,children:[t.jsxs("div",{className:"h-16 flex items-center px-6 border-b border-zinc-100 dark:border-zinc-800/50 justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2 font-bold text-xl tracking-tight",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white",children:n==="es"?"IA":"AI"}),t.jsxs("span",{children:[n==="es"?"IA":"AI"," ",t.jsx("span",{className:"text-primary-600",children:"Ranking"})]})]}),t.jsxs("div",{className:"flex gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-md p-0.5",children:[t.jsx("button",{onClick:()=>N("es"),className:`px-1.5 py-0.5 text-xs font-bold rounded ${n==="es"?"bg-white dark:bg-zinc-700 shadow-sm":"text-zinc-400 hover:text-zinc-600"}`,children:"ES"}),t.jsx("button",{onClick:()=>N("en"),className:`px-1.5 py-0.5 text-xs font-bold rounded ${n==="en"?"bg-white dark:bg-zinc-700 shadow-sm":"text-zinc-400 hover:text-zinc-600"}`,children:"EN"})]}),t.jsx("button",{onClick:()=>o(!1),className:"md:hidden ml-auto text-zinc-400",children:t.jsx(ae,{className:"w-6 h-6"})})]}),t.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-8 no-scrollbar",children:[t.jsx("nav",{className:"space-y-1",children:h.map(u=>{const f=r===u.id;return t.jsxs("a",{href:u.href,className:`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium ${f?"bg-zinc-900 text-white shadow-lg shadow-zinc-900/10 dark:bg-white dark:text-black":"text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200"}`,children:[t.jsx(u.icon,{className:`w-5 h-5 ${f?"text-white dark:text-black":"text-zinc-400"}`}),u.label]},u.id)})}),s&&t.jsx("div",{className:"animate-in fade-in slide-in-from-left-4 duration-500",children:s})]}),t.jsx("div",{className:"p-4 border-t border-zinc-100 dark:border-zinc-800/50 flex flex-col gap-2",children:t.jsxs("a",{href:"https://github.com/CBahamon",target:"_blank",className:"flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors",children:[t.jsx("div",{className:"w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center",children:t.jsx(D,{className:"w-3 h-3"})}),t.jsx("span",{children:l.suggest[n]})]})})]}),t.jsxs("main",{className:"flex-1 flex flex-col h-full relative overflow-hidden",children:[t.jsxs("div",{className:"md:hidden flex-none h-16 flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",children:[t.jsx("button",{onClick:()=>o(!0),className:"p-2 -ml-2 text-zinc-600",children:t.jsx(V,{className:"w-6 h-6"})}),t.jsxs("span",{className:"font-bold ml-2",children:[n==="es"?"IA":"AI"," ",t.jsx("span",{className:"text-primary-600",children:"Ranking"})]})]}),t.jsx("div",{className:"flex-1 overflow-y-auto scroll-smooth",children:e})]})]})}export{L as B,O as C,xe as D,D as E,K as P,te as S,ae as X,me as a,d as c,ue as g,t as j,k as l,de as u};

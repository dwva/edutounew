import{c as w,u as R,r as d,M as z,m as Y,i as G,a as L,f as H,b as Z,d as j,e as I,g as Q,h as A,j as J,k as e,l as m,L as S,n as D}from"./index-BXZKc7-v.js";import X from"./testnomialcard-BZd2dwZa.js";import K from"./techstack-DOtTr0_w.js";import{A as E}from"./arrow-right-DajB6ACG.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=w("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=w("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=w("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=w("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=w("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function C(t){const a=R(()=>Y(t)),{isStatic:s}=d.useContext(z);if(s){const[,o]=d.useState(t);d.useEffect(()=>a.on("change",o),[])}return a}const se=t=>t&&typeof t=="object"&&t.mix,ne=t=>se(t)?t.mix:void 0;function oe(...t){const a=!Array.isArray(t[0]),s=a?0:-1,o=t[0+s],i=t[1+s],n=t[2+s],r=t[3+s],l=G(i,n,{mixer:ne(n[0]),...r});return a?l(o):l}function V(t,a){const s=C(a()),o=()=>s.set(a());return o(),L(()=>{const i=()=>H.update(o,!1,!0),n=t.map(r=>r.on("change",i));return()=>{n.forEach(r=>r()),Z(o)}}),s}function ie(t){j.current=[],t();const a=V(j.current,t);return j.current=void 0,a}function re(t,a,s,o){if(typeof t=="function")return ie(t);const i=typeof a=="function"?a:oe(a,s,o);return Array.isArray(t)?T(t,i):T([t],([n])=>i(n))}function T(t,a){const s=R(()=>[]);return V(t,()=>{s.length=0;const o=t.length;for(let i=0;i<o;i++)s[i]=t[i].get();return a(s)})}function le(t,a={}){const{isStatic:s}=d.useContext(z),o=d.useRef(null),i=C(I(t)?t.get():t),n=()=>{o.current&&o.current.stop()};return d.useInsertionEffect(()=>i.attach((r,l)=>{if(s)return l(r);if(n(),o.current=Q({keyframes:[i.get(),r],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...a,onUpdate:l}),!A.isProcessing){const p=performance.now()-A.timestamp;p<30&&(o.current.time=J(p))}return i.get()},n),[JSON.stringify(a)]),L(()=>{if(I(t))return t.on("change",r=>i.set(parseFloat(r)))},[i]),i}function de(t,a,s){return typeof t=="string"?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const ce={some:0,all:1};function me(t,a,{root:s,margin:o,amount:i="some"}={}){const n=de(t),r=new WeakMap,l=x=>{x.forEach(c=>{const h=r.get(c.target);if(c.isIntersecting!==!!h)if(c.isIntersecting){const u=a(c);typeof u=="function"?r.set(c.target,u):p.unobserve(c.target)}else h&&(h(c),r.delete(c.target))})},p=new IntersectionObserver(l,{root:s,rootMargin:o,threshold:typeof i=="number"?i:ce[i]});return n.forEach(x=>p.observe(x)),()=>p.disconnect()}function _(t,{root:a,margin:s,amount:o,once:i=!1}={}){const[n,r]=d.useState(!1);return d.useEffect(()=>{if(!t.current||i&&n)return;const l=()=>(r(!0),i?void 0:()=>r(!1)),p={root:a&&a.current||void 0,margin:s,amount:o};return me(t.current,l,p)},[a,t,s,i,o]),n}const xe=()=>{const t=d.useRef(null),a=d.useRef({x:0,y:0}),s=d.useRef();return d.useEffect(()=>{const o=t.current,i=o.getContext("2d"),n=()=>{o.width=window.innerWidth,o.height=window.innerHeight};n(),window.addEventListener("resize",n);const r=20,l=1,p=100,x=h=>{a.current={x:h.clientX,y:h.clientY}};window.addEventListener("mousemove",x);const c=()=>{i.clearRect(0,0,o.width,o.height);const h=a.current;for(let u=0;u<o.width;u+=r)for(let f=0;f<o.height;f+=r){const W=Math.sqrt(Math.pow(u-h.x,2)+Math.pow(f-h.y,2)),y=Math.max(0,1-W/p),b={r:89,g:89,b:89},v={r:255,g:165,b:0},O=Math.round(b.r+(v.r-b.r)*y),$=Math.round(b.g+(v.g-b.g)*y),U=Math.round(b.b+(v.b-b.b)*y),B=1+y*.5,q=l*B;i.beginPath(),i.arc(u,f,q,0,2*Math.PI),i.fillStyle=`rgba(${O}, ${$}, ${U}, ${.35+y*.65})`,i.fill()}s.current=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",n),window.removeEventListener("mousemove",x),s.current&&cancelAnimationFrame(s.current)}},[]),e.jsx("canvas",{ref:t,className:"absolute inset-0 z-0 pointer-events-none"})};function M({project:t}){return e.jsxs("div",{className:"bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 min-h-[400px]",children:[e.jsx("div",{className:"aspect-video bg-gray-100 border-b-2 border-black",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4 flex flex-col gap-3 flex-1",children:[e.jsx("h3",{className:"text-base md:text-lg font-bold text-gray-900 line-clamp-2",children:t.title}),e.jsx("p",{className:"text-xs md:text-sm text-gray-700 leading-relaxed flex-1 line-clamp-3",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:t.tech.map(a=>e.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-800 border border-orange-100",children:a},a))})]}),e.jsx("div",{className:"px-4 pb-4 pt-1 flex items-center gap-3",children:t.status==="current"?e.jsx("button",{className:"inline-flex items-center justify-center px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white border-2 border-black transition-colors text-xs md:text-sm font-semibold w-full",onClick:()=>window.location.href="/enroll",children:"Enroll"}):e.jsx("button",{className:"inline-flex items-center justify-center px-3 py-2 rounded-lg bg-gray-400 text-white border-2 border-black cursor-not-allowed text-xs md:text-sm font-semibold w-full",children:"Soon"})})]})}function F({workshop:t}){return e.jsxs("div",{className:"bg-white border-2 border-black rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 min-h-[400px]",children:[e.jsx("div",{className:"aspect-video bg-gray-100 border-b-2 border-black",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-4 flex flex-col gap-3 flex-1",children:[e.jsx("h3",{className:"text-base md:text-lg font-bold text-gray-900 line-clamp-2",children:t.title}),e.jsx("p",{className:"text-xs md:text-sm text-gray-700 leading-relaxed flex-1 line-clamp-3",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:t.tech.map(a=>e.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-800 border border-blue-100",children:a},a))})]}),e.jsx("div",{className:"px-4 pb-4 pt-1 flex items-center gap-3",children:t.status==="current"?e.jsx("button",{className:"inline-flex items-center justify-center px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white border-2 border-black transition-colors text-xs md:text-sm font-semibold w-full",onClick:()=>window.location.href="/enroll",children:"Enroll"}):e.jsx("button",{className:"inline-flex items-center justify-center px-3 py-2 rounded-lg bg-gray-400 text-white border-2 border-black cursor-not-allowed text-xs md:text-sm font-semibold w-full",children:"Soon"})})]})}const pe=()=>{const[t,a]=d.useState(0),s=[{id:1,title:"AI Essentials",description:"Understanding core AI concepts, machine learning fundamentals, and practical AI implementation strategies for developers.",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",tech:["Machine Learning","TensorFlow","PyTorch","Data Science"],status:"current"},{id:6,title:"Full Stack Development Powered by AI",description:"Build modern web applications using AI-powered tools and frameworks. Master both frontend and backend development with cutting-edge AI assistance.",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",tech:["React","Node.js","AI Tools","MongoDB"],status:"soon"},{id:2,title:"Front End Development",description:"Master modern frontend technologies including React, Vue, and advanced CSS to create stunning, responsive user interfaces.",image:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",tech:["React","Vue","CSS3","JavaScript"],status:"soon"},{id:3,title:"Zero-Hero AI Tools for Development",description:"Learn to leverage AI tools to supercharge your development workflow and build intelligent applications from scratch.",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",tech:["OpenAI","GitHub Copilot","ChatGPT","AI APIs"],status:"soon"},{id:4,title:"Pure Backend Development",description:"Deep dive into server-side development, APIs, databases, and cloud architecture for building robust, scalable applications.",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",tech:["Node.js","Express","PostgreSQL","AWS"],status:"soon"},{id:5,title:"Zero-Hero Python Development",description:"Master Python from basics to advanced concepts including web development, data analysis, automation, and machine learning.",image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",tech:["Python","Django","Flask","Pandas"],status:"soon"}],o=()=>a(n=>n+1),i=()=>a(n=>n-1);return e.jsx("div",{children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center",children:["Featured ",e.jsx("span",{className:"text-orange-500",children:"Courses"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"md:hidden",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("button",{onClick:i,className:"bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",disabled:t===0,"aria-label":"Previous Course",children:e.jsx(N,{className:"w-5 h-5 text-black"})}),e.jsxs("div",{className:"text-sm text-gray-600 font-medium",children:[t+1," of ",s.length]}),e.jsx("button",{onClick:o,className:"bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",disabled:t===s.length-1,"aria-label":"Next Course",children:e.jsx(k,{className:"w-5 h-5 text-black"})})]}),e.jsx("div",{className:"w-full max-w-sm mx-auto",children:e.jsx(M,{project:s[t]})}),e.jsx("div",{className:"flex justify-center mt-6 gap-2",children:s.map((n,r)=>e.jsx("button",{onClick:()=>a(r),className:`w-2 h-2 rounded-full transition-colors ${t===r?"bg-orange-500":"bg-gray-300"}`,"aria-label":`Go to slide ${r+1}`},r))})]}),e.jsxs("div",{className:"hidden md:block",children:[e.jsx("button",{onClick:i,className:"absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",disabled:t===0,"aria-label":"Previous Slide",children:e.jsx(N,{className:"w-6 h-6 text-black"})}),e.jsx("button",{onClick:o,className:"absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border-2 border-black rounded-full p-3 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",disabled:t>=s.length-3,"aria-label":"Next Slide",children:e.jsx(k,{className:"w-6 h-6 text-black"})}),e.jsx("div",{className:"grid grid-cols-3 gap-6 px-16",children:s.slice(t,t+3).map(n=>e.jsx(M,{project:n},n.id))})]})]})]})})},ue=()=>{const[t,a]=d.useState(0),s=[{id:1,title:"Hands-On: Building Your First Autonomous Agent",description:"An immersive workshop where you'll design, code, and deploy your very first intelligent agent.",image:"https://images.unsplash.com/photo-1581092334859-9f3c9a5b1c1f?w=400&h=250&fit=crop",tech:["Python","AI Agents","Autonomy","Coding"],status:"current"},{id:2,title:"Agentic AI Foundations Workshop",description:"Dive into the fundamentals of agentic AI and uncover how autonomous systems are built.",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",tech:["AI Foundations","Decision-Making","Adaptability"],status:"current"},{id:3,title:"Creative Applications of Agentic AI Workshop",description:"Discover how agentic AI is shaping the future of creativity, from generating ideas to assisting with content creation.",image:"https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=400&h=250&fit=crop",tech:["Creativity","AI Design","Innovation","Content"],status:"current"},{id:4,title:"Multi-Agent Mastery: Collaboration Workshop",description:"Learn how to design ecosystems where multiple agents communicate, negotiate, and cooperate to solve complex problems.",image:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=400&h=250&fit=crop",tech:["Multi-Agent Systems","Collaboration","Negotiation"],status:"soon"}],o=()=>a(n=>n+1),i=()=>a(n=>n-1);return e.jsx("div",{children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("h1",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center",children:["Featured ",e.jsx("span",{className:"text-orange-500",children:"Workshops"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"md:hidden",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("button",{onClick:i,className:"bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",disabled:t===0,"aria-label":"Previous Workshop",children:e.jsx(N,{className:"w-5 h-5 text-black"})}),e.jsxs("div",{className:"text-sm text-gray-600 font-medium",children:[t+1," of ",s.length]}),e.jsx("button",{onClick:o,className:"bg-white hover:bg-gray-100 border-2 border-black rounded-full p-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",disabled:t===s.length-1,"aria-label":"Next Workshop",children:e.jsx(k,{className:"w-5 h-5 text-black"})})]}),e.jsx("div",{className:"w-full max-w-sm mx-auto",children:e.jsx(F,{workshop:s[t]})}),e.jsx("div",{className:"flex justify-center mt-6 gap-2",children:s.map((n,r)=>e.jsx("button",{onClick:()=>a(r),className:`w-2 h-2 rounded-full transition-colors ${t===r?"bg-orange-500":"bg-gray-300"}`,"aria-label":`Go to workshop ${r+1}`},r))})]}),e.jsx("div",{className:"hidden md:block",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",children:s.map(n=>e.jsx(F,{workshop:n},n.id))})})]})]})})};function he(){const[t,a]=d.useState("courses");return e.jsxs("div",{className:"min-h-screen w-full bg-white relative overflow-hidden",children:[e.jsx(xe,{}),e.jsx("div",{className:"relative z-10 py-12 md:py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[e.jsx("div",{className:"flex justify-center mb-8 md:mb-12",children:e.jsxs("div",{className:"bg-gray-200 rounded-full p-1 flex",children:[e.jsx("button",{onClick:()=>a("courses"),className:`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${t==="courses"?"bg-white text-orange-600 shadow-md":"text-gray-600 hover:text-gray-900"}`,children:"Featured Courses"}),e.jsx("button",{onClick:()=>a("workshops"),className:`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${t==="workshops"?"bg-white text-orange-600 shadow-md":"text-gray-600 hover:text-gray-900"}`,children:"Workshops"})]})}),e.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-4 md:p-8",children:[t==="courses"&&e.jsx(pe,{}),t==="workshops"&&e.jsx(ue,{})]})]})})]})}const ge=()=>e.jsxs("section",{className:"relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsxs("svg",{className:"absolute h-full w-full",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"grad1",x1:"1",y1:"0",x2:"0",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF8C00",stopOpacity:"0"}),e.jsx("stop",{offset:"50%",stopColor:"#FF8C00",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#FF8C00",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"grad2",x1:"1",y1:"0",x2:"0",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF4500",stopOpacity:"0"}),e.jsx("stop",{offset:"50%",stopColor:"#FF4500",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#FF4500",stopOpacity:"0"})]})]}),e.jsx(m.path,{initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:2,ease:"easeInOut",repeat:Number.POSITIVE_INFINITY,repeatType:"loop",repeatDelay:1},d:"M 100 100 Q 300 0 500 100 T 900 100",fill:"none",stroke:"url(#grad1)",strokeWidth:"2.5"}),e.jsx(m.path,{initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:2,ease:"easeInOut",repeat:Number.POSITIVE_INFINITY,repeatType:"loop",repeatDelay:1,delay:.5},d:"M 0 200 Q 200 100 400 200 T 800 200",fill:"none",stroke:"url(#grad2)",strokeWidth:"2.5"}),e.jsx(m.path,{initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:2,ease:"easeInOut",repeat:Number.POSITIVE_INFINITY,repeatType:"loop",repeatDelay:1,delay:1},d:"M 100 600 Q 300 500 500 600 T 900 600",fill:"none",stroke:"url(#grad1)",strokeWidth:"2.5"})]}),e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"absolute inset-0",children:[...Array(3)].map((t,a)=>e.jsx(m.div,{initial:{x:"100%",opacity:0},animate:{x:"-100%",opacity:[0,.9,.9,0]},transition:{duration:2.5,delay:a*.2,repeat:Number.POSITIVE_INFINITY,repeatType:"loop",ease:"linear"},className:"absolute right-0",style:{top:`${15+a*10}%`,height:"2px",width:"100%",background:`linear-gradient(90deg, transparent, ${a%2===0?"#FF8C00":"#FF4500"}AA, transparent)`}},a))})]}),e.jsxs("div",{className:"absolute inset-0 z-[1]",children:[e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},className:"absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-600/30 blur-3xl"}),e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2,delay:.5},className:"absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-orange-800/30 blur-3xl"})]})]}),fe=({className:t,size:a=50,delay:s=0,duration:o=6,colorFrom:i="#ffaa40",colorTo:n="#9c40ff",transition:r,style:l,reverse:p=!1,initialOffset:x=0,borderWidth:c=1})=>e.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",style:{"--border-beam-width":`${c}px`,borderWidth:"var(--border-beam-width)",...l},children:e.jsx(m.div,{className:g("absolute aspect-square","bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",t),style:{width:a,offsetPath:`rect(0 auto auto 0 round ${c+2}px)`,"--color-from":i,"--color-to":n},initial:{offsetDistance:`${x}%`},animate:{offsetDistance:p?[`${100-x}%`,`${-x}%`]:[`${x}%`,`${100+x}%`]},transition:{repeat:1/0,ease:"linear",duration:o,delay:-s,...r}})}),be=()=>e.jsx("div",{className:"w-full overflow-hidden bg-orange-100 py-2 relative",style:{margin:0},children:e.jsx("div",{className:"whitespace-nowrap w-max",style:{animation:"scroll-right 20s linear infinite"},children:[...Array(8)].map((t,a)=>e.jsxs("span",{className:"text-orange-600 font-medium mx-4 inline-block",children:["Featured ",e.jsx("span",{className:"text-orange-700 font-bold",children:"Courses"})," and ",e.jsx("span",{className:"text-orange-700 font-bold",children:"Workshops"})," - Limited Time Offer!"]},a))})}),ye=D(m.div)`
    .columns {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 20px;
        padding: 25px;
        border: 2px solid black;
        transition: all 0.4s;
        background: white;
        
        @media (max-width: 768px) {
            padding: 20px;
            border-radius: 16px;
        }
        
        @media (max-width: 480px) {
            padding: 16px;
            border-radius: 12px;
        }
    }

    .columns:hover {
        box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
        transform: translateY(-5px);
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 16px;
        
        @media (max-width: 768px) {
            gap: 15px;
            margin-bottom: 12px;
        }
    }

    .offer {
        font-size: 20px;
        font-weight: 900;
        border-bottom: 2px solid black;
        cursor: pointer;
        transition: all 0.4s;
        margin: 0;
        
        @media (max-width: 768px) {
            font-size: 18px;
        }
        
        @media (max-width: 480px) {
            font-size: 16px;
        }
    }

    .btn {
        padding: 6px 12px;
        border: 1px solid black;
        background-color: orange;
        border-radius: 8px;
        letter-spacing: 0.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.4s;
        font-size: 12px;
        
        @media (max-width: 768px) {
            padding: 5px 10px;
            font-size: 11px;
        }
    }

    .columns:hover .btn {
        box-shadow: 2px 2px 0 1px rgba(0, 0, 0);
    }

    .columns:hover .offer {
        color: green;
        border-color: green;
    }

    .btn:focus {
        background: transparent;
    }

    .secondary-heading {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        font-family: 'Poppins', sans-serif;
        
        @media (max-width: 768px) {
            font-size: 16px;
            margin-bottom: 12px;
        }
        
        @media (max-width: 480px) {
            font-size: 14px;
        }
    }

    .card-description {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        font-family: 'Poppins', sans-serif;
        
        @media (max-width: 768px) {
            font-size: 14px;
        }
        
        @media (max-width: 480px) {
            font-size: 13px;
        }
    }
`,P=D(m.button)`
    padding: 10px 20px;
    border: 2px solid black;
    background-color: orange;
    border-radius: 10px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    
    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.8rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    &:hover {
        background-color: #ff8c00;
        color: white;
        transform: translateY(-2px);
        box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
    }

    &:active {
        transform: translateY(0);
    }
`;function g(...t){return t.flatMap(a=>a?typeof a=="string"?[a]:typeof a=="object"?Object.entries(a).filter(([s,o])=>!!o).map(([s])=>s):[]:[]).join(" ")}function we(){const[t,a]=d.useState(!1),[s,o]=d.useState(0);d.useEffect(()=>{a(!0)},[]),d.useEffect(()=>{const n=setInterval(()=>{o(r=>(r+1)%3)},4e3);return()=>clearInterval(n)},[]);const i=[{id:0,icon:e.jsx(ae,{className:"w-6 h-6 md:w-8 md:h-8 text-orange-500"}),title:"Adaptive Learning Paths",description:"Our AI analyzes your strengths and growth areas in real-time, creating a personalized learning journey tailored specifically to you."},{id:1,icon:e.jsx(ee,{className:"w-6 h-6 md:w-8 md:h-8 text-orange-500"}),title:"Project-Based Curriculum",description:"Apply what you learn immediately to solve actual problems, building a portfolio of real work as you advance through your courses."},{id:2,icon:e.jsx(te,{className:"w-6 h-6 md:w-8 md:h-8 text-orange-500"}),title:"Continuous Evolution",description:"Our courses update automatically as industry standards shift, ensuring you're always learning the most current and relevant skills."}];return e.jsxs("div",{className:"min-h-screen bg-white text-black relative overflow-hidden",children:[e.jsx("section",{className:`py-8 md:py-12 px-4 transition-opacity duration-1000 ${t?"opacity-100":"opacity-0"}`,children:e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-6 md:gap-8",children:[e.jsxs("div",{className:"lg:w-1/2 flex flex-col justify-center w-full",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug relative inline-block",children:["Education"," ",e.jsxs("span",{className:"text-orange-500 relative z-10",children:["Reimagined",e.jsx("span",{className:"absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded transition-all duration-500 animate-underline"})]})]}),e.jsx("p",{className:"text-sm md:text-base mb-4 md:mb-6 text-gray-700 leading-relaxed max-w-xl",children:"EDUTOU stands at the intersection of cutting-edge artificial intelligence and modern education. We've built a learning ecosystem that adapts to you—not the other way around."}),e.jsxs("div",{className:"bg-gray-50 p-3 md:p-4 rounded-lg shadow-sm border-l-4 border-orange-500 mb-4 md:mb-6 max-w-xl",children:[e.jsx("h3",{className:"font-semibold text-base md:text-lg mb-1",children:"Our Mission"}),e.jsx("p",{className:"text-gray-700 text-xs md:text-sm",children:"To create agile, skilled professionals who can thrive in an ever-changing technological landscape. Through our AI-driven platform, we deliver personalized learning experiences that focus on practical skills and real-world applications."})]})]}),e.jsxs("div",{className:"lg:w-1/2 w-full relative",children:[e.jsx(fe,{className:"",size:200,duration:12,delay:0,borderWidth:2,colorFrom:"#ffaa40",colorTo:"#9c40ff",reverse:!0,transition:{},style:{}}),e.jsx("div",{className:"absolute inset-0 -z-10 pointer-events-none",children:e.jsxs("svg",{className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:[e.jsx("circle",{cx:"20%",cy:"30%",r:"10",fill:"rgba(255, 165, 0, 0.1)",children:e.jsx("animate",{attributeName:"r",values:"8;12;8",dur:"4s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"80%",cy:"70%",r:"15",fill:"rgba(255, 165, 0, 0.1)",children:e.jsx("animate",{attributeName:"r",values:"12;18;12",dur:"5s",repeatCount:"indefinite"})})]})}),e.jsxs("div",{className:"bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 md:p-6 relative z-10 transition-all duration-500 transform hover:shadow-xl md:hover:shadow-2xl border border-gray-100",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold mb-4 md:mb-6 border-b pb-2 md:pb-3 border-gray-100",children:"What sets us apart"}),i.map(n=>e.jsx("div",{className:`mb-4 md:mb-6 p-3 md:p-4 rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 transform ${s===n.id?"bg-gray-50 shadow-md md:shadow-lg scale-105 opacity-100":"bg-white opacity-70 hover:opacity-100 hover:shadow-sm md:hover:shadow-md hover:scale-105"}`,onMouseEnter:()=>o(n.id),children:e.jsxs("div",{className:"flex items-start gap-3 md:gap-4",children:[e.jsx("div",{className:"transition-transform duration-500 transform",children:n.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-base md:text-xl mb-1 group-hover:underline underline-animation",children:n.title}),e.jsx("p",{className:"text-gray-700 text-xs md:text-sm",children:n.description})]})]})},n.id))]}),e.jsx("div",{className:"absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-orange-100 rounded-full opacity-70"}),e.jsx("div",{className:"absolute top-4 -right-4 w-12 h-12 md:w-20 md:h-20 bg-gray-100 rounded-full opacity-70"})]})]})})}),e.jsx("style",{children:`
                /* Gradient underline animation */
                .animate-underline {
                    animation: underlineGrow 1.5s ease forwards;
                }
                @keyframes underlineGrow {
                    0% {
                        width: 0%;
                        opacity: 0;
                    }
                    100% {
                        width: 100%;
                        opacity: 1;
                    }
                }

                /* Underline on feature title hover */
                h3:hover {
                    text-decoration: underline;
                    text-decoration-thickness: 2px;
                    text-underline-offset: 4px;
                    transition: all 0.3s ease;
                }
            `})]})}function ve({value:t,suffix:a="",duration:s=1,delay:o=0,label:i}){const n=d.useRef(null),r=_(n,{margin:"-50px"}),l=C(0),p=le(l,{damping:20,stiffness:50,mass:1}),x=re(p,u=>Number(u.toFixed(t%1===0?0:1))),[c,h]=d.useState(0);return d.useEffect(()=>{const u=x.on("change",f=>{h(f)});return()=>u()},[x]),d.useEffect(()=>{let u;return r?(l.set(0),u=setTimeout(()=>{l.set(t)},o*300)):l.set(0),()=>clearTimeout(u)},[r,t,l,o]),e.jsxs(m.div,{ref:n,initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:o*.2,type:"spring",stiffness:80},className:g("text-center flex-1 min-w-0 flex flex-col justify-center h-full"),children:[e.jsxs(m.div,{className:g("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 whitespace-nowrap text-orange-500"),initial:{scale:.8},animate:r?{scale:1}:{scale:.8},transition:{duration:.6,delay:o*.2+.3,type:"spring",stiffness:100},children:[c,a]}),e.jsx(m.p,{className:g("text-gray-600 text-xs sm:text-sm leading-relaxed px-1 sm:px-2 hyphens-auto break-words"),style:{wordBreak:"break-word",overflowWrap:"break-word"},initial:{opacity:0},animate:r?{opacity:1}:{opacity:0},transition:{delay:o*.2+.6,duration:.6},children:i})]})}function je({stats:t,title:a,showDividers:s=!0,className:o=""}){const i=d.useRef(null),n=_(i,{margin:"-100px"});return e.jsxs(m.section,{ref:i,className:g("py-8 sm:py-12 lg:py-20 px-2 sm:px-4 md:px-8 w-full overflow-hidden bg-white",o),initial:{opacity:0},animate:n?{opacity:1}:{opacity:0},transition:{duration:.8},children:[e.jsx(m.div,{className:g("text-center mb-8 sm:mb-12 lg:mb-16"),initial:{opacity:0,y:-20},animate:n?{opacity:1,y:0}:{opacity:0,y:-20},transition:{duration:.8,delay:.2},children:e.jsx("h2",{className:g("text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide px-4 font-['Poppins']"),children:a})}),e.jsx("div",{className:g("w-full max-w-6xl mx-auto"),children:e.jsx("div",{className:g("flex flex-row items-stretch justify-between gap-2 sm:gap-4 lg:gap-8 w-full min-h-[120px] sm:min-h-[140px]"),children:t&&t.map((r,l)=>e.jsxs("div",{className:g("relative flex-1 min-w-0 flex flex-col justify-center h-full"),children:[e.jsx(ve,{value:r.value,suffix:r.suffix,duration:r.duration,delay:l,label:r.label}),l<t.length-1&&s&&e.jsx(m.div,{className:g("absolute -right-1 sm:-right-2 lg:-right-4 top-1/2 transform -translate-y-1/2 h-12 sm:h-16 lg:h-20 w-px bg-gray-200"),initial:{opacity:0,scaleY:0},animate:n?{opacity:1,scaleY:1}:{opacity:0,scaleY:0},transition:{delay:1.5+l*.2,duration:.6}})]},l))})})]})}const Ae=()=>{const t=[{value:10,suffix:"k+",label:"Students Enrolled Globally"},{value:95,suffix:"%",label:"Course Completion Rate"},{value:200,suffix:"+",label:"Industry Mentors & Experts"}];return e.jsxs("div",{className:"bg-white text-gray-900",style:{margin:0,padding:0},children:[e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                
                .education-text {
                    color: white;
                    -webkit-text-stroke: 2px orange;
                    text-shadow: none;
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(calc(-100% / 2));
                    }
                }

                /* Remove default margins */
                body, html {
                    margin: 0;
                    padding: 0;
                }
                
                /* Mobile-specific spacing fixes */
                @media (max-width: 768px) {
                    /* Reduce hero section padding */
                    .hero-section {
                        padding-top: 1rem !important;
                        padding-bottom: 1.5rem !important;
                        min-height: 80vh !important;
                    }
                    
                    /* Reduce gap between hero text and quote */
                    .hero-content h1 {
                        margin-bottom: 1rem !important;
                    }
                    
                    .hero-content blockquote {
                        margin-top: 1.5rem !important;
                    }
                    
                    /* Reduce gap between sections */
                    .section-spacing {
                        padding-top: 2rem !important;
                        padding-bottom: 2rem !important;
                    }
                    
                    /* Reduce gap in Why EDUTOU section */
                    .why-section {
                        padding-top: 1.5rem !important;
                        padding-bottom: 1.5rem !important;
                    }
                    
                    /* Reduce gap in tech stack section */
                    .tech-stack-section {
                        padding-top: 1rem !important;
                        padding-bottom: 1rem !important;
                    }
                }
                `}),e.jsx(be,{}),e.jsxs("section",{className:"hero-section min-h-screen w-full relative flex items-center justify-center px-4 sm:px-6 overflow-hidden",style:{marginTop:0,paddingTop:"2rem",paddingBottom:"2rem"},children:[e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx(ge,{})}),e.jsx("div",{className:"absolute inset-0 z-0",style:{backgroundImage:`
                            radial-gradient(125% 125% at 50% 90%, rgba(255, 255, 255, 0.7) 40%, rgba(245, 158, 11, 0.5) 100%)
                        `,backgroundSize:"100% 100%"}}),e.jsxs("div",{className:"hero-content relative z-10 text-center max-w-5xl",children:[e.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-10 leading-tight text-black font-['Poppins']",children:["The Future of Learning"," ",e.jsx("span",{className:"education-text",children:"Powered"})," by AI."]}),e.jsxs("div",{className:"my-6 md:my-12 flex flex-col items-center",children:[e.jsx(P,{whileHover:{scale:1.05,boxShadow:"4px 4px 0 1px rgba(0,0,0)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:10},className:"mb-4 md:mb-8",children:e.jsxs(S,{to:"/currentcourse",className:"flex items-center",children:["Enroll Today",e.jsx(E,{className:"ml-2 h-4 w-4 md:h-5 md:w-5"})]})}),e.jsx("p",{className:"text-black text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-4 md:mb-10 leading-relaxed font-['Poppins'] px-2",children:"At EDUTOU, we've reimagined education for the digital age. Our AI-powered platform adapts to your learning style, focusing on the skills that matter in today's rapidly evolving job market."})]}),e.jsx("blockquote",{className:"text-black font-semibold text-base md:text-lg italic mt-4 md:mt-12 font-['Poppins']",children:'"The ones who learn, adapt, and innovate... change the world." 🚀'})]})]}),e.jsx("section",{className:"why-section py-8 md:py-24 bg-white",children:e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 md:gap-12 mb-8 md:mb-16 items-start",children:[e.jsxs("div",{className:"lg:w-1/2",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-['Poppins']",children:["Why ",e.jsx("span",{className:"text-orange-500",children:"EDUTOU"})," is Different"]}),e.jsx("p",{className:"text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-['Poppins']",children:"Discover the core features that make our learning platform stand out."})]}),e.jsx("div",{className:"lg:w-1/2"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10",children:[{title:"AI-Powered Personalization",desc:"Adaptive learning algorithms tailor content to your unique needs and pace.",icon:"🤖",flag:"FEATURE"},{title:"Project-Based Curriculum",desc:"Build portfolio-worthy projects from day one with expert guidance.",icon:"🛠️",flag:"FEATURE"},{title:"Industry Mentor Network",desc:"Learn directly from professionals at top tech companies.",icon:"👨‍💼",flag:"FEATURE"}].map((a,s)=>e.jsx(ye,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.15},viewport:{once:!0},children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"button-container",children:[e.jsx("button",{className:"btn red-flag",children:a.flag}),e.jsx("p",{className:"offer",children:a.icon})]}),e.jsx("p",{className:"secondary-heading",children:a.title}),e.jsx("p",{className:"card-description",children:a.desc})]})},s))})]})}),e.jsx("section",{className:"tech-stack-section py-8 md:py-16 bg-white",children:e.jsx(K,{})}),e.jsx(je,{stats:t,title:"OUR IMPACT IN NUMBERS"}),e.jsx(he,{}),e.jsx(we,{}),e.jsx(X,{}),e.jsx("section",{className:"py-12 md:py-24 bg-white",children:e.jsxs("div",{className:"flex flex-col items-center justify-center p-4",children:[e.jsxs("div",{className:"flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 max-w-3xl",children:[e.jsx("div",{className:"bg-orange-300 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md",children:"Build"}),e.jsx("div",{className:"bg-orange-100 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]",children:"projects"}),e.jsx("div",{className:"bg-orange-200 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl shadow-md",children:"real-world"}),e.jsx("div",{className:"flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black shadow-md",children:e.jsx("div",{className:"text-xl md:text-2xl lg:text-3xl",children:"🙂"})}),e.jsx("div",{className:"bg-orange-100 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md",children:"and"}),e.jsx("div",{className:"bg-orange-200 text-black text-xl md:text-2xl lg:text-3xl font-bold px-5 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]",children:"stand out"}),e.jsx("div",{className:"bg-orange-300 text-black text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-md",children:"to employers 💼"})]}),e.jsx("div",{className:"text-3xl md:text-4xl mb-3 md:mb-4",children:"↓"}),e.jsx("div",{className:"text-center text-gray-700 max-w-md mb-4 md:mb-6 text-sm md:text-base font-['Poppins']",children:"Join thousands of learners who have accelerated their careers with EDUTOU's revolutionary approach to education"}),e.jsx(P,{whileHover:{scale:1.05,boxShadow:"4px 4px 0 1px rgba(0, 0, 0, 0)"},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:10},children:e.jsxs(S,{to:"/enroll",className:"flex items-center",children:["Get Started Learning",e.jsx(E,{className:"ml-2 h-4 w-4 md:h-5 md:w-5"})]})})]})})]})};export{Ae as default};

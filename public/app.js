"use strict";(()=>{function v(i="light"){if(typeof navigator<"u"&&"vibrate"in navigator)try{switch(i){case"light":navigator.vibrate(8);break;case"medium":navigator.vibrate(18);break;case"success":navigator.vibrate([10,30,15]);break;case"error":navigator.vibrate([25,40,25]);break}}catch{}}function m(i,t=2200){v("light");let s=document.getElementById("toast-container");s||(s=document.createElement("div"),s.id="toast-container",s.className="toast-container",document.body.appendChild(s));let e=document.createElement("div");e.className="native-toast",e.textContent=i,s.appendChild(e),requestAnimationFrame(()=>{e.classList.add("visible")}),setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),250)},t)}function H(i,t){navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(i).then(()=>{m(`${t} \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7`),v("success")}).catch(()=>{m("\u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")})}function I(i,t){let s=()=>{let n=window.visualViewport,a=n?n.height:window.innerHeight;document.documentElement.style.setProperty("--vvh",`${a}px`),requestAnimationFrame(()=>{i.scrollTop=i.scrollHeight})};window.visualViewport&&(window.visualViewport.addEventListener("resize",s),window.visualViewport.addEventListener("scroll",s)),window.addEventListener("resize",s),window.addEventListener("orientationchange",()=>{setTimeout(s,200)}),s();let e=document.getElementById("query-input");e&&e.addEventListener("focus",()=>{setTimeout(()=>{s(),i.scrollTop=i.scrollHeight},250)}),document.body.addEventListener("touchmove",n=>{n.target===document.body&&n.preventDefault()},{passive:!1})}var c={menu:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  `,close:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,plus:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,shieldCheck:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  `,building:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <line x1="3" y1="21" x2="21" y2="21"/>
      <line x1="4" y1="11" x2="20" y2="11"/>
      <path d="M12 3 4 8v3h16V8l-8-5z"/>
      <path d="M6 11v7M10 11v7M14 11v7M18 11v7"/>
    </svg>
  `,globe:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  `,phone:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  `,receipt:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  `,fileText:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  `,listOrdered:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <line x1="10" y1="6" x2="21" y2="6"/>
      <line x1="10" y1="12" x2="21" y2="12"/>
      <line x1="10" y1="18" x2="21" y2="18"/>
      <path d="M4 6h1v4"/>
      <path d="M4 10h2"/>
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>
    </svg>
  `,alertTriangle:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  `,copy:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  `,refresh:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
      <path d="M21 3v5h-5"/>
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
      <path d="M8 16H3v5"/>
    </svg>
  `,search:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  `,helpCircle:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  `,send:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  `,externalLink:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  `,clock:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  `};var L={0:"",1:"\u098F\u0995",2:"\u09A6\u09C1\u0987",3:"\u09A4\u09BF\u09A8",4:"\u099A\u09BE\u09B0",5:"\u09AA\u09BE\u0981\u099A",6:"\u099B\u09AF\u09BC",7:"\u09B8\u09BE\u09A4",8:"\u0986\u099F",9:"\u09A8\u09AF\u09BC",10:"\u09A6\u09B6",11:"\u098F\u0997\u09BE\u09B0\u09CB",12:"\u09AC\u09BE\u09B0\u09CB",13:"\u09A4\u09C7\u09B0\u09CB",14:"\u099A\u09CC\u09A6\u09CD\u09A6",15:"\u09AA\u09A8\u09C7\u09B0\u09CB",16:"\u09B7\u09CB\u09B2\u09CB",17:"\u09B8\u09A4\u09C7\u09B0\u09CB",18:"\u0986\u09A0\u09BE\u09B0\u09CB",19:"\u0989\u09A8\u09BF\u09B6",20:"\u09AC\u09BF\u09B6",21:"\u098F\u0995\u09C1\u09B6",22:"\u09AC\u09BE\u0987\u09B6",23:"\u09A4\u09C7\u0987\u09B6",24:"\u099A\u09AC\u09CD\u09AC\u09BF\u09B6",25:"\u09AA\u0981\u099A\u09BF\u09B6",26:"\u099B\u09BE\u09AC\u09CD\u09AC\u09BF\u09B6",27:"\u09B8\u09BE\u09A4\u09BE\u09B6",28:"\u0986\u09A0\u09BE\u09B6",29:"\u0989\u09A8\u09A4\u09CD\u09B0\u09BF\u09B6",30:"\u09A4\u09CD\u09B0\u09BF\u09B6",31:"\u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09B6",32:"\u09AC\u09A4\u09CD\u09B0\u09BF\u09B6",33:"\u09A4\u09C7\u09A4\u09CD\u09B0\u09BF\u09B6",34:"\u099A\u09CC\u09A4\u09CD\u09B0\u09BF\u09B6",35:"\u09AA\u0981\u09AF\u09BC\u09A4\u09CD\u09B0\u09BF\u09B6",36:"\u099B\u09A4\u09CD\u09B0\u09BF\u09B6",37:"\u09B8\u09BE\u0981\u0987\u09A4\u09CD\u09B0\u09BF\u09B6",38:"\u0986\u099F\u09A4\u09CD\u09B0\u09BF\u09B6",39:"\u0989\u09A8\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",40:"\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",41:"\u098F\u0995\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",42:"\u09AC\u09BF\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",43:"\u09A4\u09C7\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",44:"\u099A\u09C1\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",45:"\u09AA\u0981\u09AF\u09BC\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",46:"\u099B\u09C7\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",47:"\u09B8\u09BE\u09A4\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",48:"\u0986\u099F\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",49:"\u0989\u09A8\u09AA\u099E\u09CD\u099A\u09BE\u09B6",50:"\u09AA\u099E\u09CD\u099A\u09BE\u09B6",51:"\u098F\u0995\u09BE\u09A8\u09CD\u09A8",52:"\u09AC\u09BE\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",53:"\u09A4\u09BF\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",54:"\u099A\u09C1\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",55:"\u09AA\u099E\u09CD\u099A\u09BE\u09A8\u09CD\u09A8",56:"\u099B\u09BE\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",57:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09CD\u09A8",58:"\u0986\u099F\u09BE\u09A8\u09CD\u09A8",59:"\u0989\u09A8\u09B7\u09BE\u099F",60:"\u09B7\u09BE\u099F",61:"\u098F\u0995\u09B7\u099F\u09CD\u099F\u09BF",62:"\u09AC\u09BE\u09B7\u099F\u09CD\u099F\u09BF",63:"\u09A4\u09C7\u09B7\u099F\u09CD\u099F\u09BF",64:"\u099A\u09CC\u09B7\u099F\u09CD\u099F\u09BF",65:"\u09AA\u0981\u09AF\u09BC\u09B7\u099F\u09CD\u099F\u09BF",66:"\u099B\u09C7\u09B7\u099F\u09CD\u099F\u09BF",67:"\u09B8\u09BE\u09A4\u09B7\u099F\u09CD\u099F\u09BF",68:"\u0986\u099F\u09B7\u099F\u09CD\u099F\u09BF",69:"\u0989\u09A8\u09B8\u09A4\u09CD\u09A4\u09B0",70:"\u09B8\u09A4\u09CD\u09A4\u09B0",71:"\u098F\u0995\u09BE\u09A4\u09CD\u09A4\u09B0",72:"\u09AC\u09BE\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",73:"\u09A4\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",74:"\u099A\u09CC\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",75:"\u09AA\u0981\u099A\u09BE\u09A4\u09CD\u09A4\u09B0",76:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",77:"\u09B8\u09BE\u09A4\u09BE\u09A4\u09CD\u09A4\u09B0",78:"\u0986\u099F\u09BE\u09A4\u09CD\u09A4\u09B0",79:"\u0989\u09A8\u09BE\u09B6\u09BF",80:"\u0986\u09B6\u09BF",81:"\u098F\u0995\u09BE\u09B6\u09BF",82:"\u09AC\u09BF\u09B0\u09BE\u09B6\u09BF",83:"\u09A4\u09BF\u09B0\u09BE\u09B6\u09BF",84:"\u099A\u09CC\u09B0\u09BE\u09B6\u09BF",85:"\u09AA\u0981\u099A\u09BE\u09B6\u09BF",86:"\u099B\u09BF\u09AF\u09BC\u09BE\u09B6\u09BF",87:"\u09B8\u09BE\u09A4\u09BE\u09B6\u09BF",88:"\u0985\u09B7\u09CD\u099F\u0986\u09B6\u09BF",89:"\u098A\u09A8\u09A8\u09AC\u09CD\u09AC\u0987",90:"\u09A8\u09AC\u09CD\u09AC\u0987",91:"\u098F\u0995\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",92:"\u09AC\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",93:"\u09A4\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",94:"\u099A\u09C1\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",95:"\u09AA\u0981\u099A\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",96:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",97:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",98:"\u0986\u099F\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",99:"\u09A8\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987"},q={0:"\u09E6",1:"\u09E7",2:"\u09E8",3:"\u09E9",4:"\u09EA",5:"\u09EB",6:"\u09EC",7:"\u09ED",8:"\u09EE",9:"\u09EF"};function x(i){return i.toLocaleString("en-IN").replace(/[0-9]/g,s=>q[s]||s)}function T(i){if(i===0)return"\u09B6\u09C2\u09A8\u09CD\u09AF \u099F\u09BE\u0995\u09BE";let t=i,s=[];if(t>=1e7){let e=Math.floor(t/1e7);s.push(`${T(e).replace(" \u099F\u09BE\u0995\u09BE","")} \u0995\u09CB\u099F\u09BF`),t%=1e7}if(t>=1e5){let e=Math.floor(t/1e5);s.push(`${L[e]||e} \u09B2\u09BE\u0996`),t%=1e5}if(t>=1e3){let e=Math.floor(t/1e3);s.push(`${L[e]||e} \u09B9\u09BE\u099C\u09BE\u09B0`),t%=1e3}if(t>=100){let e=Math.floor(t/100);s.push(`${L[e]||e}\u09B6\u09A4`),t%=100}return t>0&&s.push(L[t]||t.toString()),`${s.join(" ")} \u099F\u09BE\u0995\u09BE`}function l(i){return i?String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function $(i){let t=document.createElement("div");return t.className="message-row user",t.innerHTML=`
    <div class="user-bubble">
      <div class="bubble-content">${l(i)}</div>
    </div>
  `,t}function A(){let i=document.createElement("div");return i.className="message-row bot typing-row",i.id="bot-typing-indicator",i.innerHTML=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="bot-avatar-img" /></div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `,i}function z(i){if(!i)return"";let s=i.replace(/\r\n/g,`
`).split(`
`),e=[],n=!1,a=!1;for(let d=0;d<s.length;d++){let u=s[d].trim();if(!u){n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1);continue}if(/^(\-{3,}|\*{3,}|_{3,})$/.test(u)){n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1),e.push('<hr class="rag-hr">');continue}let r=l(u);if(r=r.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),r=r.replace(/`([^`]+)`/g,'<code class="rag-code">$1</code>'),r=r.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener" class="rag-link">$1</a>'),r.startsWith("#### "))n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1),e.push(`<h4 class="rag-h4">${r.substring(5)}</h4>`);else if(r.startsWith("### "))n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1),e.push(`<h3 class="rag-h3">${r.substring(4)}</h3>`);else if(r.startsWith("## "))n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1),e.push(`<h2 class="rag-h2">${r.substring(3)}</h2>`);else if(r.startsWith("&gt; ")||r.startsWith("> ")){n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1);let g=r.replace(/^(&gt;|>)\s*/,"");e.push(`<blockquote class="rag-blockquote">${g}</blockquote>`)}else if(/^[•\-\*]\s+/.test(r)){a&&(e.push("</ol>"),a=!1),n||(e.push('<ul class="rag-ul">'),n=!0);let g=r.replace(/^[•\-\*]\s+/,"");e.push(`<li class="rag-li">${g}</li>`)}else if(/^([0-9]+|[০-৯]+)\.\s+/.test(r)){n&&(e.push("</ul>"),n=!1),a||(e.push('<ol class="rag-ol">'),a=!0);let g=r.replace(/^([0-9]+|[০-৯]+)\.\s+/,"");e.push(`<li class="rag-oli">${g}</li>`)}else n&&(e.push("</ul>"),n=!1),a&&(e.push("</ol>"),a=!1),e.push(`<p class="rag-p">${r}</p>`)}return n&&e.push("</ul>"),a&&e.push("</ol>"),e.join(`
`)}function S(i,t,s){let e=i.querySelector(".btn-copy-action");e&&e.addEventListener("click",()=>{H(t,s);let n=e.querySelector(".action-label"),a=n?n.textContent:"\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8";e.classList.add("copied"),n&&(n.textContent="\u0995\u09AA\u09BF \u09B9\u09DF\u09C7\u099B\u09C7!"),setTimeout(()=>{e.classList.remove("copied"),n&&(n.textContent=a)},2e3)})}function E(i){let t=document.createElement("div");t.className="message-row bot";let s=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="bot-avatar-img" /></div>
    </div>
  `;if(i.action==="SAFE_REFUSAL"){let o=i.reply_bn||"\u09A6\u09C1\u0983\u0996\u09BF\u09A4, \u098F\u0987 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AE\u09BE\u09A3\u09CD\u09AF \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964";return t.innerHTML=`
      ${s}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">
          ${c.alertTriangle}
          <span>\u09A4\u09A5\u09CD\u09AF \u09A4\u09BE\u09B2\u09BF\u0995\u09BE\u09DF \u09A8\u09C7\u0987</span>
        </div>
        <p class="refusal-text">${l(o).replace(/\n/g,"<br>")}</p>
        <div class="msg-actions-bar">
          <button class="btn-action-pill btn-copy-action" data-copy="${l(o)}" title="\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${c.copy}
            <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
          </button>
        </div>
      </div>
    `,S(t,o,"\u09A4\u09A5\u09CD\u09AF"),t}if(i.action==="DISAMBIGUATE"){let o=(i.candidate_services||[]).map(p=>`
      <button class="native-chip-btn" data-query="${l(p.name_bn||p.title_bn||"")}">
        ${l(p.name_bn||p.title_bn||"")}
      </button>
    `).join("");return t.innerHTML=`
      ${s}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8</strong></p>
        <p class="bubble-subtext">\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8:</p>
        <div class="chips-container">${o}</div>
      </div>
    `,t}if(i.action==="CLARIFY"&&i.clarifying_question){let o=i.clarifying_question,p=(o.options||[]).map(y=>`
      <button class="native-chip-btn" data-query="${l(y.label_bn)}">
        ${l(y.label_bn)}
      </button>
    `).join("");return t.innerHTML=`
      ${s}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>${l(o.question_bn)}</strong></p>
        <div class="chips-container">${p}</div>
      </div>
    `,t}if((i.source==="rag_vector_d1"||i.reply_bn&&(!i.variant||!i.variant.fees?.length))&&i.reply_bn){let o=i.matched_service,p=o?.official_portal_url||"",y=o?.title_bn||"\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09B8\u09C7\u09AC\u09BE \u0993 \u099C\u09B0\u09C1\u09B0\u09BF \u09A4\u09A5\u09CD\u09AF",b=i.reply_bn;return t.innerHTML=`
      ${s}
      <div class="bubble bot-bubble rag-card-bubble">
        <!-- AI Rendered Clean Markdown Content -->
        <div class="rag-body-text">
          ${z(i.reply_bn)}
        </div>

        <!-- Sleek Modern Action Bar (ChatGPT / Claude style) -->
        <div class="msg-actions-bar">
          <button class="btn-action-pill btn-copy-action" data-copy="${l(b)}" title="\u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${c.copy}
            <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
          </button>
          ${p?`
          <a href="${l(p)}" target="_blank" rel="noopener" class="btn-action-pill btn-portal-action">
            ${c.globe}
            <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
            ${c.externalLink}
          </a>`:""}
        </div>
      </div>
    `,S(t,b,y),t}let n=i.service||{name_bn:"",agency_bn:"",ministry_bn:"",official_portal_url:"",helpline_number:"",last_verified_at:new Date().toISOString()},a=i.variant||{variant_name_bn:"",processing_days_sla:0,fees:[],documents:[],steps:[]},d=(a.fees||[]).reduce((o,p)=>o+(p.amount_bdt||0),0),u=x(d),r=T(d),g=(a.fees||[]).map(o=>`
    <div class="fee-row">
      <span class="fee-name">${l(o.fee_type_bn||o.category_name||"")}</span>
      <span class="fee-amount">${x(o.amount_bdt||0)} \u099F\u09BE\u0995\u09BE</span>
    </div>
  `).join(""),B=(a.documents||[]).map(o=>`
    <li class="doc-item">
      <span class="doc-title">${l(o.document_name_bn||o.document_name||o.name||"")}</span>
      <span class="doc-tag ${o.is_mandatory?"tag-mandatory":"tag-optional"}">
        ${o.is_mandatory?"\u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995":"\u09AA\u09CD\u09B0\u09AF\u09CB\u099C\u09CD\u09AF \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7"}
      </span>
      <span class="doc-format">(${o.format_requirement==="original"?"\u09AE\u09C2\u09B2 \u0995\u09AA\u09BF":"\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8"})</span>
    </li>
  `).join(""),w=(a.steps||[]).map(o=>`
    <li class="step-item">
      <div class="step-num">${x(o.step_number||1)}</div>
      <div class="step-content">
        <strong>${l(o.title_bn||o.title||"")}:</strong> ${l(o.instruction_bn||o.description||"")}
      </div>
    </li>
  `).join(""),f=`${n.name_bn}
\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF: ${u} \u099F\u09BE\u0995\u09BE (${r})
\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${n.helpline_number}
\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2: ${n.official_portal_url}`;return t.innerHTML=`
    ${s}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Service Title -->
      <div class="service-title-text">${l(n.name_bn)}</div>

      <!-- Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">${c.building} ${l(n.agency_bn)}</span>
        <span class="agency-tag">${c.building} ${l(n.ministry_bn)}</span>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">
            ${c.receipt}
            <span>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AE\u09CB\u099F \u09AB\u09BF</span>
          </div>
          <div class="fee-total-highlight">${u} \u099F\u09BE\u0995\u09BE</div>
        </div>
        <div class="fee-in-words-row">\u0995\u09A5\u09BE\u09AF\u09BC: <strong>${r}</strong></div>
        <div class="fee-variant-subtext">${l(a.variant_name_bn)} \u2022 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC: ${x(a.processing_days_sla)} \u0995\u09BE\u09B0\u09CD\u09AF\u09A6\u09BF\u09AC\u09B8</div>
        <div class="fee-breakdown-list">
          ${g}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">
        ${c.fileText}
        <span>\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0</span>
      </div>
      <ul class="native-checklist">
        ${B}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">
        ${c.listOrdered}
        <span>\u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9</span>
      </div>
      <ol class="native-steps-list">
        ${w}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <div class="alert-banner-header">
          ${c.alertTriangle}
          <strong>\u09A6\u09BE\u09B2\u09BE\u09B2 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u09A3\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:</strong>
        </div>
        <p>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0993 \u09B0\u09B8\u09BF\u09A6\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u0995\u09BE\u0989\u0995\u09C7 \u0995\u09CB\u09A8\u09CB \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0985\u09B0\u09CD\u09A5 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u0995\u09C7\u0989 \u0985\u09AC\u09C8\u09A7 \u099F\u09BE\u0995\u09BE \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B9\u099F\u09B2\u09BE\u0987\u09A8 <strong>${l(n.helpline_number)}</strong> \u0985\u09A5\u09AC\u09BE \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 <strong>\u09E7\u09E6\u09EC</strong> \u09A8\u09AE\u09CD\u09AC\u09B0\u09C7 \u0985\u09AD\u09BF\u09AF\u09CB\u0997 \u099C\u09BE\u09A8\u09BE\u09A8\u0964</p>
      </div>

      <!-- Sleek Modern Action Bar (ChatGPT / Claude style) -->
      <div class="msg-actions-bar">
        <button class="btn-action-pill btn-copy-action" data-copy="${l(f)}" title="\u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
          ${c.copy}
          <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
        </button>
        ${n.official_portal_url?`
        <a href="${l(n.official_portal_url)}" target="_blank" rel="noopener" class="btn-action-pill btn-portal-action">
          ${c.globe}
          <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
          ${c.externalLink}
        </a>`:""}
        ${n.helpline_number?`
        <a href="tel:${l(n.helpline_number)}" class="btn-action-pill btn-call-action">
          ${c.phone}
          <span>\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${l(n.helpline_number)}</span>
        </a>`:""}
      </div>

    </div>
  `,S(t,f,n.name_bn),t}function M(){let i=new Date().getHours();return i>=5&&i<12?"\u09B6\u09C1\u09AD \u09B8\u0995\u09BE\u09B2!":i>=12&&i<15?"\u09B6\u09C1\u09AD \u09A6\u09C1\u09AA\u09C1\u09B0!":i>=15&&i<18?"\u09B6\u09C1\u09AD \u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8!":i>=18&&i<22?"\u09B6\u09C1\u09AD \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE!":"\u09B6\u09C1\u09AD \u09B0\u09BE\u09A4!"}function j(){return`
    <div class="welcome-hero" id="welcome-hero">
      <div class="welcome-badge-wrap">
        <div class="welcome-badge-circle">
          <img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="welcome-badge-icon" />
        </div>
      </div>
      
      <h1 class="welcome-greeting-title">${M()}</h1>
      <p class="welcome-tagline">\u0986\u099C \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u0995\u09C0\u09AD\u09BE\u09AC\u09C7 \u09B8\u09B9\u09AF\u09CB\u0997\u09BF\u09A4\u09BE \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF?</p>
      
      <p class="welcome-subtext">
        \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09B8\u09B0\u0995\u09BE\u09B0\u09C7\u09B0 \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09A8\u09BE\u0997\u09B0\u09BF\u0995 \u09B8\u09C7\u09AC\u09BE\u09B0 \u0985\u09AB\u09BF\u09B6\u09BF\u09DF\u09BE\u09B2 \u09AB\u09BF, \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 \u0993 \u09A6\u09BE\u09B2\u09BE\u09B2\u09AE\u09C1\u0995\u09CD\u09A4 \u09B8\u09A0\u09BF\u0995 \u09A8\u09BF\u09DF\u09AE \u099C\u09BE\u09A8\u09A4\u09C7 \u09A8\u09BF\u099A\u09C7 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0995\u09B0\u09C1\u09A8:
      </p>

      <div class="hero-chips-grid">
        <button class="hero-card-chip" data-query="\u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09AA\u09B0\u09BF\u099A\u09AF\u09BC\u09AA\u09A4\u09CD\u09B0 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09A4\u09C7 \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u0995\u09A4 \u09B2\u09BE\u0997\u09C7?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
              <line x1="12" y1="15" x2="17" y2="15"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">\u098F\u09A8\u0986\u0987\u09A1\u09BF \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u09AB\u09BF</span>
            <span class="chip-desc">\u09B8\u09A0\u09BF\u0995 \u09AB\u09BF \u0993 \u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09A8\u09BF\u09DF\u09AE</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="\u09E7\u09E6 \u09AC\u099B\u09B0 \u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u09C0 \u09EA\u09EE \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE\u09B0 \u09AA\u09BE\u09B8\u09AA\u09CB\u09B0\u09CD\u099F \u09A8\u09AC\u09BE\u09AF\u09BC\u09A8 \u09AB\u09BF \u0995\u09A4?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">\u09AA\u09BE\u09B8\u09AA\u09CB\u09B0\u09CD\u099F \u09A8\u09AC\u09BE\u09AF\u09BC\u09A8 \u09AB\u09BF</span>
            <span class="chip-desc">\u099C\u09B0\u09C1\u09B0\u09BF \u0993 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u099A\u09BE\u09B0\u09CD\u099C</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="\u099C\u09AE\u09BF \u09A8\u09BE\u09AE\u099C\u09BE\u09B0\u09BF \u09AC\u09BE \u0996\u09BE\u09B0\u09BF\u099C \u0995\u09B0\u09A4\u09C7 \u09AE\u09CB\u099F \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u0995\u09A4?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">\u0987-\u09A8\u09BE\u09AE\u099C\u09BE\u09B0\u09BF \u0993 \u0996\u09BE\u09B0\u09BF\u099C</span>
            <span class="chip-desc">\u09AE\u09CB\u099F \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09E7,\u09E7\u09ED\u09E6 \u099F\u09BE\u0995\u09BE</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="\u0989\u09A4\u09CD\u09A4\u09B0\u09BE \u09AA\u09B6\u09CD\u099A\u09BF\u09AE \u09A5\u09BE\u09A8\u09BE\u09B0 \u0993\u09B8\u09BF\u09B0 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0 \u0995\u09A4?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">\u099C\u09B0\u09C1\u09B0\u09BF \u09A5\u09BE\u09A8\u09BE \u0993 \u09B9\u099F\u09B2\u09BE\u0987\u09A8</span>
            <span class="chip-desc">\u09AA\u09C1\u09B2\u09BF\u09B6, \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0993 \u0997\u09CD\u09AF\u09BE\u09B8 \u09B8\u09C7\u09AC\u09BE</span>
          </div>
        </button>
      </div>
    </div>
  `}var h=class{static tokenKey="kaaz_token";static userKey="kaaz_user";static getToken(){try{return localStorage.getItem(this.tokenKey)}catch{return null}}static getUser(){try{let t=localStorage.getItem(this.userKey);return t?JSON.parse(t):null}catch{return null}}static isAuthenticated(){return!!this.getToken()}static setSession(t,s){try{localStorage.setItem(this.tokenKey,t),localStorage.setItem(this.userKey,JSON.stringify(s)),window.dispatchEvent(new CustomEvent("kaaz:auth-change",{detail:{user:s}}))}catch{}}static logout(){try{localStorage.removeItem(this.tokenKey),localStorage.removeItem(this.userKey),window.dispatchEvent(new CustomEvent("kaaz:auth-change",{detail:{user:null}}))}catch{}}static async signup(t,s,e){try{let n=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:s,password:e})}),a=await n.json();return n.ok?(this.setSession(a.token,a.user),{success:!0,user:a.user}):{success:!1,error:a.error||"\u09B8\u09BE\u0987\u09A8 \u0986\u09AA \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7"}}catch{return{success:!1,error:"\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0 \u09B8\u0982\u09AF\u09CB\u0997\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF"}}}static async login(t,s){try{let e=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:s})}),n=await e.json();return e.ok?(this.setSession(n.token,n.user),{success:!0,user:n.user}):{success:!1,error:n.error||"\u09B2\u0997\u0987\u09A8 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7"}}catch{return{success:!1,error:"\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0 \u09B8\u0982\u09AF\u09CB\u0997\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF"}}}static async fetchChatSessions(){let t=this.getToken();if(!t)return[];try{let s=await fetch("/api/chats",{headers:{Authorization:`Bearer ${t}`}});return s.ok?(await s.json()).sessions||[]:[]}catch{return[]}}static async loadSessionMessages(t){let s=this.getToken();if(!s)return null;try{let e=await fetch(`/api/chats/${t}`,{headers:{Authorization:`Bearer ${s}`}});return e.ok?await e.json():null}catch{return null}}static async saveMessage(t,s,e){let n=this.getToken();if(!n)return null;try{let a=await fetch("/api/chats",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({session_id:t||void 0,user_message:s,bot_response:e})});return a.ok&&(await a.json()).session_id||null}catch{return null}}static async deleteSession(t){let s=this.getToken();if(!s)return!1;try{return(await fetch(`/api/chats/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${s}`}})).ok}catch{return!1}}static openAuthModal(t="login",s){let e=document.getElementById("kaaz-auth-overlay");e||(e=document.createElement("div"),e.id="kaaz-auth-overlay",e.className="kaaz-auth-overlay",document.body.appendChild(e)),e.innerHTML=`
      <div class="kaaz-auth-modal" role="dialog" aria-modal="true">
        <div class="auth-modal-header">
          <div class="auth-brand-row">
            <img src="/assets/kaaz-logo-header.svg?v=4" alt="Kaaz AI" class="auth-logo-img" />
            <button class="btn-auth-close" id="btn-auth-close" aria-label="\u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="auth-tabs-row">
            <button class="auth-tab-btn ${t==="login"?"active":""}" id="tab-login-btn">\u09B2\u0997\u0987\u09A8</button>
            <button class="auth-tab-btn ${t==="signup"?"active":""}" id="tab-signup-btn">\u09A8\u09A4\u09C1\u09A8 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F</button>
          </div>
        </div>

        <div class="auth-modal-body">
          <div id="auth-error-banner" class="auth-error-banner" style="display: none;"></div>

          <!-- Login Form -->
          <form id="form-auth-login" class="auth-form" style="${t==="login"?"":"display: none;"}">
            <div class="auth-input-group">
              <label class="auth-label" for="login-email">\u0987\u09AE\u09C7\u0987\u09B2 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE</label>
              <input type="email" id="login-email" class="auth-input" placeholder="name@example.com" required autocomplete="email" />
            </div>
            <div class="auth-input-group">
              <label class="auth-label" for="login-password">\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1</label>
              <input type="password" id="login-password" class="auth-input" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required autocomplete="current-password" />
            </div>
            <button type="submit" class="btn-auth-submit" id="btn-login-submit">
              <span>\u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>

          <!-- Signup Form -->
          <form id="form-auth-signup" class="auth-form" style="${t==="signup"?"":"display: none;"}">
            <div class="auth-input-group">
              <label class="auth-label" for="signup-name">\u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09C2\u09B0\u09CD\u09A3 \u09A8\u09BE\u09AE</label>
              <input type="text" id="signup-name" class="auth-input" placeholder="\u09AF\u09C7\u09AE\u09A8: \u09AE\u09CB: \u09B8\u09C7\u09B2\u09BF\u09AE" required autocomplete="name" />
            </div>
            <div class="auth-input-group">
              <label class="auth-label" for="signup-email">\u0987\u09AE\u09C7\u0987\u09B2 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE</label>
              <input type="email" id="signup-email" class="auth-input" placeholder="name@example.com" required autocomplete="email" />
            </div>
            <div class="auth-input-group">
              <label class="auth-label" for="signup-password">\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 (\u09A8\u09CD\u09AF\u09C2\u09A8\u09A4\u09AE \u09EC \u0985\u0995\u09CD\u09B7\u09B0)</label>
              <input type="password" id="signup-password" class="auth-input" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" minlength="6" required autocomplete="new-password" />
            </div>
            <button type="submit" class="btn-auth-submit" id="btn-signup-submit">
              <span>\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>
        </div>

        <div class="auth-modal-footer">
          <p class="auth-guarantee-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 13px; height: 13px;">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>\u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09C7\u099F\u09BE \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09B8\u09C1\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u098F\u09AC\u0982 \u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u098F\u09A8\u0995\u09CD\u09B0\u09BF\u09AA\u09CD\u099F\u09C7\u09A1 \u09A5\u09BE\u0995\u09C7\u0964</span>
          </p>
        </div>
      </div>
    `,e.classList.add("visible");let n=document.getElementById("btn-auth-close"),a=document.getElementById("tab-login-btn"),d=document.getElementById("tab-signup-btn"),u=document.getElementById("form-auth-login"),r=document.getElementById("form-auth-signup"),g=document.getElementById("auth-error-banner"),B=o=>{g&&(g.textContent=o,g.style.display="block")},w=()=>{g&&(g.style.display="none")},f=()=>{e?.classList.remove("visible")};n?.addEventListener("click",f),e.addEventListener("click",o=>{o.target===e&&f()}),a?.addEventListener("click",()=>{w(),a.classList.add("active"),d?.classList.remove("active"),u.style.display="block",r.style.display="none"}),d?.addEventListener("click",()=>{w(),d.classList.add("active"),a?.classList.remove("active"),r.style.display="block",u.style.display="none"}),u?.addEventListener("submit",async o=>{o.preventDefault(),w();let p=document.getElementById("login-email").value,y=document.getElementById("login-password").value,b=document.getElementById("btn-login-submit");b.disabled=!0,b.textContent="\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...";let k=await this.login(p,y);b.disabled=!1,b.innerHTML="<span>\u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8</span>",k.success?(f(),s&&s()):B(k.error||"\u09B2\u0997\u0987\u09A8 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")}),r?.addEventListener("submit",async o=>{o.preventDefault(),w();let p=document.getElementById("signup-name").value,y=document.getElementById("signup-email").value,b=document.getElementById("signup-password").value,k=document.getElementById("btn-signup-submit");k.disabled=!0,k.textContent="\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u09B9\u099A\u09CD\u099B\u09C7...";let _=await this.signup(p,y,b);k.disabled=!1,k.innerHTML="<span>\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8</span>",_.success?(f(),s&&s()):B(_.error||"\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF\u09A4\u09C7 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09B9\u09DF\u09C7\u099B\u09C7")})}};var C=class{chatStream;chatForm;queryInput;btnClearChat;bottomBar;appSidebar;sidebarBackdrop;btnToggleSidebar;btnCloseSidebar;btnSidebarNewChat;currentSessionId=null;isProcessing=!1;constructor(){this.chatStream=document.getElementById("chat-stream"),this.chatForm=document.getElementById("chat-form"),this.queryInput=document.getElementById("query-input"),this.btnClearChat=document.getElementById("btn-clear-chat"),this.bottomBar=document.getElementById("bottom-bar"),this.appSidebar=document.getElementById("app-sidebar"),this.sidebarBackdrop=document.getElementById("sidebar-backdrop"),this.btnToggleSidebar=document.getElementById("btn-toggle-sidebar"),this.btnCloseSidebar=document.getElementById("btn-close-sidebar"),this.btnSidebarNewChat=document.getElementById("btn-sidebar-new-chat"),this.init()}init(){let t=document.getElementById("greeting-title");t&&(t.textContent=M()),I(this.chatStream,this.bottomBar),this.registerServiceWorker(),this.initAuthUI(),this.chatForm.addEventListener("submit",s=>{s.preventDefault();let e=this.queryInput.value.trim();!e||this.isProcessing||this.sendQuery(e)}),this.btnClearChat.addEventListener("click",()=>{v("light"),this.resetChat()}),this.btnToggleSidebar&&this.btnToggleSidebar.addEventListener("click",()=>{v("light"),this.toggleSidebar()}),this.btnCloseSidebar&&this.btnCloseSidebar.addEventListener("click",()=>{v("light"),this.closeSidebar()}),this.sidebarBackdrop&&this.sidebarBackdrop.addEventListener("click",()=>{this.closeSidebar()}),this.btnSidebarNewChat&&this.btnSidebarNewChat.addEventListener("click",()=>{v("light"),this.resetChat(),window.innerWidth<900&&this.closeSidebar()}),document.addEventListener("click",s=>{let e=s.target.closest("[data-query]");if(e){let n=e.getAttribute("data-query");n&&!this.isProcessing&&(v("light"),window.innerWidth<900&&this.closeSidebar(),this.sendQuery(n))}});try{let s=new URLSearchParams(window.location.search),e=s.get("q");e&&e.trim()&&setTimeout(()=>{this.sendQuery(e.trim())},120);let n=s.get("auth");(n==="login"||n==="signup")&&setTimeout(()=>{h.isAuthenticated()||h.openAuthModal(n)},250)}catch{}this.scrollToBottom()}initAuthUI(){let t=h.getUser();this.renderHeaderAuth(t),this.renderSidebarAuth(t),this.loadChatHistory(),window.addEventListener("kaaz:auth-change",s=>{let e=s.detail?.user||null;this.renderHeaderAuth(e),this.renderSidebarAuth(e),this.loadChatHistory()})}renderHeaderAuth(t){let s=document.getElementById("header-user-status");s&&(t?s.innerHTML=`
        <div class="header-user-pill" title="${t.email}">
          <span class="user-pill-avatar">${t.name.charAt(0).toUpperCase()}</span>
          <span class="user-pill-name">${t.name}</span>
        </div>
      `:(s.innerHTML=`
        <button class="btn-header-auth" id="btn-header-login" title="\u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u09B8\u09C7\u09AD \u0995\u09B0\u09A4\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8">
          ${c.shieldCheck}
          <span>\u09B2\u0997\u0987\u09A8</span>
        </button>
      `,document.getElementById("btn-header-login")?.addEventListener("click",()=>{h.openAuthModal("login",()=>{m("\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B2\u0997\u0987\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7!")})})))}renderSidebarAuth(t){let s=document.getElementById("sidebar-user-section");s&&(t?(s.innerHTML=`
        <div class="sidebar-user-footer">
          <div class="sidebar-user-info">
            <div class="sidebar-user-avatar">${t.name.charAt(0).toUpperCase()}</div>
            <div class="sidebar-user-name">${t.name}</div>
          </div>
          <button class="btn-sidebar-logout" id="btn-sidebar-logout" title="\u09B2\u0997\u0986\u0989\u099F \u0995\u09B0\u09C1\u09A8">\u09B2\u0997\u0986\u0989\u099F</button>
        </div>
      `,document.getElementById("btn-sidebar-logout")?.addEventListener("click",()=>{h.logout(),m("\u09B2\u0997\u0986\u0989\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7")})):(s.innerHTML=`
        <div class="sidebar-auth-prompt">
          <p>\u0986\u09AA\u09A8\u09BE\u09B0 \u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09A4\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964</p>
          <button class="btn-sidebar-auth" id="btn-sidebar-login">\u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8</button>
        </div>
      `,document.getElementById("btn-sidebar-login")?.addEventListener("click",()=>{h.openAuthModal("login",()=>{m("\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B2\u0997\u0987\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7!")})})))}async loadChatHistory(){let t=document.getElementById("chat-history-list");if(!t)return;if(!h.isAuthenticated()){t.innerHTML=`
        <div style="padding: 10px; font-size: 0.82rem; color: var(--slate-500); text-align: center;">
          \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09B2\u09C7 \u09AA\u09C2\u09B0\u09CD\u09AC\u09AC\u09B0\u09CD\u09A4\u09C0 \u099A\u09CD\u09AF\u09BE\u099F \u09B8\u09C7\u09B6\u09A8 \u098F\u0996\u09BE\u09A8\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A5\u09BE\u0995\u09AC\u09C7\u0964
        </div>
      `;return}let s=await h.fetchChatSessions();if(!s||s.length===0){t.innerHTML=`
        <div style="padding: 10px; font-size: 0.82rem; color: var(--slate-400); text-align: center;">
          \u0995\u09CB\u09A8\u09CB \u09AA\u09C2\u09B0\u09CD\u09AC\u09AC\u09B0\u09CD\u09A4\u09C0 \u099A\u09CD\u09AF\u09BE\u099F \u09A8\u09C7\u0987
        </div>
      `;return}t.innerHTML=s.map(e=>`
      <div class="history-item-row ${this.currentSessionId===e.id?"active":""}" data-session-id="${e.id}">
        <span class="history-item-title" title="${e.title}">${e.title}</span>
        <button class="btn-delete-history" data-delete-session="${e.id}" title="\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px;">
            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `).join(""),t.querySelectorAll(".history-item-row").forEach(e=>{e.addEventListener("click",n=>{let a=n.target.closest("[data-delete-session]");if(a){n.stopPropagation();let u=a.getAttribute("data-delete-session");u&&confirm("\u098F\u0987 \u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09A4\u09C7 \u099A\u09BE\u09A8?")&&h.deleteSession(u).then(()=>{this.currentSessionId===u&&this.resetChat(),this.loadChatHistory(),m("\u099A\u09CD\u09AF\u09BE\u099F \u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09BE \u09B9\u09DF\u09C7\u099B\u09C7")});return}let d=e.getAttribute("data-session-id");d&&(v("light"),this.loadSession(d),window.innerWidth<900&&this.closeSidebar())})})}async loadSession(t){let s=await h.loadSessionMessages(t);if(!s||!s.messages){m("\u099A\u09CD\u09AF\u09BE\u099F \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF");return}this.currentSessionId=t,this.chatStream.innerHTML="",s.messages.forEach(e=>{if(e.role==="user")this.chatStream.appendChild($(e.content));else if(e.payload_json)try{let n=JSON.parse(e.payload_json);this.chatStream.appendChild(E(n))}catch{this.chatStream.appendChild(E({reply_bn:e.content}))}else this.chatStream.appendChild(E({reply_bn:e.content}))}),this.loadChatHistory(),this.scrollToBottom()}toggleSidebar(){window.innerWidth>=900?this.appSidebar&&this.appSidebar.classList.toggle("collapsed"):this.appSidebar?.classList.contains("open")?this.closeSidebar():this.openSidebar()}openSidebar(){this.appSidebar&&(window.innerWidth>=900?this.appSidebar.classList.remove("collapsed"):(this.appSidebar.classList.add("open"),this.sidebarBackdrop?.classList.add("open")))}closeSidebar(){this.appSidebar&&(window.innerWidth>=900?this.appSidebar.classList.add("collapsed"):(this.appSidebar.classList.remove("open"),this.sidebarBackdrop?.classList.remove("open")))}scrollToBottom(){requestAnimationFrame(()=>{this.chatStream.scrollTop=this.chatStream.scrollHeight})}async sendQuery(t){this.isProcessing=!0,this.queryInput.value="",v("medium");let s=document.getElementById("welcome-hero");s&&s.remove();let e=$(t);this.chatStream.appendChild(e),this.scrollToBottom();let n=A();this.chatStream.appendChild(n),this.scrollToBottom();try{let a=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})});if(n.remove(),!a.ok)throw new Error(`HTTP error ${a.status}`);let d=await a.json(),u=E(d);if(this.chatStream.appendChild(u),v("success"),h.isAuthenticated()){let r=await h.saveMessage(this.currentSessionId,t,d);r&&!this.currentSessionId&&(this.currentSessionId=r,this.loadChatHistory())}}catch{n.remove(),this.renderNetworkError(),v("error")}finally{this.isProcessing=!1,this.scrollToBottom(),this.queryInput.focus()}}renderNetworkError(){let t=document.createElement("div");t.className="message-row bot",t.innerHTML=`
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #09090b; border-color: #09090b; color: #ffffff;">${c.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 3px solid #09090b;">
        <p style="font-weight: 700; color: #09090b;">\u09B8\u0982\u09AF\u09CB\u0997 \u09AC\u09BF\u0998\u09CD\u09A8\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</p>
        <p style="font-size: 0.9rem; color: #52525b; margin-top: 4px;">
          \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09AF\u09CB\u0997 \u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u0995\u09BE\u09A8\u09C7\u0995\u09B6\u09A8 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964
        </p>
      </div>
    `,this.chatStream.appendChild(t),m("\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u09B8\u0982\u09AF\u09CB\u0997 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8")}resetChat(){this.currentSessionId=null,this.chatStream.innerHTML=j(),this.queryInput.value="",this.queryInput.focus(),this.loadChatHistory(),this.scrollToBottom()}registerServiceWorker(){"serviceWorker"in navigator&&window.location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}};document.addEventListener("DOMContentLoaded",()=>{new C});})();

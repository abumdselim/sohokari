"use strict";(()=>{function d(s="light"){if(typeof navigator<"u"&&"vibrate"in navigator)try{switch(s){case"light":navigator.vibrate(8);break;case"medium":navigator.vibrate(18);break;case"success":navigator.vibrate([10,30,15]);break;case"error":navigator.vibrate([25,40,25]);break}}catch{}}function h(s,e=2200){d("light");let i=document.getElementById("toast-container");i||(i=document.createElement("div"),i.id="toast-container",i.className="toast-container",document.body.appendChild(i));let t=document.createElement("div");t.className="native-toast",t.textContent=s,i.appendChild(t),requestAnimationFrame(()=>{t.classList.add("visible")}),setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)},e)}function x(s,e){navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(s).then(()=>{h(`${e} \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7`),d("success")}).catch(()=>{h("\u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")})}function L(s,e){let i=()=>{if(!window.visualViewport)return;let t=window.visualViewport.height,r=window.innerHeight,l=Math.max(0,r-t-window.visualViewport.offsetTop);l>50?(e.style.transform=`translateY(-${l}px)`,s.style.paddingBottom=`${l+120}px`):(e.style.transform="translateY(0px)",s.style.paddingBottom="120px"),s.scrollTop=s.scrollHeight};window.visualViewport&&(window.visualViewport.addEventListener("resize",i),window.visualViewport.addEventListener("scroll",i)),document.body.addEventListener("touchmove",t=>{t.target===document.body&&t.preventDefault()},{passive:!1})}var o={menu:`
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
  `};var m={0:"",1:"\u098F\u0995",2:"\u09A6\u09C1\u0987",3:"\u09A4\u09BF\u09A8",4:"\u099A\u09BE\u09B0",5:"\u09AA\u09BE\u0981\u099A",6:"\u099B\u09AF\u09BC",7:"\u09B8\u09BE\u09A4",8:"\u0986\u099F",9:"\u09A8\u09AF\u09BC",10:"\u09A6\u09B6",11:"\u098F\u0997\u09BE\u09B0\u09CB",12:"\u09AC\u09BE\u09B0\u09CB",13:"\u09A4\u09C7\u09B0\u09CB",14:"\u099A\u09CC\u09A6\u09CD\u09A6",15:"\u09AA\u09A8\u09C7\u09B0\u09CB",16:"\u09B7\u09CB\u09B2\u09CB",17:"\u09B8\u09A4\u09C7\u09B0\u09CB",18:"\u0986\u09A0\u09BE\u09B0\u09CB",19:"\u0989\u09A8\u09BF\u09B6",20:"\u09AC\u09BF\u09B6",21:"\u098F\u0995\u09C1\u09B6",22:"\u09AC\u09BE\u0987\u09B6",23:"\u09A4\u09C7\u0987\u09B6",24:"\u099A\u09AC\u09CD\u09AC\u09BF\u09B6",25:"\u09AA\u0981\u099A\u09BF\u09B6",26:"\u099B\u09BE\u09AC\u09CD\u09AC\u09BF\u09B6",27:"\u09B8\u09BE\u09A4\u09BE\u09B6",28:"\u0986\u09A0\u09BE\u09B6",29:"\u0989\u09A8\u09A4\u09CD\u09B0\u09BF\u09B6",30:"\u09A4\u09CD\u09B0\u09BF\u09B6",31:"\u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09B6",32:"\u09AC\u09A4\u09CD\u09B0\u09BF\u09B6",33:"\u09A4\u09C7\u09A4\u09CD\u09B0\u09BF\u09B6",34:"\u099A\u09CC\u09A4\u09CD\u09B0\u09BF\u09B6",35:"\u09AA\u0981\u09AF\u09BC\u09A4\u09CD\u09B0\u09BF\u09B6",36:"\u099B\u09A4\u09CD\u09B0\u09BF\u09B6",37:"\u09B8\u09BE\u0981\u0987\u09A4\u09CD\u09B0\u09BF\u09B6",38:"\u0986\u099F\u09A4\u09CD\u09B0\u09BF\u09B6",39:"\u0989\u09A8\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",40:"\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",41:"\u098F\u0995\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",42:"\u09AC\u09BF\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",43:"\u09A4\u09C7\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",44:"\u099A\u09C1\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",45:"\u09AA\u0981\u09AF\u09BC\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",46:"\u099B\u09C7\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",47:"\u09B8\u09BE\u09A4\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",48:"\u0986\u099F\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",49:"\u0989\u09A8\u09AA\u099E\u09CD\u099A\u09BE\u09B6",50:"\u09AA\u099E\u09CD\u099A\u09BE\u09B6",51:"\u098F\u0995\u09BE\u09A8\u09CD\u09A8",52:"\u09AC\u09BE\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",53:"\u09A4\u09BF\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",54:"\u099A\u09C1\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",55:"\u09AA\u099E\u09CD\u099A\u09BE\u09A8\u09CD\u09A8",56:"\u099B\u09BE\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",57:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09CD\u09A8",58:"\u0986\u099F\u09BE\u09A8\u09CD\u09A8",59:"\u0989\u09A8\u09B7\u09BE\u099F",60:"\u09B7\u09BE\u099F",61:"\u098F\u0995\u09B7\u099F\u09CD\u099F\u09BF",62:"\u09AC\u09BE\u09B7\u099F\u09CD\u099F\u09BF",63:"\u09A4\u09C7\u09B7\u099F\u09CD\u099F\u09BF",64:"\u099A\u09CC\u09B7\u099F\u09CD\u099F\u09BF",65:"\u09AA\u0981\u09AF\u09BC\u09B7\u099F\u09CD\u099F\u09BF",66:"\u099B\u09C7\u09B7\u099F\u09CD\u099F\u09BF",67:"\u09B8\u09BE\u09A4\u09B7\u099F\u09CD\u099F\u09BF",68:"\u0986\u099F\u09B7\u099F\u09CD\u099F\u09BF",69:"\u0989\u09A8\u09B8\u09A4\u09CD\u09A4\u09B0",70:"\u09B8\u09A4\u09CD\u09A4\u09B0",71:"\u098F\u0995\u09BE\u09A4\u09CD\u09A4\u09B0",72:"\u09AC\u09BE\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",73:"\u09A4\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",74:"\u099A\u09CC\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",75:"\u09AA\u0981\u099A\u09BE\u09A4\u09CD\u09A4\u09B0",76:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",77:"\u09B8\u09BE\u09A4\u09BE\u09A4\u09CD\u09A4\u09B0",78:"\u0986\u099F\u09BE\u09A4\u09CD\u09A4\u09B0",79:"\u0989\u09A8\u09BE\u09B6\u09BF",80:"\u0986\u09B6\u09BF",81:"\u098F\u0995\u09BE\u09B6\u09BF",82:"\u09AC\u09BF\u09B0\u09BE\u09B6\u09BF",83:"\u09A4\u09BF\u09B0\u09BE\u09B6\u09BF",84:"\u099A\u09CC\u09B0\u09BE\u09B6\u09BF",85:"\u09AA\u0981\u099A\u09BE\u09B6\u09BF",86:"\u099B\u09BF\u09AF\u09BC\u09BE\u09B6\u09BF",87:"\u09B8\u09BE\u09A4\u09BE\u09B6\u09BF",88:"\u0985\u09B7\u09CD\u099F\u0986\u09B6\u09BF",89:"\u098A\u09A8\u09A8\u09AC\u09CD\u09AC\u0987",90:"\u09A8\u09AC\u09CD\u09AC\u0987",91:"\u098F\u0995\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",92:"\u09AC\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",93:"\u09A4\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",94:"\u099A\u09C1\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",95:"\u09AA\u0981\u099A\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",96:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",97:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",98:"\u0986\u099F\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",99:"\u09A8\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987"},q={0:"\u09E6",1:"\u09E7",2:"\u09E8",3:"\u09E9",4:"\u09EA",5:"\u09EB",6:"\u09EC",7:"\u09ED",8:"\u09EE",9:"\u09EF"};function b(s){return s.toLocaleString("en-IN").replace(/[0-9]/g,i=>q[i]||i)}function k(s){if(s===0)return"\u09B6\u09C2\u09A8\u09CD\u09AF \u099F\u09BE\u0995\u09BE";let e=s,i=[];if(e>=1e7){let t=Math.floor(e/1e7);i.push(`${k(t).replace(" \u099F\u09BE\u0995\u09BE","")} \u0995\u09CB\u099F\u09BF`),e%=1e7}if(e>=1e5){let t=Math.floor(e/1e5);i.push(`${m[t]||t} \u09B2\u09BE\u0996`),e%=1e5}if(e>=1e3){let t=Math.floor(e/1e3);i.push(`${m[t]||t} \u09B9\u09BE\u099C\u09BE\u09B0`),e%=1e3}if(e>=100){let t=Math.floor(e/100);i.push(`${m[t]||t}\u09B6\u09A4`),e%=100}return e>0&&i.push(m[e]||e.toString()),`${i.join(" ")} \u099F\u09BE\u0995\u09BE`}function a(s){return s?String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function M(s){let e=document.createElement("div");e.className="message-row user";let i=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return e.innerHTML=`
    <div class="bubble user-bubble">
      <div class="bubble-content">${a(s)}</div>
      <div class="bubble-time">${i}</div>
    </div>
  `,e}function E(){let s=document.createElement("div");return s.className="message-row bot typing-row",s.id="bot-typing-indicator",s.innerHTML=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="\u09B8\u09B9\u0995\u09BE\u09B0\u09C0" class="bot-avatar-img" /></div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `,s}function A(s){if(!s)return"";let i=s.replace(/\r\n/g,`
`).split(`
`),t=[],r=!1;for(let l=0;l<i.length;l++){let p=i[l].trim();if(!p){r&&(t.push("</ul>"),r=!1);continue}let c=a(p);if(c=c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),c=c.replace(/`([^`]+)`/g,'<code class="rag-code">$1</code>'),c=c.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener" class="rag-link">$1</a>'),c.startsWith("#### "))r&&(t.push("</ul>"),r=!1),t.push(`<h4 class="rag-h4">${c.substring(5)}</h4>`);else if(c.startsWith("### "))r&&(t.push("</ul>"),r=!1),t.push(`<h3 class="rag-h3">${c.substring(4)}</h3>`);else if(c.startsWith("## "))r&&(t.push("</ul>"),r=!1),t.push(`<h2 class="rag-h2">${c.substring(3)}</h2>`);else if(c.startsWith("&gt; ")||c.startsWith("> ")){r&&(t.push("</ul>"),r=!1);let v=c.replace(/^(&gt;|>)\s*/,"");t.push(`<blockquote class="rag-blockquote">${v}</blockquote>`)}else if(c.startsWith("\u2022 ")||c.startsWith("- ")||c.startsWith("* ")){r||(t.push('<ul class="rag-ul">'),r=!0);let v=c.replace(/^[•\-\*]\s*/,"");t.push(`<li class="rag-li">${v}</li>`)}else r&&(t.push("</ul>"),r=!1),t.push(`<p class="rag-p">${c}</p>`)}return r&&t.push("</ul>"),t.join(`
`)}function C(s){let e=document.createElement("div");e.className="message-row bot";let i=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="\u09B8\u09B9\u0995\u09BE\u09B0\u09C0" class="bot-avatar-img" /></div>
    </div>
  `,t=s.trace?.execution_time_ms??s.execution_time_ms??0;if(s.action==="SAFE_REFUSAL")return e.innerHTML=`
      ${i}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">
          ${o.alertTriangle}
          <span>\u09A4\u09A5\u09CD\u09AF \u09A4\u09BE\u09B2\u09BF\u0995\u09BE\u09DF \u09A8\u09C7\u0987</span>
        </div>
        <p class="refusal-text">${a(s.reply_bn||"\u09A6\u09C1\u0983\u0996\u09BF\u09A4, \u098F\u0987 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AE\u09BE\u09A3\u09CD\u09AF \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964").replace(/\n/g,"<br>")}</p>
        <div class="bubble-meta">
          <span>${o.clock} ${t}ms</span>
          <span>\u09B8\u09C1\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0</span>
        </div>
      </div>
    `,e;if(s.action==="DISAMBIGUATE"){let n=(s.candidate_services||[]).map(u=>`
      <button class="native-chip-btn" data-query="${a(u.name_bn||u.title_bn||"")}">
        ${a(u.name_bn||u.title_bn||"")}
      </button>
    `).join("");return e.innerHTML=`
      ${i}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8</strong></p>
        <p class="bubble-subtext">\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8:</p>
        <div class="chips-container">${n}</div>
        <div class="bubble-meta">
          <span>${o.clock} ${t}ms</span>
        </div>
      </div>
    `,e}if(s.action==="CLARIFY"&&s.clarifying_question){let n=s.clarifying_question,u=(n.options||[]).map(g=>`
      <button class="native-chip-btn" data-query="${a(g.label_bn)}">
        ${a(g.label_bn)}
      </button>
    `).join("");return e.innerHTML=`
      ${i}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>${a(n.question_bn)}</strong></p>
        <div class="chips-container">${u}</div>
      </div>
    `,e}if((s.source==="rag_vector_d1"||s.reply_bn&&(!s.variant||!s.variant.fees?.length))&&s.reply_bn){let n=s.matched_service,u=n?.official_portal_url||"",g=n?.title_bn||"\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09B8\u09C7\u09AC\u09BE \u0993 \u099C\u09B0\u09C1\u09B0\u09BF \u09A4\u09A5\u09CD\u09AF",f="";u&&(f+=`
        <a href="${a(u)}" target="_blank" rel="noopener" class="contact-pill portal-pill">
          ${o.globe}
          <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
          ${o.externalLink}
        </a>
      `);let B=s.reply_bn;e.innerHTML=`
      ${i}
      <div class="bubble bot-bubble rich-card-bubble rag-card-bubble">
        <!-- Card Top Bar -->
        <div class="card-top-bar">
          <div class="service-title-text" style="color: #0c5b5b; font-weight: 700; display: flex; align-items: center; gap: 6px;">
            ${o.shieldCheck} <span>\u09B8\u09B9\u0995\u09BE\u09B0\u09C0 \u098F\u0986\u0987 \u0997\u09BE\u0987\u09A1 (\u09B2\u09BE\u0987\u09AD \u09B0\u09C7\u0995\u09B0\u09CD\u09A1)</span>
          </div>
          <button class="btn-copy-card" data-copy="${a(B)}" title="\u09A4\u09A5\u09CD\u09AF \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${o.copy}
            <span>\u0995\u09AA\u09BF</span>
          </button>
        </div>

        ${f?`<div class="contact-pills-wrap" style="margin: 8px 0 12px 0;">${f}</div>`:""}

        <!-- AI Rendered Markdown Content -->
        <div class="rag-body-text">
          ${A(s.reply_bn)}
        </div>

        <!-- Meta Footer -->
        <div class="bubble-meta" style="margin-top: 14px; padding-top: 8px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
          <span style="display: flex; align-items: center; gap: 4px;">${o.shieldCheck} \u09E7\u09E6\u09E6% \u09AA\u09CD\u09B0\u09BE\u09AE\u09BE\u09A3\u09CD\u09AF \u09A1\u09C7\u099F\u09BE\u09AC\u09C7\u099C \u09B0\u09C7\u0995\u09B0\u09CD\u09A1</span>
          <span>${o.clock} ${t}ms \u2022 \u098F\u0986\u0987 \u09B2\u09BE\u0987\u09AD</span>
        </div>
      </div>
    `;let _=e.querySelector(".btn-copy-card");return _&&_.addEventListener("click",()=>{x(B,g)}),e}let l=s.service||{name_bn:"",agency_bn:"",ministry_bn:"",official_portal_url:"",helpline_number:"",last_verified_at:new Date().toISOString()},p=s.variant||{variant_name_bn:"",processing_days_sla:0,fees:[],documents:[],steps:[]},c=(l.last_verified_at||"").split("T")[0]||"\u0986\u099C\u0995\u09C7",v=(p.fees||[]).reduce((n,u)=>n+(u.amount_bdt||0),0),$=b(v),T=k(v),H=(p.fees||[]).map(n=>`
    <div class="fee-row">
      <span class="fee-name">${a(n.fee_type_bn||n.category_name||"")}</span>
      <span class="fee-amount">${b(n.amount_bdt||0)} \u099F\u09BE\u0995\u09BE</span>
    </div>
  `).join(""),S=(p.documents||[]).map(n=>`
    <li class="doc-item">
      <span class="doc-title">${a(n.document_name_bn||n.document_name||n.name||"")}</span>
      <span class="doc-tag ${n.is_mandatory?"tag-mandatory":"tag-optional"}">
        ${n.is_mandatory?"\u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995":"\u09AA\u09CD\u09B0\u09AF\u09CB\u099C\u09CD\u09AF \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7"}
      </span>
      <span class="doc-format">(${n.format_requirement==="original"?"\u09AE\u09C2\u09B2 \u0995\u09AA\u09BF":"\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8"})</span>
    </li>
  `).join(""),I=(p.steps||[]).map(n=>`
    <li class="step-item">
      <div class="step-num">${b(n.step_number||1)}</div>
      <div class="step-content">
        <strong>${a(n.title_bn||n.title||"")}:</strong> ${a(n.instruction_bn||n.description||"")}
      </div>
    </li>
  `).join(""),j=`${l.name_bn}
\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF: ${$} \u099F\u09BE\u0995\u09BE (${T})
\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${l.helpline_number}
\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2: ${l.official_portal_url}`;e.innerHTML=`
    ${i}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Card Title & Copy Action -->
      <div class="card-top-bar">
        <div class="service-title-text">${a(l.name_bn)}</div>
        <button class="btn-copy-card" data-copy="${a(j)}" title="\u09A4\u09A5\u09CD\u09AF \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
          ${o.copy}
          <span>\u0995\u09AA\u09BF</span>
        </button>
      </div>

      <!-- Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">${o.building} ${a(l.agency_bn)}</span>
        <span class="agency-tag">${o.building} ${a(l.ministry_bn)}</span>
      </div>

      <!-- Contact Actions -->
      <div class="contact-pills-wrap">
        <a href="${a(l.official_portal_url)}" target="_blank" rel="noopener" class="contact-pill portal-pill">
          ${o.globe}
          <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
          ${o.externalLink}
        </a>
        <a href="tel:${a(l.helpline_number)}" class="contact-pill call-pill">
          ${o.phone}
          <span>\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${a(l.helpline_number)}</span>
        </a>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">
            ${o.receipt}
            <span>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AE\u09CB\u099F \u09AB\u09BF</span>
          </div>
          <div class="fee-total-highlight">${$} \u099F\u09BE\u0995\u09BE</div>
        </div>
        <div class="fee-in-words-row">\u0995\u09A5\u09BE\u09AF\u09BC: <strong>${T}</strong></div>
        <div class="fee-variant-subtext">${a(p.variant_name_bn)} \u2022 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC: ${b(p.processing_days_sla)} \u0995\u09BE\u09B0\u09CD\u09AF\u09A6\u09BF\u09AC\u09B8</div>
        <div class="fee-breakdown-list">
          ${H}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">
        ${o.fileText}
        <span>\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 (\u099A\u09C7\u0995\u09B2\u09BF\u09B8\u09CD\u099F)</span>
      </div>
      <ul class="native-checklist">
        ${S}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">
        ${o.listOrdered}
        <span>\u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9</span>
      </div>
      <ol class="native-steps-list">
        ${I}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <div class="alert-banner-header">
          ${o.alertTriangle}
          <strong>\u09A6\u09BE\u09B2\u09BE\u09B2 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u09A3\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:</strong>
        </div>
        <p>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0993 \u09B0\u09B8\u09BF\u09A6\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u0995\u09BE\u0989\u0995\u09C7 \u0995\u09CB\u09A8\u09CB \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0985\u09B0\u09CD\u09A5 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u0995\u09C7\u0989 \u0985\u09AC\u09C8\u09A7 \u099F\u09BE\u0995\u09BE \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B9\u099F\u09B2\u09BE\u0987\u09A8 <strong>${a(l.helpline_number)}</strong> \u0985\u09A5\u09AC\u09BE \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 <strong>\u09E7\u09E6\u09EC</strong> \u09A8\u09AE\u09CD\u09AC\u09B0\u09C7 \u0985\u09AD\u09BF\u09AF\u09CB\u0997 \u099C\u09BE\u09A8\u09BE\u09A8\u0964</p>
      </div>

      <!-- Decision Trace Footer -->
      <div class="bubble-meta">
        <span>\u0997\u09C7\u099C\u09C7\u099F \u09AF\u09BE\u099A\u09BE\u0987: ${c}</span>
        <span>${o.clock} ${t}ms \u2022 \u09E7\u09E6\u09E6% \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09C3\u09A4</span>
      </div>

    </div>
  `;let y=e.querySelector(".btn-copy-card");return y&&y.addEventListener("click",()=>{let n=y.getAttribute("data-copy")||"";x(n,l.name_bn)}),e}var w=class{chatStream;chatForm;queryInput;btnClearChat;bottomBar;appSidebar;sidebarBackdrop;btnToggleSidebar;btnCloseSidebar;btnSidebarNewChat;isProcessing=!1;constructor(){this.chatStream=document.getElementById("chat-stream"),this.chatForm=document.getElementById("chat-form"),this.queryInput=document.getElementById("query-input"),this.btnClearChat=document.getElementById("btn-clear-chat"),this.bottomBar=document.getElementById("bottom-bar"),this.appSidebar=document.getElementById("app-sidebar"),this.sidebarBackdrop=document.getElementById("sidebar-backdrop"),this.btnToggleSidebar=document.getElementById("btn-toggle-sidebar"),this.btnCloseSidebar=document.getElementById("btn-close-sidebar"),this.btnSidebarNewChat=document.getElementById("btn-sidebar-new-chat"),this.init()}init(){L(this.chatStream,this.bottomBar),this.registerServiceWorker(),this.chatForm.addEventListener("submit",e=>{e.preventDefault();let i=this.queryInput.value.trim();!i||this.isProcessing||this.sendQuery(i)}),this.btnClearChat.addEventListener("click",()=>{d("light"),this.resetChat()}),this.btnToggleSidebar&&this.btnToggleSidebar.addEventListener("click",()=>{d("light"),this.openSidebar()}),this.btnCloseSidebar&&this.btnCloseSidebar.addEventListener("click",()=>{d("light"),this.closeSidebar()}),this.sidebarBackdrop&&this.sidebarBackdrop.addEventListener("click",()=>{this.closeSidebar()}),this.btnSidebarNewChat&&this.btnSidebarNewChat.addEventListener("click",()=>{d("light"),this.resetChat(),this.closeSidebar()}),document.addEventListener("click",e=>{let i=e.target.closest("[data-query]");if(i){let t=i.getAttribute("data-query");t&&!this.isProcessing&&(d("light"),this.closeSidebar(),this.sendQuery(t))}}),this.scrollToBottom()}openSidebar(){this.appSidebar&&this.sidebarBackdrop&&(this.appSidebar.classList.add("open"),this.sidebarBackdrop.classList.add("open"))}closeSidebar(){this.appSidebar&&this.sidebarBackdrop&&(this.appSidebar.classList.remove("open"),this.sidebarBackdrop.classList.remove("open"))}scrollToBottom(){requestAnimationFrame(()=>{this.chatStream.scrollTop=this.chatStream.scrollHeight})}async sendQuery(e){this.isProcessing=!0,this.queryInput.value="",d("medium");let i=M(e);this.chatStream.appendChild(i),this.scrollToBottom();let t=E();this.chatStream.appendChild(t),this.scrollToBottom();try{let r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});if(t.remove(),!r.ok)throw new Error(`HTTP error ${r.status}`);let l=await r.json(),p=C(l);this.chatStream.appendChild(p),d("success")}catch{t.remove(),this.renderNetworkError(),d("error")}finally{this.isProcessing=!1,this.scrollToBottom(),this.queryInput.focus()}}renderNetworkError(){let e=document.createElement("div");e.className="message-row bot",e.innerHTML=`
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #ef4444;">${o.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 4px solid #ef4444;">
        <p><strong>\u09B8\u0982\u09AF\u09CB\u0997 \u09AC\u09BF\u0998\u09CD\u09A8\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</strong></p>
        <p style="font-size: 0.88rem; color: #0f172a; margin-top: 4px;">
          \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09AF\u09CB\u0997 \u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u0995\u09BE\u09A8\u09C7\u0995\u09B6\u09A8 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964
        </p>
      </div>
    `,this.chatStream.appendChild(e),h("\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u09B8\u0982\u09AF\u09CB\u0997 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8")}resetChat(){this.chatStream.innerHTML=`
      <div class="message-row bot">
        <div class="bot-avatar-wrap">
          <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="\u09B8\u09B9\u0995\u09BE\u09B0\u09C0" class="bot-avatar-img" /></div>
        </div>
        <div class="bubble bot-bubble">
          <p><strong>\u09B8\u09B9\u0995\u09BE\u09B0\u09C0</strong>-\u09A4\u09C7 \u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE</p>
          <p style="margin-top: 4px; font-size: 0.95rem; color: #1e293b;">
            \u0995\u09C0 \u09B8\u09C7\u09AC\u09BE \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09BE\u09A8? \u09A8\u09BF\u099A\u09C7 \u09B2\u09BF\u0996\u09C1\u09A8 \u0985\u09A5\u09AC\u09BE \u09B8\u09BE\u099C\u09C7\u09B6\u09A8\u09C7 \u099F\u09CD\u09AF\u09BE\u09AA \u0995\u09B0\u09C1\u09A8\u0964
          </p>
        </div>
      </div>
    `,this.queryInput.value="",this.queryInput.focus()}registerServiceWorker(){"serviceWorker"in navigator&&window.location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}};document.addEventListener("DOMContentLoaded",()=>{new w});})();

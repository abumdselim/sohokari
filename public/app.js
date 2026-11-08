"use strict";(()=>{function v(i="light"){if(typeof navigator<"u"&&"vibrate"in navigator)try{switch(i){case"light":navigator.vibrate(8);break;case"medium":navigator.vibrate(18);break;case"success":navigator.vibrate([10,30,15]);break;case"error":navigator.vibrate([25,40,25]);break}}catch{}}function y(i,e=2200){v("light");let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="toast-container",document.body.appendChild(n));let t=document.createElement("div");t.className="native-toast",t.textContent=i,n.appendChild(t),requestAnimationFrame(()=>{t.classList.add("visible")}),setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)},e)}function H(i,e){navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(i).then(()=>{y(`${e} \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7`),v("success")}).catch(()=>{y("\u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")})}function I(i,e){let n=()=>{let s=window.visualViewport,a=s?s.height:window.innerHeight;document.documentElement.style.setProperty("--vvh",`${a}px`)};window.visualViewport&&(window.visualViewport.addEventListener("resize",n),window.visualViewport.addEventListener("scroll",n)),window.addEventListener("resize",n),window.addEventListener("orientationchange",()=>{setTimeout(n,200)}),n();let t=document.getElementById("query-input");t&&t.addEventListener("focus",()=>{setTimeout(()=>{n(),i.scrollTop=i.scrollHeight},250)}),document.body.addEventListener("touchmove",s=>{s.target===document.body&&s.preventDefault()},{passive:!1})}var d={menu:`
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
  `};var L={0:"",1:"\u098F\u0995",2:"\u09A6\u09C1\u0987",3:"\u09A4\u09BF\u09A8",4:"\u099A\u09BE\u09B0",5:"\u09AA\u09BE\u0981\u099A",6:"\u099B\u09AF\u09BC",7:"\u09B8\u09BE\u09A4",8:"\u0986\u099F",9:"\u09A8\u09AF\u09BC",10:"\u09A6\u09B6",11:"\u098F\u0997\u09BE\u09B0\u09CB",12:"\u09AC\u09BE\u09B0\u09CB",13:"\u09A4\u09C7\u09B0\u09CB",14:"\u099A\u09CC\u09A6\u09CD\u09A6",15:"\u09AA\u09A8\u09C7\u09B0\u09CB",16:"\u09B7\u09CB\u09B2\u09CB",17:"\u09B8\u09A4\u09C7\u09B0\u09CB",18:"\u0986\u09A0\u09BE\u09B0\u09CB",19:"\u0989\u09A8\u09BF\u09B6",20:"\u09AC\u09BF\u09B6",21:"\u098F\u0995\u09C1\u09B6",22:"\u09AC\u09BE\u0987\u09B6",23:"\u09A4\u09C7\u0987\u09B6",24:"\u099A\u09AC\u09CD\u09AC\u09BF\u09B6",25:"\u09AA\u0981\u099A\u09BF\u09B6",26:"\u099B\u09BE\u09AC\u09CD\u09AC\u09BF\u09B6",27:"\u09B8\u09BE\u09A4\u09BE\u09B6",28:"\u0986\u09A0\u09BE\u09B6",29:"\u0989\u09A8\u09A4\u09CD\u09B0\u09BF\u09B6",30:"\u09A4\u09CD\u09B0\u09BF\u09B6",31:"\u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09B6",32:"\u09AC\u09A4\u09CD\u09B0\u09BF\u09B6",33:"\u09A4\u09C7\u09A4\u09CD\u09B0\u09BF\u09B6",34:"\u099A\u09CC\u09A4\u09CD\u09B0\u09BF\u09B6",35:"\u09AA\u0981\u09AF\u09BC\u09A4\u09CD\u09B0\u09BF\u09B6",36:"\u099B\u09A4\u09CD\u09B0\u09BF\u09B6",37:"\u09B8\u09BE\u0981\u0987\u09A4\u09CD\u09B0\u09BF\u09B6",38:"\u0986\u099F\u09A4\u09CD\u09B0\u09BF\u09B6",39:"\u0989\u09A8\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",40:"\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",41:"\u098F\u0995\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",42:"\u09AC\u09BF\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",43:"\u09A4\u09C7\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",44:"\u099A\u09C1\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",45:"\u09AA\u0981\u09AF\u09BC\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",46:"\u099B\u09C7\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",47:"\u09B8\u09BE\u09A4\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",48:"\u0986\u099F\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",49:"\u0989\u09A8\u09AA\u099E\u09CD\u099A\u09BE\u09B6",50:"\u09AA\u099E\u09CD\u099A\u09BE\u09B6",51:"\u098F\u0995\u09BE\u09A8\u09CD\u09A8",52:"\u09AC\u09BE\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",53:"\u09A4\u09BF\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",54:"\u099A\u09C1\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",55:"\u09AA\u099E\u09CD\u099A\u09BE\u09A8\u09CD\u09A8",56:"\u099B\u09BE\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",57:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09CD\u09A8",58:"\u0986\u099F\u09BE\u09A8\u09CD\u09A8",59:"\u0989\u09A8\u09B7\u09BE\u099F",60:"\u09B7\u09BE\u099F",61:"\u098F\u0995\u09B7\u099F\u09CD\u099F\u09BF",62:"\u09AC\u09BE\u09B7\u099F\u09CD\u099F\u09BF",63:"\u09A4\u09C7\u09B7\u099F\u09CD\u099F\u09BF",64:"\u099A\u09CC\u09B7\u099F\u09CD\u099F\u09BF",65:"\u09AA\u0981\u09AF\u09BC\u09B7\u099F\u09CD\u099F\u09BF",66:"\u099B\u09C7\u09B7\u099F\u09CD\u099F\u09BF",67:"\u09B8\u09BE\u09A4\u09B7\u099F\u09CD\u099F\u09BF",68:"\u0986\u099F\u09B7\u099F\u09CD\u099F\u09BF",69:"\u0989\u09A8\u09B8\u09A4\u09CD\u09A4\u09B0",70:"\u09B8\u09A4\u09CD\u09A4\u09B0",71:"\u098F\u0995\u09BE\u09A4\u09CD\u09A4\u09B0",72:"\u09AC\u09BE\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",73:"\u09A4\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",74:"\u099A\u09CC\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",75:"\u09AA\u0981\u099A\u09BE\u09A4\u09CD\u09A4\u09B0",76:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",77:"\u09B8\u09BE\u09A4\u09BE\u09A4\u09CD\u09A4\u09B0",78:"\u0986\u099F\u09BE\u09A4\u09CD\u09A4\u09B0",79:"\u0989\u09A8\u09BE\u09B6\u09BF",80:"\u0986\u09B6\u09BF",81:"\u098F\u0995\u09BE\u09B6\u09BF",82:"\u09AC\u09BF\u09B0\u09BE\u09B6\u09BF",83:"\u09A4\u09BF\u09B0\u09BE\u09B6\u09BF",84:"\u099A\u09CC\u09B0\u09BE\u09B6\u09BF",85:"\u09AA\u0981\u099A\u09BE\u09B6\u09BF",86:"\u099B\u09BF\u09AF\u09BC\u09BE\u09B6\u09BF",87:"\u09B8\u09BE\u09A4\u09BE\u09B6\u09BF",88:"\u0985\u09B7\u09CD\u099F\u0986\u09B6\u09BF",89:"\u098A\u09A8\u09A8\u09AC\u09CD\u09AC\u0987",90:"\u09A8\u09AC\u09CD\u09AC\u0987",91:"\u098F\u0995\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",92:"\u09AC\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",93:"\u09A4\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",94:"\u099A\u09C1\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",95:"\u09AA\u0981\u099A\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",96:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",97:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",98:"\u0986\u099F\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",99:"\u09A8\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987"},q={0:"\u09E6",1:"\u09E7",2:"\u09E8",3:"\u09E9",4:"\u09EA",5:"\u09EB",6:"\u09EC",7:"\u09ED",8:"\u09EE",9:"\u09EF"};function E(i){return i.toLocaleString("en-IN").replace(/[0-9]/g,n=>q[n]||n)}function T(i){if(i===0)return"\u09B6\u09C2\u09A8\u09CD\u09AF \u099F\u09BE\u0995\u09BE";let e=i,n=[];if(e>=1e7){let t=Math.floor(e/1e7);n.push(`${T(t).replace(" \u099F\u09BE\u0995\u09BE","")} \u0995\u09CB\u099F\u09BF`),e%=1e7}if(e>=1e5){let t=Math.floor(e/1e5);n.push(`${L[t]||t} \u09B2\u09BE\u0996`),e%=1e5}if(e>=1e3){let t=Math.floor(e/1e3);n.push(`${L[t]||t} \u09B9\u09BE\u099C\u09BE\u09B0`),e%=1e3}if(e>=100){let t=Math.floor(e/100);n.push(`${L[t]||t}\u09B6\u09A4`),e%=100}return e>0&&n.push(L[e]||e.toString()),`${n.join(" ")} \u099F\u09BE\u0995\u09BE`}function c(i){return i?String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function M(i){let e=document.createElement("div");return e.className="message-row user",e.innerHTML=`
    <div class="user-bubble">
      <div class="bubble-content">${c(i)}</div>
    </div>
  `,e}function A(){let i=document.createElement("div");return i.className="message-row bot typing-row",i.id="bot-typing-indicator",i.innerHTML=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="bot-avatar-img" /></div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `,i}function z(i){if(!i)return"";let t=i.replace(/[⚠️🚨📌🌐💰📄]/g,"").replace(/(\*\*সতর্কতা:\*\*)\s*সতর্কতা[:ঃ]?/gi,"$1").replace(/সতর্কতা:\s*সতর্কতা[:ঃ]?/gi,"\u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE:").replace(/\r\n/g,`
`).split(`
`),s=[],a=!1,r=!1;for(let u=0;u<t.length;u++){let g=t[u].trim();if(!g){a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1);continue}if(/^(\-{3,}|\*{3,}|_{3,})$/.test(g)){a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1),s.push('<hr class="rag-hr">');continue}let l=c(g);if(l=l.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),l=l.replace(/`([^`]+)`/g,'<code class="rag-code">$1</code>'),l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener" class="rag-link">$1</a>'),l.startsWith("#### "))a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1),s.push(`<h4 class="rag-h4">${l.substring(5)}</h4>`);else if(l.startsWith("### "))a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1),s.push(`<h3 class="rag-h3">${l.substring(4)}</h3>`);else if(l.startsWith("## "))a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1),s.push(`<h2 class="rag-h2">${l.substring(3)}</h2>`);else if(l.startsWith("&gt; ")||l.startsWith("> ")){a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1);let b=l.replace(/^(&gt;|>)\s*/,"");s.push(`<blockquote class="rag-blockquote">${b}</blockquote>`)}else if(/^[•\-\*]\s+/.test(l)){r&&(s.push("</ol>"),r=!1),a||(s.push('<ul class="rag-ul">'),a=!0);let b=l.replace(/^[•\-\*]\s+/,"");s.push(`<li class="rag-li">${b}</li>`)}else if(/^([0-9]+|[০-৯]+)\.\s+/.test(l)){a&&(s.push("</ul>"),a=!1),r||(s.push('<ol class="rag-ol">'),r=!0);let b=l.replace(/^([0-9]+|[০-৯]+)\.\s+/,"");s.push(`<li class="rag-oli">${b}</li>`)}else a&&(s.push("</ul>"),a=!1),r&&(s.push("</ol>"),r=!1),s.push(`<p class="rag-p">${l}</p>`)}return a&&s.push("</ul>"),r&&s.push("</ol>"),s.join(`
`)}function S(i,e,n){let t=i.querySelector(".btn-copy-action");t&&t.addEventListener("click",()=>{H(e,n);let s=t.querySelector(".action-label"),a=s?s.textContent:"\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8";t.classList.add("copied"),s&&(s.textContent="\u0995\u09AA\u09BF \u09B9\u09DF\u09C7\u099B\u09C7!"),setTimeout(()=>{t.classList.remove("copied"),s&&(s.textContent=a)},2e3)})}function B(i){let e=document.createElement("div");e.className="message-row bot";let n=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="bot-avatar-img" /></div>
    </div>
  `;if(i.action==="SAFE_REFUSAL"){let o=i.reply_bn||"\u09A6\u09C1\u0983\u0996\u09BF\u09A4, \u098F\u0987 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AE\u09BE\u09A3\u09CD\u09AF \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964";return e.innerHTML=`
      ${n}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">
          ${d.alertTriangle}
          <span>\u09A4\u09A5\u09CD\u09AF \u09A4\u09BE\u09B2\u09BF\u0995\u09BE\u09DF \u09A8\u09C7\u0987</span>
        </div>
        <p class="refusal-text">${c(o).replace(/\n/g,"<br>")}</p>
        <div class="msg-actions-bar">
          <button class="btn-action-pill btn-copy-action" data-copy="${c(o)}" title="\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${d.copy}
            <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
          </button>
        </div>
      </div>
    `,S(e,o,"\u09A4\u09A5\u09CD\u09AF"),e}if(i.action==="DISAMBIGUATE"){let o=(i.candidate_services||[]).map(p=>`
      <button class="native-chip-btn" data-query="${c(p.name_bn||p.title_bn||"")}">
        ${c(p.name_bn||p.title_bn||"")}
      </button>
    `).join("");return e.innerHTML=`
      ${n}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8</strong></p>
        <p class="bubble-subtext">\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8:</p>
        <div class="chips-container">${o}</div>
      </div>
    `,e}if(i.action==="CLARIFY"&&i.clarifying_question){let o=i.clarifying_question,p=(o.options||[]).map(f=>`
      <button class="native-chip-btn" data-query="${c(f.label_bn)}">
        ${c(f.label_bn)}
      </button>
    `).join("");return e.innerHTML=`
      ${n}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>${c(o.question_bn)}</strong></p>
        <div class="chips-container">${p}</div>
      </div>
    `,e}if((i.source==="rag_vector_d1"||i.reply_bn&&(!i.variant||!i.variant.fees?.length))&&i.reply_bn){let o=i.matched_service,p=o?.official_portal_url||"",f=o?.title_bn||"\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09B8\u09C7\u09AC\u09BE \u0993 \u099C\u09B0\u09C1\u09B0\u09BF \u09A4\u09A5\u09CD\u09AF",m=i.reply_bn;return e.innerHTML=`
      ${n}
      <div class="bubble bot-bubble rag-card-bubble">
        <!-- AI Rendered Clean Markdown Content -->
        <div class="rag-body-text">
          ${z(i.reply_bn)}
        </div>

        <!-- Sleek Modern Action Bar (ChatGPT / Claude style) -->
        <div class="msg-actions-bar">
          <button class="btn-action-pill btn-copy-action" data-copy="${c(m)}" title="\u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${d.copy}
            <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
          </button>
          ${p?`
          <a href="${c(p)}" target="_blank" rel="noopener" class="btn-action-pill btn-portal-action">
            ${d.globe}
            <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
            ${d.externalLink}
          </a>`:""}
        </div>
      </div>
    `,S(e,m,f),e}let s=i.service||{name_bn:"",agency_bn:"",ministry_bn:"",official_portal_url:"",helpline_number:"",last_verified_at:new Date().toISOString()},a=i.variant||{variant_name_bn:"",processing_days_sla:0,fees:[],documents:[],steps:[]},r=(a.fees||[]).reduce((o,p)=>o+(p.amount_bdt||0),0),u=E(r),g=T(r),l=(a.fees||[]).map(o=>`
    <div class="fee-row">
      <span class="fee-name">${c(o.fee_type_bn||o.category_name||"")}</span>
      <span class="fee-amount">${E(o.amount_bdt||0)} \u099F\u09BE\u0995\u09BE</span>
    </div>
  `).join(""),b=(a.documents||[]).map(o=>`
    <li class="doc-item">
      <span class="doc-title">${c(o.document_name_bn||o.document_name||o.name||"")}</span>
      <span class="doc-tag ${o.is_mandatory?"tag-mandatory":"tag-optional"}">
        ${o.is_mandatory?"\u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995":"\u09AA\u09CD\u09B0\u09AF\u09CB\u099C\u09CD\u09AF \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7"}
      </span>
      <span class="doc-format">(${o.format_requirement==="original"?"\u09AE\u09C2\u09B2 \u0995\u09AA\u09BF":"\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8"})</span>
    </li>
  `).join(""),x=(a.steps||[]).map(o=>`
    <li class="step-item">
      <div class="step-num">${E(o.step_number||1)}</div>
      <div class="step-content">
        <strong>${c(o.title_bn||o.title||"")}:</strong> ${c(o.instruction_bn||o.description||"")}
      </div>
    </li>
  `).join(""),k=`${s.name_bn}
\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF: ${u} \u099F\u09BE\u0995\u09BE (${g})
\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${s.helpline_number}
\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2: ${s.official_portal_url}`;return e.innerHTML=`
    ${n}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Service Title -->
      <div class="service-title-text">${c(s.name_bn)}</div>

      <!-- Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">${d.building} ${c(s.agency_bn)}</span>
        <span class="agency-tag">${d.building} ${c(s.ministry_bn)}</span>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">
            ${d.receipt}
            <span>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AE\u09CB\u099F \u09AB\u09BF</span>
          </div>
          <div class="fee-total-highlight">${u} \u099F\u09BE\u0995\u09BE</div>
        </div>
        <div class="fee-in-words-row">\u0995\u09A5\u09BE\u09AF\u09BC: <strong>${g}</strong></div>
        <div class="fee-variant-subtext">${c(a.variant_name_bn)} \u2022 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC: ${E(a.processing_days_sla)} \u0995\u09BE\u09B0\u09CD\u09AF\u09A6\u09BF\u09AC\u09B8</div>
        <div class="fee-breakdown-list">
          ${l}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">
        ${d.fileText}
        <span>\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0</span>
      </div>
      <ul class="native-checklist">
        ${b}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">
        ${d.listOrdered}
        <span>\u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9</span>
      </div>
      <ol class="native-steps-list">
        ${x}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <div class="alert-banner-header">
          ${d.alertTriangle}
          <strong>\u09A6\u09BE\u09B2\u09BE\u09B2 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u09A3\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:</strong>
        </div>
        <p>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0993 \u09B0\u09B8\u09BF\u09A6\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u0995\u09BE\u0989\u0995\u09C7 \u0995\u09CB\u09A8\u09CB \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0985\u09B0\u09CD\u09A5 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u0995\u09C7\u0989 \u0985\u09AC\u09C8\u09A7 \u099F\u09BE\u0995\u09BE \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B9\u099F\u09B2\u09BE\u0987\u09A8 <strong>${c(s.helpline_number)}</strong> \u0985\u09A5\u09AC\u09BE \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 <strong>\u09E7\u09E6\u09EC</strong> \u09A8\u09AE\u09CD\u09AC\u09B0\u09C7 \u0985\u09AD\u09BF\u09AF\u09CB\u0997 \u099C\u09BE\u09A8\u09BE\u09A8\u0964</p>
      </div>

      <!-- Sleek Modern Action Bar (ChatGPT / Claude style) -->
      <div class="msg-actions-bar">
        <button class="btn-action-pill btn-copy-action" data-copy="${c(k)}" title="\u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
          ${d.copy}
          <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
        </button>
        ${s.official_portal_url?`
        <a href="${c(s.official_portal_url)}" target="_blank" rel="noopener" class="btn-action-pill btn-portal-action">
          ${d.globe}
          <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
          ${d.externalLink}
        </a>`:""}
        ${s.helpline_number?`
        <a href="tel:${c(s.helpline_number)}" class="btn-action-pill btn-call-action">
          ${d.phone}
          <span>\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${c(s.helpline_number)}</span>
        </a>`:""}
      </div>

    </div>
  `,S(e,k,s.name_bn),e}function $(){let i=new Date().getHours();return i>=5&&i<12?"\u09B6\u09C1\u09AD \u09B8\u0995\u09BE\u09B2!":i>=12&&i<15?"\u09B6\u09C1\u09AD \u09A6\u09C1\u09AA\u09C1\u09B0!":i>=15&&i<18?"\u09B6\u09C1\u09AD \u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8!":i>=18&&i<22?"\u09B6\u09C1\u09AD \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE!":"\u09B6\u09C1\u09AD \u09B0\u09BE\u09A4!"}function j(){return`
    <div class="welcome-hero" id="welcome-hero">
      <div class="welcome-badge-wrap">
        <div class="welcome-badge-circle">
          <img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="welcome-badge-icon" />
        </div>
      </div>
      
      <h1 class="welcome-greeting-title">${$()}</h1>
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
  `}var h=class{static tokenKey="kaaz_token";static userKey="kaaz_user";static getToken(){try{return localStorage.getItem(this.tokenKey)}catch{return null}}static getUser(){try{let e=localStorage.getItem(this.userKey);return e?JSON.parse(e):null}catch{return null}}static isAuthenticated(){return!!this.getToken()}static setSession(e,n){try{localStorage.setItem(this.tokenKey,e),localStorage.setItem(this.userKey,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("kaaz:auth-change",{detail:{user:n}}))}catch{}}static logout(){try{localStorage.removeItem(this.tokenKey),localStorage.removeItem(this.userKey),window.dispatchEvent(new CustomEvent("kaaz:auth-change",{detail:{user:null}}))}catch{}}static async signup(e,n,t){try{let s=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:n,password:t})}),a=await s.json();return s.ok?(this.setSession(a.token,a.user),{success:!0,user:a.user}):{success:!1,error:a.error||"\u09B8\u09BE\u0987\u09A8 \u0986\u09AA \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7"}}catch{return{success:!1,error:"\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0 \u09B8\u0982\u09AF\u09CB\u0997\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF"}}}static async login(e,n){try{let t=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:n})}),s=await t.json();return t.ok?(this.setSession(s.token,s.user),{success:!0,user:s.user}):{success:!1,error:s.error||"\u09B2\u0997\u0987\u09A8 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7"}}catch{return{success:!1,error:"\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0 \u09B8\u0982\u09AF\u09CB\u0997\u09C7 \u09A4\u09CD\u09B0\u09C1\u099F\u09BF"}}}static async fetchChatSessions(){let e=this.getToken();if(!e)return[];try{let n=await fetch("/api/chats",{headers:{Authorization:`Bearer ${e}`}});return n.ok?(await n.json()).sessions||[]:[]}catch{return[]}}static async loadSessionMessages(e){let n=this.getToken();if(!n)return null;try{let t=await fetch(`/api/chats/${e}`,{headers:{Authorization:`Bearer ${n}`}});return t.ok?await t.json():null}catch{return null}}static async saveMessage(e,n,t){let s=this.getToken();if(!s)return null;try{let a=await fetch("/api/chats",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({session_id:e||void 0,user_message:n,bot_response:t})});return a.ok&&(await a.json()).session_id||null}catch{return null}}static async deleteSession(e){let n=this.getToken();if(!n)return!1;try{return(await fetch(`/api/chats/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${n}`}})).ok}catch{return!1}}static openAuthModal(e="login",n){let t=document.getElementById("kaaz-auth-overlay");t||(t=document.createElement("div"),t.id="kaaz-auth-overlay",t.className="kaaz-auth-overlay",document.body.appendChild(t)),t.innerHTML=`
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
            <button class="auth-tab-btn ${e==="login"?"active":""}" id="tab-login-btn">\u09B2\u0997\u0987\u09A8</button>
            <button class="auth-tab-btn ${e==="signup"?"active":""}" id="tab-signup-btn">\u09A8\u09A4\u09C1\u09A8 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F</button>
          </div>
        </div>

        <div class="auth-modal-body">
          <div id="auth-error-banner" class="auth-error-banner" style="display: none;"></div>

          <!-- Login Form -->
          <form id="form-auth-login" class="auth-form" style="${e==="login"?"":"display: none;"}">
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
          <form id="form-auth-signup" class="auth-form" style="${e==="signup"?"":"display: none;"}">
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
    `,t.classList.add("visible");let s=document.getElementById("btn-auth-close"),a=document.getElementById("tab-login-btn"),r=document.getElementById("tab-signup-btn"),u=document.getElementById("form-auth-login"),g=document.getElementById("form-auth-signup"),l=document.getElementById("auth-error-banner"),b=o=>{l&&(l.textContent=o,l.style.display="block")},x=()=>{l&&(l.style.display="none")},k=()=>{t?.classList.remove("visible")};s?.addEventListener("click",k),t.addEventListener("click",o=>{o.target===t&&k()}),a?.addEventListener("click",()=>{x(),a.classList.add("active"),r?.classList.remove("active"),u.style.display="block",g.style.display="none"}),r?.addEventListener("click",()=>{x(),r.classList.add("active"),a?.classList.remove("active"),g.style.display="block",u.style.display="none"}),u?.addEventListener("submit",async o=>{o.preventDefault(),x();let p=document.getElementById("login-email").value,f=document.getElementById("login-password").value,m=document.getElementById("btn-login-submit");m.disabled=!0,m.textContent="\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...";let w=await this.login(p,f);m.disabled=!1,m.innerHTML="<span>\u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8</span>",w.success?(k(),n&&n()):b(w.error||"\u09B2\u0997\u0987\u09A8 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")}),g?.addEventListener("submit",async o=>{o.preventDefault(),x();let p=document.getElementById("signup-name").value,f=document.getElementById("signup-email").value,m=document.getElementById("signup-password").value,w=document.getElementById("btn-signup-submit");w.disabled=!0,w.textContent="\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u09B9\u099A\u09CD\u099B\u09C7...";let _=await this.signup(p,f,m);w.disabled=!1,w.innerHTML="<span>\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C1\u09A8</span>",_.success?(k(),n&&n()):b(_.error||"\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09A4\u09C8\u09B0\u09BF\u09A4\u09C7 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09B9\u09DF\u09C7\u099B\u09C7")})}};var C=class{chatStream;chatForm;queryInput;btnClearChat;bottomBar;appSidebar;sidebarBackdrop;btnToggleSidebar;btnCloseSidebar;btnSidebarNewChat;currentSessionId=null;isProcessing=!1;constructor(){this.chatStream=document.getElementById("chat-stream"),this.chatForm=document.getElementById("chat-form"),this.queryInput=document.getElementById("query-input"),this.btnClearChat=document.getElementById("btn-clear-chat"),this.bottomBar=document.getElementById("bottom-bar"),this.appSidebar=document.getElementById("app-sidebar"),this.sidebarBackdrop=document.getElementById("sidebar-backdrop"),this.btnToggleSidebar=document.getElementById("btn-toggle-sidebar"),this.btnCloseSidebar=document.getElementById("btn-close-sidebar"),this.btnSidebarNewChat=document.getElementById("btn-sidebar-new-chat"),this.init()}init(){let e=document.getElementById("greeting-title");e&&(e.textContent=$()),I(this.chatStream,this.bottomBar),this.registerServiceWorker(),this.initAuthUI(),this.chatForm.addEventListener("submit",n=>{n.preventDefault();let t=this.queryInput.value.trim();!t||this.isProcessing||this.sendQuery(t)}),this.btnClearChat.addEventListener("click",()=>{v("light"),this.resetChat()}),this.btnToggleSidebar&&this.btnToggleSidebar.addEventListener("click",()=>{v("light"),this.toggleSidebar()}),this.btnCloseSidebar&&this.btnCloseSidebar.addEventListener("click",()=>{v("light"),this.closeSidebar()}),this.sidebarBackdrop&&this.sidebarBackdrop.addEventListener("click",()=>{this.closeSidebar()}),this.btnSidebarNewChat&&this.btnSidebarNewChat.addEventListener("click",()=>{v("light"),this.resetChat(),window.innerWidth<900&&this.closeSidebar()}),document.addEventListener("click",n=>{let t=n.target.closest("[data-query]");if(t){let s=t.getAttribute("data-query");s&&!this.isProcessing&&(v("light"),window.innerWidth<900&&this.closeSidebar(),this.sendQuery(s))}});try{let n=new URLSearchParams(window.location.search),t=n.get("q");t&&t.trim()&&setTimeout(()=>{this.sendQuery(t.trim())},120);let s=n.get("auth");(s==="login"||s==="signup")&&setTimeout(()=>{h.isAuthenticated()||h.openAuthModal(s)},250)}catch{}this.scrollToBottom()}initAuthUI(){let e=h.getUser();this.renderHeaderAuth(e),this.renderSidebarAuth(e),this.loadChatHistory(),window.addEventListener("kaaz:auth-change",n=>{let t=n.detail?.user||null;this.renderHeaderAuth(t),this.renderSidebarAuth(t),this.loadChatHistory()})}renderHeaderAuth(e){let n=document.getElementById("header-user-status");n&&(e?n.innerHTML=`
        <div class="header-user-pill" title="${e.email}">
          <span class="user-pill-avatar">${e.name.charAt(0).toUpperCase()}</span>
          <span class="user-pill-name">${e.name}</span>
        </div>
      `:(n.innerHTML=`
        <button class="btn-header-auth" id="btn-header-login" title="\u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u09B8\u09C7\u09AD \u0995\u09B0\u09A4\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8">
          ${d.shieldCheck}
          <span>\u09B2\u0997\u0987\u09A8</span>
        </button>
      `,document.getElementById("btn-header-login")?.addEventListener("click",()=>{h.openAuthModal("login",()=>{y("\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B2\u0997\u0987\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7!")})})))}renderSidebarAuth(e){let n=document.getElementById("sidebar-user-section");n&&(e?(n.innerHTML=`
        <div class="sidebar-user-footer">
          <div class="sidebar-user-info">
            <div class="sidebar-user-avatar">${e.name.charAt(0).toUpperCase()}</div>
            <div class="sidebar-user-name">${e.name}</div>
          </div>
          <button class="btn-sidebar-logout" id="btn-sidebar-logout" title="\u09B2\u0997\u0986\u0989\u099F \u0995\u09B0\u09C1\u09A8">\u09B2\u0997\u0986\u0989\u099F</button>
        </div>
      `,document.getElementById("btn-sidebar-logout")?.addEventListener("click",()=>{h.logout(),y("\u09B2\u0997\u0986\u0989\u099F \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7")})):(n.innerHTML=`
        <div class="sidebar-auth-prompt">
          <p>\u0986\u09AA\u09A8\u09BE\u09B0 \u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u0995\u09B0\u09A4\u09C7 \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8\u0964</p>
          <button class="btn-sidebar-auth" id="btn-sidebar-login">\u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09C1\u09A8</button>
        </div>
      `,document.getElementById("btn-sidebar-login")?.addEventListener("click",()=>{h.openAuthModal("login",()=>{y("\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B2\u0997\u0987\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7!")})})))}async loadChatHistory(){let e=document.getElementById("chat-history-list");if(!e)return;if(!h.isAuthenticated()){e.innerHTML=`
        <div style="padding: 10px; font-size: 0.82rem; color: var(--slate-500); text-align: center;">
          \u09B2\u0997\u0987\u09A8 \u0995\u09B0\u09B2\u09C7 \u09AA\u09C2\u09B0\u09CD\u09AC\u09AC\u09B0\u09CD\u09A4\u09C0 \u099A\u09CD\u09AF\u09BE\u099F \u09B8\u09C7\u09B6\u09A8 \u098F\u0996\u09BE\u09A8\u09C7 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A5\u09BE\u0995\u09AC\u09C7\u0964
        </div>
      `;return}let n=await h.fetchChatSessions();if(!n||n.length===0){e.innerHTML=`
        <div style="padding: 10px; font-size: 0.82rem; color: var(--slate-400); text-align: center;">
          \u0995\u09CB\u09A8\u09CB \u09AA\u09C2\u09B0\u09CD\u09AC\u09AC\u09B0\u09CD\u09A4\u09C0 \u099A\u09CD\u09AF\u09BE\u099F \u09A8\u09C7\u0987
        </div>
      `;return}e.innerHTML=n.map(t=>`
      <div class="history-item-row ${this.currentSessionId===t.id?"active":""}" data-session-id="${t.id}">
        <span class="history-item-title" title="${t.title}">${t.title}</span>
        <button class="btn-delete-history" data-delete-session="${t.id}" title="\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px;">
            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `).join(""),e.querySelectorAll(".history-item-row").forEach(t=>{t.addEventListener("click",s=>{let a=s.target.closest("[data-delete-session]");if(a){s.stopPropagation();let u=a.getAttribute("data-delete-session");u&&confirm("\u098F\u0987 \u099A\u09CD\u09AF\u09BE\u099F \u09B9\u09BF\u09B8\u09CD\u099F\u09CD\u09B0\u09BF \u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09A4\u09C7 \u099A\u09BE\u09A8?")&&h.deleteSession(u).then(()=>{this.currentSessionId===u&&this.resetChat(),this.loadChatHistory(),y("\u099A\u09CD\u09AF\u09BE\u099F \u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09BE \u09B9\u09DF\u09C7\u099B\u09C7")});return}let r=t.getAttribute("data-session-id");r&&(v("light"),this.loadSession(r),window.innerWidth<900&&this.closeSidebar())})})}async loadSession(e){let n=await h.loadSessionMessages(e);if(!n||!n.messages){y("\u099A\u09CD\u09AF\u09BE\u099F \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF");return}this.currentSessionId=e,this.chatStream.innerHTML="",n.messages.forEach(t=>{if(t.role==="user")this.chatStream.appendChild(M(t.content));else if(t.payload_json)try{let s=JSON.parse(t.payload_json);this.chatStream.appendChild(B(s))}catch{this.chatStream.appendChild(B({reply_bn:t.content}))}else this.chatStream.appendChild(B({reply_bn:t.content}))}),this.loadChatHistory(),this.scrollToBottom()}toggleSidebar(){window.innerWidth>=900?this.appSidebar&&this.appSidebar.classList.toggle("collapsed"):this.appSidebar?.classList.contains("open")?this.closeSidebar():this.openSidebar()}openSidebar(){this.appSidebar&&(window.innerWidth>=900?this.appSidebar.classList.remove("collapsed"):(this.appSidebar.classList.add("open"),this.sidebarBackdrop?.classList.add("open")))}closeSidebar(){this.appSidebar&&(window.innerWidth>=900?this.appSidebar.classList.add("collapsed"):(this.appSidebar.classList.remove("open"),this.sidebarBackdrop?.classList.remove("open")))}scrollToBottom(){requestAnimationFrame(()=>{this.chatStream.scrollTop=this.chatStream.scrollHeight})}scrollToBeginning(e,n){requestAnimationFrame(()=>{setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})},50)})}async sendQuery(e){this.isProcessing=!0,this.queryInput.value="",v("medium");let n=document.getElementById("welcome-hero");n&&n.remove();let t=M(e);this.chatStream.appendChild(t),this.scrollToBottom();let s=A();this.chatStream.appendChild(s),this.scrollToBottom();try{let a=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});if(s.remove(),!a.ok)throw new Error(`HTTP error ${a.status}`);let r=await a.json(),u=B(r);if(this.chatStream.appendChild(u),v("success"),this.scrollToBeginning(t,u),h.isAuthenticated()){let g=await h.saveMessage(this.currentSessionId,e,r);g&&!this.currentSessionId&&(this.currentSessionId=g,this.loadChatHistory())}}catch{s.remove(),this.renderNetworkError(),v("error"),this.scrollToBeginning(t)}finally{this.isProcessing=!1,window.innerWidth>=900&&this.queryInput.focus()}}renderNetworkError(){let e=document.createElement("div");e.className="message-row bot",e.innerHTML=`
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #09090b; border-color: #09090b; color: #ffffff;">${d.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 3px solid #09090b;">
        <p style="font-weight: 700; color: #09090b;">\u09B8\u0982\u09AF\u09CB\u0997 \u09AC\u09BF\u0998\u09CD\u09A8\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</p>
        <p style="font-size: 0.9rem; color: #52525b; margin-top: 4px;">
          \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09AF\u09CB\u0997 \u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u0995\u09BE\u09A8\u09C7\u0995\u09B6\u09A8 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964
        </p>
      </div>
    `,this.chatStream.appendChild(e),y("\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u09B8\u0982\u09AF\u09CB\u0997 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8")}resetChat(){this.currentSessionId=null,this.chatStream.innerHTML=j(),this.queryInput.value="",this.queryInput.focus(),this.loadChatHistory(),this.scrollToBottom()}registerServiceWorker(){"serviceWorker"in navigator&&window.location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}};document.addEventListener("DOMContentLoaded",()=>{new C});})();

"use strict";(()=>{function d(t="light"){if(typeof navigator<"u"&&"vibrate"in navigator)try{switch(t){case"light":navigator.vibrate(8);break;case"medium":navigator.vibrate(18);break;case"success":navigator.vibrate([10,30,15]);break;case"error":navigator.vibrate([25,40,25]);break}}catch{}}function m(t,s=2200){d("light");let i=document.getElementById("toast-container");i||(i=document.createElement("div"),i.id="toast-container",i.className="toast-container",document.body.appendChild(i));let e=document.createElement("div");e.className="native-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>{e.classList.add("visible")}),setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),250)},s)}function B(t,s){navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(t).then(()=>{m(`${s} \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7`),d("success")}).catch(()=>{m("\u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")})}function L(t,s){let i=()=>{if(!window.visualViewport)return;let e=window.visualViewport.height,n=window.innerHeight,o=Math.max(0,n-e-window.visualViewport.offsetTop);o>50?(s.style.transform=`translateY(-${o}px)`,t.style.paddingBottom=`${o+120}px`):(s.style.transform="translateY(0px)",t.style.paddingBottom="120px"),t.scrollTop=t.scrollHeight};window.visualViewport&&(window.visualViewport.addEventListener("resize",i),window.visualViewport.addEventListener("scroll",i)),document.body.addEventListener("touchmove",e=>{e.target===document.body&&e.preventDefault()},{passive:!1})}var c={menu:`
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
  `};var f={0:"",1:"\u098F\u0995",2:"\u09A6\u09C1\u0987",3:"\u09A4\u09BF\u09A8",4:"\u099A\u09BE\u09B0",5:"\u09AA\u09BE\u0981\u099A",6:"\u099B\u09AF\u09BC",7:"\u09B8\u09BE\u09A4",8:"\u0986\u099F",9:"\u09A8\u09AF\u09BC",10:"\u09A6\u09B6",11:"\u098F\u0997\u09BE\u09B0\u09CB",12:"\u09AC\u09BE\u09B0\u09CB",13:"\u09A4\u09C7\u09B0\u09CB",14:"\u099A\u09CC\u09A6\u09CD\u09A6",15:"\u09AA\u09A8\u09C7\u09B0\u09CB",16:"\u09B7\u09CB\u09B2\u09CB",17:"\u09B8\u09A4\u09C7\u09B0\u09CB",18:"\u0986\u09A0\u09BE\u09B0\u09CB",19:"\u0989\u09A8\u09BF\u09B6",20:"\u09AC\u09BF\u09B6",21:"\u098F\u0995\u09C1\u09B6",22:"\u09AC\u09BE\u0987\u09B6",23:"\u09A4\u09C7\u0987\u09B6",24:"\u099A\u09AC\u09CD\u09AC\u09BF\u09B6",25:"\u09AA\u0981\u099A\u09BF\u09B6",26:"\u099B\u09BE\u09AC\u09CD\u09AC\u09BF\u09B6",27:"\u09B8\u09BE\u09A4\u09BE\u09B6",28:"\u0986\u09A0\u09BE\u09B6",29:"\u0989\u09A8\u09A4\u09CD\u09B0\u09BF\u09B6",30:"\u09A4\u09CD\u09B0\u09BF\u09B6",31:"\u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09B6",32:"\u09AC\u09A4\u09CD\u09B0\u09BF\u09B6",33:"\u09A4\u09C7\u09A4\u09CD\u09B0\u09BF\u09B6",34:"\u099A\u09CC\u09A4\u09CD\u09B0\u09BF\u09B6",35:"\u09AA\u0981\u09AF\u09BC\u09A4\u09CD\u09B0\u09BF\u09B6",36:"\u099B\u09A4\u09CD\u09B0\u09BF\u09B6",37:"\u09B8\u09BE\u0981\u0987\u09A4\u09CD\u09B0\u09BF\u09B6",38:"\u0986\u099F\u09A4\u09CD\u09B0\u09BF\u09B6",39:"\u0989\u09A8\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",40:"\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",41:"\u098F\u0995\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",42:"\u09AC\u09BF\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",43:"\u09A4\u09C7\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",44:"\u099A\u09C1\u09AF\u09BC\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",45:"\u09AA\u0981\u09AF\u09BC\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",46:"\u099B\u09C7\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",47:"\u09B8\u09BE\u09A4\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",48:"\u0986\u099F\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",49:"\u0989\u09A8\u09AA\u099E\u09CD\u099A\u09BE\u09B6",50:"\u09AA\u099E\u09CD\u099A\u09BE\u09B6",51:"\u098F\u0995\u09BE\u09A8\u09CD\u09A8",52:"\u09AC\u09BE\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",53:"\u09A4\u09BF\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",54:"\u099A\u09C1\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",55:"\u09AA\u099E\u09CD\u099A\u09BE\u09A8\u09CD\u09A8",56:"\u099B\u09BE\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",57:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09CD\u09A8",58:"\u0986\u099F\u09BE\u09A8\u09CD\u09A8",59:"\u0989\u09A8\u09B7\u09BE\u099F",60:"\u09B7\u09BE\u099F",61:"\u098F\u0995\u09B7\u099F\u09CD\u099F\u09BF",62:"\u09AC\u09BE\u09B7\u099F\u09CD\u099F\u09BF",63:"\u09A4\u09C7\u09B7\u099F\u09CD\u099F\u09BF",64:"\u099A\u09CC\u09B7\u099F\u09CD\u099F\u09BF",65:"\u09AA\u0981\u09AF\u09BC\u09B7\u099F\u09CD\u099F\u09BF",66:"\u099B\u09C7\u09B7\u099F\u09CD\u099F\u09BF",67:"\u09B8\u09BE\u09A4\u09B7\u099F\u09CD\u099F\u09BF",68:"\u0986\u099F\u09B7\u099F\u09CD\u099F\u09BF",69:"\u0989\u09A8\u09B8\u09A4\u09CD\u09A4\u09B0",70:"\u09B8\u09A4\u09CD\u09A4\u09B0",71:"\u098F\u0995\u09BE\u09A4\u09CD\u09A4\u09B0",72:"\u09AC\u09BE\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",73:"\u09A4\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",74:"\u099A\u09CC\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",75:"\u09AA\u0981\u099A\u09BE\u09A4\u09CD\u09A4\u09B0",76:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",77:"\u09B8\u09BE\u09A4\u09BE\u09A4\u09CD\u09A4\u09B0",78:"\u0986\u099F\u09BE\u09A4\u09CD\u09A4\u09B0",79:"\u0989\u09A8\u09BE\u09B6\u09BF",80:"\u0986\u09B6\u09BF",81:"\u098F\u0995\u09BE\u09B6\u09BF",82:"\u09AC\u09BF\u09B0\u09BE\u09B6\u09BF",83:"\u09A4\u09BF\u09B0\u09BE\u09B6\u09BF",84:"\u099A\u09CC\u09B0\u09BE\u09B6\u09BF",85:"\u09AA\u0981\u099A\u09BE\u09B6\u09BF",86:"\u099B\u09BF\u09AF\u09BC\u09BE\u09B6\u09BF",87:"\u09B8\u09BE\u09A4\u09BE\u09B6\u09BF",88:"\u0985\u09B7\u09CD\u099F\u0986\u09B6\u09BF",89:"\u098A\u09A8\u09A8\u09AC\u09CD\u09AC\u0987",90:"\u09A8\u09AC\u09CD\u09AC\u0987",91:"\u098F\u0995\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",92:"\u09AC\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",93:"\u09A4\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",94:"\u099A\u09C1\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",95:"\u09AA\u0981\u099A\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",96:"\u099B\u09BF\u09AF\u09BC\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",97:"\u09B8\u09BE\u09A4\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",98:"\u0986\u099F\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",99:"\u09A8\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987"},I={0:"\u09E6",1:"\u09E7",2:"\u09E8",3:"\u09E9",4:"\u09EA",5:"\u09EB",6:"\u09EC",7:"\u09ED",8:"\u09EE",9:"\u09EF"};function b(t){return t.toLocaleString("en-IN").replace(/[0-9]/g,i=>I[i]||i)}function y(t){if(t===0)return"\u09B6\u09C2\u09A8\u09CD\u09AF \u099F\u09BE\u0995\u09BE";let s=t,i=[];if(s>=1e7){let e=Math.floor(s/1e7);i.push(`${y(e).replace(" \u099F\u09BE\u0995\u09BE","")} \u0995\u09CB\u099F\u09BF`),s%=1e7}if(s>=1e5){let e=Math.floor(s/1e5);i.push(`${f[e]||e} \u09B2\u09BE\u0996`),s%=1e5}if(s>=1e3){let e=Math.floor(s/1e3);i.push(`${f[e]||e} \u09B9\u09BE\u099C\u09BE\u09B0`),s%=1e3}if(s>=100){let e=Math.floor(s/100);i.push(`${f[e]||e}\u09B6\u09A4`),s%=100}return s>0&&i.push(f[s]||s.toString()),`${i.join(" ")} \u099F\u09BE\u0995\u09BE`}function a(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function _(t){let s=document.createElement("div");return s.className="message-row user",s.innerHTML=`
    <div class="user-bubble">
      <div class="bubble-content">${a(t)}</div>
    </div>
  `,s}function M(){let t=document.createElement("div");return t.className="message-row bot typing-row",t.id="bot-typing-indicator",t.innerHTML=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="Kaaz AI" class="bot-avatar-img" /></div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `,t}function j(t){if(!t)return"";let i=t.replace(/\r\n/g,`
`).split(`
`),e=[],n=!1,o=!1;for(let u=0;u<i.length;u++){let h=i[u].trim();if(!h){n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1);continue}if(/^(\-{3,}|\*{3,}|_{3,})$/.test(h)){n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1),e.push('<hr class="rag-hr">');continue}let l=a(h);if(l=l.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),l=l.replace(/`([^`]+)`/g,'<code class="rag-code">$1</code>'),l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener" class="rag-link">$1</a>'),l.startsWith("#### "))n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1),e.push(`<h4 class="rag-h4">${l.substring(5)}</h4>`);else if(l.startsWith("### "))n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1),e.push(`<h3 class="rag-h3">${l.substring(4)}</h3>`);else if(l.startsWith("## "))n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1),e.push(`<h2 class="rag-h2">${l.substring(3)}</h2>`);else if(l.startsWith("&gt; ")||l.startsWith("> ")){n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1);let v=l.replace(/^(&gt;|>)\s*/,"");e.push(`<blockquote class="rag-blockquote">${v}</blockquote>`)}else if(/^[•\-\*]\s+/.test(l)){o&&(e.push("</ol>"),o=!1),n||(e.push('<ul class="rag-ul">'),n=!0);let v=l.replace(/^[•\-\*]\s+/,"");e.push(`<li class="rag-li">${v}</li>`)}else if(/^([0-9]+|[০-৯]+)\.\s+/.test(l)){n&&(e.push("</ul>"),n=!1),o||(e.push('<ol class="rag-ol">'),o=!0);let v=l.replace(/^([0-9]+|[০-৯]+)\.\s+/,"");e.push(`<li class="rag-oli">${v}</li>`)}else n&&(e.push("</ul>"),n=!1),o&&(e.push("</ol>"),o=!1),e.push(`<p class="rag-p">${l}</p>`)}return n&&e.push("</ul>"),o&&e.push("</ol>"),e.join(`
`)}function x(t,s,i){let e=t.querySelector(".btn-copy-action");e&&e.addEventListener("click",()=>{B(s,i);let n=e.querySelector(".action-label"),o=n?n.textContent:"\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8";e.classList.add("copied"),n&&(n.textContent="\u0995\u09AA\u09BF \u09B9\u09DF\u09C7\u099B\u09C7!"),setTimeout(()=>{e.classList.remove("copied"),n&&(n.textContent=o)},2e3)})}function E(t){let s=document.createElement("div");s.className="message-row bot";let i=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="Kaaz AI" class="bot-avatar-img" /></div>
    </div>
  `;if(t.action==="SAFE_REFUSAL"){let r=t.reply_bn||"\u09A6\u09C1\u0983\u0996\u09BF\u09A4, \u098F\u0987 \u09A4\u09A5\u09CD\u09AF\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AE\u09BE\u09A3\u09CD\u09AF \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964";return s.innerHTML=`
      ${i}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">
          ${c.alertTriangle}
          <span>\u09A4\u09A5\u09CD\u09AF \u09A4\u09BE\u09B2\u09BF\u0995\u09BE\u09DF \u09A8\u09C7\u0987</span>
        </div>
        <p class="refusal-text">${a(r).replace(/\n/g,"<br>")}</p>
        <div class="msg-actions-bar">
          <button class="btn-action-pill btn-copy-action" data-copy="${a(r)}" title="\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${c.copy}
            <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
          </button>
        </div>
      </div>
    `,x(s,r,"\u09A4\u09A5\u09CD\u09AF"),s}if(t.action==="DISAMBIGUATE"){let r=(t.candidate_services||[]).map(p=>`
      <button class="native-chip-btn" data-query="${a(p.name_bn||p.title_bn||"")}">
        ${a(p.name_bn||p.title_bn||"")}
      </button>
    `).join("");return s.innerHTML=`
      ${i}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8</strong></p>
        <p class="bubble-subtext">\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8:</p>
        <div class="chips-container">${r}</div>
      </div>
    `,s}if(t.action==="CLARIFY"&&t.clarifying_question){let r=t.clarifying_question,p=(r.options||[]).map(g=>`
      <button class="native-chip-btn" data-query="${a(g.label_bn)}">
        ${a(g.label_bn)}
      </button>
    `).join("");return s.innerHTML=`
      ${i}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>${a(r.question_bn)}</strong></p>
        <div class="chips-container">${p}</div>
      </div>
    `,s}if((t.source==="rag_vector_d1"||t.reply_bn&&(!t.variant||!t.variant.fees?.length))&&t.reply_bn){let r=t.matched_service,p=r?.official_portal_url||"",g=r?.title_bn||"\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09B8\u09C7\u09AC\u09BE \u0993 \u099C\u09B0\u09C1\u09B0\u09BF \u09A4\u09A5\u09CD\u09AF",T=t.reply_bn;return s.innerHTML=`
      ${i}
      <div class="bubble bot-bubble rag-card-bubble">
        <!-- AI Rendered Clean Markdown Content -->
        <div class="rag-body-text">
          ${j(t.reply_bn)}
        </div>

        <!-- Sleek Modern Action Bar (ChatGPT / Claude style) -->
        <div class="msg-actions-bar">
          <button class="btn-action-pill btn-copy-action" data-copy="${a(T)}" title="\u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
            ${c.copy}
            <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
          </button>
          ${p?`
          <a href="${a(p)}" target="_blank" rel="noopener" class="btn-action-pill btn-portal-action">
            ${c.globe}
            <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
            ${c.externalLink}
          </a>`:""}
        </div>
      </div>
    `,x(s,T,g),s}let n=t.service||{name_bn:"",agency_bn:"",ministry_bn:"",official_portal_url:"",helpline_number:"",last_verified_at:new Date().toISOString()},o=t.variant||{variant_name_bn:"",processing_days_sla:0,fees:[],documents:[],steps:[]},u=(o.fees||[]).reduce((r,p)=>r+(p.amount_bdt||0),0),h=b(u),l=y(u),v=(o.fees||[]).map(r=>`
    <div class="fee-row">
      <span class="fee-name">${a(r.fee_type_bn||r.category_name||"")}</span>
      <span class="fee-amount">${b(r.amount_bdt||0)} \u099F\u09BE\u0995\u09BE</span>
    </div>
  `).join(""),C=(o.documents||[]).map(r=>`
    <li class="doc-item">
      <span class="doc-title">${a(r.document_name_bn||r.document_name||r.name||"")}</span>
      <span class="doc-tag ${r.is_mandatory?"tag-mandatory":"tag-optional"}">
        ${r.is_mandatory?"\u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995":"\u09AA\u09CD\u09B0\u09AF\u09CB\u099C\u09CD\u09AF \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7"}
      </span>
      <span class="doc-format">(${r.format_requirement==="original"?"\u09AE\u09C2\u09B2 \u0995\u09AA\u09BF":"\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8"})</span>
    </li>
  `).join(""),S=(o.steps||[]).map(r=>`
    <li class="step-item">
      <div class="step-num">${b(r.step_number||1)}</div>
      <div class="step-content">
        <strong>${a(r.title_bn||r.title||"")}:</strong> ${a(r.instruction_bn||r.description||"")}
      </div>
    </li>
  `).join(""),$=`${n.name_bn}
\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF: ${h} \u099F\u09BE\u0995\u09BE (${l})
\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${n.helpline_number}
\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2: ${n.official_portal_url}`;return s.innerHTML=`
    ${i}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Service Title -->
      <div class="service-title-text">${a(n.name_bn)}</div>

      <!-- Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">${c.building} ${a(n.agency_bn)}</span>
        <span class="agency-tag">${c.building} ${a(n.ministry_bn)}</span>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">
            ${c.receipt}
            <span>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AE\u09CB\u099F \u09AB\u09BF</span>
          </div>
          <div class="fee-total-highlight">${h} \u099F\u09BE\u0995\u09BE</div>
        </div>
        <div class="fee-in-words-row">\u0995\u09A5\u09BE\u09AF\u09BC: <strong>${l}</strong></div>
        <div class="fee-variant-subtext">${a(o.variant_name_bn)} \u2022 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC: ${b(o.processing_days_sla)} \u0995\u09BE\u09B0\u09CD\u09AF\u09A6\u09BF\u09AC\u09B8</div>
        <div class="fee-breakdown-list">
          ${v}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">
        ${c.fileText}
        <span>\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0</span>
      </div>
      <ul class="native-checklist">
        ${C}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">
        ${c.listOrdered}
        <span>\u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9</span>
      </div>
      <ol class="native-steps-list">
        ${S}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <div class="alert-banner-header">
          ${c.alertTriangle}
          <strong>\u09A6\u09BE\u09B2\u09BE\u09B2 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u09A3\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:</strong>
        </div>
        <p>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0993 \u09B0\u09B8\u09BF\u09A6\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u0995\u09BE\u0989\u0995\u09C7 \u0995\u09CB\u09A8\u09CB \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0985\u09B0\u09CD\u09A5 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u0995\u09C7\u0989 \u0985\u09AC\u09C8\u09A7 \u099F\u09BE\u0995\u09BE \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B9\u099F\u09B2\u09BE\u0987\u09A8 <strong>${a(n.helpline_number)}</strong> \u0985\u09A5\u09AC\u09BE \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 <strong>\u09E7\u09E6\u09EC</strong> \u09A8\u09AE\u09CD\u09AC\u09B0\u09C7 \u0985\u09AD\u09BF\u09AF\u09CB\u0997 \u099C\u09BE\u09A8\u09BE\u09A8\u0964</p>
      </div>

      <!-- Sleek Modern Action Bar (ChatGPT / Claude style) -->
      <div class="msg-actions-bar">
        <button class="btn-action-pill btn-copy-action" data-copy="${a($)}" title="\u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
          ${c.copy}
          <span class="action-label">\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8</span>
        </button>
        ${n.official_portal_url?`
        <a href="${a(n.official_portal_url)}" target="_blank" rel="noopener" class="btn-action-pill btn-portal-action">
          ${c.globe}
          <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
          ${c.externalLink}
        </a>`:""}
        ${n.helpline_number?`
        <a href="tel:${a(n.helpline_number)}" class="btn-action-pill btn-call-action">
          ${c.phone}
          <span>\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${a(n.helpline_number)}</span>
        </a>`:""}
      </div>

    </div>
  `,x(s,$,n.name_bn),s}function k(){let t=new Date().getHours();return t>=5&&t<12?"\u09B6\u09C1\u09AD \u09B8\u0995\u09BE\u09B2!":t>=12&&t<15?"\u09B6\u09C1\u09AD \u09A6\u09C1\u09AA\u09C1\u09B0!":t>=15&&t<18?"\u09B6\u09C1\u09AD \u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8!":t>=18&&t<22?"\u09B6\u09C1\u09AD \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE!":"\u09B6\u09C1\u09AD \u09B0\u09BE\u09A4!"}function H(){return`
    <div class="welcome-hero" id="welcome-hero">
      <div class="welcome-badge-wrap">
        <div class="welcome-badge-circle">
          <img src="/assets/icon-teal.svg" alt="Kaaz AI" class="welcome-badge-icon" />
        </div>
      </div>
      
      <h1 class="welcome-greeting-title">${k()}</h1>
      <p class="welcome-tagline">\u0986\u099C \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u0995\u09C0\u09AD\u09BE\u09AC\u09C7 \u09B8\u09B9\u09AF\u09CB\u0997\u09BF\u09A4\u09BE \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF?</p>
      
      <p class="welcome-subtext">
        \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09B8\u09B0\u0995\u09BE\u09B0\u09C7\u09B0 \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09A8\u09BE\u0997\u09B0\u09BF\u0995 \u09B8\u09C7\u09AC\u09BE\u09B0 \u0985\u09AB\u09BF\u09B6\u09BF\u09DF\u09BE\u09B2 \u09AB\u09BF, \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 \u0993 \u09A6\u09BE\u09B2\u09BE\u09B2\u09AE\u09C1\u0995\u09CD\u09A4 \u09B8\u09A0\u09BF\u0995 \u09A8\u09BF\u09DF\u09AE \u099C\u09BE\u09A8\u09A4\u09C7 \u09A8\u09BF\u099A\u09C7 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0995\u09B0\u09C1\u09A8:
      </p>

      <div class="hero-chips-grid">
        <button class="hero-card-chip" data-query="\u099C\u09BE\u09A4\u09C0\u09AF\u09BC \u09AA\u09B0\u09BF\u099A\u09AF\u09BC\u09AA\u09A4\u09CD\u09B0 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09A4\u09C7 \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u0995\u09A4 \u09B2\u09BE\u0997\u09C7?">
          <span class="chip-emoji">\u{1FAAA}</span>
          <div class="chip-content">
            <span class="chip-title">\u098F\u09A8\u0986\u0987\u09A1\u09BF \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u09AB\u09BF</span>
            <span class="chip-desc">\u09B8\u09A0\u09BF\u0995 \u09AB\u09BF \u0993 \u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09A8\u09BF\u09DF\u09AE</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="\u09E7\u09E6 \u09AC\u099B\u09B0 \u09AE\u09C7\u09AF\u09BC\u09BE\u09A6\u09C0 \u09EA\u09EE \u09AA\u09C3\u09B7\u09CD\u09A0\u09BE\u09B0 \u09AA\u09BE\u09B8\u09AA\u09CB\u09B0\u09CD\u099F \u09A8\u09AC\u09BE\u09AF\u09BC\u09A8 \u09AB\u09BF \u0995\u09A4?">
          <span class="chip-emoji">\u{1F6C2}</span>
          <div class="chip-content">
            <span class="chip-title">\u09AA\u09BE\u09B8\u09AA\u09CB\u09B0\u09CD\u099F \u09A8\u09AC\u09BE\u09AF\u09BC\u09A8 \u09AB\u09BF</span>
            <span class="chip-desc">\u099C\u09B0\u09C1\u09B0\u09BF \u0993 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u099A\u09BE\u09B0\u09CD\u099C</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="\u099C\u09AE\u09BF \u09A8\u09BE\u09AE\u099C\u09BE\u09B0\u09BF \u09AC\u09BE \u0996\u09BE\u09B0\u09BF\u099C \u0995\u09B0\u09A4\u09C7 \u09AE\u09CB\u099F \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u0995\u09A4?">
          <span class="chip-emoji">\u{1F3DB}\uFE0F</span>
          <div class="chip-content">
            <span class="chip-title">\u0987-\u09A8\u09BE\u09AE\u099C\u09BE\u09B0\u09BF \u0993 \u0996\u09BE\u09B0\u09BF\u099C</span>
            <span class="chip-desc">\u09AE\u09CB\u099F \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09E7,\u09E7\u09ED\u09E6 \u099F\u09BE\u0995\u09BE</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="\u0989\u09A4\u09CD\u09A4\u09B0\u09BE \u09AA\u09B6\u09CD\u099A\u09BF\u09AE \u09A5\u09BE\u09A8\u09BE\u09B0 \u0993\u09B8\u09BF\u09B0 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0 \u0995\u09A4?">
          <span class="chip-emoji">\u{1F6A8}</span>
          <div class="chip-content">
            <span class="chip-title">\u099C\u09B0\u09C1\u09B0\u09BF \u09A5\u09BE\u09A8\u09BE \u0993 \u09B9\u099F\u09B2\u09BE\u0987\u09A8</span>
            <span class="chip-desc">\u09AA\u09C1\u09B2\u09BF\u09B6, \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0993 \u0997\u09CD\u09AF\u09BE\u09B8 \u09B8\u09C7\u09AC\u09BE</span>
          </div>
        </button>
      </div>
    </div>
  `}var w=class{chatStream;chatForm;queryInput;btnClearChat;bottomBar;appSidebar;sidebarBackdrop;btnToggleSidebar;btnCloseSidebar;btnSidebarNewChat;isProcessing=!1;constructor(){this.chatStream=document.getElementById("chat-stream"),this.chatForm=document.getElementById("chat-form"),this.queryInput=document.getElementById("query-input"),this.btnClearChat=document.getElementById("btn-clear-chat"),this.bottomBar=document.getElementById("bottom-bar"),this.appSidebar=document.getElementById("app-sidebar"),this.sidebarBackdrop=document.getElementById("sidebar-backdrop"),this.btnToggleSidebar=document.getElementById("btn-toggle-sidebar"),this.btnCloseSidebar=document.getElementById("btn-close-sidebar"),this.btnSidebarNewChat=document.getElementById("btn-sidebar-new-chat"),this.init()}init(){let s=document.getElementById("greeting-title");s&&(s.textContent=k()),L(this.chatStream,this.bottomBar),this.registerServiceWorker(),this.chatForm.addEventListener("submit",i=>{i.preventDefault();let e=this.queryInput.value.trim();!e||this.isProcessing||this.sendQuery(e)}),this.btnClearChat.addEventListener("click",()=>{d("light"),this.resetChat()}),this.btnToggleSidebar&&this.btnToggleSidebar.addEventListener("click",()=>{d("light"),this.openSidebar()}),this.btnCloseSidebar&&this.btnCloseSidebar.addEventListener("click",()=>{d("light"),this.closeSidebar()}),this.sidebarBackdrop&&this.sidebarBackdrop.addEventListener("click",()=>{this.closeSidebar()}),this.btnSidebarNewChat&&this.btnSidebarNewChat.addEventListener("click",()=>{d("light"),this.resetChat(),this.closeSidebar()}),document.addEventListener("click",i=>{let e=i.target.closest("[data-query]");if(e){let n=e.getAttribute("data-query");n&&!this.isProcessing&&(d("light"),this.closeSidebar(),this.sendQuery(n))}}),this.scrollToBottom()}openSidebar(){this.appSidebar&&this.sidebarBackdrop&&(this.appSidebar.classList.add("open"),this.sidebarBackdrop.classList.add("open"))}closeSidebar(){this.appSidebar&&this.sidebarBackdrop&&(this.appSidebar.classList.remove("open"),this.sidebarBackdrop.classList.remove("open"))}scrollToBottom(){requestAnimationFrame(()=>{this.chatStream.scrollTop=this.chatStream.scrollHeight})}async sendQuery(s){this.isProcessing=!0,this.queryInput.value="",d("medium");let i=document.getElementById("welcome-hero");i&&i.remove();let e=_(s);this.chatStream.appendChild(e),this.scrollToBottom();let n=M();this.chatStream.appendChild(n),this.scrollToBottom();try{let o=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})});if(n.remove(),!o.ok)throw new Error(`HTTP error ${o.status}`);let u=await o.json(),h=E(u);this.chatStream.appendChild(h),d("success")}catch{n.remove(),this.renderNetworkError(),d("error")}finally{this.isProcessing=!1,this.scrollToBottom(),this.queryInput.focus()}}renderNetworkError(){let s=document.createElement("div");s.className="message-row bot",s.innerHTML=`
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #ef4444; border-color: #ef4444; color: #fff;">${c.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 3px solid #ef4444;">
        <p style="font-weight: 700; color: #b91c1c;">\u09B8\u0982\u09AF\u09CB\u0997 \u09AC\u09BF\u0998\u09CD\u09A8\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</p>
        <p style="font-size: 0.9rem; color: #475569; margin-top: 4px;">
          \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09AF\u09CB\u0997 \u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u0995\u09BE\u09A8\u09C7\u0995\u09B6\u09A8 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964
        </p>
      </div>
    `,this.chatStream.appendChild(s),m("\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u09B8\u0982\u09AF\u09CB\u0997 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8")}resetChat(){this.chatStream.innerHTML=H(),this.queryInput.value="",this.queryInput.focus(),this.scrollToBottom()}registerServiceWorker(){"serviceWorker"in navigator&&window.location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}};document.addEventListener("DOMContentLoaded",()=>{new w});})();

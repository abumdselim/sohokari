"use strict";(()=>{function l(e="light"){if(typeof navigator<"u"&&"vibrate"in navigator)try{switch(e){case"light":navigator.vibrate(8);break;case"medium":navigator.vibrate(18);break;case"success":navigator.vibrate([10,30,15]);break;case"error":navigator.vibrate([25,40,25]);break}}catch{}}function p(e,t=2200){l("light");let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="toast-container",document.body.appendChild(n));let i=document.createElement("div");i.className="native-toast",i.textContent=e,n.appendChild(i),requestAnimationFrame(()=>{i.classList.add("visible")}),setTimeout(()=>{i.classList.remove("visible"),setTimeout(()=>i.remove(),250)},t)}function g(e,t){navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(e).then(()=>{p(`${t} \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7`),l("success")}).catch(()=>{p("\u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")})}function h(e,t){let n=()=>{if(!window.visualViewport)return;let i=window.visualViewport.height,a=window.innerHeight,c=Math.max(0,a-i-window.visualViewport.offsetTop);c>50?(t.style.transform=`translateY(-${c}px)`,e.style.paddingBottom=`${c+120}px`):(t.style.transform="translateY(0px)",e.style.paddingBottom="120px"),e.scrollTop=e.scrollHeight};window.visualViewport&&(window.visualViewport.addEventListener("resize",n),window.visualViewport.addEventListener("scroll",n)),document.body.addEventListener("touchmove",i=>{i.target===document.body&&i.preventDefault()},{passive:!1})}var o={shieldCheck:`
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
  `};function r(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function y(e){let t=document.createElement("div");t.className="message-row user";let n=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return t.innerHTML=`
    <div class="bubble user-bubble">
      <div class="bubble-content">${r(e)}</div>
      <div class="bubble-time">${n}</div>
    </div>
  `,t}function f(){let e=document.createElement("div");return e.className="message-row bot typing-row",e.id="bot-typing-indicator",e.innerHTML=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner">${o.shieldCheck}</div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `,e}function w(e){let t=document.createElement("div");t.className="message-row bot";let n=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner">${o.shieldCheck}</div>
    </div>
  `;if(e.action==="SAFE_REFUSAL")return t.innerHTML=`
      ${n}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">
          ${o.alertTriangle}
          <span>\u09A4\u09A5\u09CD\u09AF \u09A4\u09BE\u09B2\u09BF\u0995\u09BE\u09DF \u09A8\u09C7\u0987</span>
        </div>
        <p class="refusal-text">${r(e.reply_bn).replace(/\n/g,"<br>")}</p>
        <div class="bubble-meta">
          <span>${o.clock} ${e.trace.execution_time_ms}ms</span>
          <span>\u09B8\u09C1\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0</span>
        </div>
      </div>
    `,t;if(e.action==="DISAMBIGUATE"){let s=(e.candidate_services||[]).map(d=>`
      <button class="native-chip-btn" data-query="${r(d.name_bn)}">
        ${r(d.name_bn)}
      </button>
    `).join("");return t.innerHTML=`
      ${n}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8</strong></p>
        <p class="bubble-subtext">\u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09B6\u09CD\u09B2\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09C7\u099B\u09C7 \u09A8\u09BF\u09A8:</p>
        <div class="chips-container">${s}</div>
        <div class="bubble-meta">
          <span>${o.clock} ${e.trace.execution_time_ms}ms</span>
        </div>
      </div>
    `,t}if(e.action==="CLARIFY"&&e.clarifying_question){let s=e.clarifying_question,d=(s.options||[]).map(m=>`
      <button class="native-chip-btn" data-query="${r(m.label_bn)}">
        ${r(m.label_bn)}
      </button>
    `).join("");return t.innerHTML=`
      ${n}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>${r(s.question_bn)}</strong></p>
        <div class="chips-container">${d}</div>
      </div>
    `,t}let i=e.service||{name_bn:"",agency_bn:"",ministry_bn:"",official_portal_url:"",helpline_number:"",last_verified_at:""},a=e.variant||{variant_name_bn:"",processing_days_sla:0,fees:[],documents:[],steps:[]},c=(a.fees||[]).reduce((s,d)=>s+d.amount_bdt,0),v=(a.fees||[]).map(s=>`
    <div class="fee-row">
      <span class="fee-name">${r(s.fee_type_bn)}</span>
      <span class="fee-amount">${s.amount_bdt} \u099F\u09BE\u0995\u09BE</span>
    </div>
  `).join(""),k=(a.documents||[]).map(s=>`
    <li class="doc-item">
      <span class="doc-title">${r(s.document_name_bn)}</span>
      <span class="doc-tag ${s.is_mandatory?"tag-mandatory":"tag-optional"}">
        ${s.is_mandatory?"\u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995":"\u09AA\u09CD\u09B0\u09AF\u09CB\u099C\u09CD\u09AF \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7"}
      </span>
      <span class="doc-format">(${s.format_requirement==="original"?"\u09AE\u09C2\u09B2 \u0995\u09AA\u09BF":"\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8"})</span>
    </li>
  `).join(""),x=(a.steps||[]).map(s=>`
    <li class="step-item">
      <div class="step-num">${s.step_number}</div>
      <div class="step-content">
        <strong>${r(s.title_bn)}:</strong> ${r(s.instruction_bn)}
      </div>
    </li>
  `).join(""),$=`${i.name_bn}
\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF: ${c} \u099F\u09BE\u0995\u09BE
\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${i.helpline_number}
\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2: ${i.official_portal_url}`;t.innerHTML=`
    ${n}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Card Title & Copy Action -->
      <div class="card-top-bar">
        <div class="service-title-text">${r(i.name_bn)}</div>
        <button class="btn-copy-card" data-copy="${r($)}" title="\u09A4\u09A5\u09CD\u09AF \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
          ${o.copy}
          <span>\u0995\u09AA\u09BF</span>
        </button>
      </div>

      <!-- Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">${o.building} ${r(i.agency_bn)}</span>
        <span class="agency-tag">${o.building} ${r(i.ministry_bn)}</span>
      </div>

      <!-- Contact Actions -->
      <div class="contact-pills-wrap">
        <a href="${r(i.official_portal_url)}" target="_blank" rel="noopener" class="contact-pill portal-pill">
          ${o.globe}
          <span>\u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2</span>
          ${o.externalLink}
        </a>
        <a href="tel:${r(i.helpline_number)}" class="contact-pill call-pill">
          ${o.phone}
          <span>\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${r(i.helpline_number)}</span>
        </a>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">
            ${o.receipt}
            <span>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09BF\u09A4 \u09AE\u09CB\u099F \u09AB\u09BF</span>
          </div>
          <div class="fee-total-highlight">${c} \u099F\u09BE\u0995\u09BE</div>
        </div>
        <div class="fee-variant-subtext">${r(a.variant_name_bn)} \u2022 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC: ${a.processing_days_sla} \u0995\u09BE\u09B0\u09CD\u09AF\u09A6\u09BF\u09AC\u09B8</div>
        <div class="fee-breakdown-list">
          ${v}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">
        ${o.fileText}
        <span>\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 (\u099A\u09C7\u0995\u09B2\u09BF\u09B8\u09CD\u099F)</span>
      </div>
      <ul class="native-checklist">
        ${k}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">
        ${o.listOrdered}
        <span>\u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9</span>
      </div>
      <ol class="native-steps-list">
        ${x}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <div class="alert-banner-header">
          ${o.alertTriangle}
          <strong>\u09A6\u09BE\u09B2\u09BE\u09B2 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u09A3\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:</strong>
        </div>
        <p>\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0993 \u09B0\u09B8\u09BF\u09A6\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u0995\u09BE\u0989\u0995\u09C7 \u0995\u09CB\u09A8\u09CB \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0985\u09B0\u09CD\u09A5 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u0995\u09C7\u0989 \u0985\u09AC\u09C8\u09A7 \u099F\u09BE\u0995\u09BE \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B9\u099F\u09B2\u09BE\u0987\u09A8 <strong>${r(i.helpline_number)}</strong> \u0985\u09A5\u09AC\u09BE \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 <strong>\u09E7\u09E6\u09EC</strong> \u09A8\u09AE\u09CD\u09AC\u09B0\u09C7 \u0985\u09AD\u09BF\u09AF\u09CB\u0997 \u099C\u09BE\u09A8\u09BE\u09A8\u0964</p>
      </div>

      <!-- Decision Trace Footer -->
      <div class="bubble-meta">
        <span>\u0997\u09C7\u099C\u09C7\u099F \u09AF\u09BE\u099A\u09BE\u0987: ${i.last_verified_at.split("T")[0]}</span>
        <span>${o.clock} ${e.trace.execution_time_ms}ms \u2022 \u09E7\u09E6\u09E6% \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09C3\u09A4</span>
      </div>

    </div>
  `;let u=t.querySelector(".btn-copy-card");return u&&u.addEventListener("click",()=>{let s=u.getAttribute("data-copy")||"";g(s,i.name_bn)}),t}var b=class{chatStream;chatForm;queryInput;btnClearChat;bottomBar;isProcessing=!1;constructor(){this.chatStream=document.getElementById("chat-stream"),this.chatForm=document.getElementById("chat-form"),this.queryInput=document.getElementById("query-input"),this.btnClearChat=document.getElementById("btn-clear-chat"),this.bottomBar=document.getElementById("bottom-bar"),this.init()}init(){h(this.chatStream,this.bottomBar),this.registerServiceWorker(),this.chatForm.addEventListener("submit",t=>{t.preventDefault();let n=this.queryInput.value.trim();!n||this.isProcessing||this.sendQuery(n)}),this.btnClearChat.addEventListener("click",()=>{l("light"),this.resetChat()}),document.addEventListener("click",t=>{let n=t.target.closest("[data-query]");if(n){let i=n.getAttribute("data-query");i&&!this.isProcessing&&(l("light"),this.sendQuery(i))}}),this.scrollToBottom()}scrollToBottom(){requestAnimationFrame(()=>{this.chatStream.scrollTop=this.chatStream.scrollHeight})}async sendQuery(t){this.isProcessing=!0,this.queryInput.value="",l("medium");let n=y(t);this.chatStream.appendChild(n),this.scrollToBottom();let i=f();this.chatStream.appendChild(i),this.scrollToBottom();try{let a=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})});if(i.remove(),!a.ok)throw new Error(`HTTP error ${a.status}`);let c=await a.json(),v=w(c);this.chatStream.appendChild(v),l("success")}catch{i.remove(),this.renderNetworkError(),l("error")}finally{this.isProcessing=!1,this.scrollToBottom(),this.queryInput.focus()}}renderNetworkError(){let t=document.createElement("div");t.className="message-row bot",t.innerHTML=`
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #ef4444;">${o.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 4px solid #ef4444;">
        <p><strong>\u09B8\u0982\u09AF\u09CB\u0997 \u09AC\u09BF\u0998\u09CD\u09A8\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</strong></p>
        <p style="font-size: 0.88rem; color: #64748b; margin-top: 4px;">
          \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09AF\u09CB\u0997 \u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u0995\u09BE\u09A8\u09C7\u0995\u09B6\u09A8 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964
        </p>
      </div>
    `,this.chatStream.appendChild(t),p("\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u09B8\u0982\u09AF\u09CB\u0997 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8")}resetChat(){this.chatStream.innerHTML=`
      <div class="message-row bot">
        <div class="bot-avatar-wrap">
          <div class="bot-avatar-inner">${o.shieldCheck}</div>
        </div>
        <div class="bubble bot-bubble">
          <p><strong>\u09A8\u09A4\u09C1\u09A8 \u099A\u09CD\u09AF\u09BE\u099F \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</strong></p>
          <p style="margin-top: 4px; font-size: 0.9rem;">
            \u0995\u09C0 \u09B8\u09C7\u09AC\u09BE \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09BE\u09A8? \u09A8\u09BF\u099A\u09C7 \u09B2\u09BF\u0996\u09C1\u09A8 \u0985\u09A5\u09AC\u09BE \u09B8\u09BE\u099C\u09C7\u09B6\u09A8\u09C7 \u099F\u09CD\u09AF\u09BE\u09AA \u0995\u09B0\u09C1\u09A8\u0964
          </p>
        </div>
      </div>
    `,this.queryInput.value="",this.queryInput.focus(),p("\u09A8\u09A4\u09C1\u09A8 \u099A\u09CD\u09AF\u09BE\u099F \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7")}registerServiceWorker(){"serviceWorker"in navigator&&window.location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}};document.addEventListener("DOMContentLoaded",()=>{new b});})();

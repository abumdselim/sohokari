"use strict";(()=>{function o(t="light"){if(typeof navigator<"u"&&"vibrate"in navigator)try{switch(t){case"light":navigator.vibrate(8);break;case"medium":navigator.vibrate(18);break;case"success":navigator.vibrate([10,30,15]);break;case"error":navigator.vibrate([25,40,25]);break}}catch{}}function d(t,e=2200){o("light");let s=document.getElementById("toast-container");s||(s=document.createElement("div"),s.id="toast-container",s.className="toast-container",document.body.appendChild(s));let i=document.createElement("div");i.className="native-toast",i.textContent=t,s.appendChild(i),requestAnimationFrame(()=>{i.classList.add("visible")}),setTimeout(()=>{i.classList.remove("visible"),setTimeout(()=>i.remove(),250)},e)}function u(t,e){navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(t).then(()=>{d(`\u{1F4CB} ${e} \u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7`),o("success")}).catch(()=>{d("\u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09DF\u09C7\u099B\u09C7")})}function g(t,e){let s=()=>{if(!window.visualViewport)return;let i=window.visualViewport.height,r=window.innerHeight,c=Math.max(0,r-i-window.visualViewport.offsetTop);c>50?(e.style.transform=`translateY(-${c}px)`,t.style.paddingBottom=`${c+120}px`):(e.style.transform="translateY(0px)",t.style.paddingBottom="120px"),t.scrollTop=t.scrollHeight};window.visualViewport&&(window.visualViewport.addEventListener("resize",s),window.visualViewport.addEventListener("scroll",s)),document.body.addEventListener("touchmove",i=>{i.target===document.body&&i.preventDefault()},{passive:!1})}function n(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function h(t){let e=document.createElement("div");e.className="message-row user";let s=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return e.innerHTML=`
    <div class="bubble user-bubble">
      <div class="bubble-content">${n(t)}</div>
      <div class="bubble-time">${s}</div>
    </div>
  `,e}function f(){let t=document.createElement("div");return t.className="message-row bot typing-row",t.id="bot-typing-indicator",t.innerHTML=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner">\u{1F91D}</div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `,t}function y(t){let e=document.createElement("div");e.className="message-row bot";let s=`
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner">\u{1F91D}</div>
    </div>
  `;if(t.action==="SAFE_REFUSAL")return e.innerHTML=`
      ${s}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">\u26A0\uFE0F \u09A4\u09A5\u09CD\u09AF \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF</div>
        <p class="refusal-text">${n(t.reply_bn).replace(/\n/g,"<br>")}</p>
        <div class="bubble-meta">
          <span>\u26A1 ${t.trace.execution_time_ms}ms</span>
          <span>\u{1F512} \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0</span>
        </div>
      </div>
    `,e;if(t.action==="DISAMBIGUATE"){let a=(t.candidate_services||[]).map(l=>`
      <button class="native-chip-btn" data-query="${n(l.name_bn)}">
        ${n(l.name_bn)}
      </button>
    `).join("");return e.innerHTML=`
      ${s}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u{1F50D} \u0986\u09AA\u09A8\u09BF \u0995\u09BF \u09A8\u09BF\u099A\u09C7\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C7\u09AC\u09BE \u0996\u09C1\u0981\u099C\u099B\u09C7\u09A8?</strong></p>
        <p class="bubble-subtext">\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09B8\u09C7\u09AC\u09BE\u099F\u09BF\u09B0 \u0993\u09AA\u09B0 \u099F\u09CD\u09AF\u09BE\u09AA \u0995\u09B0\u09C1\u09A8:</p>
        <div class="chips-container">${a}</div>
        <div class="bubble-meta">
          <span>\u26A1 ${t.trace.execution_time_ms}ms</span>
        </div>
      </div>
    `,e}if(t.action==="CLARIFY"&&t.clarifying_question){let a=t.clarifying_question,l=(a.options||[]).map(v=>`
      <button class="native-chip-btn" data-query="${n(v.label_bn)}">
        ${n(v.label_bn)}
      </button>
    `).join("");return e.innerHTML=`
      ${s}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>\u2753 ${n(a.question_bn)}</strong></p>
        <div class="chips-container">${l}</div>
      </div>
    `,e}let i=t.service||{name_bn:"",agency_bn:"",ministry_bn:"",official_portal_url:"",helpline_number:"",last_verified_at:""},r=t.variant||{variant_name_bn:"",processing_days_sla:0,fees:[],documents:[],steps:[]},c=(r.fees||[]).reduce((a,l)=>a+l.amount_bdt,0),p=(r.fees||[]).map(a=>`
    <div class="fee-row">
      <span class="fee-name">${n(a.fee_type_bn)}</span>
      <span class="fee-amount">${a.amount_bdt} \u09F3</span>
    </div>
  `).join(""),w=(r.documents||[]).map(a=>`
    <li class="doc-item">
      <span class="doc-title">${n(a.document_name_bn)}</span>
      <span class="doc-tag ${a.is_mandatory?"tag-mandatory":"tag-optional"}">
        ${a.is_mandatory?"\u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995":"\u09AA\u09CD\u09B0\u09AF\u09CB\u099C\u09CD\u09AF \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7"}
      </span>
      <span class="doc-format">(${a.format_requirement==="original"?"\u09AE\u09C2\u09B2 \u0995\u09AA\u09BF":"\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8"})</span>
    </li>
  `).join(""),_=(r.steps||[]).map(a=>`
    <li class="step-item">
      <div class="step-num">${a.step_number}</div>
      <div class="step-content">
        <strong>${n(a.title_bn)}:</strong> ${n(a.instruction_bn)}
      </div>
    </li>
  `).join(""),T=`${i.name_bn}
\u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF: ${c} \u099F\u09BE\u0995\u09BE
\u09B9\u099F\u09B2\u09BE\u0987\u09A8: ${i.helpline_number}
\u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2: ${i.official_portal_url}`;e.innerHTML=`
    ${s}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Card Title & Copy Action -->
      <div class="card-top-bar">
        <div class="service-title-text">\u{1F4CC} ${n(i.name_bn)}</div>
        <button class="btn-copy-card" data-copy="${n(T)}" title="\u09A4\u09A5\u09CD\u09AF \u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8">
          \u{1F4CB} \u0995\u09AA\u09BF
        </button>
      </div>

      <!-- Quick Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">\u{1F3E2} ${n(i.agency_bn)}</span>
        <span class="agency-tag">\u{1F3DB}\uFE0F ${n(i.ministry_bn)}</span>
      </div>

      <!-- Quick Contact Pills -->
      <div class="contact-pills-wrap">
        <a href="${n(i.official_portal_url)}" target="_blank" rel="noopener" class="contact-pill portal-pill">
          \u{1F310} \u0985\u09AB\u09BF\u09B8\u09BF\u09AF\u09BC\u09BE\u09B2 \u09AA\u09CB\u09B0\u09CD\u099F\u09BE\u09B2 \u2197
        </a>
        <a href="tel:${n(i.helpline_number)}" class="contact-pill call-pill">
          \u{1F4DE} \u0995\u09B2 \u0995\u09B0\u09C1\u09A8: ${n(i.helpline_number)}
        </a>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">\u{1F4B0} \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AE\u09CB\u099F \u09AB\u09BF</div>
          <div class="fee-total-highlight">${c} \u099F\u09BE\u0995\u09BE</div>
        </div>
        <div class="fee-variant-subtext">${n(r.variant_name_bn)} \u2022 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09AE\u09AF\u09BC: ${r.processing_days_sla} \u0995\u09BE\u09B0\u09CD\u09AF\u09A6\u09BF\u09AC\u09B8</div>
        <div class="fee-breakdown-list">
          ${p}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">\u{1F4D1} \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u0995\u09BE\u0997\u099C\u09AA\u09A4\u09CD\u09B0 (\u099A\u09C7\u0995\u09B2\u09BF\u09B8\u09CD\u099F)</div>
      <ul class="native-checklist">
        ${w}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">\u{1F4DD} \u0986\u09AC\u09C7\u09A6\u09A8\u09C7\u09B0 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9</div>
      <ol class="native-steps-list">
        ${_}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <strong>\u26A0\uFE0F \u09A6\u09BE\u09B2\u09BE\u09B2 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BE\u09B0\u09A3\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:</strong> \u09B8\u09B0\u0995\u09BE\u09B0\u09BF \u09AB\u09BF \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0993 \u09B0\u09B8\u09BF\u09A6\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u0995\u09BE\u0989\u0995\u09C7 \u0995\u09CB\u09A8\u09CB \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u099F\u09BE\u0995\u09BE \u09A6\u09C7\u09AC\u09C7\u09A8 \u09A8\u09BE\u0964 \u0995\u09C7\u0989 \u0985\u09AC\u09C8\u09A7 \u099F\u09BE\u0995\u09BE \u09A6\u09BE\u09AC\u09BF \u0995\u09B0\u09B2\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B9\u099F\u09B2\u09BE\u0987\u09A8 <strong>${n(i.helpline_number)}</strong> \u0985\u09A5\u09AC\u09BE \u09A6\u09C1\u09A6\u0995\u09C7\u09B0 <strong>\u09E7\u09E6\u09EC</strong> \u09A8\u09AE\u09CD\u09AC\u09B0\u09C7 \u099C\u09BE\u09A8\u09BE\u09A8\u0964
      </div>

      <!-- Decision Trace Footer -->
      <div class="bubble-meta">
        <span>\u0997\u09C7\u099C\u09C7\u099F \u09AF\u09BE\u099A\u09BE\u0987: ${i.last_verified_at.split("T")[0]}</span>
        <span>\u26A1 ${t.trace.execution_time_ms}ms \u2022 \u09E7\u09E6\u09E6% \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09C3\u09A4</span>
      </div>

    </div>
  `;let b=e.querySelector(".btn-copy-card");return b&&b.addEventListener("click",()=>{let a=b.getAttribute("data-copy")||"";u(a,i.name_bn)}),e}var m=class{chatStream;chatForm;queryInput;btnClearChat;bottomBar;isProcessing=!1;constructor(){this.chatStream=document.getElementById("chat-stream"),this.chatForm=document.getElementById("chat-form"),this.queryInput=document.getElementById("query-input"),this.btnClearChat=document.getElementById("btn-clear-chat"),this.bottomBar=document.getElementById("bottom-bar"),this.init()}init(){g(this.chatStream,this.bottomBar),this.registerServiceWorker(),this.chatForm.addEventListener("submit",e=>{e.preventDefault();let s=this.queryInput.value.trim();!s||this.isProcessing||this.sendQuery(s)}),this.btnClearChat.addEventListener("click",()=>{o("light"),this.resetChat()}),document.addEventListener("click",e=>{let s=e.target.closest("[data-query]");if(s){let i=s.getAttribute("data-query");i&&!this.isProcessing&&(o("light"),this.sendQuery(i))}}),this.scrollToBottom()}scrollToBottom(){requestAnimationFrame(()=>{this.chatStream.scrollTop=this.chatStream.scrollHeight})}async sendQuery(e){this.isProcessing=!0,this.queryInput.value="",o("medium");let s=h(e);this.chatStream.appendChild(s),this.scrollToBottom();let i=f();this.chatStream.appendChild(i),this.scrollToBottom();try{let r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});if(i.remove(),!r.ok)throw new Error(`HTTP error ${r.status}`);let c=await r.json(),p=y(c);this.chatStream.appendChild(p),o("success")}catch{i.remove(),this.renderNetworkError(),o("error")}finally{this.isProcessing=!1,this.scrollToBottom(),this.queryInput.focus()}}renderNetworkError(){let e=document.createElement("div");e.className="message-row bot",e.innerHTML=`
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #ef4444;">\u26A0\uFE0F</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 4px solid #ef4444;">
        <p><strong>\u09B8\u0982\u09AF\u09CB\u0997 \u09AC\u09BF\u0998\u09CD\u09A8\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7</strong></p>
        <p style="font-size: 0.88rem; color: #64748b; margin-top: 4px;">
          \u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u0982\u09AF\u09CB\u0997 \u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC \u09B9\u09DF\u09A8\u09BF\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u0995\u09BE\u09A8\u09C7\u0995\u09B6\u09A8 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8\u0964
        </p>
      </div>
    `,this.chatStream.appendChild(e),d("\u26A0\uFE0F \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F \u09B8\u0982\u09AF\u09CB\u0997 \u099A\u09C7\u0995 \u0995\u09B0\u09C1\u09A8")}resetChat(){this.chatStream.innerHTML=`
      <div class="message-row bot">
        <div class="bot-avatar-wrap">
          <div class="bot-avatar-inner">\u{1F91D}</div>
        </div>
        <div class="bubble bot-bubble">
          <p><strong>\u09A8\u09A4\u09C1\u09A8 \u099A\u09CD\u09AF\u09BE\u099F \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!</strong></p>
          <p style="margin-top: 4px; font-size: 0.9rem;">
            \u0995\u09C0 \u09B8\u09C7\u09AC\u09BE \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09BE\u09A8? \u09A8\u09BF\u099A\u09C7 \u09B2\u09BF\u0996\u09C1\u09A8 \u0985\u09A5\u09AC\u09BE \u09B8\u09BE\u099C\u09C7\u09B6\u09A8\u09C7 \u099F\u09CD\u09AF\u09BE\u09AA \u0995\u09B0\u09C1\u09A8\u0964
          </p>
        </div>
      </div>
    `,this.queryInput.value="",this.queryInput.focus(),d("\u09A8\u09A4\u09C1\u09A8 \u099A\u09CD\u09AF\u09BE\u099F \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7")}registerServiceWorker(){"serviceWorker"in navigator&&window.location.protocol==="https:"&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}};document.addEventListener("DOMContentLoaded",()=>{new m});})();

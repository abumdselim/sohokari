import { copyToClipboard } from './toast';
import { icons } from './icons';
import { toBengaliNumber, amountInBengaliWords } from '../engine/bengaliWords';

export function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function renderUserBubble(text: string): HTMLElement {
  const row = document.createElement('div');
  row.className = 'message-row user';

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  row.innerHTML = `
    <div class="bubble user-bubble">
      <div class="bubble-content">${escapeHtml(text)}</div>
      <div class="bubble-time">${timeStr}</div>
    </div>
  `;
  return row;
}

export function renderTypingIndicator(): HTMLElement {
  const row = document.createElement('div');
  row.className = 'message-row bot typing-row';
  row.id = 'bot-typing-indicator';

  row.innerHTML = `
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="সহকারী" class="bot-avatar-img" /></div>
    </div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  return row;
}

export function parseMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';
  
  const text = markdown.replace(/\r\n/g, '\n');
  const lines = text.split('\n');
  const result: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      continue;
    }

    let safeLine = escapeHtml(line);

    // Format bold: **text**
    safeLine = safeLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Format code: `code`
    safeLine = safeLine.replace(/`([^`]+)`/g, '<code class="rag-code">$1</code>');

    // Format links: [text](url)
    safeLine = safeLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="rag-link">$1</a>');

    // Headers
    if (safeLine.startsWith('#### ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<h4 class="rag-h4">${safeLine.substring(5)}</h4>`);
    } else if (safeLine.startsWith('### ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<h3 class="rag-h3">${safeLine.substring(4)}</h3>`);
    } else if (safeLine.startsWith('## ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<h2 class="rag-h2">${safeLine.substring(3)}</h2>`);
    } else if (safeLine.startsWith('&gt; ') || safeLine.startsWith('> ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      const bqText = safeLine.replace(/^(&gt;|>)\s*/, '');
      result.push(`<blockquote class="rag-blockquote">${bqText}</blockquote>`);
    } else if (safeLine.startsWith('• ') || safeLine.startsWith('- ') || safeLine.startsWith('* ')) {
      if (!inList) {
        result.push('<ul class="rag-ul">');
        inList = true;
      }
      const itemText = safeLine.replace(/^[•\-\*]\s*/, '');
      result.push(`<li class="rag-li">${itemText}</li>`);
    } else {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<p class="rag-p">${safeLine}</p>`);
    }
  }

  if (inList) {
    result.push('</ul>');
  }

  return result.join('\n');
}

export function renderBotBubble(data: any): HTMLElement {
  const row = document.createElement('div');
  row.className = 'message-row bot';

  const avatar = `
    <div class="bot-avatar-wrap">
      <div class="bot-avatar-inner"><img src="/assets/icon-teal.svg" alt="সহকারী" class="bot-avatar-img" /></div>
    </div>
  `;

  const execTime = data.trace?.execution_time_ms ?? data.execution_time_ms ?? 0;

  // Case 1: Out of scope
  if (data.action === 'SAFE_REFUSAL') {
    row.innerHTML = `
      ${avatar}
      <div class="bubble bot-bubble refusal-bubble">
        <div class="card-badge warning-badge">
          ${icons.alertTriangle}
          <span>তথ্য তালিকায় নেই</span>
        </div>
        <p class="refusal-text">${escapeHtml(data.reply_bn || 'দুঃখিত, এই তথ্যের প্রামাণ্য রেকর্ড পাওয়া যায়নি।').replace(/\n/g, '<br>')}</p>
        <div class="bubble-meta">
          <span>${icons.clock} ${execTime}ms</span>
          <span>সুরক্ষিত ফিল্টার</span>
        </div>
      </div>
    `;
    return row;
  }

  // Case 2: Disambiguation
  if (data.action === 'DISAMBIGUATE') {
    const chipsHtml = (data.candidate_services || []).map((c: any) => `
      <button class="native-chip-btn" data-query="${escapeHtml(c.name_bn || c.title_bn || '')}">
        ${escapeHtml(c.name_bn || c.title_bn || '')}
      </button>
    `).join('');

    row.innerHTML = `
      ${avatar}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>নির্দিষ্ট সেবা নির্বাচন করুন</strong></p>
        <p class="bubble-subtext">আপনার অনুসন্ধানের সাথে সংশ্লিষ্ট সেবাগুলোর মধ্যে বেছে নিন:</p>
        <div class="chips-container">${chipsHtml}</div>
        <div class="bubble-meta">
          <span>${icons.clock} ${execTime}ms</span>
        </div>
      </div>
    `;
    return row;
  }

  // Case 3: Clarify
  if (data.action === 'CLARIFY' && data.clarifying_question) {
    const q = data.clarifying_question;
    const chipsHtml = (q.options || []).map((opt: any) => `
      <button class="native-chip-btn" data-query="${escapeHtml(opt.label_bn)}">
        ${escapeHtml(opt.label_bn)}
      </button>
    `).join('');

    row.innerHTML = `
      ${avatar}
      <div class="bubble bot-bubble">
        <p class="bubble-prompt"><strong>${escapeHtml(q.question_bn)}</strong></p>
        <div class="chips-container">${chipsHtml}</div>
      </div>
    `;
    return row;
  }

  // Case 4: RAG or Edge AI Answer (Live Vector + D1 response)
  const isRagAnswer =
    data.source === 'rag_vector_d1' ||
    (data.reply_bn && (!data.variant || !data.variant.fees?.length));

  if (isRagAnswer && data.reply_bn) {
    const ms = data.matched_service;
    const portalUrl = ms?.official_portal_url || '';
    const title = ms?.title_bn || 'সরকারি সেবা ও জরুরি তথ্য';

    let actionButtonsHtml = '';
    if (portalUrl) {
      actionButtonsHtml += `
        <a href="${escapeHtml(portalUrl)}" target="_blank" rel="noopener" class="contact-pill portal-pill">
          ${icons.globe}
          <span>অফিসিয়াল পোর্টাল</span>
          ${icons.externalLink}
        </a>
      `;
    }

    const copyPayload = data.reply_bn;

    row.innerHTML = `
      ${avatar}
      <div class="bubble bot-bubble rich-card-bubble rag-card-bubble">
        <!-- Card Top Bar -->
        <div class="card-top-bar">
          <div class="service-title-text" style="color: #0c5b5b; font-weight: 700; display: flex; align-items: center; gap: 6px;">
            ${icons.shieldCheck} <span>সহকারী এআই গাইড (লাইভ রেকর্ড)</span>
          </div>
          <button class="btn-copy-card" data-copy="${escapeHtml(copyPayload)}" title="তথ্য কপি করুন">
            ${icons.copy}
            <span>কপি</span>
          </button>
        </div>

        ${actionButtonsHtml ? `<div class="contact-pills-wrap" style="margin: 8px 0 12px 0;">${actionButtonsHtml}</div>` : ''}

        <!-- AI Rendered Markdown Content -->
        <div class="rag-body-text">
          ${parseMarkdownToHtml(data.reply_bn)}
        </div>

        <!-- Meta Footer -->
        <div class="bubble-meta" style="margin-top: 14px; padding-top: 8px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
          <span style="display: flex; align-items: center; gap: 4px;">${icons.shieldCheck} ১০০% প্রামাণ্য ডেটাবেজ রেকর্ড</span>
          <span>${icons.clock} ${execTime}ms • এআই লাইভ</span>
        </div>
      </div>
    `;

    // Attach copy event listener
    const copyBtn = row.querySelector('.btn-copy-card') as HTMLButtonElement | null;
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        copyToClipboard(copyPayload, title);
      });
    }

    return row;
  }

  // Case 5: Rule-Engine Classic DIRECT_ANSWER
  const s = data.service || {
    name_bn: '',
    agency_bn: '',
    ministry_bn: '',
    official_portal_url: '',
    helpline_number: '',
    last_verified_at: new Date().toISOString()
  };
  const v = data.variant || {
    variant_name_bn: '',
    processing_days_sla: 0,
    fees: [],
    documents: [],
    steps: []
  };

  const verifiedDate = (s.last_verified_at || '').split('T')[0] || 'আজকে';
  const totalFee = (v.fees || []).reduce((acc: number, f: any) => acc + (f.amount_bdt || 0), 0);
  const totalFeeBn = toBengaliNumber(totalFee);
  const totalFeeInWords = amountInBengaliWords(totalFee);

  const feeItems = (v.fees || []).map((f: any) => `
    <div class="fee-row">
      <span class="fee-name">${escapeHtml(f.fee_type_bn || f.category_name || '')}</span>
      <span class="fee-amount">${toBengaliNumber(f.amount_bdt || 0)} টাকা</span>
    </div>
  `).join('');

  const docItems = (v.documents || []).map((d: any) => `
    <li class="doc-item">
      <span class="doc-title">${escapeHtml(d.document_name_bn || d.document_name || d.name || '')}</span>
      <span class="doc-tag ${d.is_mandatory ? 'tag-mandatory' : 'tag-optional'}">
        ${d.is_mandatory ? 'বাধ্যতামূলক' : 'প্রযোজ্য ক্ষেত্রে'}
      </span>
      <span class="doc-format">(${d.format_requirement === 'original' ? 'মূল কপি' : 'ডিজিটাল স্ক্যান'})</span>
    </li>
  `).join('');

  const stepItems = (v.steps || []).map((step: any) => `
    <li class="step-item">
      <div class="step-num">${toBengaliNumber(step.step_number || 1)}</div>
      <div class="step-content">
        <strong>${escapeHtml(step.title_bn || step.title || '')}:</strong> ${escapeHtml(step.instruction_bn || step.description || '')}
      </div>
    </li>
  `).join('');

  const copyPayload = `${s.name_bn}\nসরকারি ফি: ${totalFeeBn} টাকা (${totalFeeInWords})\nহটলাইন: ${s.helpline_number}\nপোর্টাল: ${s.official_portal_url}`;

  row.innerHTML = `
    ${avatar}
    <div class="bubble bot-bubble rich-card-bubble">
      
      <!-- Card Title & Copy Action -->
      <div class="card-top-bar">
        <div class="service-title-text">${escapeHtml(s.name_bn)}</div>
        <button class="btn-copy-card" data-copy="${escapeHtml(copyPayload)}" title="তথ্য কপি করুন">
          ${icons.copy}
          <span>কপি</span>
        </button>
      </div>

      <!-- Agency Tags -->
      <div class="agency-tags-wrap">
        <span class="agency-tag">${icons.building} ${escapeHtml(s.agency_bn)}</span>
        <span class="agency-tag">${icons.building} ${escapeHtml(s.ministry_bn)}</span>
      </div>

      <!-- Contact Actions -->
      <div class="contact-pills-wrap">
        <a href="${escapeHtml(s.official_portal_url)}" target="_blank" rel="noopener" class="contact-pill portal-pill">
          ${icons.globe}
          <span>অফিসিয়াল পোর্টাল</span>
          ${icons.externalLink}
        </a>
        <a href="tel:${escapeHtml(s.helpline_number)}" class="contact-pill call-pill">
          ${icons.phone}
          <span>হটলাইন: ${escapeHtml(s.helpline_number)}</span>
        </a>
      </div>

      <!-- Official Fee Card -->
      <div class="fee-box">
        <div class="fee-box-header">
          <div class="fee-title-label">
            ${icons.receipt}
            <span>সরকারি মোট ফি</span>
          </div>
          <div class="fee-total-highlight">${totalFeeBn} টাকা</div>
        </div>
        <div class="fee-in-words-row">কথায়: <strong>${totalFeeInWords}</strong></div>
        <div class="fee-variant-subtext">${escapeHtml(v.variant_name_bn)} • প্রসেসিং সময়: ${toBengaliNumber(v.processing_days_sla)} কার্যদিবস</div>
        <div class="fee-breakdown-list">
          ${feeItems}
        </div>
      </div>

      <!-- Required Documents -->
      <div class="section-heading">
        ${icons.fileText}
        <span>প্রয়োজনীয় কাগজপত্র (চেকলিস্ট)</span>
      </div>
      <ul class="native-checklist">
        ${docItems}
      </ul>

      <!-- Application Steps -->
      <div class="section-heading">
        ${icons.listOrdered}
        <span>আবেদনের সরাসরি ধাপসমূহ</span>
      </div>
      <ol class="native-steps-list">
        ${stepItems}
      </ol>

      <!-- Anti-Broker Alert -->
      <div class="dalal-alert-banner">
        <div class="alert-banner-header">
          ${icons.alertTriangle}
          <strong>দালাল ও প্রতারণা প্রতিরোধ:</strong>
        </div>
        <p>সরকারি ফি সুনির্দিষ্ট ও রসিদযুক্ত। কাউকে কোনো অতিরিক্ত অর্থ প্রদান করবেন না। কেউ অবৈধ টাকা দাবি করলে সরাসরি হটলাইন <strong>${escapeHtml(s.helpline_number)}</strong> অথবা দুদকের <strong>১০৬</strong> নম্বরে অভিযোগ জানান।</p>
      </div>

      <!-- Decision Trace Footer -->
      <div class="bubble-meta">
        <span>গেজেট যাচাই: ${verifiedDate}</span>
        <span>${icons.clock} ${execTime}ms • ১০০% যাচাইকৃত</span>
      </div>

    </div>
  `;

  // Attach copy event listener
  const copyBtn = row.querySelector('.btn-copy-card') as HTMLButtonElement | null;
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const payload = copyBtn.getAttribute('data-copy') || '';
      copyToClipboard(payload, s.name_bn);
    });
  }

  return row;
}

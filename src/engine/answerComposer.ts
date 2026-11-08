import { ServiceRecord, ServiceVariant } from '../types/service';
import { ExtractedSlots } from '../types/engine';
import { toBengaliNumber, amountInBengaliWords } from './bengaliWords';

export function composeDirectAnswer(
  service: ServiceRecord,
  variant: ServiceVariant,
  slots: ExtractedSlots,
  language: 'bn' | 'en' | 'banglish'
): { reply_bn: string; reply_en: string } {
  const isEn = language === 'en';

  // Fee calculation
  const totalFee = variant.fees.reduce((acc, f) => acc + f.amount_bdt, 0);
  const totalFeeBn = toBengaliNumber(totalFee);
  const totalFeeInWords = amountInBengaliWords(totalFee);

  const feeRowsBn = variant.fees
    .map(f => `• ${f.fee_type_bn}: ${toBengaliNumber(f.amount_bdt)} টাকা ${f.notes_bn ? `(${f.notes_bn})` : ''}`)
    .join('\n');
  const feeRowsEn = variant.fees
    .map(f => `• ${f.fee_type_en}: ${f.amount_bdt} Taka`)
    .join('\n');

  // Documents
  const docRowsBn = variant.documents
    .map(d => `• ${d.document_name_bn} [${d.format_requirement === 'original' ? 'মূল কপি' : 'ডিজিটাল স্ক্যান'}]${d.is_mandatory ? ' (বাধ্যতামূলক)' : ' (প্রযোজ্য ক্ষেত্রে)'}`)
    .join('\n');
  const docRowsEn = variant.documents
    .map(d => `• ${d.document_name_en} [${d.format_requirement}]${d.is_mandatory ? ' (Mandatory)' : ' (If applicable)'}`)
    .join('\n');

  // Steps
  const stepRowsBn = variant.steps
    .map(s => `${s.step_number}. **${s.title_bn}**: ${s.instruction_bn}`)
    .join('\n\n');
  const stepRowsEn = variant.steps
    .map(s => `${s.step_number}. **${s.title_en || s.title_bn}**: ${s.instruction_en || s.instruction_bn}`)
    .join('\n\n');

  // Guidance / Broker warning
  const brokerWarning = service.guidance.find(g => g.guidance_type === 'broker_warning');
  const rejectionReason = service.guidance.find(g => g.guidance_type === 'rejection_reason');

  // Compose Bangla text
  const reply_bn = `### সেবা: ${service.name_bn}
**ধরণ/ভ্যারিয়েন্ট:** ${variant.variant_name_bn}
**দায়িত্বশীল কর্তৃপক্ষ:** ${service.responsible_agency_bn}, ${service.responsible_ministry_bn}
**যে অফিসে যেতে হবে:** ${service.visiting_office_level === 'none' ? 'কোথাও যেতে হবে না (১০০% অনলাইন)' : `উপজেলা / জেলা কার্যালয় (${service.visiting_office_level})`}
**অফিসিয়াল পোর্টাল:** ${service.official_portal_url} | **হটলাইন:** ${service.helpline_number}

---

### সরকারি ফি তালিকা (মোট: ${totalFeeBn} টাকা — কথায়: ${totalFeeInWords})
${feeRowsBn}
*প্রসেসিং সময়: সরকারি SLA অনুযায়ী ${variant.processing_days_sla} কার্যদিবস।*

---

### প্রয়োজনীয় কাগজপত্র (চেকলিস্ট)
${docRowsBn}

---

### আবেদন করার ধাপসমূহ
${stepRowsBn}

---

### দালাল ও প্রতারণা প্রতিরোধে সতর্কতা
${brokerWarning ? brokerWarning.content_bn : 'সরকারি ফি নির্দিষ্ট ও রসিদযুক্ত। কোনো দালাল বা মধ্যস্বত্বভোগীকে বাড়তি টাকা দিবেন না।'}
${rejectionReason ? `\n\n**সাধারণ ভুল ও বাতিলের কারণ:** ${rejectionReason.content_bn}` : ''}

---
*উৎস: ${service.sources[0]?.source_title || 'সরকারি গেজেট ও সিটিজেন চার্টার'} (সর্বশেষ যাচাই: ${service.last_verified_at.split('T')[0]})*`;

  // Compose English text
  const reply_en = `### Service: ${service.name_en}
**Variant:** ${variant.variant_name_en}
**Responsible Authority:** ${service.responsible_agency_en}, ${service.responsible_ministry_en}
**Visiting Office:** ${service.visiting_office_level} level office
**Official Portal:** ${service.official_portal_url} | **Helpline:** ${service.helpline_number}

---

### Official Fee Schedule (Total: ${totalFee} Taka)
${feeRowsEn}
*Processing SLA: ${variant.processing_days_sla} working days.*

---

### Required Documents Checklist
${docRowsEn}

---

### Step-by-Step Application Procedure
${stepRowsEn}

---

### Anti-Fraud & Broker Warning
${brokerWarning ? brokerWarning.content_en : 'Official fees are fixed and receipt-backed. Never pay brokers.'}

---
*Source: ${service.sources[0]?.source_title} (Last verified: ${service.last_verified_at.split('T')[0]})*`;

  return { reply_bn, reply_en };
}

export function composeSafeRefusal(
  query: string,
  language: 'bn' | 'en' | 'banglish'
): { reply_bn: string; reply_en: string } {
  return {
    reply_bn: `দুঃখিত, আপনার অনুসন্ধানটি ("${query}") বর্তমানে Sohokari-এর যাচাইকৃত সরকারি সেবার তালিকার অন্তর্ভুক্ত নয়।

নিরাপদ তথ্যের জন্য অনুগ্রহ করে জাতীয় কল সেন্টার **৩৩৩ (333)** অথবা সরকারি জাতীয় পোর্টাল (bangladesh.gov.bd)-এ যোগাযোগ করুন।`,
    reply_en: `We apologize, but your query ("${query}") is not currently part of Sohokari's verified government service catalog.

For verified official assistance, please contact National Call Center **333** or visit the Bangladesh National Portal (bangladesh.gov.bd).`
  };
}

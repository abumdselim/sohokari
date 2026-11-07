import { ExtractedSlots } from '../types/engine';
import { NormalizedTextResult } from './textNormalizer';

export function extractSlots(normalized: NormalizedTextResult): ExtractedSlots {
  const text = normalized.normalized;
  const allTokens = [...normalized.tokens, ...normalized.bengali_transliterated_tokens];

  const slots: ExtractedSlots = {
    raw_tokens: allTokens
  };

  // 1. Action Intent Extraction
  if (/(ফি|টাকা|খরচ|পেমেন্ট|fee|taka|cost|charge|khoroch|koto taka)/i.test(text)) {
    slots.action_intent = 'fee';
  } else if (/(কাগজ|ডকুমেন্ট|সনদ|নথি|নথিপত্র|দলিলপত্র|document|paper|kagoj)/i.test(text)) {
    slots.action_intent = 'documents';
  } else if (/(নিয়ম|পদ্ধতি|কিভাবে|আবেদন|প্রসেস|নিয়মাবলী|how to|apply|process|procedure|kivabe)/i.test(text)) {
    slots.action_intent = 'process';
  } else if (/(সময়|দিন|কতদিন|মেয়াদ|সময়সীমা|sla|time|days|koto din|meyad)/i.test(text)) {
    slots.action_intent = 'time';
  } else if (/(অফিস|কোথায়|ঠিকানা|office|location|kothay)/i.test(text)) {
    slots.action_intent = 'office';
  } else if (/(দালাল|অভিযোগ|ঘুষ|হটলাইন|complaint|dalal|hotline|ghush)/i.test(text)) {
    slots.action_intent = 'complaint';
  } else {
    slots.action_intent = 'general';
  }

  // 2. Service Type / Variant Extraction
  if (/(নবায়ন|রিনিউ|মেয়াদ শেষ|renew|renewal|reissue|meyad sesh)/i.test(text)) {
    slots.service_type = 'renewal';
  } else if (/(সংশোধন|পরিবর্তন|ভুল|এডিট|ঠিক|correction|change|modify|songshodhon|vul)/i.test(text)) {
    slots.service_type = 'correction';
  } else if (/(নতুন|প্রথমবার|new|fresh|first time|notun)/i.test(text)) {
    slots.service_type = 'new';
  } else if (/(হারিয়ে|নষ্ট|হারিয়েছে|lost|missing|harie)/i.test(text)) {
    slots.service_type = 'reissue';
  }

  // 3. Urgency Extraction
  if (/(সুপার এক্সপ্রেস|super express)/i.test(text)) {
    slots.urgency = 'super_express';
  } else if (/(জরুরি|জরুরী|এক্সপ্রেস|ইমার্জেন্সি|urgent|express|emergency|zoruri)/i.test(text)) {
    slots.urgency = 'express';
  } else if (/(সাধারণ|নরমাল|রেগুলার|regular|normal)/i.test(text)) {
    slots.urgency = 'regular';
  }

  // 4. Passport Specific Slots (Pages & Validity)
  if (/(৬৪ পৃষ্ঠা|64 পৃষ্ঠা|64 page|64 pages|64prishtha)/i.test(text)) {
    slots.passport_pages = 64;
  } else if (/(৪৮ পৃষ্ঠা|48 পৃষ্ঠা|48 page|48 pages|48prishtha)/i.test(text)) {
    slots.passport_pages = 48;
  }

  if (/(১০ বছর|10 বছর|10 year|10 years|10 bochor|dos bochor)/i.test(text)) {
    slots.passport_validity_years = 10;
  } else if (/(৫ বছর|5 বছর|5 year|5 years|5 bochor|paach bochor)/i.test(text)) {
    slots.passport_validity_years = 5;
  }

  // 5. NID Correction Count Slots
  if (/(1ম|১ম|1st|first|প্রথম|একবার|ekbar)/i.test(text)) {
    slots.correction_count = 1;
  } else if (/(2য়|2য়|২য়|২য়|2nd|second|দ্বিতীয়|দ্বিতীয়|দুইবার|duibar)/i.test(text)) {
    slots.correction_count = 2;
  } else if (/(3য়|3য়|৩য়|৩য়|3rd|third|তৃতীয়|তৃতীয়|তিনবার|tinbar)/i.test(text)) {
    slots.correction_count = 3;
  }

  return slots;
}

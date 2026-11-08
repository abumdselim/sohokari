import { ServiceRecord } from '../../types/service';

export const biwtaRiverGhatPassengerTollRatesService: ServiceRecord = {
  id: 'bd-biwta-river-ghat-passenger-toll-rates',
  slug: 'bd-biwta-river-ghat-passenger-toll-rates',
  category_id: 'citizen_general',
  name_bn: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ নির্দেশিকা',
  name_en: 'BIWTA River Passenger Ghat Jetty Official Toll Rates & Extortion Prevention Guide',
  responsible_ministry_bn: 'বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষ (BIWTA)',
  responsible_ministry_en: 'বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষ (BIWTA)',
  responsible_agency_bn: 'বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষ (BIWTA)',
  responsible_agency_en: 'বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষ (BIWTA)',
  visiting_office_level: 'district',
  official_portal_url: 'https://biwta.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://biwta.gov.bd',
  legal_basis: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'biwta river passenger ghat jetty official toll rates & extortion prevention guide', language: 'en', weight: 1.0 },
    { alias: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ', language: 'bn', weight: 0.95 },
    { alias: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'biwta river ghat passenger toll rates', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-biwta-river-ghat-passenger-toll-rates-standard',
      variant_name_bn: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'BIWTA River Passenger Ghat Jetty Official Toll Rates & Extortion Prevention Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'লঞ্চ টার্মিনাল সাধারণ যাত্রী প্রবেশ টোল',
          fee_type_en: 'লঞ্চ টার্মিনাল সাধারণ যাত্রী প্রবেশ টোল',
          amount_bdt: 5.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকার নির্ধারিত টার্মিনাল এন্ট্রি ফি মাত্র ৫ টাকা।'
        },
        {
          fee_type_bn: 'নদী পারাপার খেয়াঘাট যাত্রী টোল',
          fee_type_en: 'নদী পারাপার খেয়াঘাট যাত্রী টোল',
          amount_bdt: 2.0,
          effective_date: '2022-01-01',
          notes_bn: 'খেয়া পারাপারে সরকার নির্ধারিত জনপ্রতি টোল মাত্র ২ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'যাত্রী টিকিট বা লঞ্চের ভ্রমণ টিকিট',
          document_name_en: 'যাত্রী টিকিট বা লঞ্চের ভ্রমণ টিকিট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'যাত্রীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র (বয়স্ক/ছাত্র ছাড়ের ক্ষেত্রে)',
          document_name_en: 'যাত্রীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র (বয়স্ক/ছাত্র ছাড়ের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'টোল জমার অফিশিয়াল ইজারাদার রসিদ কপি (চাঁদাবাজি প্রমাণে)',
          document_name_en: 'টোল জমার অফিশিয়াল ইজারাদার রসিদ কপি (চাঁদাবাজি প্রমাণে)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'টার্মিনাল বা ঘাটের নোটিশ বোর্ডে সরকারি রেট চার্ট দেখা',
          instruction_bn: 'প্রতিটি অনুমোদিত ঘাটে বিআইডব্লিউটিএ-এর অনুমোদিত টোল চার্ট টাঙানো থাকা বাধ্যতামূলক। চার্টের বেশি এক পয়সাও দেবেন না।',
          warning_bn: 'ইজারাদাররা ইচ্ছামতো ১০-২০ টাকা চাইলে প্রতিবাদ করুন।',
          action_url: 'https://biwta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'গেট পাস বা টোল টিকিট সংগ্রহ',
          instruction_bn: '৫ টাকার সরকারি টিকিট কেটে টার্মিনালে প্রবেশ করুন এবং টিকিটটি নিজের কাছে রাখুন।',
          warning_bn: 'কুলি বা লেবার জোর করে মালামাল টেনে টাকা দাবি করতে পারে না।',
          action_url: 'https://biwta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অতিরিক্ত চাঁদাবাজির বিরুদ্ধে অভিযোগ',
          instruction_bn: 'অতিরিক্ত অর্থ দাবি করলে ঘাটে দায়িত্বরত নৌ পুলিশ বা বিআইডব্লিউটিএ পরিবহন পরিদর্শকের রুমে গিয়ে তাৎক্ষণিক অভিযোগ জানান।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://biwta.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ঘাটে অতিরিক্ত টোল আদায় চাঁদাবাজির শামিল। কোনো ইজারাদার জোর খাটালে তাৎক্ষণিক নৌ পুলিশ হেল্পলাইন অথবা ৯৯৯ এ কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://biwta.gov.bd'
    }
  ]
};

import { ServiceRecord } from '../../types/service';

export const disasterReliefCorrugatedTinHousingGrantService: ServiceRecord = {
  id: 'bd-disaster-relief-corrugated-tin-housing-grant',
  slug: 'bd-disaster-relief-corrugated-tin-housing-grant',
  category_id: 'social_welfare',
  name_bn: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান নির্দেশিকা',
  name_en: 'Disaster Affected Families Govt Corrugated Tin & Housing Cash Grant Guide',
  responsible_ministry_bn: 'দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয় ও জেলা প্রশাসন',
  responsible_ministry_en: 'দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয় ও জেলা প্রশাসন',
  responsible_agency_bn: 'দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয় ও জেলা প্রশাসন',
  responsible_agency_en: 'দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয় ও জেলা প্রশাসন',
  visiting_office_level: 'district',
  official_portal_url: 'https://modmr.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://modmr.gov.bd',
  legal_basis: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'disaster affected families govt corrugated tin & housing cash grant guide', language: 'en', weight: 1.0 },
    { alias: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান', language: 'bn', weight: 0.95 },
    { alias: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান ফি', language: 'bn', weight: 0.95 },
    { alias: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'disaster relief corrugated tin housing grant', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-disaster-relief-corrugated-tin-housing-grant-standard',
      variant_name_bn: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Disaster Affected Families Govt Corrugated Tin & Housing Cash Grant Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'ত্রাণ ও ঢেউটিন অনুদান আবেদন ফি',
          fee_type_en: 'ত্রাণ ও ঢেউটিন অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারের সম্পূর্ণ ফ্রি দুর্যোগ সহায়তা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা (PIO) বা ইউএনও বরাবর আবেদনপত্র',
          document_name_en: 'উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা (PIO) বা ইউএনও বরাবর আবেদনপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ক্ষতিগ্রস্ত বাড়ির স্পষ্ট ছবি (অগ্নিকাণ্ড বা ভাঙনের চিত্র)',
          document_name_en: 'ক্ষতিগ্রস্ত বাড়ির স্পষ্ট ছবি (অগ্নিকাণ্ড বা ভাঙনের চিত্র)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলর কর্তৃক \'সম্পূর্ণ ক্ষতিগ্রস্ত\' প্রত্যয়নপত্র',
          document_name_en: 'ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলর কর্তৃক \'সম্পূর্ণ ক্ষতিগ্রস্ত\' প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ইউপি চেয়ারম্যানের প্রত্যয়ন ও ছবিসহ ইউএনও অফিসে আবেদন',
          instruction_bn: 'ঘটনার পরপরই উপজেলা নির্বাহী কর্মকর্তা (UNO) বা উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা (PIO) এর নিকট আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি পিআইও অফিসে যোগাযোগ করুন।',
          action_url: 'https://modmr.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'পিআইও ও ট্যাগ অফিসার কর্তৃক সরেজমিন ক্ষয়ক্ষতি যাচাই',
          instruction_bn: 'সরকারি দল সরেজমিনে ধ্বংসপ্রাপ্ত বাড়ি পরিদর্শন করে তালিকার অনুমোদন দেবেন।',
          warning_bn: 'তদন্তে অবৈধ সুবিধা চাওয়া দণ্ডনীয় অপরাধ।',
          action_url: 'https://modmr.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি গুদাম থেকে ঢেউটিন ও নগদ অর্থের চেক হস্তান্তর',
          instruction_bn: 'উপজেলা পরিষদ থেকে সরাসরি ক্ষতিগ্রস্ত পরিবারপ্রধানের হাতে সরকারি ঢেউটিনের বান্ডিল ও ব্যাংকের চেক তুলে দেওয়া হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://modmr.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দুর্যোগপীড়িত নিঃস্ব মানুষের ত্রাণের টিন বা টাকা আত্মসাৎ করা মারাত্মক ফৌজদারি অপরাধ। কোনো মেম্বার বা দালাল ত্রাণের টিনের বদলে টাকা দাবি করলে সরাসরি জেলা প্রশাসক বা দুদক হেল্পলাইন ১০৬ এ অভিযোগ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://modmr.gov.bd'
    }
  ]
};

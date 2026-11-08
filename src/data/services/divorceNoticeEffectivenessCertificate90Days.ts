import { ServiceRecord } from '../../types/service';

export const divorceNoticeEffectivenessCertificate90DaysService: ServiceRecord = {
  id: 'bd-divorce-notice-effectiveness-certificate-90-days',
  slug: 'bd-divorce-notice-effectiveness-certificate-90-days',
  category_id: 'legal_judiciary',
  name_bn: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র নির্দেশিকা',
  name_en: 'Legal Divorce Notice & 90 Days Divorce Effectiveness Certificate Official Guide',
  responsible_ministry_bn: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও ইউনিয়ন পরিষদ',
  responsible_ministry_en: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও ইউনিয়ন পরিষদ',
  responsible_agency_bn: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও ইউনিয়ন পরিষদ',
  responsible_agency_en: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও ইউনিয়ন পরিষদ',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://lgd.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://lgd.gov.bd',
  legal_basis: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'legal divorce notice & 90 days divorce effectiveness certificate official guide', language: 'en', weight: 1.0 },
    { alias: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র', language: 'bn', weight: 0.95 },
    { alias: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র ফি', language: 'bn', weight: 0.95 },
    { alias: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'divorce notice effectiveness certificate 90 days', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-divorce-notice-effectiveness-certificate-90-days-standard',
      variant_name_bn: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Legal Divorce Notice & 90 Days Divorce Effectiveness Certificate Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 90,
      fees: [
        {
          fee_type_bn: 'তালাকের নোটিশ এন্ট্রি ফি (সালিশি কাউন্সিল)',
          fee_type_en: 'তালাকের নোটিশ এন্ট্রি ফি (সালিশি কাউন্সিল)',
          amount_bdt: 100.0,
          effective_date: '2022-01-01',
          notes_bn: 'আদর্শ কর তফসিল অনুযায়ী ১০০ থেকে ৩০০ টাকা।'
        },
        {
          fee_type_bn: 'তালাক কার্যকারিতা সনদপত্র ফি',
          fee_type_en: 'তালাক কার্যকারিতা সনদপত্র ফি',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: '৯০ দিন পর সনদ গ্রহণের সরকারি ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'রেজিস্ট্রি ডাকযোগে প্রেরিত মূল তালাকনামার নোটিশ ও পোস্টাল রিসিট',
          document_name_en: 'রেজিস্ট্রি ডাকযোগে প্রেরিত মূল তালাকনামার নোটিশ ও পোস্টাল রিসিট',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড অনুলিপি',
          document_name_en: 'মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড অনুলিপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'তালাক প্রদানকারী স্বামী বা স্ত্রীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'তালাক প্রদানকারী স্বামী বা স্ত্রীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সালিশি কাউন্সিলের শুনানিতে উপস্থিতির নোটিশের কপি',
          document_name_en: 'সালিশি কাউন্সিলের শুনানিতে উপস্থিতির নোটিশের কপি',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'স্বামী/স্ত্রী এবং স্থানীয় চেয়ারম্যান/মেয়র বরাবর নোটিশ প্রেরণ',
          instruction_bn: 'যে এলাকায় স্ত্রী বসবাস করেন সেই এলাকার ইউপি চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরকে রেজিস্ট্রি ডাকযোগে তালাকের নোটিশের এক কপি এবং অপর পক্ষকে এক কপি পাঠান।',
          warning_bn: 'পোস্টাল এডি (AD) রসিদ অত্যন্ত যত্নসহকারে সংরক্ষণ করুন।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সালিশি কাউন্সিলে সমঝোতার সুযোগ (৯০ দিনের মধ্যে)',
          instruction_bn: 'চেয়ারম্যান উভয় পক্ষকে ডেকে আপস-মীমাংসার চেষ্টা করবেন। পুনর্মিলন না হলে নোটিশ পাওয়ার ৯০ দিন পর তালাক আইনত কার্যকর হয়ে যায়।',
          warning_bn: 'দালাল বা কোনো পক্ষ সালিশে জোর খাটাতে পারে না।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিজিটাল সিলমোহরযুক্ত তালাক কার্যকারিতা সনদ সংগ্রহ',
          instruction_bn: '৯০ দিন পূর্ণ হলে চেয়ারম্যান বা আঞ্চলিক নির্বাহী কর্মকর্তার কার্যালয় থেকে নির্ধারিত সরকারি ফি দিয়ে \'তালাক কার্যকর প্রত্যয়নপত্র\' গ্রহণ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lgd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কাজি অফিস কোনো আদালত নয়। কোনো কাজি যদি বলে নোটিশ ছাড়াই তালাক সম্পন্ন হয়ে গেছে—তবে তা সম্পূর্ণ অবৈধ এবং দণ্ডবিধির ৪৯৪ ধারায় শাস্তিযোগ্য হতে পারেন। সরকারি সালিশি কাউন্সিলের কার্যকারিতা সনদ ছাড়া কোনো বিচ্ছেদ শতভাগ বৈধ নয়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lgd.gov.bd'
    }
  ]
};

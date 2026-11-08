import { ServiceRecord } from '../../types/service';

export const oneStopCrisisCenterOccService: ServiceRecord = {
  id: 'one-stop-crisis-center-occ',
  slug: 'one-stop-crisis-center-occ',
  category_id: 'social_welfare',
  name_bn: 'ওয়ান-স্টপ ক্রাইসিস সেন্টার (OCC) ও নারী ও শিশু নির্যাতন প্রতিরোধ সেবা',
  name_en: 'One-Stop Crisis Center (OCC) & Support for Women and Children Victims',
  responsible_ministry_bn: 'মহিলা ও শিশু বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Women and Children Affairs',
  responsible_agency_bn: 'নারী নির্যাতন প্রতিরোধকল্পে মাল্টিসেক্টরাল প্রোগ্রাম ও সরকারি মেডিকেল কলেজ হাসপাতালসমূহ',
  responsible_agency_en: 'Multi-Sectoral Programme on VAW & Public Medical College Hospitals',
  visiting_office_level: 'district',
  official_portal_url: 'https://mowca.gov.bd',
  helpline_number: '109',
  grievance_channel: 'https://mowca.gov.bd',
  legal_basis: 'নারী ও শিশু নির্যাতন দমন আইন ২০০০ (সংশোধিত ২০২০) এবং পারিবারিক সহিংসতা আইন ২০১০',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'occ center', language: 'en', weight: 1.0 },
    { alias: 'one stop crisis center', language: 'en', weight: 1.0 },
    { alias: 'nari nirjaton helpline', language: 'banglish', weight: 1.0 },
    { alias: 'helpline 109', language: 'banglish', weight: 1.0 },
    { alias: 'ওয়ান স্টপ ক্রাইসিস সেন্টার', language: 'bn', weight: 1.0 },
    { alias: 'নারী ও শিশু নির্যাতন সহায়তা', language: 'bn', weight: 1.0 },
    { alias: 'ওসিসি সেন্টারের সেবা', language: 'bn', weight: 1.0 },
    { alias: 'পারিবারিক সহিংসতার আইনি সহায়তা', language: 'bn', weight: 1.0 },
    { alias: '১০৯ হেল্পলাইন সেবা', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'occ-emergency-support-standard',
      variant_name_bn: 'জরুরি চিকিৎসা, ডিএনএ টেস্ট, পুলিশি নিরাপত্তা ও আইনি সহায়তা',
      variant_name_en: 'Emergency Medical, Forensic DNA, Police & Free Legal Aid',
      conditions: { type: 'emergency_welfare' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'ওসিসি জরুরি চিকিৎসাসেবা সরকারি ফি',
          fee_type_en: 'Emergency Medical Treatment Fee',
          amount_bdt: 0,
          effective_date: '2001-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        },
        {
          fee_type_bn: 'ডিএনএ ও ফরেনসিক টেস্ট এবং পুলিশি সহায়তা ফি',
          fee_type_en: 'DNA & Forensic Examination Fee',
          amount_bdt: 0,
          effective_date: '2001-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        },
        {
          fee_type_bn: 'সরকারি আইনজীবী ও মামলা পরিচালনা ফি',
          fee_type_en: 'Legal Aid & Court Lawyer Representation Fee',
          amount_bdt: 0,
          effective_date: '2001-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'কোনো কাগজপত্রের আবশ্যকতা নেই (তাৎক্ষণিক ভর্তি ও চিকিৎসা প্রদান)',
          document_name_en: 'No documents required for emergency admission & care',
          format_requirement: 'original',
          is_mandatory: false,
          condition_description_bn: 'ভিকটিমের কোনো এনআইডি বা কাগজপত্র না থাকলেও তাৎক্ষণিক সেবা দেওয়া বাধ্যতামূলক'
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'জরুরি হেল্পলাইন ১০৯ অথবা সরাসরি মেডিকেল কলেজ ওসিসিতে আগমন',
          instruction_bn: 'নির্যাতনের শিকার নারী বা শিশু অবিলম্বে ১০৯ (টোল-ফ্রি) বা ৯৯৯ নম্বরে ফোন দিন অথবা নিকটস্থ সরকারি মেডিকেল কলেজ হাসপাতালের ওয়ান-স্টপ ক্রাইসিস সেন্টারে চলে যান।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'বিনামূল্যে চিকিৎসা ও ফরেনসিক ডিএনএ পরীক্ষা সম্পন্ন',
          instruction_bn: 'বিশেষজ্ঞ চিকিৎসকের অধীনে তাৎক্ষণিক পূর্ণাঙ্গ চিকিৎসা গ্রহণ করুন এবং আইনি বিচারের সুবিধার্থে ডিএনএ ও ফরেনসিক আলামত বিনামূল্যে সংরক্ষণ করান।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'পুলিশ ডেস্কের মাধ্যমে মামলা দায়ের ও লিগ্যাল এইড আইনজীবী প্রাপ্তি',
          instruction_bn: 'ওসিসিতে সার্বক্ষণিক দায়িত্বরত নারী সাব-ইন্সপেক্টরের মাধ্যমে মামলা রুজু করান এবং সরকারের খরচে আইনজীবী নিয়োগ করে ন্যায়বিচার নিশ্চিত করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'ওসিসি (One-Stop Crisis Center)-র সকল সেবা শতভাগ বিনামূল্যে। চিকিৎসা, ওষুধ, ফরেনসিক রিপোর্ট, মামলা দায়ের কিংবা সরকারি আইনজীবী প্রাপ্তির জন্য কাউকে এক পয়সাও দিতে হয় না। ভিকটিমের পরিচয় ও গোপনীয়তা কঠোরভাবে আইন দ্বারা সুরক্ষিত।',
      content_en: 'All OCC services across medical colleges are 100% free under the law, including DNA forensics, police desk, psychological counseling, and legal aid.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'মহিলা ও শিশু বিষয়ক মন্ত্রণালয় ওসিসি সিটিজেন চার্টার',
      source_url: 'https://mowca.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};

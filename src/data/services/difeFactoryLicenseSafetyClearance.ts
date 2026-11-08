import { ServiceRecord } from '../../types/service';

export const difeFactoryLicenseSafetyClearanceService: ServiceRecord = {
  id: 'bd-dife-factory-license-safety-clearance',
  slug: 'bd-dife-factory-license-safety-clearance',
  category_id: 'citizen_general',
  name_bn: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা',
  name_en: 'DIFE Factory License & Occupational Safety Clearance Official Guide',
  responsible_ministry_bn: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE), শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  responsible_ministry_en: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE), শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_bn: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE), শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_en: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE), শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dife.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://dife.gov.bd',
  legal_basis: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'dife factory license & occupational safety clearance official guide', language: 'en', weight: 1.0 },
    { alias: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র', language: 'bn', weight: 0.95 },
    { alias: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র ফি', language: 'bn', weight: 0.95 },
    { alias: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dife factory license safety clearance', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dife-factory-license-safety-clearance-standard',
      variant_name_bn: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'DIFE Factory License & Occupational Safety Clearance Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 21,
      fees: [
        {
          fee_type_bn: 'লে-আউট প্ল্যান অনুমোদন ফি (শ্রমিক সংখ্যা অনুযায়ী)',
          fee_type_en: 'লে-আউট প্ল্যান অনুমোদন ফি (শ্রমিক সংখ্যা অনুযায়ী)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'শ্রমিক সংখ্যা ১০-৫০ জনের জন্য ১,৫০০ টাকা; ৫০ জনের বেশি হলে আনুপাতিক হারে বৃদ্ধি।'
        },
        {
          fee_type_bn: 'বার্ষিক কারখানা লাইসেন্স ফি',
          fee_type_en: 'বার্ষিক কারখানা লাইসেন্স ফি',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'কারখানার মোট অশ্বশক্তি ও শ্রমিক অনুযায়ী ৩,০০০ থেকে সর্বোচ্চ ৩০,০০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'কারখানার লে-আউট প্ল্যান ও মেশিনারিজের অবস্থান নকশা',
          document_name_en: 'কারখানার লে-আউট প্ল্যান ও মেশিনারিজের অবস্থান নকশা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ফায়ার সার্ভিসের ফায়ার লাইসেন্স সনদ',
          document_name_en: 'ফায়ার সার্ভিসের ফায়ার লাইসেন্স সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভাড়া চুক্তিপত্র অথবা কারখানার নিজস্ব জায়গার দলিল',
          document_name_en: 'ভাড়া চুক্তিপত্র অথবা কারখানার নিজস্ব জায়গার দলিল',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডিআইএফই পোর্টালে অনলাইন লাইসেন্স আবেদন',
          instruction_bn: 'https://lima.dife.gov.bd (লিমস সিস্টেম)-এ ঢুকে প্রতিষ্ঠানের তথ্য, শ্রমিকের সংখ্যা ও যন্ত্রপাতি বিবরণ দিন।',
          warning_bn: 'সব সরকারি ফি সরাসরি এ-চালানের মাধ্যমে জমা দিন।',
          action_url: 'https://lima.dife.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ডিআইএফই শ্রম পরিদর্শক দল কর্তৃক কারখানার কর্মপরিবেশ পরিদর্শন',
          instruction_bn: 'ইন্সপেক্টর দল অগ্নিনির্বাপণ ব্যবস্থা, প্রাথমিক চিকিৎসা বক্স, বায়ু চলাচল ও জরুরি নির্গমন পথ পরীক্ষা করবেন।',
          warning_bn: 'দালালের কোনো জায়গা নেই, কোনো ত্রুটি থাকলে সরাসরি অফিস প্রধানকে জানান।',
          action_url: 'https://dife.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিজিটাল ফ্যাক্টরি লাইসেন্স ডাউনলোড',
          instruction_bn: 'অনুমোদিত হলে লিমস পোর্টাল থেকে কিউআর কোড সম্বলিত ফ্যাক্টরি লাইসেন্স ডাউনলোড করা যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dife.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ডিআইএফই লাইসেন্স এখন শতভাগ ডিজিটাল ও স্বচ্ছ। দালালদের খপ্পরে পড়লে অতিরিক্ত টাকা খোয়াবেন। কোনো পরিদর্শক অনৈতিক সুবিধা চাইলে শ্রম মন্ত্রণালয়ের অভিযোগ কেন্দ্র ১৬১৩৪ এ অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dife.gov.bd'
    }
  ]
};

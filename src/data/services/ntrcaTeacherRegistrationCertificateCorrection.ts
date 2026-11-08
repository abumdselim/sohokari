import { ServiceRecord } from '../../types/service';

export const ntrcaTeacherRegistrationCertificateCorrectionService: ServiceRecord = {
  id: 'bd-ntrca-teacher-registration-certificate-correction',
  slug: 'bd-ntrca-teacher-registration-certificate-correction',
  category_id: 'citizen_general',
  name_bn: 'এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন',
  name_en: 'NTRCA Teacher Registration Certificate Correction & Duplicate Copy Guide',
  responsible_ministry_bn: 'বেসরকারি শিক্ষক নিবন্ধন ও প্রত্যয়ন কর্তৃপক্ষ (NTRCA), শিক্ষা মন্ত্রণালয়',
  responsible_ministry_en: 'বেসরকারি শিক্ষক নিবন্ধন ও প্রত্যয়ন কর্তৃপক্ষ (NTRCA), শিক্ষা মন্ত্রণালয়',
  responsible_agency_bn: 'বেসরকারি শিক্ষক নিবন্ধন ও প্রত্যয়ন কর্তৃপক্ষ (NTRCA), শিক্ষা মন্ত্রণালয়',
  responsible_agency_en: 'বেসরকারি শিক্ষক নিবন্ধন ও প্রত্যয়ন কর্তৃপক্ষ (NTRCA), শিক্ষা মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'http://www.ntrca.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'http://www.ntrca.gov.bd',
  legal_basis: 'এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন', language: 'bn', weight: 1.0 },
    { alias: 'ntrca teacher registration certificate correction & duplicate copy guide', language: 'en', weight: 1.0 },
    { alias: 'ntrca teacher registration certificate correction', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-ntrca-teacher-registration-certificate-correction-standard',
      variant_name_bn: 'এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন (সাধারণ আবেদন)',
      variant_name_en: 'NTRCA Teacher Registration Certificate Correction & Duplicate Copy Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 20,
      fees: [
        {
          fee_type_bn: 'সনদ তথ্য সংশোধন ফি',
          fee_type_en: 'সনদ তথ্য সংশোধন ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি প্রমিত ফি ৫০০ টাকা।'
        },
        {
          fee_type_bn: 'হারানো সনদের ডুপ্লিকেট (দ্বিতীয় কপি) ফি',
          fee_type_en: 'হারানো সনদের ডুপ্লিকেট (দ্বিতীয় কপি) ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ডুপ্লিকেট কপি ফি ১,০০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও এসএসসি সার্টিফিকেটের সত্যায়িত কপি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও এসএসসি সার্টিফিকেটের সত্যায়িত কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'এনটিআরসিএ মূল সনদপত্র (সংশোধনের ক্ষেত্রে) অথবা জিডি কপি (হারিয়ে গেলে)',
          document_name_en: 'এনটিআরসিএ মূল সনদপত্র (সংশোধনের ক্ষেত্রে) অথবা জিডি কপি (হারিয়ে গেলে)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পত্রিকায় প্রকাশিত হারানো বিজ্ঞপ্তি বা নাম ভুলের বিজ্ঞপ্তির মূল কাটিং',
          document_name_en: 'পত্রিকায় প্রকাশিত হারানো বিজ্ঞপ্তি বা নাম ভুলের বিজ্ঞপ্তির মূল কাটিং',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সোনালী ব্যাংকের পে-অর্ডারের মূল কপি',
          document_name_en: 'সোনালী ব্যাংকের পে-অর্ডারের মূল কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'এনটিআরসিএ সচিব বরাবর আবেদন',
          instruction_bn: 'http://www.ntrca.gov.bd সাইট থেকে নির্ধারিত আবেদন ফরম ডাউনলোড করে নির্ভুলভাবে পূরণ করুন। পে-অর্ডার ও প্রয়োজনীয় কাগজপত্র সংযুক্ত করুন।',
          warning_bn: 'আপনার রোল নম্বর, ব্যাচ ও রেজিস্ট্রেশন নম্বর সতর্কভাবে লিখুন।',
          action_url: 'http://www.ntrca.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সরাসরি এনটিআরসিএ কার্যালয়ে জমা বা রেজিস্ট্রি ডাকযোগে প্রেরণ',
          instruction_bn: 'রেড ক্রিসেন্ট বোরাক টাওয়ার, ইস্কাটন গার্ডেন রোড, ঢাকায় এনআইটিআরসিএ কাউন্টারে জমা দিন অথবা ডাকযোগে পাঠান।',
          warning_bn: 'কোনো বহিরাগত দালালের সাথে আর্থিক লেনদেন করবেন না।',
          action_url: 'http://www.ntrca.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সংশোধিত নতুন সনদ গ্রহণ',
          instruction_bn: 'যাচাই কমিটি অনুমোদন দিলে আপনাকে নতুন মুদ্রিত আসল সনদ প্রদান করা হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.ntrca.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: শিক্ষক নিবন্ধন নিয়ে কোনো অসাধু চক্রের কথায় প্রলুব্ধ হবেন না। এনটিআরসিএ সনদ সম্পূর্ণ মেধা ও সরকারি প্রক্রিয়ায় নিয়ন্ত্রিত হয়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন অফিসিয়াল পোর্টাল',
      source_url: 'http://www.ntrca.gov.bd'
    }
  ]
};

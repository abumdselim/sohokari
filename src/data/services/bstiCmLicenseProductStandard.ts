import { ServiceRecord } from '../../types/service';

export const bstiCmLicenseProductStandardService: ServiceRecord = {
  id: 'bd-bsti-cm-license-product-standard',
  slug: 'bd-bsti-cm-license-product-standard',
  category_id: 'citizen_general',
  name_bn: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা',
  name_en: 'BSTI Product Quality Certification Marks (CM License) Official Guide',
  responsible_ministry_bn: 'বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশন (BSTI), শিল্প মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশন (BSTI), শিল্প মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশন (BSTI), শিল্প মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশন (BSTI), শিল্প মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://bsti.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://bsti.gov.bd',
  legal_basis: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bsti product quality certification marks (cm license) official guide', language: 'en', weight: 1.0 },
    { alias: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স', language: 'bn', weight: 0.95 },
    { alias: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'bsti cm license product standard', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-bsti-cm-license-product-standard-standard',
      variant_name_bn: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'BSTI Product Quality Certification Marks (CM License) Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'সিএম লাইসেন্স প্রাথমিক আবেদন ফি',
          fee_type_en: 'সিএম লাইসেন্স প্রাথমিক আবেদন ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি আবেদনের সরকারি ফি ১,০০০ টাকা (+১৫% ভ্যাট)।'
        },
        {
          fee_type_bn: 'ল্যাবরেটরি পরীক্ষণ ফি (পণ্যভেদে নির্ধারিত)',
          fee_type_en: 'ল্যাবরেটরি পরীক্ষণ ফি (পণ্যভেদে নির্ধারিত)',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'খাদ্য ও কেমিক্যালের রাসায়নিক টেস্ট ফি ৩,০০০ থেকে ১০,০০০ টাকা।'
        },
        {
          fee_type_bn: 'বার্ষিক মার্কিং ফি (Marking Fee)',
          fee_type_en: 'বার্ষিক মার্কিং ফি (Marking Fee)',
          amount_bdt: 0.1,
          effective_date: '2022-01-01',
          notes_bn: 'মোট বিক্রয় মূল্যের ০.০৭% থেকে ০.১০% অথবা পণ্যের বাৎসরিক সর্বনিম্ন ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিআইএন সার্টিফিকেট',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিআইএন সার্টিফিকেট',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ট্রেডমার্ক রেজিস্ট্রেশন বা ট্রেডমার্ক প্রাপ্তির আবেদনপত্রের কপি',
          document_name_en: 'ট্রেডমার্ক রেজিস্ট্রেশন বা ট্রেডমার্ক প্রাপ্তির আবেদনপত্রের কপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'কারখানার লে-আউট প্ল্যান ও প্রস্তুত প্রক্রিয়ার প্রবাহচিত্র (Flow Chart)',
          document_name_en: 'কারখানার লে-আউট প্ল্যান ও প্রস্তুত প্রক্রিয়ার প্রবাহচিত্র (Flow Chart)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'কোয়ালিটি কন্ট্রোল যন্ত্রপাতি ও ল্যাব টেকনিশিয়ানের বিবরণ',
          document_name_en: 'কোয়ালিটি কন্ট্রোল যন্ত্রপাতি ও ল্যাব টেকনিশিয়ানের বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিএসটিআই অনলাইন পোর্টালে ই-সিএম আবেদন',
          instruction_bn: 'https://bsti.gov.bd পোর্টালে গিয়ে \'e-CM System\'-এ উদ্যোক্তা প্রোফাইল খুলুন। পণ্যের বিডিএস (BDS) স্ট্যান্ডার্ড অনুযায়ী আবেদন ফরম পূরণ করুন।',
          warning_bn: 'পণ্যের মোড়কে প্রয়োজনীয় লেবেলিং নীতিমালা মেনে চলুন।',
          action_url: 'https://bsti.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কারখানা পরিদর্শন ও পণ্যের নমুনা সংগ্রহ',
          instruction_bn: 'বিএসটিআই কর্মকর্তা কারখানা পরিদর্শন করে উৎপাদন প্রক্রিয়া দেখবেন এবং তিনটি সিলযুক্ত নমুনা ল্যাবে পরীক্ষার জন্য সংগ্রহ করবেন।',
          warning_bn: 'পরীক্ষক কর্মকর্তাকে কোনো নগদ অর্থ দেওয়া আইনত নিষিদ্ধ।',
          action_url: 'https://bsti.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ল্যাব রিপোর্ট ও সিএম লাইসেন্স প্রদান',
          instruction_bn: 'বিএসটিআই ন্যাশনাল ল্যাবে নমুনা পাস হলে আপনাকে কিউআর কোডযুক্ত আসল সিএম লাইসেন্স দেওয়া হবে যা ৩ বছর মেয়াদে বৈধ থাকে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bsti.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিএসটিআই লাইসেন্স করে দেওয়ার নামে মধ্যস্থতাকারীরা নকল সনদপত্র বানিয়ে দেয়। বাজারে ভ্রাম্যমাণ আদালত বিএসটিআই লাইসেন্স বারকোড স্ক্যান করে ভুয়া প্রমাণ পেলে প্রতিষ্ঠান সিলগালা ও জেল জরিমানা করে। শুধুমাত্র অফিশিয়াল পোর্টালে সরাসরি আবেদন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bsti.gov.bd'
    }
  ]
};

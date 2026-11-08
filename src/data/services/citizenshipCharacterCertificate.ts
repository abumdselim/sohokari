import { ServiceRecord } from '../../types/service';

export const citizenshipCharacterCertificateService: ServiceRecord = {
  id: 'citizenship-character-certificate',
  slug: 'citizenship-character-certificate',
  category_id: 'civil_registration',
  name_bn: 'ইউনিয়ন পরিষদ ও ওয়ার্ড কাউন্সিলর নাগরিকত্ব ও চারিত্রিক সনদপত্র',
  name_en: 'Union Parishad & Ward Councillor Citizenship and Character Certificate',
  responsible_ministry_bn: 'স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Local Government, Rural Development and Cooperatives',
  responsible_agency_bn: 'ইউনিয়ন পরিষদ / পৌরসভা / সিটি কর্পোরেশন ওয়ার্ড কার্যালয়',
  responsible_agency_en: 'Union Parishad / Pourashava / City Corporation Ward Office',
  visiting_office_level: 'union',
  official_portal_url: 'https://lgd.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://lgd.gov.bd',
  legal_basis: 'স্থানীয় সরকার (ইউনিয়ন পরিষদ/পৌরসভা/সিটি কর্পোরেশন) আইন ২০০৯',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'citizenship certificate', language: 'en', weight: 1.0 },
    { alias: 'character certificate', language: 'en', weight: 1.0 },
    { alias: 'nagorikotwo shonod', language: 'banglish', weight: 1.0 },
    { alias: 'charitrik shonod', language: 'banglish', weight: 1.0 },
    { alias: 'councilor certificate', language: 'banglish', weight: 1.0 },
    { alias: 'নাগরিকত্ব সনদপত্র ফি', language: 'bn', weight: 1.0 },
    { alias: 'চারিত্রিক সনদপত্র নেওয়ার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'কাউন্সিলর প্রত্যয়ন পত্র', language: 'bn', weight: 1.0 },
    { alias: 'চেয়ারম্যানের নাগরিকত্ব সনদ', language: 'bn', weight: 1.0 },
    { alias: 'চারিত্রিক সনদ পেতে কি লাগে', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'citizenship-char-cert-standard',
      variant_name_bn: 'নাগরিকত্ব ও চারিত্রিক প্রত্যয়নপত্র সংগ্রহ',
      variant_name_en: 'Citizenship and Character Certificate Collection',
      conditions: { type: 'standard' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'সরকারি নির্ধারিত রসিদ ফি',
          fee_type_en: 'Government Receipt Fee',
          amount_bdt: 30,
          effective_date: '2015-01-01',
          notes_bn: 'ইউনিয়ন পরিষদে ২০-৩০ টাকা, পৌরসভা/সিটি কর্পোরেশনে সর্বোচ্চ ৫০ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ',
          document_name_en: 'Applicant NID or digital birth certificate',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা ও মাতার জাতীয় পরিচয়পত্রের কপি',
          document_name_en: 'Parents NID copies',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাসার হালনাগাদ হোল্ডিং ট্যাক্স পরিশোধের রসিদ বা বিদ্যুৎ বিল',
          document_name_en: 'Holding tax receipt or utility bill of residence',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজের রঙিন ছবি (১ কপি)',
          document_name_en: 'Passport size color photograph (1 copy)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'কাউন্সিলর বা ইউপি কার্যালয়ে আবেদন',
          instruction_bn: 'সংশ্লিষ্ট ওয়ার্ড কাউন্সিলর বা ইউনিয়ন পরিষদ কার্যালয়ে গিয়ে নির্ধারিত আবেদন ফর্মে তথ্য পূরণ করে নথিপত্র সংযুক্ত করুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'সদস্য/কাউন্সিলর কর্তৃক শনাক্তকরণ',
          instruction_bn: 'সংশ্লিষ্ট ইউপি সদস্য বা ওয়ার্ড মেম্বার/কাউন্সিলর আবেদনকারীকে ওই এলাকার স্থায়ী বাসিন্দা এবং সুনামের অধিকারী হিসেবে প্রত্যয়ন করবেন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'সনদপত্র ও অফিসিয়াল সিলমোহর গ্রহণ',
          instruction_bn: 'চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের মূল স্বাক্ষর ও অফিসিয়াল গোল সিলমোহরযুক্ত নাগরিকত্ব ও চারিত্রিক সনদপত্র রসিদসহ সংগ্রহ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'নাগরিকত্ব বা চারিত্রিক সনদের জন্য কোনো মধ্যস্বত্বভোগী বা দালালের সহায়তা নেবেন না। অফিস কাউন্টারে সরকার নির্ধারিত রসিদ ফি (সর্বোচ্চ ২০-৫০ টাকা) দিয়ে সরাসরি ১ ঘণ্টার মধ্যে এই সনদ নেওয়া যায়। কোনো অতিরিক্ত অর্থ দাবি করা হলে সরাসরি সংশ্লিষ্ট নির্বাহী কর্মকর্তার কাছে অভিযোগ করুন।',
      content_en: 'Citizenship and character certificates are issued directly by the local Ward or UP office for a nominal receipt fee of 20-50 BDT. Never pay brokers.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'স্থানীয় সরকার বিভাগ সিটিজেন চার্টার ও নাগরিক সেবা নির্দেশিকা',
      source_url: 'https://lgd.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};

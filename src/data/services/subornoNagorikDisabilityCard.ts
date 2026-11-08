import { ServiceRecord } from '../../types/service';

export const subornoNagorikDisabilityCardService: ServiceRecord = {
  id: 'suborno-nagorik-disability-card',
  slug: 'suborno-nagorik-disability-card',
  category_id: 'social_welfare',
  name_bn: 'সুবর্ণ নাগরিক কার্ড / ডিজিটাল প্রতিবন্ধী স্মার্ট পরিচয়পত্র',
  name_en: 'Suborno Nagorik Card (Digital Disability Smart Identity Card)',
  responsible_ministry_bn: 'সমাজকল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Social Welfare',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর (DSS) ও উপজেলা সমাজসেবা কার্যালয়',
  responsible_agency_en: 'Department of Social Services & Upazila Social Services Office',
  visiting_office_level: 'upazila',
  official_portal_url: 'http://dis.gov.bd',
  helpline_number: '1098',
  grievance_channel: 'http://dss.gov.bd',
  legal_basis: 'প্রতিবন্ধী ব্যক্তির অধিকার ও সুরক্ষা আইন ২০১৩',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'suborno nagorik card', language: 'banglish', weight: 1.0 },
    { alias: 'disability id card', language: 'en', weight: 1.0 },
    { alias: 'protibondhi card', language: 'banglish', weight: 1.0 },
    { alias: 'suborno card kivabe pabo', language: 'banglish', weight: 1.0 },
    { alias: 'সুবর্ণ নাগরিক কার্ড করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'প্রতিবন্ধী পরিচয়পত্র', language: 'bn', weight: 1.0 },
    { alias: 'প্রতিবন্ধী স্মার্ট কার্ড ফি', language: 'bn', weight: 1.0 },
    { alias: 'ডিজিটাল প্রতিবন্ধী কার্ড', language: 'bn', weight: 1.0 },
    { alias: 'সুবর্ণ কার্ড পেতে কি লাগে', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'suborno-card-issuance-standard',
      variant_name_bn: 'ডিজিটাল সুবর্ণ নাগরিক স্মার্ট কার্ড ইস্যু',
      variant_name_en: 'Digital Suborno Nagorik Smart Card Issuance',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'সুবর্ণ নাগরিক কার্ড সরকারি ফি',
          fee_type_en: 'Disability Smart Card Government Fee',
          amount_bdt: 0,
          effective_date: '2013-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রতিবন্ধী ব্যক্তির অনলাইন জন্ম সনদ বা জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'Digital Birth Certificate or NID of applicant',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'উপজেলা স্বাস্থ্য কমপ্লেক্সের মেডিকেল অফিসারের প্রত্যয়নপত্র / রিপোর্ট',
          document_name_en: 'Medical Assessment Report by Government Medical Officer',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর পাসপোর্ট সাইজের স্পষ্ট রঙিন ছবি (৩ কপি)',
          document_name_en: 'Passport size color photographs (3 copies)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা/মাতা বা অভিভাবকের জাতীয় পরিচয়পত্রের কপি',
          document_name_en: 'Parents / Guardian NID copy',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'dis.gov.bd পোর্টালে নিবন্ধন',
          instruction_bn: 'প্রতিবন্ধিতা শনাক্তকরণ জরিপ পোর্টালে (dis.gov.bd) প্রবেশ করে এনআইডি/জন্ম সনদ নম্বর দিয়ে আবেদন ফর্ম পূরণ করুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'মেডিকেল বোর্ডের সামনে উপস্থিতি ও মূল্যায়ন',
          instruction_bn: 'উপজেলা সমাজসেবা কার্যালয়ে যোগাযোগ করে নির্ধারিত তারিখে উপজেলা মেডিকেল অফিসার কর্তৃক শারীরিক অবস্থা ও প্রতিবন্ধিতার মাত্রা যাচাই সম্পন্ন করান।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'সুবর্ণ নাগরিক কার্ড সংগ্রহ',
          instruction_bn: 'যাচাই শেষে উপজেলা সমাজসেবা অফিস থেকে কিউআর কোডযুক্ত ডিজিটাল সুবর্ণ নাগরিক স্মার্ট কার্ড বিনামূল্যে সংগ্রহ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সুবর্ণ নাগরিক কার্ড পেতে কোনো প্রকার টাকা দিতে হয় না। এটি সমাজসেবা অধিদপ্তরের সম্পূর্ণ বিনামূল্যে সেবা। এই কার্ডটি থাকলে প্রতিবন্ধী মাসিক ভাতা, বিনামূল্যে চিকিৎসা ও শিক্ষাবৃত্তি পাওয়া যায়। কোনো দালাল বা মধ্যস্বত্বভোগীকে টাকা দেওয়া থেকে বিরত থাকুন।',
      content_en: 'Suborno Nagorik Card is 100% free. It is a mandatory prerequisite to access monthly government disability allowances, free medical care, and stipends.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'সমাজসেবা অধিদপ্তর সিটিজেন চার্টার ও প্রতিবন্ধী সুরক্ষা নির্দেশিকা',
      source_url: 'http://dis.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};

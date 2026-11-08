import { ServiceRecord } from '../../types/service';

export const disabilityStudentEducationStipendService: ServiceRecord = {
  id: 'bd-disability-student-education-stipend',
  slug: 'bd-disability-student-education-stipend',
  category_id: 'citizen_general',
  name_bn: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা',
  name_en: 'Government Education Stipend for Students with Disabilities Application Guide',
  responsible_ministry_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dss.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dss.gov.bd',
  legal_basis: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'government education stipend for students with disabilities application guide', language: 'en', weight: 1.0 },
    { alias: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন', language: 'bn', weight: 0.95 },
    { alias: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'disability student education stipend', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-disability-student-education-stipend-standard',
      variant_name_bn: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Government Education Stipend for Students with Disabilities Application Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'উপবৃত্তি আবেদন সরকারি ফি',
          fee_type_en: 'উপবৃত্তি আবেদন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবেদনের জন্য কোনো ফি বা টাকা দিতে হয় না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সমাজসেবা অধিদপ্তর কর্তৃক প্রদত্ত \'সুবর্ণ নাগরিক\' প্রতিবন্ধী পরিচয়পত্র (DIS কার্ড)',
          document_name_en: 'সমাজসেবা অধিদপ্তর কর্তৃক প্রদত্ত \'সুবর্ণ নাগরিক\' প্রতিবন্ধী পরিচয়পত্র (DIS কার্ড)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক অধ্যয়নরত থাকার প্রত্যয়নপত্র',
          document_name_en: 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক অধ্যয়নরত থাকার প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল একাউন্ট',
          document_name_en: 'শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল একাউন্ট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি',
          document_name_en: 'শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সুবর্ণ নাগরিক আইডি সংগ্রহ',
          instruction_bn: 'নিকটস্থ উপজেলা সমাজসেবা কার্যালয়ে গিয়ে বিনামূল্যে প্রতিবন্ধী কার্ড (সুবর্ণ নাগরিক) গ্রহণ করুন।',
          warning_bn: 'কার্ড তৈরিতে কোনো ফি লাগে না।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'শিক্ষা প্রতিষ্ঠান বা সমাজসেবা অফিসে আবেদন',
          instruction_bn: 'বিদ্যালয়ের প্রধান শিক্ষকের প্রত্যয়নসহ সমাজসেবা পোর্টালে উপবৃত্তির জন্য আবেদন করুন।',
          warning_bn: 'মোবাইল ওয়ালেট নম্বরটি অভিভাবকের নিজের এনআইডি দিয়ে নিবন্ধিত হতে হবে।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'মোবাইল ওয়ালেটে নিয়মিত উপবৃত্তি লাভ',
          instruction_bn: 'প্রাথমিকে মাসিক ৭৫০ টাকা, মাধ্যমিকে ৮০০ টাকা, উচ্চমাধ্যমিকে ৯০০ টাকা এবং স্নাতক/স্নাতকোত্তর স্তরে মাসিক ১,৩০০ টাকা হারে প্রতি ৩ মাস পর পর সরাসরি মোবাইলে টাকা চলে আসবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dss.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিশেষ শিশুদের উপবৃত্তি পাওয়া তাদের নাগরিক অধিকার। কোনো শিক্ষক বা অফিস সহকারী উপবৃত্তি মঞ্জুরের জন্য টাকা দাবি করলে অবিলম্বে উপজেলা নির্বাহী কর্মকর্তা বা জাতীয় হেল্পলাইন ১০৯৮-এ অভিযোগ দায়ের করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dss.gov.bd'
    }
  ]
};

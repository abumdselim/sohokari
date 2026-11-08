import { ServiceRecord } from '../../types/service';

export const pmeatPmEducationTrustStudentGrantService: ServiceRecord = {
  id: 'bd-pmeat-pm-education-trust-student-grant',
  slug: 'bd-pmeat-pm-education-trust-student-grant',
  category_id: 'citizen_general',
  name_bn: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা',
  name_en: 'PM Education Assistance Trust Financial Aid for Underprivileged Students Guide',
  responsible_ministry_bn: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট, শিক্ষা মন্ত্রণালয়',
  responsible_ministry_en: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট, শিক্ষা মন্ত্রণালয়',
  responsible_agency_bn: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট, শিক্ষা মন্ত্রণালয়',
  responsible_agency_en: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট, শিক্ষা মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://pmeat.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://pmeat.gov.bd',
  legal_basis: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'pm education assistance trust financial aid for underprivileged students guide', language: 'en', weight: 1.0 },
    { alias: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান', language: 'bn', weight: 0.95 },
    { alias: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান ফি', language: 'bn', weight: 0.95 },
    { alias: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'pmeat pm education trust student grant', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-pmeat-pm-education-trust-student-grant-standard',
      variant_name_bn: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'PM Education Assistance Trust Financial Aid for Underprivileged Students Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'শিক্ষা অনুদান আবেদন ফি',
          fee_type_en: 'শিক্ষা অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবেদনের জন্য কোনো ফি বা টাকা দিতে হয় না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রদত্ত প্রত্যায়নপত্র',
          document_name_en: 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রদত্ত প্রত্যায়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি',
          document_name_en: 'শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা/মাতা বা অভিভাবকের এনআইডি ও বাৎসরিক আয়ের প্রত্যয়নপত্র (ইউপি চেয়ারম্যান কর্তৃক)',
          document_name_en: 'পিতা/মাতা বা অভিভাবকের এনআইডি ও বাৎসরিক আয়ের প্রত্যয়নপত্র (ইউপি চেয়ারম্যান কর্তৃক)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল নম্বর',
          document_name_en: 'শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'শিক্ষা সহায়তা ট্রাস্টের পোর্টালে অনলাইন রেজিস্ট্রেশন',
          instruction_bn: 'https://eservice.pmeat.gov.bd পোর্টালে ঢুকে নিজের নাম, শিক্ষা প্রতিষ্ঠান ও পিতা-মাতার আয়ের তথ্য দিয়ে ফরম পূরণ করুন।',
          warning_bn: 'মোবাইল নম্বরটি অবশ্যই নিজের এনআইডি দিয়ে বায়োমেট্রিক হওয়া আবশ্যক।',
          action_url: 'https://eservice.pmeat.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'শিক্ষা প্রতিষ্ঠান প্রধান কর্তৃক অনলাইনে ভেরিফিকেশন',
          instruction_bn: 'বিদ্যালয় বা কলেজের প্রধান শিক্ষক সিস্টেমে আপনার তথ্য ভেরিফাই করে ট্রাস্টে অগ্রায়ন করবেন।',
          warning_bn: 'স্কুলে কোনো অতিরিক্ত টাকা দেবেন না।',
          action_url: 'https://pmeat.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি মোবাইল ওয়ালেটে অনুদানের টাকা জমা',
          instruction_bn: 'ট্রাস্ট কর্তৃক যাচাই শেষে বাংলাদেশ ব্যাংকের মাধ্যমে সরাসরি শিক্ষার্থীর নগদ বা বিকাশ হিসাবে ৫,০০০-১০,০০০ টাকা ক্রেডিট হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://pmeat.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: প্রধানমন্ত্রীর শিক্ষা অনুদান শিক্ষার্থীদের নাগরিক অধিকার। কোনো কম্পিউটার দোকান বা শিক্ষক এই টাকা পাইয়ে দেওয়ার নামে ঘুষ দাবি করলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা বা শিক্ষা মন্ত্রণালয়ে অভিযোগ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://pmeat.gov.bd'
    }
  ]
};

import { ServiceRecord } from '../../types/service';

export const newVoterRegistrationService: ServiceRecord = {
  id: 'new-voter-registration',
  slug: 'new-voter-registration',
  category_id: 'identity_civil',
  name_bn: 'নতুন ভোটার নিবন্ধন ও এনআইডি আবেদন (ফরম-২)',
  name_en: 'New Voter Registration & First-Time NID Card (Form-2)',
  responsible_ministry_bn: 'বাংলাদেশ নির্বাচন কমিশন সচিবালয়',
  responsible_ministry_en: 'Bangladesh Election Commission Secretariat',
  responsible_agency_bn: 'জাতীয় পরিচয় নিবন্ধন অনুবিভাগ (NID Wing)',
  responsible_agency_en: 'National Identity Registration Wing',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://services.nidw.gov.bd',
  helpline_number: '105',
  grievance_channel: 'https://services.nidw.gov.bd/nid-pub/complain',
  legal_basis: 'ভোটার তালিকা আইন ২০০৯ এবং জাতীয় পরিচয়পত্র নিবন্ধন বিধিমালা ২০১৪',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'new voter registration', language: 'en', weight: 1.0 },
    { alias: 'notun voter howar niyam', language: 'banglish', weight: 1.0 },
    { alias: 'notun nid card', language: 'banglish', weight: 1.0 },
    { alias: 'first time nid apply', language: 'en', weight: 1.0 },
    { alias: 'নতুন ভোটার হওয়ার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'নতুন এনআইডি কার্ড আবেদন', language: 'bn', weight: 1.0 },
    { alias: 'ভোটার ফরম ২ পূরণ', language: 'bn', weight: 1.0 },
    { alias: '১৮ বছর পর ভোটার আবেদন ফি', language: 'bn', weight: 1.0 },
    { alias: 'নতুন ভোটার হতে কি কি লাগে', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'new-voter-adult-standard',
      variant_name_bn: '১৮ বছর বা তদূর্ধ্ব প্রাপ্তবয়স্কদের নতুন ভোটার নিবন্ধন',
      variant_name_en: 'New Adult Voter Registration (18+ Years)',
      conditions: { age_min: 18 },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'নতুন ভোটার ও এনআইডি কার্ড সরকারি ফি',
          fee_type_en: 'New Voter & First-Time NID Government Fee',
          amount_bdt: 0,
          effective_date: '2009-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: '১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (বাংলা ও ইংরেজি)',
          document_name_en: 'Digital 17-digit Birth Registration Certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID) নম্বর ও ফটোকপি',
          document_name_en: 'Parents National ID Card copies',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষাগত যোগ্যতার সনদ (এসএসসি/জেএসসি বা সমমান সনদ)',
          document_name_en: 'Educational Pass Certificate (SSC/JSC)',
          format_requirement: 'photocopy',
          is_mandatory: false,
          condition_description_bn: 'শিক্ষাগত যোগ্যতা থাকলে প্রযোজ্য'
        },
        {
          document_name_bn: 'বর্তমান ঠিকানার ইউটিলিটি বিল বা হোল্ডিং ট্যাক্স রসিদ',
          document_name_en: 'Utility Bill or Holding Tax Receipt of residence',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র',
          document_name_en: 'Citizenship certificate from Ward Councillor / UP Chairman',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'services.nidw.gov.bd পোর্টালে অনলাইন ফরম পূরণ',
          instruction_bn: 'নির্বাচন কমিশন পোর্টালে গিয়ে "নতুন ভোটার আবেদন" অপশন বেছে নিয়ে ফরম-২ সম্পূর্ণ নির্ভুলভাবে পূরণ করে আবেদন সাবমিট করুন ও প্রিন্ট কপি ডাউনলোড করুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'উপজেলা/থানা নির্বাচন অফিসে বায়োমেট্রিক প্রদান',
          instruction_bn: 'আবেদনের প্রিন্ট কপি ও প্রয়োজনীয় নথিপত্রসহ স্থানীয় উপজেলা নির্বাচন কর্মকর্তার কার্যালয়ে গিয়ে ১০ আঙুলের ছাপ, চোখের আইরিশ স্ক্যান ও ডিজিটাল ছবি দিন।'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইন ডিজিটাল এনআইডি ডাউনলোড',
          instruction_bn: 'তথ্য যাচাই ও অনুমোদন শেষে আপনার মোবাইলে এসএমএস আসবে। এরপর পোর্টাল থেকে সরাসরি আপনার ডিজিটাল এনআইডির কপি বিনামূল্যে ডাউনলোড করে ল্যামিনেট করে ব্যবহার করতে পারবেন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'নতুন ভোটার হতে কোনো টাকা লাগে না। এটি সম্পূর্ণ ফ্রি সরকারি সেবা। নির্বাচন অফিসের সামনে কোনো কম্পিউটার দোকান বা দালালকে ১ টাকাও দেবেন না। তারা কাজ দ্রুত করার মিথ্যা আশ্বাস দিয়ে ৩,০০০-৫,০০০ টাকা দাবি করে। ঘরে বসে নিজের ফোনেই ফরম পূরণ করা যায়।',
      content_en: 'First-time voter registration is 100% free under the Constitution. Never pay middlemen or computer operators.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'বাংলাদেশ নির্বাচন কমিশন সিটিজেন চার্টার ও ভোটার নিবন্ধন গাইডলাইন',
      source_url: 'https://services.nidw.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};

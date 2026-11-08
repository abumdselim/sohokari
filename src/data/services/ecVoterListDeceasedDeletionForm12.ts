import { ServiceRecord } from '../../types/service';

export const ecVoterListDeceasedDeletionForm12Service: ServiceRecord = {
  id: 'bd-ec-voter-list-deceased-deletion-form-12',
  slug: 'bd-ec-voter-list-deceased-deletion-form-12',
  category_id: 'nid_identity',
  name_bn: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) নির্দেশিকা',
  name_en: 'Deceased Voter Name Deletion from Electoral Roll Form-12 Official Guide',
  responsible_ministry_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_ministry_en: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_agency_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_agency_en: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  visiting_office_level: 'district',
  official_portal_url: 'https://nidw.gov.bd',
  helpline_number: '105',
  grievance_channel: 'https://nidw.gov.bd',
  legal_basis: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'deceased voter name deletion from electoral roll form-12 official guide', language: 'en', weight: 1.0 },
    { alias: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২)', language: 'bn', weight: 0.95 },
    { alias: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) ফি', language: 'bn', weight: 0.95 },
    { alias: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'ec voter list deceased deletion form 12', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-ec-voter-list-deceased-deletion-form-12-standard',
      variant_name_bn: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Deceased Voter Name Deletion from Electoral Roll Form-12 Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'ভোটার তালিকা থেকে নাম কর্তন সরকারি ফি',
          fee_type_en: 'ভোটার তালিকা থেকে নাম কর্তন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'নির্বাচন কমিশনে নাম কর্তনে কোনো ফি লাগে না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'ভোটার তালিকা থেকে নাম কর্তনের নির্ধারিত ফরম-১২ (Form-12)',
          document_name_en: 'ভোটার তালিকা থেকে নাম কর্তনের নির্ধারিত ফরম-১২ (Form-12)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মৃত ব্যক্তির মূল অনলাইন মৃত্যু নিবন্ধন সনদপত্র (Death Certificate)',
          document_name_en: 'মৃত ব্যক্তির মূল অনলাইন মৃত্যু নিবন্ধন সনদপত্র (Death Certificate)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মৃত ব্যক্তির মূল জাতীয় পরিচয়পত্র (NID কার্ড)',
          document_name_en: 'মৃত ব্যক্তির মূল জাতীয় পরিচয়পত্র (NID কার্ড)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'তথ্য প্রদানকারী ওয়ারিশের এনআইডি কপি ও ইউপি প্রত্যয়ন',
          document_name_en: 'তথ্য প্রদানকারী ওয়ারিশের এনআইডি কপি ও ইউপি প্রত্যয়ন',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ফরম-১২ পূরণ ও মৃত্যু সনদ সংগ্রহ',
          instruction_bn: 'ইউনিয়ন পরিষদ বা পৌরসভা থেকে অনলাইন মৃত্যু সনদ সংগ্রহ করে নির্বাচন কমিশনের ফরম-১২ পূরণ করুন।',
          warning_bn: 'ফরম জমার জন্য কোনো দালালকে টাকা দেবেন না।',
          action_url: 'https://services.nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা/থানা নির্বাচন অফিসে মূল এনআইডিসহ দাখিল',
          instruction_bn: 'সংশ্লিষ্ট উপজেলা নির্বাচন অফিসারের নিকট ফরম-১২, মৃত্যু সনদ ও মৃত ব্যক্তির মূল এনআইডি কার্ড জমা দিন।',
          warning_bn: 'রিসিভিং স্লিপ যত্নসহকারে সংগ্রহ করুন।',
          action_url: 'https://nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সেন্ট্রাল ডাটাবেজে ভোটার স্ট্যাটাস \'মৃত\' হিসেবে চিহ্নিত',
          instruction_bn: 'নির্বাচন কর্মকর্তা ডাটাবেজে স্ট্যাটাস আপডেট করে দেবেন। এর ফলে মৃত ব্যক্তির এনআইডি দিয়ে ভবিষ্যতে কেউ কোনো অবৈধ লেনদেন করতে পারবে না।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nidw.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: মৃত ব্যক্তির নাম ভোটার তালিকা থেকে বাদ দেওয়া প্রতিটি সুনাগরিকের দায়িত্ব। নির্বাচন অফিসে এই সেবায় কোনো ফি নেই। অতিরিক্ত টাকা চাইলে নির্বাচন কমিশন হেল্পলাইন ১০৫ এ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://nidw.gov.bd'
    }
  ]
};

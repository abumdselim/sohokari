import { ServiceRecord } from '../../types/service';

export const bmetRecruitingAgencyRlLicenseFraudComplaintService: ServiceRecord = {
  id: 'bd-bmet-recruiting-agency-rl-license-fraud-complaint',
  slug: 'bd-bmet-recruiting-agency-rl-license-fraud-complaint',
  category_id: 'expatriate_welfare',
  name_bn: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ নির্দেশিকা',
  name_en: 'BMET Recruiting Agency RL License Verification & Fraud Complaint Official Guide',
  responsible_ministry_bn: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://bmet.gov.bd',
  helpline_number: '16135',
  grievance_channel: 'https://bmet.gov.bd',
  legal_basis: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bmet recruiting agency rl license verification & fraud complaint official guide', language: 'en', weight: 1.0 },
    { alias: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ', language: 'bn', weight: 0.95 },
    { alias: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ ফি', language: 'bn', weight: 0.95 },
    { alias: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'bmet recruiting agency rl license fraud complaint', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-bmet-recruiting-agency-rl-license-fraud-complaint-standard',
      variant_name_bn: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'BMET Recruiting Agency RL License Verification & Fraud Complaint Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'আরএল লাইসেন্স অনলাইন যাচাই ফি',
          fee_type_en: 'আরএল লাইসেন্স অনলাইন যাচাই ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিএমইটি পোর্টালে আরএল নম্বর যাচাই সম্পূর্ণ ফ্রি।'
        },
        {
          fee_type_bn: 'এজেন্সির বিরুদ্ধে আনুষ্ঠানিক অভিযোগ দাখিল ফি',
          fee_type_en: 'এজেন্সির বিরুদ্ধে আনুষ্ঠানিক অভিযোগ দাখিল ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'অভিযোগের জন্য কোনো ফি লাগে না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'এজেন্সির নাম ও আরএল (RL) নম্বর সম্বলিত চুক্তিপত্র বা মানি রিসিট',
          document_name_en: 'এজেন্সির নাম ও আরএল (RL) নম্বর সম্বলিত চুক্তিপত্র বা মানি রিসিট',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'অভিযোগকারীর পাসপোর্ট কপি ও জাতীয় পরিচয়পত্র',
          document_name_en: 'অভিযোগকারীর পাসপোর্ট কপি ও জাতীয় পরিচয়পত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভুয়া ভিসার কপি বা প্রতারণার প্রমাণপত্র (যদি থাকে)',
          document_name_en: 'ভুয়া ভিসার কপি বা প্রতারণার প্রমাণপত্র (যদি থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'মহাপরিচালক (BMET) বরাবর লিখিত অভিযোগপত্র',
          document_name_en: 'মহাপরিচালক (BMET) বরাবর লিখিত অভিযোগপত্র',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিএমইটি পোর্টালে আরএল (RL) লাইসেন্স ভেরিফাই করা',
          instruction_bn: 'টাকা দেওয়ার আগে https://bmet.gov.bd পোর্টালে গিয়ে এজেন্সির লাইসেন্স বৈধ ও সচল কি না তা যাচাই করে নিন।',
          warning_bn: 'অননুমোদিত কোনো সাব-এজেন্ট বা দালালের হাতে টাকা দেবেন না।',
          action_url: 'https://bmet.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কাকরাইল বিএমইটি ভবনে সরাসরি অভিযোগ দাখিল',
          instruction_bn: 'প্রতারণার শিকার হলে টাকা জমার রসিদসহ বিএমইটির অভিযোগ তদন্ত শাখায় লিখিত অভিযোগ জমা দিন।',
          warning_bn: 'এজেন্সির মালিককে শুনানিতে হাজির হতে সমন দেওয়া হবে।',
          action_url: 'https://bmet.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'এজেন্সির জামানত থেকে টাকা উদ্ধার ও লাইসেন্স বাতিল',
          instruction_bn: 'অভিযোগ প্রমাণিত হলে মন্ত্রণালয় এজেন্সির ৫০ লাখ টাকার সরকারি জামানত থেকে প্রবাসীর টাকা উদ্ধার করে ফেরত দেবে এবং লাইসেন্স বাতিল করবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bmet.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো এজেন্সির সাথে লেনদেনের সময় অবশ্যই সিলযুক্ত রসিদ বা ব্যাংকিং চ্যানেল ব্যবহার করুন। কোনো অনিয়মে সরাসরি প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ অথবা আন্তর্জাতিক হটলাইন +৮৮০৯৬৫৩১৩৫১৩৫ এ যোগাযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bmet.gov.bd'
    }
  ]
};

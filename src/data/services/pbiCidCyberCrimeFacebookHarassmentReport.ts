import { ServiceRecord } from '../../types/service';

export const pbiCidCyberCrimeFacebookHarassmentReportService: ServiceRecord = {
  id: 'bd-pbi-cid-cyber-crime-facebook-harassment-report',
  slug: 'bd-pbi-cid-cyber-crime-facebook-harassment-report',
  category_id: 'law_police',
  name_bn: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা',
  name_en: 'Cyber Crime Social Media Hacking & Blackmailing Report (CID/Cyber Police) Guide',
  responsible_ministry_bn: 'পুলিশ হেডকোয়ার্টার্স, সিআইডি সাইবার পুলিশ সেন্টার ও পিবিআই',
  responsible_ministry_en: 'পুলিশ হেডকোয়ার্টার্স, সিআইডি সাইবার পুলিশ সেন্টার ও পিবিআই',
  responsible_agency_bn: 'পুলিশ হেডকোয়ার্টার্স, সিআইডি সাইবার পুলিশ সেন্টার ও পিবিআই',
  responsible_agency_en: 'পুলিশ হেডকোয়ার্টার্স, সিআইডি সাইবার পুলিশ সেন্টার ও পিবিআই',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://police.gov.bd',
  helpline_number: '999',
  grievance_channel: 'https://police.gov.bd',
  legal_basis: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'cyber crime social media hacking & blackmailing report (cid/cyber police) guide', language: 'en', weight: 1.0 },
    { alias: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police)', language: 'bn', weight: 0.95 },
    { alias: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) ফি', language: 'bn', weight: 0.95 },
    { alias: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'pbi cid cyber crime facebook harassment report', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-pbi-cid-cyber-crime-facebook-harassment-report-standard',
      variant_name_bn: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Cyber Crime Social Media Hacking & Blackmailing Report (CID/Cyber Police) Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'সাইবার অপরাধ অভিযোগ ও তদন্ত ফি',
          fee_type_en: 'সাইবার অপরাধ অভিযোগ ও তদন্ত ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাংলাদেশ পুলিশের সম্পূর্ণ ফ্রি আইনি ও তদন্ত সেবা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সাইবার অপরাধ সংক্রান্ত স্ক্রিনশট, প্রোফাইল লিংক (URL) ও মেসেজ হিস্ট্রি',
          document_name_en: 'সাইবার অপরাধ সংক্রান্ত স্ক্রিনশট, প্রোফাইল লিংক (URL) ও মেসেজ হিস্ট্রি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নিকটস্থ থানায় দায়েরকৃত জিডি বা মামলার অনুলিপি',
          document_name_en: 'নিকটস্থ থানায় দায়েরকৃত জিডি বা মামলার অনুলিপি',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'ভুক্তভোগীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র',
          document_name_en: 'ভুক্তভোগীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হ্যাকড হওয়া অ্যাকাউন্টের পূর্ববর্তী তথ্য (ইমেইল/ফোন নম্বর)',
          document_name_en: 'হ্যাকড হওয়া অ্যাকাউন্টের পূর্ববর্তী তথ্য (ইমেইল/ফোন নম্বর)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডিজিটাল আলামত সংরক্ষণ ও স্ক্রিনশট রাখা',
          instruction_bn: 'ব্ল্যাকমেইলারের প্রোফাইলের সম্পূর্ণ লিঙ্ক (URL), চ্যাট হিস্ট্রি এবং অডিও/ভিডিওর ব্যাকআপ রাখুন। কোনো আলামত ডিলিট করবেন না।',
          warning_bn: 'ব্ল্যাকমেইলারকে টাকা পাঠাবেন না।',
          action_url: 'https://police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সিআইডি সাইবার বা পুলিশ সাইবার সেন্টারে সরাসরি যোগাযোগ',
          instruction_bn: 'সিআইডি সাইবার পুলিশ হেল্পলাইন 01320010148 অথবা সাইবার সাপোর্ট ফর উইমেন হেল্পলাইন 01320000888 এ ফোন বা ইমেইল (smspc-cid@police.gov.bd) করুন।',
          warning_bn: 'নারীদের ক্ষেত্রে পরিচয় গোপন রেখে নারী পুলিশ সদস্য দিয়ে তদন্ত করা হয়।',
          action_url: 'https://cid.police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অ্যাকাউন্ট রিকভারি ও অপরাধী গ্রেফতার',
          instruction_bn: 'পুলিশ আইপি ও ডিভাইস ট্র্যাক করে কন্টেন্ট রিমুভ ও অপরাধীকে শনাক্ত করে ডিজিটাল নিরাপত্তা/সাইবার সুরক্ষা আইনে ব্যবস্থা গ্রহণ করবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://police.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ফেসবুক বা সোশ্যাল মিডিয়া অ্যাকাউন্ট ফেরত দেওয়ার নামে ফেসবুকে ছড়িয়ে থাকা ভুয়া হ্যাকারদের বিকাশ বা নগদে টাকা দেবেন না। এরা নিজেরাই প্রতারক। সরাসরি বাংলাদেশ পুলিশের সাইবার সেন্টারে ফ্রি আইনি সহায়তা নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://police.gov.bd'
    }
  ]
};

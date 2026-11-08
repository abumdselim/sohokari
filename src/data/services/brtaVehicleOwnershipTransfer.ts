import { ServiceRecord } from '../../types/service';

export const brtaVehicleOwnershipTransferService: ServiceRecord = {
  id: 'bd-brta-vehicle-ownership-transfer',
  slug: 'bd-brta-vehicle-ownership-transfer',
  category_id: 'transport_brta',
  name_bn: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা',
  name_en: 'Bangladesh BRTA Vehicle Ownership Transfer Official Procedure & Fee Guide',
  responsible_ministry_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_ministry_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_agency_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://brta.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://brta.gov.bd',
  legal_basis: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh brta vehicle ownership transfer official procedure & fee guide', language: 'en', weight: 1.0 },
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'brta vehicle ownership transfer', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-brta-vehicle-ownership-transfer-standard',
      variant_name_bn: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh BRTA Vehicle Ownership Transfer Official Procedure & Fee Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'মোটরসাইকেল মালিকানা পরিবর্তন সরকারি ফি',
          fee_type_en: 'মোটরসাইকেল মালিকানা পরিবর্তন সরকারি ফি',
          amount_bdt: 2473.0,
          effective_date: '2022-01-01',
          notes_bn: 'মালিকানা পরিবর্তন ফি + নতুন ডিজিটাল স্মার্ট রেজিস্ট্রেশন সার্টিফিকেট ফি অন্তর্ভুক্ত।'
        },
        {
          fee_type_bn: 'হালকা মোটরযান (প্রাইভেট কার/মাইক্রোবাস) মালিকানা পরিবর্তন ফি',
          fee_type_en: 'হালকা মোটরযান (প্রাইভেট কার/মাইক্রোবাস) মালিকানা পরিবর্তন ফি',
          amount_bdt: 7648.0,
          effective_date: '2022-01-01',
          notes_bn: 'মালিকানা বদল ও স্মার্ট কার্ড প্রসেসিং ফি।'
        },
        {
          fee_type_bn: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা',
          fee_type_en: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিক্রেতার নোটারি পাবলিক কর্তৃক প্রত্যায়িত হলফনামা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) বা মূল ব্লু-বুক',
          document_name_en: 'মূল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) বা মূল ব্লু-বুক',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্যাক্স টোকেন ও ফিটনেস সনদের মূল কপি',
          document_name_en: 'হালনাগাদ ট্যাক্স টোকেন ও ফিটনেস সনদের মূল কপি',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          document_name_en: 'ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ফর্ম ‘টি.ও’ (Transfer of Ownership) ও ফর্ম ‘টি.আর.ও’ (বিক্রেতার রসিদ)',
          document_name_en: 'ফর্ম ‘টি.ও’ (Transfer of Ownership) ও ফর্ম ‘টি.আর.ও’ (বিক্রেতার রসিদ)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে বিক্রেতার বিক্রয় হলফনামা (নোটারি সত্যায়িত)',
          document_name_en: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে বিক্রেতার বিক্রয় হলফনামা (নোটারি সত্যায়িত)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিএসপি পোর্টালে মালিকানা পরিবর্তনের আবেদন ও ফি পেমেন্ট',
          instruction_bn: 'https://bsp.brta.gov.bd পোর্টালে যান। \'মালিকানা বদল\' অপশনে চেসিস ও রেজিস্ট্রেশন নম্বর দিয়ে অনলাইনে নির্দিষ্ট ফি জমা দিন।',
          warning_bn: 'ট্যাক্স টোকেন যেন বকেয়া না থাকে।',
          action_url: 'https://bsp.brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ফর্ম টিও এবং টিআরও স্বাক্ষর ও হলফনামা',
          instruction_bn: 'টি.ও (Transfer Order) ফর্মে ক্রেতার স্বাক্ষর এবং টি.আর.ও (Transfer Receipt Order) ফর্মে বিক্রেতার স্বাক্ষর দিন। নোটারি পাবলিকের মাধ্যমে বিক্রেতার হলফনামা সম্পন্ন করুন।',
          warning_bn: 'ক্রেতা ও বিক্রেতার স্বাক্ষর রেজিস্ট্রেশন রেকর্ডের সাথে মিলতে হবে।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'বিআরটিএ অফিসে ক্রেতা ও বিক্রেতার সরাসরি উপস্থিতি',
          instruction_bn: 'ক্রেতা ও বিক্রেতা মূল গাড়ি ও কাগজপত্রসহ বিআরটিএ মোটরযান পরিদর্শকের সামনে উপস্থিত হন। পরিদর্শক গাড়ির চেসিস যাচাই করবেন এবং ক্রেতার বায়োমেট্রিক গ্রহণ করবেন।',
          warning_bn: 'উপস্থিতি বাধ্যতামূলক হওয়ায় দালালকে কোনো টাকা দিয়ে কাজ হবে না।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'নতুন মালিকের নামে স্মার্ট কার্ড গ্রহণ',
          instruction_bn: 'স্মার্ট কার্ড প্রস্তুত হলে এসএমএস আসবে। এরপর বিআরটিএ অফিস থেকে অথবা ডাকযোগে নতুন মালিকের নামে মুদ্রিত স্মার্ট রেজিস্ট্রেশন সার্টিফিকেট গ্রহণ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://brta.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দালালদের মাধ্যমে মালিকানা পরিবর্তন করলে বিক্রেতার ভূয়া সই দিয়ে জালিয়াতি করার ঝুঁকি থাকে যা পরবর্তীতে দুর্ঘটনা বা ফৌজদারি অপরাধে মারাত্মক আইনি বিপদ ডেকে আনে। নিজে উপস্থিত হয়ে আসল মালিকের সামনে সরাসরি মালিকানা পরিবর্তন সম্পন্ন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://brta.gov.bd'
    }
  ]
};

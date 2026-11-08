import { ServiceRecord } from '../../types/service';

export const brtaVehicleRegistrationNumberplateService: ServiceRecord = {
  id: 'bd-brta-vehicle-registration-numberplate',
  slug: 'bd-brta-vehicle-registration-numberplate',
  category_id: 'transport_brta',
  name_bn: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা',
  name_en: 'Bangladesh BRTA Motor Vehicle Registration, Digital Number Plate & RFID Tag Guide',
  responsible_ministry_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_ministry_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_agency_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://brta.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://brta.gov.bd',
  legal_basis: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh brta motor vehicle registration, digital number plate & rfid tag guide', language: 'en', weight: 1.0 },
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'brta vehicle registration numberplate', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-brta-vehicle-registration-numberplate-standard',
      variant_name_bn: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh BRTA Motor Vehicle Registration, Digital Number Plate & RFID Tag Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসি পর্যন্ত)',
          fee_type_en: 'মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসি পর্যন্ত)',
          amount_bdt: 13913.0,
          effective_date: '2022-01-01',
          notes_bn: 'রেজিস্ট্রেশন ফি + রেট্রো-রিফ্লেক্টিভ নম্বর প্লেট + আরএফআইডি ট্যাগ + ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট ও ট্যাক্স টোকেন (২ বছর) অন্তর্ভুক্ত।'
        },
        {
          fee_type_bn: 'মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসির ঊর্ধ্বে)',
          fee_type_en: 'মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসির ঊর্ধ্বে)',
          amount_bdt: 21232.0,
          effective_date: '2022-01-01',
          notes_bn: 'রেজিস্ট্রেশন ফি + নম্বর প্লেট + আরএফআইডি + ১০ বছরের ট্যাক্স টোকেন অন্তর্ভুক্ত।'
        },
        {
          fee_type_bn: 'ডিজিটাল নম্বর প্লেট ও আরএফআইডি ফি (আলাদা প্রতিস্থাপন)',
          fee_type_en: 'ডিজিটাল নম্বর প্লেট ও আরএফআইডি ফি (আলাদা প্রতিস্থাপন)',
          amount_bdt: 2260.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি চালান'
        }
      ],
      documents: [
        {
          document_name_bn: 'যানবাহন বিক্রয়কারী প্রতিষ্ঠানের বিক্রয় চালান (Sales Invoice / Gate Pass)',
          document_name_en: 'যানবাহন বিক্রয়কারী প্রতিষ্ঠানের বিক্রয় চালান (Sales Invoice / Gate Pass)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          document_name_en: 'ক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ই-টিআইএন (e-TIN) সার্টিফিকেট ও রিটার্ন জমার রশিদ',
          document_name_en: 'ই-টিআইএন (e-TIN) সার্টিফিকেট ও রিটার্ন জমার রশিদ',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'আমদানি সংক্রান্ত বিল অব এন্ট্রি ও কাস্টমস ডিউটি সনদ (আমদানিকৃত গাড়ির ক্ষেত্রে)',
          document_name_en: 'আমদানি সংক্রান্ত বিল অব এন্ট্রি ও কাস্টমস ডিউটি সনদ (আমদানিকৃত গাড়ির ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিআরটিএ সার্ভিস পোর্টালে রেজিস্ট্রেশন আবেদন',
          instruction_bn: 'https://bsp.brta.gov.bd পোর্টালে লগইন করে \'মোটরযান রেজিস্ট্রেশন\' মেনুতে যান। চেসিস নম্বর ও ইঞ্জিন নম্বর দিন।',
          warning_bn: 'শোরুমের সেলস ইনভয়েসের চেসিস নম্বরের সাথে সতর্কভাবে মিলিয়ে নিন।',
          action_url: 'https://bsp.brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'অনলাইনে নির্ধারিত সরকারি ফি পরিশোধ',
          instruction_bn: 'সিস্টেমে প্রদর্শিত সরকারি ফি বিকাশ বা ব্যাংকের মাধ্যমে সরাসরি জমা দিন। কোনো দালাল বা শোরুমের কর্মচারীকে অতিরিক্ত টাকা দেওয়ার প্রয়োজন নেই।',
          warning_bn: 'পেমেন্ট সফল হলে স্বয়ংক্রিয়ভাবে মানি রসিদ ও রেজিস্ট্রেশন ট্র্যাকিং কোড তৈরি হবে।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'যানবাহন পরিদর্শন ও বায়োমেট্রিক প্রদান',
          instruction_bn: 'নির্দিষ্ট দিনে গাড়ি/বাইক নিয়ে বিআরটিএ সার্কেল অফিসে যান। মোটরযান পরিদর্শক ফিজিক্যাল চেসিস ও ইঞ্জিন মিলিয়ে রিপোর্ট দেবেন। এরপর বায়োমেট্রিক ছবি ও আঙুলের ছাপ দিন।',
          warning_bn: 'পরিদর্শনের জন্য কোনো ফি নেই।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'ডিজিটাল নম্বর প্লেট ও আরএফআইডি ট্যাগ সংযোজন',
          instruction_bn: 'এসএমএস পাওয়ার পর বিআরটিএ বুথ থেকে আপনার গাড়িতে সরকারি সিলসহ রেট্রো-রিফ্লেক্টিভ নম্বর প্লেট এবং উইন্ডশিল্ডে আরএফআইডি ট্যাগ লাগিয়ে নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://brta.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিআরটিএ চত্বরে দালালদের ফাঁদে পড়বেন না। শোরুমের বিক্রেতারা প্রায়ই রেজিস্ট্রেশন ফির নামে ৮,০০০ থেকে ১৫,০০০ টাকা অতিরিক্ত আত্মসাৎ করে। আপনি নিজে বিএসপি পোর্টালে ফি দিয়ে সরাসরি রেজিস্ট্রেশন করতে পারেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://brta.gov.bd'
    }
  ]
};

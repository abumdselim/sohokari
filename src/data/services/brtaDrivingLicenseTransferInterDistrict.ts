import { ServiceRecord } from '../../types/service';

export const brtaDrivingLicenseTransferInterDistrictService: ServiceRecord = {
  id: 'bd-brta-driving-license-transfer-inter-district',
  slug: 'bd-brta-driving-license-transfer-inter-district',
  category_id: 'transport_brta',
  name_bn: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা',
  name_en: 'BRTA Driving License Inter-District Circle Transfer Official Guide',
  responsible_ministry_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_ministry_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_agency_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  visiting_office_level: 'district',
  official_portal_url: 'https://brta.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://brta.gov.bd',
  legal_basis: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'brta driving license inter-district circle transfer official guide', language: 'en', weight: 1.0 },
    { alias: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর', language: 'bn', weight: 0.95 },
    { alias: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর ফি', language: 'bn', weight: 0.95 },
    { alias: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'brta driving license transfer inter district', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-brta-driving-license-transfer-inter-district-standard',
      variant_name_bn: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'BRTA Driving License Inter-District Circle Transfer Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'সার্কেল স্থানান্তর আবেদন ফি',
          fee_type_en: 'সার্কেল স্থানান্তর আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'স্থানান্তর আবেদন ও এনওসির জন্য কোনো অতিরিক্ত সরকারি ফি নেই।'
        },
        {
          fee_type_bn: 'নতুন স্মার্ট কার্ড রি-ইস্যু ফি (যদি ঠিকানা সম্বলিত নতুন কার্ড নিতে চান)',
          fee_type_en: 'নতুন স্মার্ট কার্ড রি-ইস্যু ফি (যদি ঠিকানা সম্বলিত নতুন কার্ড নিতে চান)',
          amount_bdt: 875.0,
          effective_date: '2022-01-01',
          notes_bn: 'ঐচ্ছিক, পুরোনো স্মার্ট কার্ড বহাল রাখলে এই ফি লাগে না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বর্তমান মূল ড্রাইভিং লাইসেন্স (স্মার্ট কার্ড)',
          document_name_en: 'বর্তমান মূল ড্রাইভিং লাইসেন্স (স্মার্ট কার্ড)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) যাতে নতুন সার্কেল এলাকার বর্তমান/স্থায়ী ঠিকানা রয়েছে',
          document_name_en: 'জাতীয় পরিচয়পত্র (NID) যাতে নতুন সার্কেল এলাকার বর্তমান/স্থায়ী ঠিকানা রয়েছে',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নতুন এলাকার ইউপি চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র',
          document_name_en: 'নতুন এলাকার ইউপি চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সহকারী পরিচালক (ইঞ্জিঃ) বরাবর স্থানান্তর আবেদনপত্র',
          document_name_en: 'সহকারী পরিচালক (ইঞ্জিঃ) বরাবর স্থানান্তর আবেদনপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বর্তমান ইস্যুকারী সার্কেল অফিসে এনওসি (NOC) আবেদন',
          instruction_bn: 'যে সার্কেল থেকে লাইসেন্স ইস্যু হয়েছিল সেখানে আবেদন দিয়ে ছাড়পত্র (NOC) গ্রহণ করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি বিআরটিএ সহকারী পরিচালকের রুমে আবেদন জমা দিন।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'নতুন সার্কেল অফিসে ফাইল এন্ট্রি',
          instruction_bn: 'এনওসি কপি ও এনআইডিসহ নতুন সার্কেল অফিসে ফাইল এন্ট্রি করান। ডাটাবেজে আপনার সার্কেল মাইগ্রেশন সম্পন্ন হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bsp.brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'নতুন সার্কেল থেকে সেবা গ্রহণ',
          instruction_bn: 'সার্কেল ট্রান্সফার সম্পন্ন হলে পরবর্তীতে নবায়ন বা ডুপ্লিকেট সংক্রান্ত সব সেবা নতুন সার্কেল থেকেই পাওয়া যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://brta.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: লাইসেন্স ট্রান্সফারের নামে কোনো দালালকে টাকা দেবেন না। কোনো অফিসার আপত্তি জানালে সরাসরি বিআরটিএ প্রধান কার্যালয় বা অভিযোগ সেল ১৬৪৩১ এ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://brta.gov.bd'
    }
  ]
};

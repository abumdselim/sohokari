import { ServiceRecord } from '../../types/service';

export const customsEauctionCarGoodsBiddingService: ServiceRecord = {
  id: 'bd-customs-eauction-car-goods-bidding',
  slug: 'bd-customs-eauction-car-goods-bidding',
  category_id: 'tax_revenue',
  name_bn: 'কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী',
  name_en: 'Bangladesh Customs e-Auction Online Car & Goods Bidding Citizen Guide',
  responsible_ministry_bn: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_ministry_en: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_bn: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_en: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  visiting_office_level: 'division',
  official_portal_url: 'https://customs.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://customs.gov.bd',
  legal_basis: 'কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh customs e-auction online car & goods bidding citizen guide', language: 'en', weight: 1.0 },
    { alias: 'customs eauction car goods bidding', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-customs-eauction-car-goods-bidding-standard',
      variant_name_bn: 'কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Customs e-Auction Online Car & Goods Bidding Citizen Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ই-নিলাম বিডার রেজিস্ট্রেশন ফি',
          fee_type_en: 'ই-নিলাম বিডার রেজিস্ট্রেশন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'পোর্টালে রেজিস্ট্রেশনের জন্য কোনো ফি নেই।'
        },
        {
          fee_type_bn: 'দরপত্রের জামানত (Earnest Money)',
          fee_type_en: 'দরপত্রের জামানত (Earnest Money)',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিডকৃত মূল্যের সাধারণত ১০% জামানত (পণ্য না পেলে জামানত সম্পূর্ণ ফেরতযোগ্য)।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর ১২ ডিজিটের ই-টিন (e-TIN) সার্টিফিকেট ও সর্বশেষ রিটার্ন জমার কপি',
          document_name_en: 'আবেদনকারীর ১২ ডিজিটের ই-টিন (e-TIN) সার্টিফিকেট ও সর্বশেষ রিটার্ন জমার কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রতিষ্ঠানের ক্ষেত্রে ভ্যাট নিবন্ধন (BIN) ও ট্রেড লাইসেন্স',
          document_name_en: 'প্রতিষ্ঠানের ক্ষেত্রে ভ্যাট নিবন্ধন (BIN) ও ট্রেড লাইসেন্স',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'কাস্টমস নির্ধারিত ব্যাংকে জামানতের পে-অর্ডার',
          document_name_en: 'কাস্টমস নির্ধারিত ব্যাংকে জামানতের পে-অর্ডার',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'কাস্টমস ই-অকশন পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'https://eauction.customs.gov.bd পোর্টালে নিজের এনআইডি ও টিন নম্বর দিয়ে বিডার হিসেবে রেজিস্ট্রেশন করুন।',
          warning_bn: 'অনলাইনে গাড়ির লট নম্বর ও সংরক্ষিত মূল্য (Reserve Price) দেখে নিন।',
          action_url: 'https://eauction.customs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'অনলাইনে গোপন দরপত্র (Bid) দাখিল',
          instruction_bn: 'নির্ধারিত জামানতের তথ্য দিয়ে নিজের কাঙ্ক্ষিত দর অনলাইনে গোপনভাবে সাবমিট করুন।',
          warning_bn: 'কোনো সিন্ডিকেট জানতে পারবে না আপনি কত দর দিয়েছেন।',
          action_url: 'https://customs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'লট বিজয়ী হওয়া ও সরকারি ডেলিভারি গ্রহণ',
          instruction_bn: 'সর্বোচ্চ দরদাতা হলে কাস্টমস নিলাম কমিটি অনুমোদন দেবে। বাকি টাকা পরিশোধ করে কাস্টমস চত্বর থেকে গাড়ি বা পণ্য ডেলিভারি চালান বুঝে নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://customs.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কাস্টমস নিলামের নামে বাইরে কিছু প্রতারক চক্র ভুয়া টোকেন দিয়ে লাখ লাখ টাকা হাতিয়ে নেয়। কাস্টমসের কোনো নিলাম অফলাইনের দালালদের হাতে নেই; শতভাগ বিডিং শুধুমাত্র সরকারি e-Auction পোর্টাল থেকেই পরিচালিত হয়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী অফিসিয়াল পোর্টাল',
      source_url: 'https://customs.gov.bd'
    }
  ]
};

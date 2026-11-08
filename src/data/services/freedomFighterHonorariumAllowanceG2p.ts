import { ServiceRecord } from '../../types/service';

export const freedomFighterHonorariumAllowanceG2pService: ServiceRecord = {
  id: 'bd-freedom-fighter-honorarium-allowance-g2p',
  slug: 'bd-freedom-fighter-honorarium-allowance-g2p',
  category_id: 'citizen_general',
  name_bn: 'বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি)',
  name_en: 'Freedom Fighters Monthly Honorarium Allowance & Medical Aid Official Guide',
  responsible_ministry_bn: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://molwa.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://molwa.gov.bd',
  legal_basis: 'বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি) সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি)', language: 'bn', weight: 1.0 },
    { alias: 'freedom fighters monthly honorarium allowance & medical aid official guide', language: 'en', weight: 1.0 },
    { alias: 'freedom fighter honorarium allowance g2p', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-freedom-fighter-honorarium-allowance-g2p-standard',
      variant_name_bn: 'বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি) (সাধারণ আবেদন)',
      variant_name_en: 'Freedom Fighters Monthly Honorarium Allowance & Medical Aid Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ভাতা ও চিকিৎসা সহায়তা আবেদন সরকারি ফি',
          fee_type_en: 'ভাতা ও চিকিৎসা সহায়তা আবেদন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'মুক্তিযোদ্ধাদের সেবায় কোনো ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়ের সমন্বিত তালিকা ও ডিজিটাল সনদ / লাল মুক্তিবার্তা নম্বর',
          document_name_en: 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়ের সমন্বিত তালিকা ও ডিজিটাল সনদ / লাল মুক্তিবার্তা নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বীর মুক্তিযোদ্ধা / ওয়ারিশ সুবিধাভোগীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'বীর মুক্তিযোদ্ধা / ওয়ারিশ সুবিধাভোগীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সুবিধাভোগীর নিজস্ব ব্যাংক অ্যাকাউন্টের চেক পাতার কপি',
          document_name_en: 'সুবিধাভোগীর নিজস্ব ব্যাংক অ্যাকাউন্টের চেক পাতার কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ওয়ারিশান সনদ (বীর মুক্তিযোদ্ধার মৃত্যুর ক্ষেত্রে)',
          document_name_en: 'ওয়ারিশান সনদ (বীর মুক্তিযোদ্ধার মৃত্যুর ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'মন্ত্রণালয়ের এমআইএস (MIS) পোর্টালে ডাটা যাচাই',
          instruction_bn: 'https://mis.molwa.gov.bd পোর্টালে আপনার মুক্তিযোদ্ধা সনদ ও গেজেট নম্বর যাচাই করুন।',
          warning_bn: 'নাম ও জন্মতারিখ এনআইডির সাথে হুবহু মিল থাকতে হবে।',
          action_url: 'https://mis.molwa.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা নির্বাহী কর্মকর্তা (UNO) কার্যালয়ে ব্যাংক হিসাব সংযোজন',
          instruction_bn: 'সংশ্লিষ্ট উপজেলা নির্বাহী কর্মকর্তার কাছে এনআইডি ও ব্যাংকের চেকের কপি জমা দিন। এটি কেন্দ্রীয় G2P সিস্টেমে লিঙ্ক করা হবে।',
          warning_bn: 'কোনো ব্যক্তির কাছে টাকা বা চাঁদা দেওয়া সম্পূর্ণ নিষিদ্ধ।',
          action_url: 'https://molwa.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি অ্যাকাউন্টে মাসিক ২০,০০০ টাকা জমা',
          instruction_bn: 'প্রতি মাসের শুরুতে বাংলাদেশ ব্যাংক থেকে সরাসরি আপনার ব্যাংক একাউন্টে সম্মানী ভাতার টাকা জমা হবে এবং মোবাইলে এসএমএস পাবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://molwa.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: মুক্তিযোদ্ধা ভাতা তালিকায় নাম তোলার জন্য কোনো দালালকে টাকা দেবেন না। জাল মুক্তিযোদ্ধা সনদ শাস্তিযোগ্য অপরাধ। প্রকৃত বীর মুক্তিযোদ্ধারা কোনো মধ্যস্বত্বভোগী ছাড়া সরাসরি সরকারের এই রাষ্ট্রীয় সম্মাননা লাভ করেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি) অফিসিয়াল পোর্টাল',
      source_url: 'https://molwa.gov.bd'
    }
  ]
};

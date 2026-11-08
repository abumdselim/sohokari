import { ServiceRecord } from '../../types/service';

export const dosInlandVesselSurveyRegistrationService: ServiceRecord = {
  id: 'bd-dos-inland-vessel-survey-registration',
  slug: 'bd-dos-inland-vessel-survey-registration',
  category_id: 'transport_brta',
  name_bn: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স নির্দেশিকা',
  name_en: 'Inland Waterway Vessel Survey & Annual Fitness Registration Official Guide',
  responsible_ministry_bn: 'নৌপরিবহন অধিদপ্তর (DOS), নৌপরিবহন মন্ত্রণালয়',
  responsible_ministry_en: 'নৌপরিবহন অধিদপ্তর (DOS), নৌপরিবহন মন্ত্রণালয়',
  responsible_agency_bn: 'নৌপরিবহন অধিদপ্তর (DOS), নৌপরিবহন মন্ত্রণালয়',
  responsible_agency_en: 'নৌপরিবহন অধিদপ্তর (DOS), নৌপরিবহন মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dos.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dos.gov.bd',
  legal_basis: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'inland waterway vessel survey & annual fitness registration official guide', language: 'en', weight: 1.0 },
    { alias: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স', language: 'bn', weight: 0.95 },
    { alias: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স ফি', language: 'bn', weight: 0.95 },
    { alias: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dos inland vessel survey registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dos-inland-vessel-survey-registration-standard',
      variant_name_bn: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Inland Waterway Vessel Survey & Annual Fitness Registration Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'নৌযান সার্ভে ও পরিমাপ সরকারি ফি (আকার অনুযায়ী)',
          fee_type_en: 'নৌযান সার্ভে ও পরিমাপ সরকারি ফি (আকার অনুযায়ী)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: '১০ থেকে ৫০ অশ্বশক্তির জন্য ১,৫০০ টাকা; বড় জাহাজে আনুপাতিক হারে বৃদ্ধি।'
        },
        {
          fee_type_bn: 'বার্ষিক ফিটনেস সনদ নবায়ন ফি',
          fee_type_en: 'বার্ষিক ফিটনেস সনদ নবায়ন ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাৎসরিক লাইসেন্স নবায়ন ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'নৌযানের ব্লু-প্রিন্ট বা অনুমোদিত নির্মাণ নকশা',
          document_name_en: 'নৌযানের ব্লু-প্রিন্ট বা অনুমোদিত নির্মাণ নকশা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইঞ্জিন ক্রয়ের মূল ক্যাশ মেমো ও কাস্টমস বিল অফ এন্ট্রি',
          document_name_en: 'ইঞ্জিন ক্রয়ের মূল ক্যাশ মেমো ও কাস্টমস বিল অফ এন্ট্রি',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মালিকের জাতীয় পরিচয়পত্র (NID) ও ট্রেড লাইসেন্স',
          document_name_en: 'মালিকের জাতীয় পরিচয়পত্র (NID) ও ট্রেড লাইসেন্স',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'লাইফ জ্যাকেট ও অগ্নিনির্বাপক সরঞ্জামের পর্যাপ্ততার বিবরণ',
          document_name_en: 'লাইফ জ্যাকেট ও অগ্নিনির্বাপক সরঞ্জামের পর্যাপ্ততার বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'নৌপরিবহন অধিদপ্তরের পোর্টালে অনলাইন সার্ভে আবেদন',
          instruction_bn: 'https://dos.gov.bd পোর্টালে নৌযানের আকার, ইঞ্জিন হর্সপাওয়ার ও নকশাসহ আবেদন দাখিল করুন।',
          warning_bn: 'দালাল ছাড়াই সোনালী ব্যাংকে চালানের ফি জমা দিন।',
          action_url: 'https://dos.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'নৌযান পরিদর্শক কর্তৃক বডি ও ইঞ্জিন সার্ভে',
          instruction_bn: 'ইন্সপেক্টর দল নদীঘাটে এসে হাল (Hull), ইঞ্জিন, বয়া ও লাইফ জ্যাকেট পরীক্ষা করে ফিটনেস সার্টিফিকেট অনুমোদন করবেন।',
          warning_bn: 'নৌযানে পর্যাপ্ত লাইফ জ্যাকেট রাখা বাধ্যতামূলক।',
          action_url: 'https://dos.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিজিটাল সার্ভে ও রেজিস্ট্রেশন সনদ গ্রহণ',
          instruction_bn: 'অনুমোদন শেষে জাহাজের গায়ে অফিসিয়াল রেজিস্ট্রেশন নম্বর খোদাই করে প্রদর্শন করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dos.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: নদীপথে ফিটনেসবিহীন জাহাজ চালানো যাত্রী সাধারণের জীবনের জন্য ঝুঁকিপূর্ণ। কোনো দালাল যদি সার্ভে ছাড়াই লাইসেন্স করিয়ে দেওয়ার চুক্তি করতে চায়—তবে তা জালিয়াতি। যে-কোনো অনিয়মে নৌপরিবহন অধিদপ্তরে অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dos.gov.bd'
    }
  ]
};

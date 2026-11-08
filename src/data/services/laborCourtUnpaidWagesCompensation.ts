import { ServiceRecord } from '../../types/service';

export const laborCourtUnpaidWagesCompensationService: ServiceRecord = {
  id: 'bd-labor-court-unpaid-wages-compensation',
  slug: 'bd-labor-court-unpaid-wages-compensation',
  category_id: 'legal_judiciary',
  name_bn: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা নির্দেশিকা',
  name_en: 'Labor Court Unpaid Wages Gratuity & Illegal Termination Compensation Guide',
  responsible_ministry_bn: 'শ্রম ও কর্মসংস্থান মন্ত্রণালয় ও শ্রম আদালত (Labor Court)',
  responsible_ministry_en: 'শ্রম ও কর্মসংস্থান মন্ত্রণালয় ও শ্রম আদালত (Labor Court)',
  responsible_agency_bn: 'শ্রম ও কর্মসংস্থান মন্ত্রণালয় ও শ্রম আদালত (Labor Court)',
  responsible_agency_en: 'শ্রম ও কর্মসংস্থান মন্ত্রণালয় ও শ্রম আদালত (Labor Court)',
  visiting_office_level: 'district',
  official_portal_url: 'https://mole.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://mole.gov.bd',
  legal_basis: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'labor court unpaid wages gratuity & illegal termination compensation guide', language: 'en', weight: 1.0 },
    { alias: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা', language: 'bn', weight: 0.95 },
    { alias: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা ফি', language: 'bn', weight: 0.95 },
    { alias: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'labor court unpaid wages compensation', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-labor-court-unpaid-wages-compensation-standard',
      variant_name_bn: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Labor Court Unpaid Wages Gratuity & Illegal Termination Compensation Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 90,
      fees: [
        {
          fee_type_bn: 'শ্রম আদালতে শ্রমিক কর্তৃক মামলা দায়ের সরকারি ফি',
          fee_type_en: 'শ্রম আদালতে শ্রমিক কর্তৃক মামলা দায়ের সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'শ্রম আইন ২০০৬ অনুযায়ী শ্রমিকের অধিকার আদায়ে কোনো কোর্ট ফি দিতে হয় না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মালিকপক্ষ বরাবর প্রেরিত আইনি অভিযোগপত্রের কপি (ধারা ৩৩ অনুযায়ী রেজিস্ট্রি ডাকযোগে প্রেরিত রসিদসহ)',
          document_name_en: 'মালিকপক্ষ বরাবর প্রেরিত আইনি অভিযোগপত্রের কপি (ধারা ৩৩ অনুযায়ী রেজিস্ট্রি ডাকযোগে প্রেরিত রসিদসহ)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রতিষ্ঠানের নিয়োগপত্র (Appointment Letter), আইডি কার্ড বা সার্ভিস বুক',
          document_name_en: 'প্রতিষ্ঠানের নিয়োগপত্র (Appointment Letter), আইডি কার্ড বা সার্ভিস বুক',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বেতন প্রদানের পে-স্লিপ, ব্যাংক স্টেটমেন্ট বা হাজিরা কার্ডের কপি',
          document_name_en: 'বেতন প্রদানের পে-স্লিপ, ব্যাংক স্টেটমেন্ট বা হাজিরা কার্ডের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শ্রম আদালতে লিখিত মামলার দরখাস্ত (পিটিশন)',
          document_name_en: 'শ্রম আদালতে লিখিত মামলার দরখাস্ত (পিটিশন)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'মালিকপক্ষ বরাবর ৩৩ ধারায় লিখিত অভিযোগ প্রেরণ',
          instruction_bn: 'চাকরিচ্যুতি বা বেতন বকেয়ার ৩০ দিনের মধ্যে রেজিস্ট্রি ডাকযোগে এডি (AD) সহকারে মালিকের ঠিকানায় পাওনা দাবি করে দরখাস্ত পাঠান।',
          warning_bn: 'মালিকপক্ষ ১৫ দিনের মধ্যে জবাব না দিলে বা দাবি না মানলে শ্রম আদালতের পথ উন্মুক্ত হয়।',
          action_url: 'https://mole.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'শ্রম আদালতে সরাসরি মামলা দায়ের',
          instruction_bn: 'পরবর্তী ৩০ দিনের মধ্যে সংশ্লিষ্ট এলাকার শ্রম আদালতে (যেমন ঢাকা বা চট্টগ্রামের শ্রম আদালত) বিনামূল্যে মামলা ফাইল করুন।',
          warning_bn: 'দালাল ছাড়াই আদালতের রেজিস্ট্রার শাখায় সরাসরি ফাইল জমা দেওয়া যায়।',
          action_url: 'https://mole.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'শ্রম আদালতের রায় ও পাওনা অর্থ আদায়',
          instruction_bn: 'আদালত মালিকপক্ষকে ডেকে শুনানি শেষে বকেয়া বেতন, ক্ষতিপূরণ ও গ্র্যাচুইটির টাকা বাদীর হাতে বুঝিয়ে দেওয়ার নির্দেশ দেবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://mole.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: শ্রম আদালতে মামলা করতে কোনো কোটি টাকা বা কোর্ট ফি লাগে না। কলকারখানা পরিদর্শকের দপ্তরের কোনো দালাল বা ট্রেড ইউনিয়নের ভুয়া নেতার সাথে আর্থিক রফা করবেন না। প্রয়োজনে সরকারি লিগ্যাল এইড ১৬৪৩০ এ ফ্রি আইনজীবী নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://mole.gov.bd'
    }
  ]
};

import { ServiceRecord } from '../../types/service';

export const dgfpFamilyPlanningMethodsIncentivesService: ServiceRecord = {
  id: 'bd-dgfp-family-planning-methods-incentives',
  slug: 'bd-dgfp-family-planning-methods-incentives',
  category_id: 'healthcare',
  name_bn: 'সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা',
  name_en: 'Government Family Planning Methods Services & Financial Incentives Guide',
  responsible_ministry_bn: 'পরিবার পরিকল্পনা অধিদপ্তর (DGFP)',
  responsible_ministry_en: 'পরিবার পরিকল্পনা অধিদপ্তর (DGFP)',
  responsible_agency_bn: 'পরিবার পরিকল্পনা অধিদপ্তর (DGFP)',
  responsible_agency_en: 'পরিবার পরিকল্পনা অধিদপ্তর (DGFP)',
  visiting_office_level: 'district',
  official_portal_url: 'https://dgfp.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dgfp.gov.bd',
  legal_basis: 'সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'government family planning methods services & financial incentives guide', language: 'en', weight: 1.0 },
    { alias: 'পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা', language: 'bn', weight: 0.95 },
    { alias: 'পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা ফি', language: 'bn', weight: 0.95 },
    { alias: 'পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dgfp family planning methods incentives', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dgfp-family-planning-methods-incentives-standard',
      variant_name_bn: 'সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Government Family Planning Methods Services & Financial Incentives Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'সকল পরিবার পরিকল্পনা সামগ্রী ও চিকিৎসা',
          fee_type_en: 'সকল পরিবার পরিকল্পনা সামগ্রী ও চিকিৎসা',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারের সম্পূর্ণ ফ্রি পরিবার পরিকল্পনা সেবা।'
        },
        {
          fee_type_bn: 'স্থায়ী পদ্ধতি গ্রহীতাকে সরকারি প্রণোদনা প্রদান',
          fee_type_en: 'স্থায়ী পদ্ধতি গ্রহীতাকে সরকারি প্রণোদনা প্রদান',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'মজুরি ক্ষতিপূরণ হিসেবে রোগীকে নগদ অর্থ ও বস্ত্র দেওয়া হয়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্বামী বা স্ত্রীর লিখিত সম্মতিপত্র (স্থায়ী পদ্ধতির ক্ষেত্রে)',
          document_name_en: 'স্বামী বা স্ত্রীর লিখিত সম্মতিপত্র (স্থায়ী পদ্ধতির ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্রে যোগাযোগ',
          instruction_bn: 'পরিবার কল্যাণ পরিদর্শিকা (FWV) বা উপজেলা পরিবার পরিকল্পনা কর্মকর্তার সাথে দেখা করুন।',
          warning_bn: 'পরামর্শ সম্পূর্ণ ফ্রি ও গোপনীয়।',
          action_url: 'https://dgfp.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'স্বাস্থ্য পরীক্ষা ও উপযুক্ত পদ্ধতি নির্বাচন',
          instruction_bn: 'ডাক্তার শারীরিক পরীক্ষা করে উপযুক্ত দীর্ঘমেয়াদি বা স্থায়ী পদ্ধতি সম্পন্ন করবেন।',
          warning_bn: 'কোনো দালালকে টাকা দেবেন না।',
          action_url: 'https://dgfp.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি প্রণোদনা ও ওষুধপত্র গ্রহণ',
          instruction_bn: 'স্থায়ী পদ্ধতি শেষে সরকারি বরাদ্দ থেকে নগদ অর্থ, নতুন পোশাক ও অ্যান্টিবায়োটিক ওষুধপত্র বিনামূল্যে বুঝে নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dgfp.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: পরিবার পরিকল্পনা সেবায় কোনো টাকা নেওয়া অপরাধ। কোনো ডাক্তার বা নার্স ফি দাবি করলে সরাসরি উপজেলা পরিবার পরিকল্পনা কর্মকর্তা বা স্বাস্থ্য বাতায়ন ১৬২৬৩ এ কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dgfp.gov.bd'
    }
  ]
};

import { ServiceRecord } from '../../types/service';

export const titasGasBillCorrectionNameChangeService: ServiceRecord = {
  id: 'bd-titas-gas-bill-correction-name-change',
  slug: 'bd-titas-gas-bill-correction-name-change',
  category_id: 'citizen_general',
  name_bn: 'আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ)',
  name_en: 'Residential Gas Connection Ownership Transfer & Bill Correction Guide (Titas/Bakhrabad)',
  responsible_ministry_bn: 'তিতাস গ্যাস টিঅ্যান্ডডি কোং লি. / বাখরাবাদ গ্যাস, পেট্রোবাংলা',
  responsible_ministry_en: 'তিতাস গ্যাস টিঅ্যান্ডডি কোং লি. / বাখরাবাদ গ্যাস, পেট্রোবাংলা',
  responsible_agency_bn: 'তিতাস গ্যাস টিঅ্যান্ডডি কোং লি. / বাখরাবাদ গ্যাস, পেট্রোবাংলা',
  responsible_agency_en: 'তিতাস গ্যাস টিঅ্যান্ডডি কোং লি. / বাখরাবাদ গ্যাস, পেট্রোবাংলা',
  visiting_office_level: 'district',
  official_portal_url: 'https://titasgas.org.bd',
  helpline_number: '333',
  grievance_channel: 'https://titasgas.org.bd',
  legal_basis: 'আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ) সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ)', language: 'bn', weight: 1.0 },
    { alias: 'residential gas connection ownership transfer & bill correction guide (titas/bakhrabad)', language: 'en', weight: 1.0 },
    { alias: 'titas gas bill correction name change', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-titas-gas-bill-correction-name-change-standard',
      variant_name_bn: 'আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ) (সাধারণ আবেদন)',
      variant_name_en: 'Residential Gas Connection Ownership Transfer & Bill Correction Guide (Titas/Bakhrabad) (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'গ্রাহক নাম পরিবর্তন ফি (আবাসিক)',
          fee_type_en: 'গ্রাহক নাম পরিবর্তন ফি (আবাসিক)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।'
        },
        {
          fee_type_bn: 'বকেয়া বিল ও ডাটা এন্ট্রি ভুল সংশোধন ফি',
          fee_type_en: 'বকেয়া বিল ও ডাটা এন্ট্রি ভুল সংশোধন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিলিং ভুলের জন্য কোনো ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'নতুন মালিকের জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'নতুন মালিকের জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ফ্ল্যাট বা বাড়ির রেজিস্ট্রিকৃত সাফ-কবলা দলিল ও নামজারি খতিয়ান',
          document_name_en: 'ফ্ল্যাট বা বাড়ির রেজিস্ট্রিকৃত সাফ-কবলা দলিল ও নামজারি খতিয়ান',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সর্বশেষ পরিশোধিত গ্যাস বিলের মূল কপি (কোনো বকেয়া থাকা যাবে না)',
          document_name_en: 'সর্বশেষ পরিশোধিত গ্যাস বিলের মূল কপি (কোনো বকেয়া থাকা যাবে না)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে অঙ্গীকারনামা',
          document_name_en: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে অঙ্গীকারনামা',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'তিতাস জোনাল অফিসে নির্ধারিত ফর্মে আবেদন',
          instruction_bn: 'সংশ্লিষ্ট তিতাস রাজস্ব শাখায় গিয়ে \'নাম পরিবর্তন ফরম\' সংগ্রহ করুন। দলিলের ফটোকপি ও বকেয়াহীন বিলের কপি সংযুক্ত করুন।',
          warning_bn: 'আগের মালিকের কোনো বকেয়া বিল থাকলে তা আগেই ক্লিয়ার করতে হবে।',
          action_url: 'https://titasgas.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: '৫০০ টাকা সরকারি ফি জমা ও শুনানি',
          instruction_bn: 'ব্যাংক বুথে ৫০০ টাকার রসিদ জমা দিন। রাজস্ব কর্মকর্তা দলিল যাচাই করে মূল নথিতে নতুন মালিকের নাম আপডেট করবেন।',
          warning_bn: 'পরবর্তী মাস থেকেই নতুন মালিকের নামে গ্যাস বিল আসবে।',
          action_url: 'https://titasgas.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'তদন্ত সম্পন্ন ও সংশোধিত বিল/নামজারি অনুমোদন',
          instruction_bn: 'তিতাস গ্যাস আঞ্চলিক বিপণন কার্যালয়ের পরিদর্শক সরেজমিন যাচাই ও গ্যাস রাইজার চেক করবেন। অনুমোদন শেষে পরবর্তী মাস থেকে গ্রাহকের নামে সংশোধিত বিল জারি হবে।',
          warning_bn: 'অনুমোদনের কপিটি সযত্নে সংরক্ষণ করুন যাতে ভবিষ্যতে মালিকানা হস্তান্তরে কাজে লাগে।',
          action_url: 'https://titasgas.org.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: তিতাস গ্যাস চত্বরে দালালদের ফাঁদে পড়বেন না। নিজের দলিলের কপি ও পরিশোধিত বিল জমা দিলে সরকারিভাবে মাত্র ৫০০ টাকায় নাম পরিবর্তন হয়ে যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ) অফিসিয়াল পোর্টাল',
      source_url: 'https://titasgas.org.bd'
    }
  ]
};

export type VisitingOfficeLevel = 'union' | 'upazila' | 'district' | 'division' | 'city_corporation' | 'pourashava' | 'none';
export type VerificationStatus = 'draft' | 'verified' | 'stale' | 'retired';
export type DocumentFormat = 'original' | 'attested_copy' | 'photocopy' | 'digital_scan';
export type ServiceChannel = 'online_portal' | 'udc' | 'office' | 'bank' | 'app';
export type SupportedLanguage = 'bn' | 'en' | 'banglish';

export interface FeeItem {
  id?: number;
  fee_type_bn: string;
  fee_type_en: string;
  amount_bdt: number;
  effective_date: string;
  gazette_reference?: string;
  notes_bn?: string;
}

export interface RequiredDocument {
  id?: number;
  document_name_bn: string;
  document_name_en: string;
  format_requirement: DocumentFormat;
  photo_spec?: string;
  is_mandatory: boolean;
  condition_description_bn?: string;
}

export interface ServiceStep {
  id?: number;
  channel: ServiceChannel;
  step_number: number;
  title_bn: string;
  title_en?: string;
  instruction_bn: string;
  instruction_en?: string;
  warning_bn?: string;
  action_url?: string;
}

export interface ServiceVariant {
  id: string; // e.g. 'nid-correction-info-1st'
  variant_name_bn: string;
  variant_name_en: string;
  conditions: Record<string, string | number | boolean>; // e.g. { type: 'info', count: 1 }
  processing_days_sla: number;
  validity_years?: number;
  fees: FeeItem[];
  documents: RequiredDocument[];
  steps: ServiceStep[];
}

export interface ServiceGuidance {
  guidance_type: 'rejection_reason' | 'broker_warning' | 'tip';
  content_bn: string;
  content_en: string;
}

export interface ServiceSource {
  source_type: 'gazette' | 'citizens_charter' | 'circular' | 'portal';
  source_title: string;
  source_url: string;
  r2_archive_path?: string;
  circular_number?: string;
  published_date?: string;
}

export interface ServiceRecord {
  id: string; // e.g. 'nid-correction'
  slug: string;
  category_id: string;
  name_bn: string;
  name_en: string;
  responsible_ministry_bn: string;
  responsible_ministry_en: string;
  responsible_agency_bn: string;
  responsible_agency_en: string;
  visiting_office_level: VisitingOfficeLevel;
  official_portal_url: string;
  helpline_number: string;
  grievance_channel: string;
  legal_basis: string;
  status: VerificationStatus;
  confidence_score: number;
  last_verified_at: string; // ISO-8601
  verified_by: string;
  aliases: {
    alias: string;
    language: SupportedLanguage;
    weight: number;
  }[];
  variants: ServiceVariant[];
  guidance: ServiceGuidance[];
  sources: ServiceSource[];
}

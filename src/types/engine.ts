import { ServiceRecord, ServiceVariant, SupportedLanguage } from './service';

export type DialogAction = 
  | 'DIRECT_ANSWER'      // Exact service & variant determined; full response rendered
  | 'CLARIFY'            // Service identified, but key situational slots missing
  | 'DISAMBIGUATE'       // Multiple candidate services match closely; user picks one
  | 'SAFE_REFUSAL';      // Out-of-scope or unverified service; redirect to official helplines

export interface ExtractedSlots {
  action_intent?: 'fee' | 'documents' | 'process' | 'time' | 'office' | 'complaint' | 'general';
  service_type?: 'new' | 'renewal' | 'correction' | 'reissue' | 'duplicate';
  urgency?: 'regular' | 'express' | 'super_express';
  passport_pages?: 48 | 64;
  passport_validity_years?: 5 | 10;
  correction_count?: 1 | 2 | 3; // 1st time, 2nd time, 3rd+ time
  applicant_type?: 'general' | 'student' | 'minor' | 'senior' | 'expat';
  channel_preference?: 'online' | 'udc' | 'physical_office';
  raw_tokens: string[];
}

export interface ClarifyingOption {
  label_bn: string;
  label_en: string;
  slot_key: keyof ExtractedSlots;
  slot_value: string | number | boolean;
}

export interface ClarifyingQuestion {
  question_bn: string;
  question_en: string;
  slot_key: keyof ExtractedSlots;
  options: ClarifyingOption[];
}

export interface DecisionTrace {
  normalized_query: string;
  detected_language: SupportedLanguage;
  matched_service_id?: string;
  confidence_score: number;
  matched_tokens: string[];
  extracted_slots: ExtractedSlots;
  selected_variant_id?: string;
  rules_fired: string[];
  execution_time_ms: number;
}

export interface ChatResponse {
  action: DialogAction;
  reply_bn: string;
  reply_en: string;
  service?: {
    id: string;
    name_bn: string;
    name_en: string;
    ministry_bn: string;
    agency_bn: string;
    official_portal_url: string;
    helpline_number: string;
    last_verified_at: string;
    status: string;
  };
  variant?: ServiceVariant;
  clarifying_question?: ClarifyingQuestion;
  candidate_services?: {
    id: string;
    name_bn: string;
    name_en: string;
  }[];
  trace: DecisionTrace;
}

import { ServiceRecord } from '../types/service';
import { ChatResponse } from '../types/engine';
import { normalizeQuery } from './textNormalizer';
import { extractSlots } from './slotExtractor';
import { matchServices } from './matcher';
import { evaluateDecisionRules } from './decisionRules';
import { composeDirectAnswer, composeSafeRefusal } from './answerComposer';

export function processChatQuery(
  rawQuery: string,
  catalog: ServiceRecord[]
): ChatResponse {
  const startTime = performance.now();
  const normalized = normalizeQuery(rawQuery);
  const slots = extractSlots(normalized);
  const matchResults = matchServices(normalized, catalog);

  const topMatch = matchResults[0];
  const execution_time_ms = Number((performance.now() - startTime).toFixed(2));

  // Case 1: No match or confidence < 0.50 -> SAFE_REFUSAL
  if (!topMatch || topMatch.confidence < 0.50) {
    const { reply_bn, reply_en } = composeSafeRefusal(rawQuery, normalized.detected_language);
    return {
      action: 'SAFE_REFUSAL',
      reply_bn,
      reply_en,
      trace: {
        normalized_query: normalized.normalized,
        detected_language: normalized.detected_language,
        confidence_score: topMatch ? topMatch.confidence : 0,
        matched_tokens: topMatch ? topMatch.matched_tokens : [],
        extracted_slots: slots,
        rules_fired: ['FALLBACK_REFUSAL'],
        execution_time_ms
      }
    };
  }

  // Case 2: Ambiguous Match (0.50 <= confidence < 0.85) -> DISAMBIGUATE
  if (topMatch.confidence < 0.85) {
    const candidates = matchResults.slice(0, 3).map(m => ({
      id: m.service.id,
      name_bn: m.service.name_bn,
      name_en: m.service.name_en
    }));

    return {
      action: 'DISAMBIGUATE',
      reply_bn: `আপনি কি নিচের কোনো সেবা সম্পর্কে জানতে চাচ্ছেন? অনুগ্রহ করে নির্বাচন করুন:`,
      reply_en: `Are you looking for one of these services? Please select:`,
      candidate_services: candidates,
      trace: {
        normalized_query: normalized.normalized,
        detected_language: normalized.detected_language,
        matched_service_id: topMatch.service.id,
        confidence_score: topMatch.confidence,
        matched_tokens: topMatch.matched_tokens,
        extracted_slots: slots,
        rules_fired: ['DISAMBIGUATION_TRIGGERED'],
        execution_time_ms
      }
    };
  }

  // Case 3: High Confidence Match (>= 0.85) -> Evaluate Decision Rules
  const decision = evaluateDecisionRules(topMatch.service, slots);

  if (decision.clarifying_question) {
    return {
      action: 'CLARIFY',
      reply_bn: decision.clarifying_question.question_bn,
      reply_en: decision.clarifying_question.question_en,
      clarifying_question: decision.clarifying_question,
      service: {
        id: topMatch.service.id,
        name_bn: topMatch.service.name_bn,
        name_en: topMatch.service.name_en,
        ministry_bn: topMatch.service.responsible_ministry_bn,
        agency_bn: topMatch.service.responsible_agency_bn,
        official_portal_url: topMatch.service.official_portal_url,
        helpline_number: topMatch.service.helpline_number,
        last_verified_at: topMatch.service.last_verified_at,
        status: topMatch.service.status
      },
      trace: {
        normalized_query: normalized.normalized,
        detected_language: normalized.detected_language,
        matched_service_id: topMatch.service.id,
        confidence_score: topMatch.confidence,
        matched_tokens: topMatch.matched_tokens,
        extracted_slots: slots,
        rules_fired: decision.rules_fired,
        execution_time_ms
      }
    };
  }

  const selectedVariant = decision.selected_variant || topMatch.service.variants[0];
  const { reply_bn, reply_en } = composeDirectAnswer(
    topMatch.service,
    selectedVariant,
    slots,
    normalized.detected_language
  );

  return {
    action: 'DIRECT_ANSWER',
    reply_bn,
    reply_en,
    service: {
      id: topMatch.service.id,
      name_bn: topMatch.service.name_bn,
      name_en: topMatch.service.name_en,
      ministry_bn: topMatch.service.responsible_ministry_bn,
      agency_bn: topMatch.service.responsible_agency_bn,
      official_portal_url: topMatch.service.official_portal_url,
      helpline_number: topMatch.service.helpline_number,
      last_verified_at: topMatch.service.last_verified_at,
      status: topMatch.service.status
    },
    variant: selectedVariant,
    trace: {
      normalized_query: normalized.normalized,
      detected_language: normalized.detected_language,
      matched_service_id: topMatch.service.id,
      confidence_score: topMatch.confidence,
      matched_tokens: topMatch.matched_tokens,
      extracted_slots: slots,
      selected_variant_id: selectedVariant.id,
      rules_fired: decision.rules_fired,
      execution_time_ms
    }
  };
}

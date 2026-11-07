import { ServiceRecord, ServiceVariant } from '../types/service';
import { ExtractedSlots, ClarifyingQuestion } from '../types/engine';

export interface DecisionEvaluationResult {
  selected_variant?: ServiceVariant;
  clarifying_question?: ClarifyingQuestion;
  rules_fired: string[];
}

export function evaluateDecisionRules(
  service: ServiceRecord,
  slots: ExtractedSlots
): DecisionEvaluationResult {
  const rules_fired: string[] = [];

  // 1. Passport Renewal Branching
  if (service.id === 'passport-renewal') {
    rules_fired.push('RULE_PASSPORT_BRANCHING');

    const pages = slots.passport_pages || 48;
    const validity = slots.passport_validity_years;
    const urgency = slots.urgency || 'regular';

    // If validity is specified
    if (validity === 10) {
      if (urgency === 'express' || urgency === 'super_express') {
        const variant = service.variants.find(v => v.id === 'passport-renewal-48p-10y-express');
        rules_fired.push('PASSPORT_EXPRESS_10Y_48P');
        return { selected_variant: variant || service.variants[0], rules_fired };
      } else {
        const variant = service.variants.find(v => v.id === 'passport-renewal-48p-10y-regular');
        rules_fired.push('PASSPORT_REGULAR_10Y_48P');
        return { selected_variant: variant || service.variants[0], rules_fired };
      }
    } else if (validity === 5) {
      const variant = service.variants.find(v => v.id === 'passport-renewal-48p-5y-regular');
      rules_fired.push('PASSPORT_REGULAR_5Y_48P');
      return { selected_variant: variant || service.variants[0], rules_fired };
    }

    // If urgency is express but validity wasn't specified
    if (urgency === 'express' || urgency === 'super_express') {
      const variant = service.variants.find(v => v.id === 'passport-renewal-48p-10y-express');
      rules_fired.push('PASSPORT_EXPRESS_DEFAULT_10Y');
      return { selected_variant: variant || service.variants[0], rules_fired };
    }

    // Default to standard 48 pages 5 years, but offer quick options
    const defaultVariant = service.variants.find(v => v.id === 'passport-renewal-48p-5y-regular') || service.variants[0];
    rules_fired.push('PASSPORT_DEFAULT_48P_5Y');
    return {
      selected_variant: defaultVariant,
      rules_fired
    };
  }

  // 2. NID Correction Branching
  if (service.id === 'nid-correction') {
    rules_fired.push('RULE_NID_BRANCHING');
    if (slots.correction_count === 2) {
      const variant = service.variants.find(v => v.id === 'nid-correction-info-2nd');
      rules_fired.push('NID_CORRECTION_2ND_TIME');
      return { selected_variant: variant || service.variants[0], rules_fired };
    }

    const defaultVariant = service.variants.find(v => v.id === 'nid-correction-info-1st') || service.variants[0];
    rules_fired.push('NID_CORRECTION_1ST_TIME');
    return { selected_variant: defaultVariant, rules_fired };
  }

  // 3. Land Mutation Branching
  if (service.id === 'land-mutation') {
    rules_fired.push('RULE_LAND_MUTATION_STANDARD');
    return {
      selected_variant: service.variants[0],
      rules_fired
    };
  }

  // Generic fallback
  return {
    selected_variant: service.variants[0],
    rules_fired: ['RULE_GENERIC_DEFAULT']
  };
}

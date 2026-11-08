import { ServiceRecord } from '../types/service';
import { NormalizedTextResult } from './textNormalizer';

export interface MatchResult {
  service: ServiceRecord;
  confidence: number;
  matched_tokens: string[];
  matched_alias?: string;
}

function getCharacterTrigrams(text: string): Set<string> {
  const trigrams = new Set<string>();
  const clean = text.toLowerCase().replace(/\s+/g, '');
  if (clean.length < 3) {
    trigrams.add(clean);
    return trigrams;
  }
  for (let i = 0; i <= clean.length - 3; i++) {
    trigrams.add(clean.slice(i, i + 3));
  }
  return trigrams;
}

function calculateTrigramSimilarity(a: string, b: string): number {
  const setA = getCharacterTrigrams(a);
  const setB = getCharacterTrigrams(b);
  let intersection = 0;
  for (const tri of setA) {
    if (setB.has(tri)) {
      intersection++;
    }
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const INTENT_STOPWORDS = new Set([
  'fee', 'ফি', 'taka', 'টাকা', 'koto', 'কত', 'khoroch', 'খরচ', 'rules', 'নিয়ম',
  'apply', 'আবেদন', 'kivabe', 'কিভাবে', 'online', 'অনলাইন', 'bangladesh', 'bd',
  'সরকারি', 'government', 'chai', 'চাই', 'korte', 'করতে', 'lage', 'লাগে',
  'koto din', 'days', 'somoy', 'সময়', 'documents', 'কাগজপত্র', 'kagoj', 'কাগজ'
]);

export function matchServices(
  normalized: NormalizedTextResult,
  catalog: ServiceRecord[]
): MatchResult[] {
  const queryText = normalized.normalized;
  const allTokens = new Set([
    ...normalized.tokens,
    ...normalized.stemmed_tokens,
    ...normalized.bengali_transliterated_tokens
  ]);
  const allTokensList = Array.from(allTokens);

  const results: MatchResult[] = [];

  for (const service of catalog) {
    let bestScore = 0;
    let bestAlias: string | undefined;
    const matchedTokens: string[] = [];

    // 1. Direct Alias Matching
    for (const item of service.aliases) {
      const aliasClean = item.alias.toLowerCase().replace(/[-_]/g, ' ');

      // Exact substring or equality check
      if (queryText.includes(aliasClean) || aliasClean.includes(queryText)) {
        const score = item.weight * (aliasClean === queryText ? 1.0 : 0.95);
        if (score > bestScore) {
          bestScore = score;
          bestAlias = item.alias;
        }
      }

      // Trigram fuzzy check for typos
      const similarity = calculateTrigramSimilarity(queryText, aliasClean);
      if (similarity > 0.65) {
        const score = similarity * item.weight * 0.92;
        if (score > bestScore) {
          bestScore = score;
          bestAlias = item.alias;
        }
      }

      // Token overlap check against this alias (with Bengali suffix tolerance e.g. -র, -ের, -ে)
      const aliasTokens = aliasClean
        .split(/[\s,?.!\-_/()]+/)
        .filter(t => !INTENT_STOPWORDS.has(t) && t.length > 2);

      if (aliasTokens.length > 0) {
        const matchedInThisAlias = aliasTokens.filter(t => 
          allTokens.has(t) || allTokensList.some(q => q.length > 2 && (q.startsWith(t) || t.startsWith(q)))
        );
        matchedInThisAlias.forEach(t => matchedTokens.push(t));

        const coverage = matchedInThisAlias.length / aliasTokens.length;
        if (coverage === 1.0) {
          // All distinctive tokens of alias present
          const score = item.weight * 0.95;
          if (score > bestScore) {
            bestScore = score;
            bestAlias = item.alias;
          }
        } else if (matchedInThisAlias.length >= 2) {
          // At least 2 domain tokens matched from this alias
          const score = item.weight * Math.min(0.95, 0.65 + matchedInThisAlias.length * 0.10);
          if (score > bestScore) {
            bestScore = score;
            bestAlias = item.alias;
          }
        } else if (matchedInThisAlias.length === 1 && aliasTokens.length === 1) {
          // Single-word alias exact match
          const score = item.weight * 0.90;
          if (score > bestScore) {
            bestScore = score;
            bestAlias = item.alias;
          }
        } else if (matchedInThisAlias.length === 1 && aliasTokens.length > 1) {
          // Only 1 token matched out of a multi-word alias (e.g. only 'police' from 'police clearance')
          const score = item.weight * 0.35;
          if (score > bestScore) {
            bestScore = score;
            bestAlias = item.alias;
          }
        }
      }
    }

    if (bestScore > 0.3) {
      results.push({
        service,
        confidence: Math.min(1.0, Number(bestScore.toFixed(3))),
        matched_tokens: Array.from(new Set(matchedTokens)),
        matched_alias: bestAlias
      });
    }
  }

  // Sort descending by confidence
  results.sort((a, b) => b.confidence - a.confidence);
  return results;
}

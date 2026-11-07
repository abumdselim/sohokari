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

      // Token overlap check (ignoring generic intent stopwords)
      const aliasTokens = aliasClean.split(/[\s,?.!\-_/()]+/);
      for (const t of aliasTokens) {
        if (!INTENT_STOPWORDS.has(t) && allTokens.has(t) && t.length > 2) {
          matchedTokens.push(t);
        }
      }
    }

    // 2. Token overlap bonus (only for non-stopword domain tokens)
    if (matchedTokens.length > 0) {
      const tokenScore = Math.min(0.95, 0.5 + matchedTokens.length * 0.25);
      if (tokenScore > bestScore) {
        bestScore = tokenScore;
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

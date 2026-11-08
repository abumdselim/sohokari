import { SupportedLanguage } from '../types/service';
import { BANGLISH_WORD_MAP } from './banglishDictionary';

export interface NormalizedTextResult {
  raw: string;
  normalized: string;
  tokens: string[];
  stemmed_tokens: string[];
  detected_language: SupportedLanguage;
  bengali_transliterated_tokens: string[];
}

const BENGALI_DIGITS: Record<string, string> = {
  '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
  '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
};

const BENGALI_SUFFIXES = [
  'গুলোর', 'গুলো', 'সমূহ', 'দের', 'থেকে', 'দ্বারা',
  'টিতে', 'টাতে', 'টির', 'টার', 'টি', 'টা',
  'এর', 'কে', 'তে', 'র', 'য়'
];

export function normalizeBengaliUnicode(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFC')
    // Remove invisible Zero-Width Joiner (ZWJ \u200D) and Zero-Width Non-Joiner (ZWNJ \u200C)
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    // Normalize hyphens and dashes to space so e-mutation, e-passport, e-namjari match seamlessly
    .replace(/[-_–—]/g, ' ')
    // Standardize Dari and common punctuation
    .replace(/[।]/g, ' ')
    .trim();
}

export function convertBengaliDigits(text: string): string {
  return text.replace(/[০-৯]/g, (match) => BENGALI_DIGITS[match] || match);
}

export function detectLanguage(text: string): SupportedLanguage {
  const hasBengali = /[\u0980-\u09FF]/.test(text);
  if (hasBengali) {
    return 'bn';
  }

  // Check for common Banglish keywords
  const lower = text.toLowerCase();
  const words = lower.split(/[\s,?.!-]+/);
  let banglishMatchCount = 0;

  for (const word of words) {
    if (BANGLISH_WORD_MAP[word]) {
      banglishMatchCount++;
    }
  }

  if (banglishMatchCount > 0) {
    return 'banglish';
  }

  return 'en';
}

export function stemBengaliWord(word: string): string {
  if (!word || word.length <= 3) return word;
  
  for (const suffix of BENGALI_SUFFIXES) {
    if (word.endsWith(suffix) && word.length - suffix.length >= 2) {
      return word.slice(0, word.length - suffix.length);
    }
  }
  return word;
}

export function normalizeQuery(query: string): NormalizedTextResult {
  const clean = normalizeBengaliUnicode(query);
  const detected_language = detectLanguage(clean);
  const normalized = convertBengaliDigits(clean).toLowerCase();

  const rawTokens = normalized
    .split(/[\s,?.!\-_/()]+/)
    .filter(t => t.length > 0);

  const stemmed_tokens: string[] = [];
  const bengali_transliterated_tokens: string[] = [];

  for (const token of rawTokens) {
    if (detected_language === 'bn') {
      stemmed_tokens.push(stemBengaliWord(token));
    } else {
      stemmed_tokens.push(token);
    }

    // If word exists in Banglish dictionary, also add its Bengali mapped token
    if (BANGLISH_WORD_MAP[token]) {
      bengali_transliterated_tokens.push(BANGLISH_WORD_MAP[token]);
    }
  }

  return {
    raw: query,
    normalized,
    tokens: rawTokens,
    stemmed_tokens,
    detected_language,
    bengali_transliterated_tokens
  };
}

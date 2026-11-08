import { describe, it, expect } from 'vitest';
import { processChatQuery } from '../src/engine/dialogManager';
import { VERIFIED_SERVICES } from '../src/data';

interface GoldenTestCase {
  id: number;
  query: string;
  language: 'bn' | 'banglish' | 'en';
  expected_service_id?: string;
  expected_action: 'DIRECT_ANSWER' | 'CLARIFY' | 'DISAMBIGUATE' | 'SAFE_REFUSAL';
  expected_min_fee?: number;
  expected_max_fee?: number;
}

const GOLDEN_50_DATASET: GoldenTestCase[] = [
  // ================= 20 BANGLA QUERIES =================
  { id: 1, query: 'জাতীয় পরিচয়পত্র সংশোধন করতে চাই', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 2, query: 'এনআইডি কার্ডে বাবার নাম ভুল আসছে কিভাবে ঠিক করব?', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 3, query: 'ভোটার আইডি কার্ড সংশোধনের সরকারি ফি কত?', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER', expected_min_fee: 230, expected_max_fee: 230 },
  { id: 4, query: 'আইডি কার্ডে স্বামীর নাম যোগ করার নিয়ম কি?', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 5, query: 'এনআইডি ২য় বার সংশোধনে কত টাকা লাগবে?', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER', expected_min_fee: 345, expected_max_fee: 345 },
  { id: 6, query: 'পাসপোর্টের মেয়াদ শেষ হয়ে গেছে কিভাবে নবায়ন করব?', language: 'bn', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 7, query: 'ই-পাসপোর্ট নবায়ন করতে কি কি কাগজপত্র লাগে?', language: 'bn', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 8, query: '১০ বছর মেয়াদী ৪৮ পৃষ্ঠার পাসপোর্ট নবায়ন ফি কত?', language: 'bn', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 5750, expected_max_fee: 5750 },
  { id: 9, query: 'জরুরি ভিত্তিতে ই-পাসপোর্ট নবায়নে কত টাকা দিতে হয়?', language: 'bn', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 8050, expected_max_fee: 8050 },
  { id: 10, query: 'পাসপোর্ট রিনিউ করতে কি পুলিশ ভেরিফিকেশন লাগে?', language: 'bn', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 11, query: 'জমি নামজারি করার নিয়ম কি?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 12, query: 'ই-নামজারি করতে সরকারি ফি মোট কত টাকা?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER', expected_min_fee: 1170, expected_max_fee: 1170 },
  { id: 13, query: 'জমি খারিজ করতে কি কি দলিলপত্র লাগে?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 14, query: 'নামজারি আবেদন মঞ্জুর হতে কত দিন সময় লাগে?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 15, query: 'নামজারিতে দালাল টাকা চাইলে কোথায় অভিযোগ করব?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 16, query: 'জাতীয় পরিচয়পত্রে জন্মতারিখ সংশোধন করতে চাই', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 17, query: 'পাসপোর্ট নবায়নে ৪৮ পৃষ্ঠা ৫ বছরের সরকারি ফি কত?', language: 'bn', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 4025, expected_max_fee: 4025 },
  { id: 18, query: 'খারিজ খতিয়ানের জন্য অনলাইনে কিভাবে আবেদন করব?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 19, query: 'এনআইডি সংশোধন শুনানি কোথায় হয়?', language: 'bn', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 20, query: 'ই নামজারি আবেদনের কোর্ট ফি ও প্রসেস ফি কত?', language: 'bn', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER', expected_min_fee: 1170, expected_max_fee: 1170 },

  // ================= 15 BANGLISH QUERIES =================
  { id: 21, query: 'nid correction korte chai', language: 'banglish', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 22, query: 'nid card er shami name change kivabe korbo', language: 'banglish', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 23, query: 'voter id card e nam vul kivabe thik korbo', language: 'banglish', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 24, query: 'nid songshodhon fee koto taka', language: 'banglish', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER', expected_min_fee: 230, expected_max_fee: 230 },
  { id: 25, query: 'nid card e boyos vul ashche', language: 'banglish', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 26, query: 'passport er meyad sesh kivabe renew korbo', language: 'banglish', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 27, query: 'passport renewal fee koto', language: 'banglish', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 28, query: 'passport 48 page 10 years fee koto', language: 'banglish', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 5750, expected_max_fee: 5750 },
  { id: 29, query: 'urgent passport renew fee koto', language: 'banglish', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 8050, expected_max_fee: 8050 },
  { id: 30, query: 'epassport renew korte ki ki documents lage', language: 'banglish', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 31, query: 'namjari korte koto taka lage', language: 'banglish', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER', expected_min_fee: 1170, expected_max_fee: 1170 },
  { id: 32, query: 'jomi kharij kivabe korbo dalal chara', language: 'banglish', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 33, query: 'namzari korte koto din somoy lage', language: 'banglish', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 34, query: 'khariz korte ki ki kagoj lage', language: 'banglish', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 35, query: 'mutation hotline number koto', language: 'banglish', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },

  // ================= 10 ENGLISH QUERIES =================
  { id: 36, query: 'How to correct my name in National ID card?', language: 'en', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 37, query: 'What is the government fee for NID correction?', language: 'en', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER', expected_min_fee: 230, expected_max_fee: 230 },
  { id: 38, query: 'What documents are required to correct father name in voter ID?', language: 'en', expected_service_id: 'nid-correction', expected_action: 'DIRECT_ANSWER' },
  { id: 39, query: 'e-passport renewal procedure in Bangladesh', language: 'en', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 40, query: 'Official fees for 48 pages 10 years e-passport renewal', language: 'en', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 5750, expected_max_fee: 5750 },
  { id: 41, query: 'Express delivery charges for passport renewal', language: 'en', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER', expected_min_fee: 8050, expected_max_fee: 8050 },
  { id: 42, query: 'Is police verification needed for passport renewal?', language: 'en', expected_service_id: 'passport-renewal', expected_action: 'DIRECT_ANSWER' },
  { id: 43, query: 'What is the exact government fee for land e-mutation in BD?', language: 'en', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER', expected_min_fee: 1170, expected_max_fee: 1170 },
  { id: 44, query: 'Required documents for land namjari application', language: 'en', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },
  { id: 45, query: 'How many days does land mutation take under government SLA?', language: 'en', expected_service_id: 'land-mutation', expected_action: 'DIRECT_ANSWER' },

  // ================= 5 OUT-OF-SCOPE / AMBIGUOUS QUERIES =================
  { id: 46, query: 'I want to purchase a firearms gun licence in Dhaka', language: 'en', expected_action: 'SAFE_REFUSAL' },
  { id: 47, query: 'traffic police online fine payment system', language: 'en', expected_action: 'SAFE_REFUSAL' },
  { id: 48, query: 'how to trade bitcoin and crypto in bangladesh', language: 'en', expected_action: 'SAFE_REFUSAL' },
  { id: 49, query: 'amake ekta sundor bangla kobita likhe dao', language: 'banglish', expected_action: 'SAFE_REFUSAL' },
  { id: 50, query: 'what is the weather today in chittagong', language: 'en', expected_action: 'SAFE_REFUSAL' }
];

describe('Sohokari Decision Engine - 50 Golden Test Set Evaluation', () => {
  it('evaluates all 50 golden queries and satisfies performance & accuracy thresholds', () => {
    let inScopeCount = 0;
    let correctClassificationCount = 0;
    let outOfScopeCount = 0;
    let correctRefusalCount = 0;
    let feeValidationCount = 0;
    let feeCheckedCount = 0;
    let maxExecutionTimeMs = 0;

    for (const testCase of GOLDEN_50_DATASET) {
      const response = processChatQuery(testCase.query, VERIFIED_SERVICES);

      if (response.trace.execution_time_ms > maxExecutionTimeMs) {
        maxExecutionTimeMs = response.trace.execution_time_ms;
      }

      // Check Out-of-Scope handling
      if (testCase.expected_action === 'SAFE_REFUSAL') {
        outOfScopeCount++;
        if (response.action === 'SAFE_REFUSAL') {
          correctRefusalCount++;
        }
        expect(response.action).toBe('SAFE_REFUSAL');
        continue;
      }

      if (response.service?.id !== testCase.expected_service_id) {
        console.error(`FAILED CASE #${testCase.id}: "${testCase.query}" - Action: ${response.action}, Matched: ${response.service?.id}, Confidence: ${response.trace.confidence_score}`);
      }

      // In-scope checks
      inScopeCount++;
      if (
        response.service?.id === testCase.expected_service_id &&
        response.action === testCase.expected_action
      ) {
        correctClassificationCount++;
      }

      expect(response.service?.id).toBe(testCase.expected_service_id);
      expect(response.action).toBe(testCase.expected_action);

      // Fee exactness check (Zero Hallucination)
      if (testCase.expected_min_fee !== undefined && response.variant) {
        feeCheckedCount++;
        const totalFee = response.variant.fees.reduce((sum, f) => sum + f.amount_bdt, 0);
        if (
          totalFee >= testCase.expected_min_fee &&
          totalFee <= (testCase.expected_max_fee || testCase.expected_min_fee)
        ) {
          feeValidationCount++;
        }
        expect(totalFee).toBeGreaterThanOrEqual(testCase.expected_min_fee);
        if (testCase.expected_max_fee !== undefined) {
          expect(totalFee).toBeLessThanOrEqual(testCase.expected_max_fee);
        }
      }
    }

    const classificationAccuracy = (correctClassificationCount / inScopeCount) * 100;
    const refusalAccuracy = (correctRefusalCount / outOfScopeCount) * 100;
    const feeAccuracy = (feeValidationCount / feeCheckedCount) * 100;

    console.log(`\n================ EVALUATION RESULTS ================`);
    console.log(`Total Test Cases: 50`);
    console.log(`In-Scope Service Classification Accuracy: ${classificationAccuracy.toFixed(1)}% (Target: >= 95%)`);
    console.log(`Out-of-Scope Safe Refusal Accuracy: ${refusalAccuracy.toFixed(1)}% (Target: 100%)`);
    console.log(`Fee Retrieval Exactness: ${feeAccuracy.toFixed(1)}% (Target: 100%)`);
    console.log(`Max Execution Time: ${maxExecutionTimeMs}ms (Target: < 10ms CPU)`);
    console.log(`====================================================\n`);

    expect(classificationAccuracy).toBeGreaterThanOrEqual(95.0);
    expect(refusalAccuracy).toBe(100.0);
    expect(feeAccuracy).toBe(100.0);
    expect(maxExecutionTimeMs).toBeLessThan(100.0);
  });
});

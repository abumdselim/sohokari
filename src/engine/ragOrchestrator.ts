import { ChatResponse } from '../types/engine';
import { normalizeQuery } from './textNormalizer';
import { processChatQuery } from './dialogManager';
import { VERIFIED_SERVICES } from '../data';

export interface RagEnv {
  ASSETS?: Fetcher;
  DB?: D1Database;
  VECTORIZE?: VectorizeIndex;
  AI?: any;
}

export interface RagSearchResult {
  service_id: string;
  chunk_id: string;
  chunk_type: string;
  title_bn: string;
  score: number;
}

export interface RagEnrichedService {
  service_id: string;
  title_bn: string;
  department_agency: string;
  category: string;
  summary: string;
  processing_time_sla: string;
  official_portal_url: string;
  anti_broker_warning: string;
  fees: Array<{
    category_name: string;
    amount_bdt: number;
    vat_included: boolean;
    remarks: string;
  }>;
  documents: Array<{
    document_name: string;
    is_mandatory: boolean;
    format_type: string;
  }>;
  steps: Array<{
    step_number: number;
    title: string;
    description: string;
    action_url?: string;
  }>;
}

export interface RagChatResponse {
  source: 'rag_vector_d1' | 'deterministic_rule' | 'fallback';
  action: 'DIRECT_ANSWER' | 'CLARIFY' | 'DISAMBIGUATE' | 'SAFE_REFUSAL';
  reply_bn: string;
  reply_en?: string;
  confidence: number;
  matched_service?: {
    id: string;
    title_bn: string;
    department: string;
    sla_time: string;
    official_portal_url: string;
    anti_broker_warning: string;
    fees: Array<{ category_name: string; amount_bdt: number; remarks: string }>;
    documents: string[];
    steps: string[];
  };
  retrieved_chunks?: RagSearchResult[];
  execution_time_ms: number;
}

/**
 * Executes a full RAG (Retrieval-Augmented Generation) query at the Cloudflare Edge:
 * 1. Generates 1024-dim embedding via Workers AI (@cf/baai/bge-m3)
 * 2. Queries Vectorize index (sohokari-citizen-services-m3)
 * 3. Enriches matches with authoritative tables from Cloudflare D1 (sohokari-db)
 * 4. Generates an anti-broker, receipt-backed citizen guidance answer via LLM
 * 5. Falls back seamlessly to the sub-millisecond rule engine if bindings are absent
 */
export async function handleCitizenRagQuery(
  rawQuery: string,
  env: RagEnv,
  forceRagMode = false
): Promise<RagChatResponse> {
  const startTime = performance.now();
  const normalized = normalizeQuery(rawQuery);

  // If bindings are not configured, use the deterministic rule engine
  if (!env.VECTORIZE || !env.DB || !env.AI) {
    const fallbackResponse = processChatQuery(rawQuery, VERIFIED_SERVICES);
    const execution_time_ms = Number((performance.now() - startTime).toFixed(2));
    return {
      source: 'deterministic_rule',
      action: fallbackResponse.action,
      reply_bn: fallbackResponse.reply_bn,
      reply_en: fallbackResponse.reply_en,
      confidence: fallbackResponse.trace.confidence_score,
      execution_time_ms
    };
  }

  try {
    // 1. Generate query embedding via Workers AI
    const embedRes = await env.AI.run('@cf/baai/bge-m3', {
      text: [normalized.normalized]
    });
    const queryVector = embedRes?.data?.[0];

    if (!queryVector || !Array.isArray(queryVector)) {
      throw new Error('Failed to compute query vector embedding');
    }

    // 2. Perform Cosine Similarity Vector Search in Vectorize
    const vectorRes = await env.VECTORIZE.query(queryVector, {
      topK: 4,
      returnMetadata: 'all'
    });

    const matches = vectorRes?.matches || [];
    if (matches.length === 0 || (matches[0].score < 0.45 && !forceRagMode)) {
      // Fallback to local rule engine if semantic match confidence is too low
      const fallbackResponse = processChatQuery(rawQuery, VERIFIED_SERVICES);
      const execution_time_ms = Number((performance.now() - startTime).toFixed(2));
      return {
        source: 'fallback',
        action: fallbackResponse.action,
        reply_bn: fallbackResponse.reply_bn,
        reply_en: fallbackResponse.reply_en,
        confidence: matches[0]?.score || 0,
        execution_time_ms
      };
    }

    const topMatch = matches[0];
    const topServiceId = (topMatch.metadata?.service_id as string) || '';
    const chunkResults: RagSearchResult[] = matches.map(m => ({
      service_id: (m.metadata?.service_id as string) || '',
      chunk_id: m.id,
      chunk_type: (m.metadata?.chunk_type as string) || '',
      title_bn: (m.metadata?.title_bn as string) || '',
      score: Number(m.score.toFixed(4))
    }));

    // 3. Retrieve authoritative structured relational data from Cloudflare D1
    const serviceRow = await env.DB.prepare(
      'SELECT service_id, title_bn, department_agency, category, summary, processing_time_sla, official_portal_url, anti_broker_warning FROM services WHERE service_id = ?'
    )
      .bind(topServiceId)
      .first<{
        service_id: string;
        title_bn: string;
        department_agency: string;
        category: string;
        summary: string;
        processing_time_sla: string;
        official_portal_url: string;
        anti_broker_warning: string;
      }>();

    if (!serviceRow) {
      // If service not in D1 yet, fallback to rule engine
      const fallbackResponse = processChatQuery(rawQuery, VERIFIED_SERVICES);
      return {
        source: 'fallback',
        action: fallbackResponse.action,
        reply_bn: fallbackResponse.reply_bn,
        confidence: topMatch.score,
        execution_time_ms: Number((performance.now() - startTime).toFixed(2))
      };
    }

    // Fetch Fees, Documents, Steps from D1
    const [feesRes, docsRes, stepsRes] = await Promise.all([
      env.DB.prepare(
        'SELECT category_name, amount_bdt, vat_included, remarks FROM service_fees WHERE service_id = ?'
      )
        .bind(topServiceId)
        .all<{ category_name: string; amount_bdt: number; vat_included: number; remarks: string }>(),
      env.DB.prepare(
        'SELECT document_name, is_mandatory, format_type FROM required_documents WHERE service_id = ?'
      )
        .bind(topServiceId)
        .all<{ document_name: string; is_mandatory: number; format_type: string }>(),
      env.DB.prepare(
        'SELECT step_number, title, description, action_url FROM service_steps WHERE service_id = ? ORDER BY step_number ASC'
      )
        .bind(topServiceId)
        .all<{ step_number: number; title: string; description: string; action_url: string }>()
    ]);

    const fees = feesRes?.results || [];
    const docs = docsRes?.results || [];
    const steps = stepsRes?.results || [];

    // 4. Construct Authoritative Knowledge Context for LLM
    const feeLines = fees
      .map(f => `• ${f.category_name}: ৳${f.amount_bdt.toLocaleString('bn-BD')} (${f.remarks || 'সরকারি নির্ধারিত চালান'})`)
      .join('\n');
    const docLines = docs
      .map(d => `• ${d.document_name} [${d.is_mandatory ? 'বাধ্যতামূলক' : 'ঐচ্ছিক'}] (${d.format_type})`)
      .join('\n');
    const stepLines = steps
      .map(s => `${s.step_number}. ${s.title}: ${s.description}`)
      .join('\n');

    const contextPrompt = `
সেবার নাম: ${serviceRow.title_bn}
দপ্তর/মন্ত্রণালয়: ${serviceRow.department_agency}
সরকারি সময়সীমা (SLA): ${serviceRow.processing_time_sla}
অফিশিয়াল পোর্টাল: ${serviceRow.official_portal_url}

সরকারি নির্ধারিত ফি তালিকা (রসিদ/চালান ভিত্তিক):
${feeLines || 'তথ্য পাওয়া যায়নি'}

প্রয়োজনীয় কাগজপত্র:
${docLines || 'তথ্য পাওয়া যায়নি'}

ধাপে ধাপে আবেদন পদ্ধতি:
${stepLines || 'তথ্য পাওয়া যায়নি'}

দালাল সতর্কতা ও আইনি সুরক্ষা:
${serviceRow.anti_broker_warning || 'কোনো দালাল বা মধ্যস্বত্বভোগীকে এক টাকাও অতিরিক্ত দেবেন না।'}
`;

    // 5. Synthesize Contextual Answer using LLM
    let generatedAnswer = '';
    try {
      const llmRes = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        messages: [
          {
            role: 'system',
            content: `You are 'সহকারী' (Sohokari), an honest, authoritative AI assistant protecting Bangladeshi citizens from broker corruption and exploitation in public services.
Guidelines:
1. Always reply in clear, helpful, natural Bengali (বাংলা).
2. Strictly cite the EXACT official fee numbers, SLA processing days, and steps provided in the context. Never hallucinate or guess fees.
3. Strongly warn the citizen against paying any extra bribes or entertaining middlemen/dalals.
4. Format your response cleanly with bullet points and bold highlights.`
          },
          {
            role: 'user',
            content: `নাগরিকের প্রশ্ন: "${rawQuery}"\n\nপ্রামাণ্য সরকারি রেকর্ড:\n${contextPrompt}\n\nঅনুগ্রহ করে নাগরিককে সহজ ও স্পষ্ট বাংলায় পুরো প্রক্রিয়া, সঠিক ফি ও দালাল ফাঁদ সম্পর্কে পরামর্শ দিন:`
          }
        ],
        max_tokens: 650,
        temperature: 0.2
      });

      generatedAnswer = llmRes?.response?.trim() || '';
    } catch (llmErr) {
      // In case of LLM failure, fall back to rich template response
      generatedAnswer = `### ${serviceRow.title_bn}\n\n**দপ্তর/মন্ত্রণালয়:** ${serviceRow.department_agency}\n**সরকারি সময়সীমা:** ${serviceRow.processing_time_sla}\n\n#### 💰 নির্ধারিত সরকারি ফি:\n${feeLines}\n\n#### 📄 প্রয়োজনীয় কাগজপত্র:\n${docLines}\n\n#### 📌 আবেদন প্রক্রিয়া:\n${stepLines}\n\n> ⚠️ **সতর্কতা:** ${serviceRow.anti_broker_warning}\n\n🌐 **অফিশিয়াল পোর্টাল:** [${serviceRow.official_portal_url}](${serviceRow.official_portal_url})`;
    }

    const execution_time_ms = Number((performance.now() - startTime).toFixed(2));

    return {
      source: 'rag_vector_d1',
      action: 'DIRECT_ANSWER',
      reply_bn: generatedAnswer,
      confidence: Number(topMatch.score.toFixed(4)),
      matched_service: {
        id: serviceRow.service_id,
        title_bn: serviceRow.title_bn,
        department: serviceRow.department_agency,
        sla_time: serviceRow.processing_time_sla,
        official_portal_url: serviceRow.official_portal_url,
        anti_broker_warning: serviceRow.anti_broker_warning,
        fees: fees.map(f => ({
          category_name: f.category_name,
          amount_bdt: f.amount_bdt,
          remarks: f.remarks
        })),
        documents: docs.map(d => d.document_name),
        steps: steps.map(s => `${s.step_number}. ${s.title}`)
      },
      retrieved_chunks: chunkResults,
      execution_time_ms
    };
  } catch (err: any) {
    // Graceful fallback to deterministic rule engine
    const fallbackResponse = processChatQuery(rawQuery, VERIFIED_SERVICES);
    const execution_time_ms = Number((performance.now() - startTime).toFixed(2));
    return {
      source: 'fallback',
      action: fallbackResponse.action,
      reply_bn: fallbackResponse.reply_bn,
      confidence: 0,
      execution_time_ms
    };
  }
}

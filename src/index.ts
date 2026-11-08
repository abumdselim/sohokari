import { processChatQuery } from './engine/dialogManager';
import { handleCitizenRagQuery, RagEnv } from './engine/ragOrchestrator';
import { VERIFIED_SERVICES } from './data';

export interface Env extends RagEnv {
  ASSETS?: Fetcher;
  DB?: D1Database;
  VECTORIZE?: VectorizeIndex;
  AI?: any;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // Health check endpoint
    if (url.pathname === '/api/health') {
      return new Response(
        JSON.stringify({
          status: 'healthy',
          project: 'Kaaz AI (কাজ এআই)',
          version: '0.2.0-ai-rag',
          verified_services_count: VERIFIED_SERVICES.length,
          bindings: {
            d1: !!env.DB,
            vectorize: !!env.VECTORIZE,
            ai: !!env.AI
          },
          timestamp: new Date().toISOString()
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Services Catalog API (In-Memory Fast Catalog)
    if (url.pathname === '/api/services' && request.method === 'GET') {
      const summary = VERIFIED_SERVICES.map(s => ({
        id: s.id,
        slug: s.slug,
        category_id: s.category_id,
        name_bn: s.name_bn,
        name_en: s.name_en,
        ministry_bn: s.responsible_ministry_bn,
        agency_bn: s.responsible_agency_bn,
        visiting_office_level: s.visiting_office_level,
        official_portal_url: s.official_portal_url,
        helpline_number: s.helpline_number,
        variants_count: s.variants.length,
        status: s.status,
        last_verified_at: s.last_verified_at
      }));

      return new Response(JSON.stringify(summary, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Cloudflare D1 Live Services Database API
    if (url.pathname === '/api/services/db' && request.method === 'GET') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'D1 binding not available' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      try {
        const rows = await env.DB.prepare(
          'SELECT service_id, title_bn, department_agency, category, summary, processing_time_sla, official_portal_url, anti_broker_warning FROM services ORDER BY service_id ASC'
        ).all();

        return new Response(JSON.stringify({ total: rows.results?.length || 0, services: rows.results }, null, 2), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // Emergency & Helpline Directory API (/api/directory)
    if (url.pathname === '/api/directory' && request.method === 'GET') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'D1 binding not available' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      try {
        const category = url.searchParams.get('category');
        const district = url.searchParams.get('district');
        const thana = url.searchParams.get('thana');
        const q = url.searchParams.get('q');

        let sql = 'SELECT * FROM emergency_directories WHERE 1=1';
        const params: any[] = [];

        if (category) {
          sql += ' AND category = ?';
          params.push(category);
        }
        if (district) {
          sql += ' AND (district_bn LIKE ? OR division_bn LIKE ?)';
          params.push(`%${district}%`, `%${district}%`);
        }
        if (thana) {
          sql += ' AND upazila_thana_bn LIKE ?';
          params.push(`%${thana}%`);
        }
        if (q) {
          sql += ' AND (organization_name_bn LIKE ? OR service_scope LIKE ? OR short_code LIKE ? OR phone_numbers LIKE ?)';
          params.push(`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`);
        }

        sql += ' ORDER BY id ASC LIMIT 100';

        let stmt = env.DB.prepare(sql);
        if (params.length > 0) {
          stmt = stmt.bind(...params);
        }

        const rows = await stmt.all();

        return new Response(
          JSON.stringify({ total: rows.results?.length || 0, directory: rows.results }, null, 2),
          {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          }
        );
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // Explicit RAG Endpoint (/api/rag)
    if (url.pathname === '/api/rag' && request.method === 'POST') {
      try {
        const body = (await request.json()) as { query?: string };
        const query = body.query?.trim();

        if (!query) {
          return new Response(JSON.stringify({ error: 'Query parameter cannot be empty' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        const ragResult = await handleCitizenRagQuery(query, env, true);
        return new Response(JSON.stringify(ragResult, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Execution-Time-Ms': ragResult.execution_time_ms.toString()
          }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // Dynamic Decision & Unified Chat API (/api/chat)
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const body = (await request.json()) as {
          query?: string;
          mode?: 'auto' | 'rag' | 'fast';
        };
        const query = body.query?.trim();
        const mode = body.mode || 'auto';

        if (!query) {
          return new Response(
            JSON.stringify({ error: 'Query parameter cannot be empty' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            }
          );
        }

        // If explicitly requesting RAG mode or if AI bindings are live
        if (mode === 'rag' || (mode === 'auto' && env.VECTORIZE && env.DB && env.AI)) {
          const ragResult = await handleCitizenRagQuery(query, env);
          // If RAG produced a confident direct answer, return it
          if (ragResult.source === 'rag_vector_d1' || ragResult.confidence >= 0.5) {
            const unified = {
              ...ragResult,
              trace: {
                execution_time_ms: ragResult.execution_time_ms,
                confidence_score: ragResult.confidence,
                rules_evaluated: 1,
                matched_rule: 'rag_vector_d1'
              }
            };
            return new Response(JSON.stringify(unified, null, 2), {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'X-Execution-Time-Ms': ragResult.execution_time_ms.toString(),
                'X-Source': ragResult.source
              }
            });
          }
        }

        // Fast-path Deterministic Rule Engine
        const result = processChatQuery(query, VERIFIED_SERVICES);

        return new Response(JSON.stringify(result, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Execution-Time-Ms': result.trace.execution_time_ms.toString(),
            'X-Source': 'deterministic_rule'
          }
        });
      } catch (err: any) {
        return new Response(
          JSON.stringify({ error: 'Invalid JSON payload or internal error', details: err?.message }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
      }
    }

    // Fall back to static assets (HTML/CSS/JS directory)
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Sohokari Edge Worker Active. Visit /api/services, /api/chat, or /api/health.', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};

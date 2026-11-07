import { processChatQuery } from './engine/dialogManager';
import { VERIFIED_SERVICES } from './data';

export interface Env {
  ASSETS?: Fetcher;
  // DB?: D1Database;
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
          project: 'Sheyal (শেয়াল)',
          version: '0.1.0-poc',
          verified_services_count: VERIFIED_SERVICES.length,
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

    // Services Catalog API
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

    // Dynamic Decision & Chat API
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const body = await request.json() as { query?: string };
        const query = body.query?.trim();

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

        const result = processChatQuery(query, VERIFIED_SERVICES);

        return new Response(JSON.stringify(result, null, 2), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Execution-Time-Ms': result.trace.execution_time_ms.toString()
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

    return new Response('Sheyal Edge Worker Active. Visit /api/services or /api/health.', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};

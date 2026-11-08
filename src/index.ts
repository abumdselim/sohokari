import { processChatQuery } from './engine/dialogManager';
import { handleCitizenRagQuery, RagEnv } from './engine/ragOrchestrator';
import { VERIFIED_SERVICES } from './data';
import { hashPassword, verifyPassword, generateToken, getAuthenticatedUser } from './auth';

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

    // ==========================================
    // Auth: Sign Up (/api/auth/signup)
    // ==========================================
    if (url.pathname === '/api/auth/signup' && request.method === 'POST') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'Database service unavailable' }), { 
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      try {
        const body = (await request.json()) as { email?: string; password?: string; name?: string };
        const email = body.email?.trim().toLowerCase();
        const password = body.password?.trim();
        const name = body.name?.trim();

        if (!email || !password || !name) {
          return new Response(JSON.stringify({ error: 'নাম, ইমেইল ও পাসওয়ার্ড প্রদান করুন' }), { 
            status: 400,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }
        if (password.length < 6) {
          return new Response(JSON.stringify({ error: 'পাসওয়ার্ড ন্যূনতম ৬ অক্ষরের হতে হবে' }), { 
            status: 400,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        // Check if user exists
        const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
        if (existing) {
          return new Response(JSON.stringify({ error: 'এই ইমেইল দিয়ে ইতোমধ্যে একটি অ্যাকাউন্ট রয়েছে' }), { 
            status: 409,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        const id = crypto.randomUUID();
        const passwordHash = await hashPassword(password);
        const now = new Date().toISOString();

        await env.DB.prepare(
          'INSERT INTO users (id, email, name, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(id, email, name, passwordHash, now, now).run();

        const token = await generateToken({ id, email, name });
        return new Response(JSON.stringify({ token, user: { id, email, name } }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message || 'সাইন আপ ব্যর্থ হয়েছে' }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ==========================================
    // Auth: Login (/api/auth/login)
    // ==========================================
    if (url.pathname === '/api/auth/login' && request.method === 'POST') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'Database service unavailable' }), { 
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      try {
        const body = (await request.json()) as { email?: string; password?: string };
        const email = body.email?.trim().toLowerCase();
        const password = body.password?.trim();

        if (!email || !password) {
          return new Response(JSON.stringify({ error: 'ইমেইল ও পাসওয়ার্ড দিন' }), { 
            status: 400,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        const userRow = await env.DB.prepare(
          'SELECT id, email, name, password_hash FROM users WHERE email = ?'
        ).bind(email).first<{ id: string; email: string; name: string; password_hash: string }>();

        if (!userRow) {
          return new Response(JSON.stringify({ error: 'ভুল ইমেইল বা পাসওয়ার্ড' }), { 
            status: 401,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        const isValid = await verifyPassword(password, userRow.password_hash);
        if (!isValid) {
          return new Response(JSON.stringify({ error: 'ভুল ইমেইল বা পাসওয়ার্ড' }), { 
            status: 401,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        const token = await generateToken({ id: userRow.id, email: userRow.email, name: userRow.name });
        return new Response(JSON.stringify({ token, user: { id: userRow.id, email: userRow.email, name: userRow.name } }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message || 'লগইন ব্যর্থ হয়েছে' }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ==========================================
    // Auth: Current User (/api/auth/me)
    // ==========================================
    if (url.pathname === '/api/auth/me' && request.method === 'GET') {
      const authUser = await getAuthenticatedUser(request);
      if (!authUser) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      return new Response(JSON.stringify({ user: authUser }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // ==========================================
    // Chat History: List Sessions (/api/chats)
    // ==========================================
    if (url.pathname === '/api/chats' && request.method === 'GET') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'DB unavailable' }), { 
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      const authUser = await getAuthenticatedUser(request);
      if (!authUser) {
        return new Response(JSON.stringify({ error: 'লগইন আবশ্যক' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      try {
        const rows = await env.DB.prepare(
          'SELECT id, title, created_at, updated_at FROM chat_sessions WHERE user_id = ? ORDER BY updated_at DESC LIMIT 50'
        ).bind(authUser.id).all();

        return new Response(JSON.stringify({ sessions: rows.results || [] }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ==========================================
    // Chat History: Load Messages (/api/chats/:id)
    // ==========================================
    if (url.pathname.startsWith('/api/chats/') && request.method === 'GET') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'DB unavailable' }), { 
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      const authUser = await getAuthenticatedUser(request);
      if (!authUser) {
        return new Response(JSON.stringify({ error: 'লগইন আবশ্যক' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      const sessionId = url.pathname.replace('/api/chats/', '').trim();
      try {
        const session = await env.DB.prepare(
          'SELECT id, title, created_at, updated_at FROM chat_sessions WHERE id = ? AND user_id = ?'
        ).bind(sessionId, authUser.id).first();

        if (!session) {
          return new Response(JSON.stringify({ error: 'চ্যাট সেশন পাওয়া যায়নি' }), { 
            status: 404,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }

        const messages = await env.DB.prepare(
          'SELECT id, role, content, payload_json, created_at FROM chat_messages WHERE session_id = ? ORDER BY created_at ASC'
        ).bind(sessionId).all();

        return new Response(JSON.stringify({ session, messages: messages.results || [] }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ==========================================
    // Chat History: Save Message (/api/chats)
    // ==========================================
    if (url.pathname === '/api/chats' && request.method === 'POST') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'DB unavailable' }), { 
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      const authUser = await getAuthenticatedUser(request);
      if (!authUser) {
        return new Response(JSON.stringify({ error: 'লগইন আবশ্যক' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      try {
        const body = (await request.json()) as {
          session_id?: string;
          title?: string;
          user_message: string;
          bot_response: any;
        };

        let sessionId = body.session_id;
        const now = new Date().toISOString();

        if (!sessionId) {
          sessionId = crypto.randomUUID();
          let title = body.title?.trim();
          if (!title) {
            title = body.user_message.length > 32 
              ? body.user_message.substring(0, 32) + '...'
              : body.user_message;
          }

          await env.DB.prepare(
            'INSERT INTO chat_sessions (id, user_id, title, created_at, updated_at) VALUES (?, ?, ?, ?, ?)'
          ).bind(sessionId, authUser.id, title, now, now).run();
        } else {
          await env.DB.prepare(
            'UPDATE chat_sessions SET updated_at = ? WHERE id = ? AND user_id = ?'
          ).bind(now, sessionId, authUser.id).run();
        }

        // Insert user message
        const userMsgId = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO chat_messages (id, session_id, user_id, role, content, payload_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(userMsgId, sessionId, authUser.id, 'user', body.user_message, null, now).run();

        // Insert bot response
        const botMsgId = crypto.randomUUID();
        const botPayload = JSON.stringify(body.bot_response);
        const botText = body.bot_response.reply_bn || body.bot_response.service?.name_bn || 'সরকারি সেবা তথ্য';
        await env.DB.prepare(
          'INSERT INTO chat_messages (id, session_id, user_id, role, content, payload_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(botMsgId, sessionId, authUser.id, 'bot', botText, botPayload, now).run();

        return new Response(JSON.stringify({ session_id: sessionId }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // ==========================================
    // Chat History: Delete Session (/api/chats/:id)
    // ==========================================
    if (url.pathname.startsWith('/api/chats/') && request.method === 'DELETE') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'DB unavailable' }), { 
          status: 503,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
      const authUser = await getAuthenticatedUser(request);
      if (!authUser) {
        return new Response(JSON.stringify({ error: 'লগইন আবশ্যক' }), { 
          status: 401,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      const sessionId = url.pathname.replace('/api/chats/', '').trim();
      try {
        await env.DB.prepare('DELETE FROM chat_messages WHERE session_id = ? AND user_id = ?').bind(sessionId, authUser.id).run();
        await env.DB.prepare('DELETE FROM chat_sessions WHERE id = ? AND user_id = ?').bind(sessionId, authUser.id).run();
        return new Response(JSON.stringify({ success: true }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
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

    // Route /chat or /app directly to chat.html
    if (url.pathname === '/chat' || url.pathname === '/app') {
      if (env.ASSETS) {
        return env.ASSETS.fetch(new Request(new URL('/chat.html', request.url), request));
      }
    }

    // Route /landing directly to landing page (index.html)
    if (url.pathname === '/landing') {
      if (env.ASSETS) {
        return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
      }
    }

    // Route /tools or /pdf directly to tools.html
    if (url.pathname === '/tools' || url.pathname === '/pdf' || url.pathname === '/pdf-tools') {
      if (env.ASSETS) {
        return env.ASSETS.fetch(new Request(new URL('/tools.html', request.url), request));
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

/**
 * Minimalist, Secure Web Crypto Authentication for Cloudflare Workers
 * Uses native Web Crypto API (HMAC-SHA256 for tokens, Salted SHA-256 for passwords)
 */

const JWT_SECRET = 'kaaz-ai-sec-citizen-intelligence-2026';

// Helper: Convert string to Uint8Array
function str2ab(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

// Helper: Convert ArrayBuffer or Uint8Array to hex string
function ab2hex(buf: ArrayBuffer | Uint8Array): string {
  const arr = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  return Array.from(arr)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Base64URL encode
function base64urlEncode(str: string): string {
  const base64 = btoa(str);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Base64URL decode
function base64urlDecode(str: string): string {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return atob(str);
}

/**
 * Hash password with a unique salt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const saltHex = ab2hex(salt);
  const data = str2ab(saltHex + password);
  const hashBuf = await crypto.subtle.digest('SHA-256', data as any);
  const hashHex = ab2hex(hashBuf);
  return `${saltHex}:${hashHex}`;
}

/**
 * Verify password against stored salt:hash
 */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split(':');
  if (parts.length !== 2) return false;
  const [saltHex, originalHashHex] = parts;
  const data = str2ab(saltHex + password);
  const hashBuf = await crypto.subtle.digest('SHA-256', data as any);
  const computedHashHex = ab2hex(hashBuf);
  return originalHashHex === computedHashHex;
}

export interface UserPayload {
  id: string;
  email: string;
  name: string;
}

/**
 * Generate a cryptographically signed HMAC-SHA256 JWT
 */
export async function generateToken(user: UserPayload): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' };
  const payload = {
    sub: user.id,
    email: user.email,
    name: user.name,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 30 * 24 * 3600 // 30 days
  };

  const encodedHeader = base64urlEncode(JSON.stringify(header));
  const encodedPayload = base64urlEncode(JSON.stringify(payload));
  const message = `${encodedHeader}.${encodedPayload}`;

  const key = await crypto.subtle.importKey(
    'raw',
    str2ab(JWT_SECRET) as any,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, str2ab(message) as any);
  const encodedSignature = base64urlEncode(
    String.fromCharCode(...new Uint8Array(signature))
  );

  return `${message}.${encodedSignature}`;
}

/**
 * Verify a signed JWT and return user payload or null
 */
export async function verifyToken(token: string): Promise<UserPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const message = `${encodedHeader}.${encodedPayload}`;

    const key = await crypto.subtle.importKey(
      'raw',
      str2ab(JWT_SECRET) as any,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigStr = base64urlDecode(encodedSignature);
    const sigBuf = new Uint8Array(sigStr.length);
    for (let i = 0; i < sigStr.length; i++) {
      sigBuf[i] = sigStr.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify('HMAC', key, sigBuf as any, str2ab(message) as any);
    if (!isValid) return null;

    const payload = JSON.parse(base64urlDecode(encodedPayload));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name
    };
  } catch (_) {
    return null;
  }
}

/**
 * Extract authenticated user from Authorization header
 */
export async function getAuthenticatedUser(request: Request): Promise<UserPayload | null> {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.substring(7).trim();
  if (!token) return null;
  return await verifyToken(token);
}

/**
 * Client-Side Authentication & Chat History Manager for Kaaz AI
 * Minimalist, Black & White corporate modal & session sync
 */

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface ChatSessionItem {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export class AuthClient {
  private static tokenKey = 'kaaz_token';
  private static userKey = 'kaaz_user';

  public static getToken(): string | null {
    try {
      return localStorage.getItem(this.tokenKey);
    } catch (_) {
      return null;
    }
  }

  public static getUser(): AuthUser | null {
    try {
      const data = localStorage.getItem(this.userKey);
      return data ? JSON.parse(data) : null;
    } catch (_) {
      return null;
    }
  }

  public static isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public static setSession(token: string, user: AuthUser): void {
    try {
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.userKey, JSON.stringify(user));
      window.dispatchEvent(new CustomEvent('kaaz:auth-change', { detail: { user } }));
    } catch (_) {}
  }

  public static logout(): void {
    try {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userKey);
      window.dispatchEvent(new CustomEvent('kaaz:auth-change', { detail: { user: null } }));
    } catch (_) {}
  }

  public static async signup(name: string, email: string, password: string): Promise<{ success: boolean; error?: string; user?: AuthUser }> {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = (await res.json()) as any;
      if (!res.ok) {
        return { success: false, error: data.error || 'সাইন আপ ব্যর্থ হয়েছে' };
      }
      this.setSession(data.token, data.user);
      return { success: true, user: data.user };
    } catch (e: any) {
      return { success: false, error: 'সার্ভার সংযোগে ত্রুটি' };
    }
  }

  public static async login(email: string, password: string): Promise<{ success: boolean; error?: string; user?: AuthUser }> {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = (await res.json()) as any;
      if (!res.ok) {
        return { success: false, error: data.error || 'লগইন ব্যর্থ হয়েছে' };
      }
      this.setSession(data.token, data.user);
      return { success: true, user: data.user };
    } catch (e: any) {
      return { success: false, error: 'সার্ভার সংযোগে ত্রুটি' };
    }
  }

  public static async fetchChatSessions(): Promise<ChatSessionItem[]> {
    const token = this.getToken();
    if (!token) return [];
    try {
      const res = await fetch('/api/chats', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) return [];
      const data = (await res.json()) as any;
      return data.sessions || [];
    } catch (_) {
      return [];
    }
  }

  public static async loadSessionMessages(sessionId: string): Promise<{ session: any; messages: any[] } | null> {
    const token = this.getToken();
    if (!token) return null;
    try {
      const res = await fetch(`/api/chats/${sessionId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) return null;
      return (await res.json()) as any;
    } catch (_) {
      return null;
    }
  }

  public static async saveMessage(sessionId: string | null, userMessage: string, botResponse: any): Promise<string | null> {
    const token = this.getToken();
    if (!token) return null;
    try {
      const res = await fetch('/api/chats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          session_id: sessionId || undefined,
          user_message: userMessage,
          bot_response: botResponse
        })
      });
      if (!res.ok) return null;
      const data = (await res.json()) as any;
      return data.session_id || null;
    } catch (_) {
      return null;
    }
  }

  public static async deleteSession(sessionId: string): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;
    try {
      const res = await fetch(`/api/chats/${sessionId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      return res.ok;
    } catch (_) {
      return false;
    }
  }

  // ========================================================
  // Minimalist Black & White Auth Modal
  // ========================================================
  public static openAuthModal(defaultTab: 'login' | 'signup' = 'login', onSuccess?: () => void): void {
    let modalOverlay = document.getElementById('kaaz-auth-overlay');
    if (!modalOverlay) {
      modalOverlay = document.createElement('div');
      modalOverlay.id = 'kaaz-auth-overlay';
      modalOverlay.className = 'kaaz-auth-overlay';
      document.body.appendChild(modalOverlay);
    }

    modalOverlay.innerHTML = `
      <div class="kaaz-auth-modal" role="dialog" aria-modal="true">
        <div class="auth-modal-header">
          <div class="auth-brand-row">
            <img src="/assets/kaaz-logo-header.svg?v=4" alt="Kaaz AI" class="auth-logo-img" />
            <button class="btn-auth-close" id="btn-auth-close" aria-label="বন্ধ করুন">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="auth-tabs-row">
            <button class="auth-tab-btn ${defaultTab === 'login' ? 'active' : ''}" id="tab-login-btn">লগইন</button>
            <button class="auth-tab-btn ${defaultTab === 'signup' ? 'active' : ''}" id="tab-signup-btn">নতুন অ্যাকাউন্ট</button>
          </div>
        </div>

        <div class="auth-modal-body">
          <div id="auth-error-banner" class="auth-error-banner" style="display: none;"></div>

          <!-- Login Form -->
          <form id="form-auth-login" class="auth-form" style="${defaultTab === 'login' ? '' : 'display: none;'}">
            <div class="auth-input-group">
              <label class="auth-label" for="login-email">ইমেইল ঠিকানা</label>
              <input type="email" id="login-email" class="auth-input" placeholder="name@example.com" required autocomplete="email" />
            </div>
            <div class="auth-input-group">
              <label class="auth-label" for="login-password">পাসওয়ার্ড</label>
              <input type="password" id="login-password" class="auth-input" placeholder="••••••••" required autocomplete="current-password" />
            </div>
            <button type="submit" class="btn-auth-submit" id="btn-login-submit">
              <span>লগইন করুন</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>

          <!-- Signup Form -->
          <form id="form-auth-signup" class="auth-form" style="${defaultTab === 'signup' ? '' : 'display: none;'}">
            <div class="auth-input-group">
              <label class="auth-label" for="signup-name">আপনার পূর্ণ নাম</label>
              <input type="text" id="signup-name" class="auth-input" placeholder="যেমন: মো: সেলিম" required autocomplete="name" />
            </div>
            <div class="auth-input-group">
              <label class="auth-label" for="signup-email">ইমেইল ঠিকানা</label>
              <input type="email" id="signup-email" class="auth-input" placeholder="name@example.com" required autocomplete="email" />
            </div>
            <div class="auth-input-group">
              <label class="auth-label" for="signup-password">পাসওয়ার্ড (ন্যূনতম ৬ অক্ষর)</label>
              <input type="password" id="signup-password" class="auth-input" placeholder="••••••••" minlength="6" required autocomplete="new-password" />
            </div>
            <button type="submit" class="btn-auth-submit" id="btn-signup-submit">
              <span>অ্যাকাউন্ট তৈরি করুন</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>
        </div>

        <div class="auth-modal-footer">
          <p class="auth-guarantee-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 13px; height: 13px;">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>আপনার ডেটা সম্পূর্ণ সুরক্ষিত এবং চ্যাট হিস্ট্রি এনক্রিপ্টেড থাকে।</span>
          </p>
        </div>
      </div>
    `;

    modalOverlay.classList.add('visible');

    // Attach listeners
    const closeBtn = document.getElementById('btn-auth-close');
    const tabLoginBtn = document.getElementById('tab-login-btn');
    const tabSignupBtn = document.getElementById('tab-signup-btn');
    const formLogin = document.getElementById('form-auth-login') as HTMLFormElement;
    const formSignup = document.getElementById('form-auth-signup') as HTMLFormElement;
    const errorBanner = document.getElementById('auth-error-banner');

    const showError = (msg: string) => {
      if (errorBanner) {
        errorBanner.textContent = msg;
        errorBanner.style.display = 'block';
      }
    };

    const hideError = () => {
      if (errorBanner) errorBanner.style.display = 'none';
    };

    const closeModal = () => {
      modalOverlay?.classList.remove('visible');
    };

    closeBtn?.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    tabLoginBtn?.addEventListener('click', () => {
      hideError();
      tabLoginBtn.classList.add('active');
      tabSignupBtn?.classList.remove('active');
      formLogin.style.display = 'block';
      formSignup.style.display = 'none';
    });

    tabSignupBtn?.addEventListener('click', () => {
      hideError();
      tabSignupBtn.classList.add('active');
      tabLoginBtn?.classList.remove('active');
      formSignup.style.display = 'block';
      formLogin.style.display = 'none';
    });

    // Handle Login Submit
    formLogin?.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideError();
      const email = (document.getElementById('login-email') as HTMLInputElement).value;
      const pass = (document.getElementById('login-password') as HTMLInputElement).value;
      const submitBtn = document.getElementById('btn-login-submit') as HTMLButtonElement;
      submitBtn.disabled = true;
      submitBtn.textContent = 'যাচাই করা হচ্ছে...';

      const res = await this.login(email, pass);
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>লগইন করুন</span>`;

      if (res.success) {
        closeModal();
        if (onSuccess) onSuccess();
      } else {
        showError(res.error || 'লগইন ব্যর্থ হয়েছে');
      }
    });

    // Handle Signup Submit
    formSignup?.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideError();
      const name = (document.getElementById('signup-name') as HTMLInputElement).value;
      const email = (document.getElementById('signup-email') as HTMLInputElement).value;
      const pass = (document.getElementById('signup-password') as HTMLInputElement).value;
      const submitBtn = document.getElementById('btn-signup-submit') as HTMLButtonElement;
      submitBtn.disabled = true;
      submitBtn.textContent = 'অ্যাকাউন্ট তৈরি হচ্ছে...';

      const res = await this.signup(name, email, pass);
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>অ্যাকাউন্ট তৈরি করুন</span>`;

      if (res.success) {
        closeModal();
        if (onSuccess) onSuccess();
      } else {
        showError(res.error || 'অ্যাকাউন্ট তৈরিতে সমস্যা হয়েছে');
      }
    });
  }
}

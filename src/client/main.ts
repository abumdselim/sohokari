import { triggerHaptic } from './haptics';
import { showToast } from './toast';
import { initViewportManager } from './viewport';
import { renderUserBubble, renderBotBubble, renderTypingIndicator } from './ui';
import { getTimeBasedGreeting, renderWelcomeHeroHtml } from './greeting';
import { icons } from './icons';
import { ChatResponse } from '../types/engine';
import { AuthClient, AuthUser, ChatSessionItem } from './authClient';

class KaazAIApp {
  private chatStream: HTMLElement;
  private chatForm: HTMLFormElement;
  private queryInput: HTMLInputElement;
  private btnClearChat: HTMLButtonElement;
  private bottomBar: HTMLElement;

  // Sidebar Elements
  private appSidebar: HTMLElement;
  private sidebarBackdrop: HTMLElement;
  private btnToggleSidebar: HTMLButtonElement;
  private btnCloseSidebar: HTMLButtonElement;
  private btnSidebarNewChat: HTMLButtonElement;

  // Auth & Session state
  private currentSessionId: string | null = null;
  private isProcessing = false;

  constructor() {
    this.chatStream = document.getElementById('chat-stream') as HTMLElement;
    this.chatForm = document.getElementById('chat-form') as HTMLFormElement;
    this.queryInput = document.getElementById('query-input') as HTMLInputElement;
    this.btnClearChat = document.getElementById('btn-clear-chat') as HTMLButtonElement;
    this.bottomBar = document.getElementById('bottom-bar') as HTMLElement;

    // Sidebar
    this.appSidebar = document.getElementById('app-sidebar') as HTMLElement;
    this.sidebarBackdrop = document.getElementById('sidebar-backdrop') as HTMLElement;
    this.btnToggleSidebar = document.getElementById('btn-toggle-sidebar') as HTMLButtonElement;
    this.btnCloseSidebar = document.getElementById('btn-close-sidebar') as HTMLButtonElement;
    this.btnSidebarNewChat = document.getElementById('btn-sidebar-new-chat') as HTMLButtonElement;

    this.init();
  }

  private init(): void {
    // 0. Update time-based dynamic greeting
    const titleEl = document.getElementById('greeting-title');
    if (titleEl) {
      titleEl.textContent = getTimeBasedGreeting();
    }

    // 1. Viewport & Virtual Keyboard Handler
    initViewportManager(this.chatStream, this.bottomBar);

    // 2. Register Service Worker for PWA
    this.registerServiceWorker();

    // 3. Initialize Authentication & History Listeners
    this.initAuthUI();

    // 4. Form Submit Listener
    this.chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = this.queryInput.value.trim();
      if (!query || this.isProcessing) return;
      this.sendQuery(query);
    });

    // 5. Reset Chat Listener (Header)
    this.btnClearChat.addEventListener('click', () => {
      triggerHaptic('light');
      this.resetChat();
    });

    // 6. Sidebar Listeners (PC & Mobile Adaptive)
    if (this.btnToggleSidebar) {
      this.btnToggleSidebar.addEventListener('click', () => {
        triggerHaptic('light');
        this.toggleSidebar();
      });
    }

    if (this.btnCloseSidebar) {
      this.btnCloseSidebar.addEventListener('click', () => {
        triggerHaptic('light');
        this.closeSidebar();
      });
    }

    if (this.sidebarBackdrop) {
      this.sidebarBackdrop.addEventListener('click', () => {
        this.closeSidebar();
      });
    }

    if (this.btnSidebarNewChat) {
      this.btnSidebarNewChat.addEventListener('click', () => {
        triggerHaptic('light');
        this.resetChat();
        if (window.innerWidth < 900) {
          this.closeSidebar();
        }
      });
    }

    // 7. Delegate click for suggestion pills, sidebar menu & interactive chips
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('[data-query]') as HTMLElement | null;
      if (target) {
        const query = target.getAttribute('data-query');
        if (query && !this.isProcessing) {
          triggerHaptic('light');
          if (window.innerWidth < 900) {
            this.closeSidebar();
          }
          this.sendQuery(query);
        }
      }
    });

    // 8. Auto-run initial query from URL search parameters (e.g. /chat?q=...)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const initialQuery = urlParams.get('q');
      if (initialQuery && initialQuery.trim()) {
        setTimeout(() => {
          this.sendQuery(initialQuery.trim());
        }, 120);
      }

      // Check for auth query param (e.g. /chat?auth=login or /chat?auth=signup)
      const authParam = urlParams.get('auth');
      if (authParam === 'login' || authParam === 'signup') {
        setTimeout(() => {
          if (!AuthClient.isAuthenticated()) {
            AuthClient.openAuthModal(authParam as 'login' | 'signup');
          }
        }, 250);
      }
    } catch (_) {}

    // Initial scroll to bottom
    this.scrollToBottom();
  }

  // ==========================================
  // Auth UI & Session History Management
  // ==========================================
  private initAuthUI(): void {
    const user = AuthClient.getUser();
    this.renderHeaderAuth(user);
    this.renderSidebarAuth(user);
    this.loadChatHistory();

    // Listen to global auth changes (login / signup / logout)
    window.addEventListener('kaaz:auth-change', (e: any) => {
      const updatedUser: AuthUser | null = e.detail?.user || null;
      this.renderHeaderAuth(updatedUser);
      this.renderSidebarAuth(updatedUser);
      this.loadChatHistory();
    });
  }

  private renderHeaderAuth(user: AuthUser | null): void {
    const container = document.getElementById('header-user-status');
    if (!container) return;

    if (user) {
      container.innerHTML = `
        <div class="header-user-pill" title="${user.email}">
          <span class="user-pill-avatar">${user.name.charAt(0).toUpperCase()}</span>
          <span class="user-pill-name">${user.name}</span>
        </div>
      `;
    } else {
      container.innerHTML = `
        <button class="btn-header-auth" id="btn-header-login" title="চ্যাট হিস্ট্রি সেভ করতে লগইন করুন">
          ${icons.shieldCheck}
          <span>লগইন</span>
        </button>
      `;

      const loginBtn = document.getElementById('btn-header-login');
      loginBtn?.addEventListener('click', () => {
        AuthClient.openAuthModal('login', () => {
          showToast('সফলভাবে লগইন হয়েছে!');
        });
      });
    }
  }

  private renderSidebarAuth(user: AuthUser | null): void {
    const container = document.getElementById('sidebar-user-section');
    if (!container) return;

    if (user) {
      container.innerHTML = `
        <div class="sidebar-user-footer">
          <div class="sidebar-user-info">
            <div class="sidebar-user-avatar">${user.name.charAt(0).toUpperCase()}</div>
            <div class="sidebar-user-name">${user.name}</div>
          </div>
          <button class="btn-sidebar-logout" id="btn-sidebar-logout" title="লগআউট করুন">লগআউট</button>
        </div>
      `;

      const logoutBtn = document.getElementById('btn-sidebar-logout');
      logoutBtn?.addEventListener('click', () => {
        AuthClient.logout();
        showToast('লগআউট করা হয়েছে');
      });
    } else {
      container.innerHTML = `
        <div class="sidebar-auth-prompt">
          <p>আপনার চ্যাট হিস্ট্রি স্থায়ীভাবে সংরক্ষণ করতে লগইন করুন।</p>
          <button class="btn-sidebar-auth" id="btn-sidebar-login">লগইন করুন</button>
        </div>
      `;

      const loginBtn = document.getElementById('btn-sidebar-login');
      loginBtn?.addEventListener('click', () => {
        AuthClient.openAuthModal('login', () => {
          showToast('সফলভাবে লগইন হয়েছে!');
        });
      });
    }
  }

  private async loadChatHistory(): Promise<void> {
    const historyList = document.getElementById('chat-history-list');
    if (!historyList) return;

    if (!AuthClient.isAuthenticated()) {
      historyList.innerHTML = `
        <div style="padding: 10px; font-size: 0.82rem; color: var(--slate-500); text-align: center;">
          লগইন করলে পূর্ববর্তী চ্যাট সেশন এখানে সংরক্ষিত থাকবে।
        </div>
      `;
      return;
    }

    const sessions = await AuthClient.fetchChatSessions();
    if (!sessions || sessions.length === 0) {
      historyList.innerHTML = `
        <div style="padding: 10px; font-size: 0.82rem; color: var(--slate-400); text-align: center;">
          কোনো পূর্ববর্তী চ্যাট নেই
        </div>
      `;
      return;
    }

    historyList.innerHTML = sessions.map((s: ChatSessionItem) => `
      <div class="history-item-row ${this.currentSessionId === s.id ? 'active' : ''}" data-session-id="${s.id}">
        <span class="history-item-title" title="${s.title}">${s.title}</span>
        <button class="btn-delete-history" data-delete-session="${s.id}" title="মুছে ফেলুন">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px;">
            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `).join('');

    // Attach click listeners to session rows
    historyList.querySelectorAll('.history-item-row').forEach((row) => {
      row.addEventListener('click', (e) => {
        const delBtn = (e.target as HTMLElement).closest('[data-delete-session]');
        if (delBtn) {
          e.stopPropagation();
          const sessId = delBtn.getAttribute('data-delete-session');
          if (sessId && confirm('এই চ্যাট হিস্ট্রি মুছে ফেলতে চান?')) {
            AuthClient.deleteSession(sessId).then(() => {
              if (this.currentSessionId === sessId) {
                this.resetChat();
              }
              this.loadChatHistory();
              showToast('চ্যাট মুছে ফেলা হয়েছে');
            });
          }
          return;
        }

        const sessId = row.getAttribute('data-session-id');
        if (sessId) {
          triggerHaptic('light');
          this.loadSession(sessId);
          if (window.innerWidth < 900) {
            this.closeSidebar();
          }
        }
      });
    });
  }

  private async loadSession(sessionId: string): Promise<void> {
    const data = await AuthClient.loadSessionMessages(sessionId);
    if (!data || !data.messages) {
      showToast('চ্যাট লোড করা সম্ভব হয়নি');
      return;
    }

    this.currentSessionId = sessionId;
    this.chatStream.innerHTML = '';

    data.messages.forEach((m: any) => {
      if (m.role === 'user') {
        this.chatStream.appendChild(renderUserBubble(m.content));
      } else {
        if (m.payload_json) {
          try {
            const parsed = JSON.parse(m.payload_json);
            this.chatStream.appendChild(renderBotBubble(parsed));
          } catch (_) {
            this.chatStream.appendChild(renderBotBubble({ reply_bn: m.content }));
          }
        } else {
          this.chatStream.appendChild(renderBotBubble({ reply_bn: m.content }));
        }
      }
    });

    this.loadChatHistory();
    this.scrollToBottom();
  }

  // ==========================================
  // Sidebar Adaptive Responsive Controller
  // ==========================================
  private toggleSidebar(): void {
    if (window.innerWidth >= 900) {
      // PC Mode: Docked collapse/expand
      if (this.appSidebar) {
        this.appSidebar.classList.toggle('collapsed');
      }
    } else {
      // Mobile Mode: Drawer slide-in
      if (this.appSidebar?.classList.contains('open')) {
        this.closeSidebar();
      } else {
        this.openSidebar();
      }
    }
  }

  private openSidebar(): void {
    if (this.appSidebar) {
      if (window.innerWidth >= 900) {
        this.appSidebar.classList.remove('collapsed');
      } else {
        this.appSidebar.classList.add('open');
        this.sidebarBackdrop?.classList.add('open');
      }
    }
  }

  private closeSidebar(): void {
    if (this.appSidebar) {
      if (window.innerWidth >= 900) {
        this.appSidebar.classList.add('collapsed');
      } else {
        this.appSidebar.classList.remove('open');
        this.sidebarBackdrop?.classList.remove('open');
      }
    }
  }

  private scrollToBottom(): void {
    requestAnimationFrame(() => {
      this.chatStream.scrollTop = this.chatStream.scrollHeight;
    });
  }

  private scrollToBeginning(userBubble: HTMLElement, botBubble?: HTMLElement): void {
    requestAnimationFrame(() => {
      setTimeout(() => {
        // Smoothly scroll to the beginning of this interaction (user query and start of bot answer)
        userBubble.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });
  }

  public async sendQuery(query: string): Promise<void> {
    this.isProcessing = true;
    this.queryInput.value = '';
    triggerHaptic('medium');

    // Remove welcome hero if present for a clean chat stream (like ChatGPT/Claude)
    const hero = document.getElementById('welcome-hero');
    if (hero) {
      hero.remove();
    }

    // 1. Render User Message
    const userBubble = renderUserBubble(query);
    this.chatStream.appendChild(userBubble);
    this.scrollToBottom();

    // 2. Render Typing Indicator
    const typingIndicator = renderTypingIndicator();
    this.chatStream.appendChild(typingIndicator);
    this.scrollToBottom();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      typingIndicator.remove();

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data: ChatResponse = await response.json();
      const botBubble = renderBotBubble(data);
      this.chatStream.appendChild(botBubble);
      triggerHaptic('success');

      // Scroll so the response starts from the beginning (not bottom)
      this.scrollToBeginning(userBubble, botBubble);

      // 3. Persist to D1 if logged in
      if (AuthClient.isAuthenticated()) {
        const savedSessionId = await AuthClient.saveMessage(this.currentSessionId, query, data);
        if (savedSessionId && !this.currentSessionId) {
          this.currentSessionId = savedSessionId;
          this.loadChatHistory();
        }
      }
    } catch (err) {
      typingIndicator.remove();
      this.renderNetworkError();
      triggerHaptic('error');
      this.scrollToBeginning(userBubble);
    } finally {
      this.isProcessing = false;
      // On desktop devices with physical keyboard, keep input focused; on mobile leave unfocused so keyboard doesn't shrink screen
      if (window.innerWidth >= 900) {
        this.queryInput.focus();
      }
    }
  }

  private renderNetworkError(): void {
    const row = document.createElement('div');
    row.className = 'message-row bot';
    row.innerHTML = `
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #09090b; border-color: #09090b; color: #ffffff;">${icons.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 3px solid #09090b;">
        <p style="font-weight: 700; color: #09090b;">সংযোগ বিঘ্নিত হয়েছে</p>
        <p style="font-size: 0.9rem; color: #52525b; margin-top: 4px;">
          সার্ভারের সাথে সংযোগ স্থাপন করা সম্ভব হয়নি। অনুগ্রহ করে ইন্টারনেট কানেকশন চেক করুন।
        </p>
      </div>
    `;
    this.chatStream.appendChild(row);
    showToast('ইন্টারনেট সংযোগ চেক করুন');
  }

  private resetChat(): void {
    this.currentSessionId = null;
    this.chatStream.innerHTML = renderWelcomeHeroHtml();
    this.queryInput.value = '';
    this.queryInput.focus();
    this.loadChatHistory();
    this.scrollToBottom();
  }

  private registerServiceWorker(): void {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker optional in development
      });
    }
  }
}

// Bootstrap once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new KaazAIApp();
});

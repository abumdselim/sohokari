import { triggerHaptic } from './haptics';
import { showToast } from './toast';
import { initViewportManager } from './viewport';
import { renderUserBubble, renderBotBubble, renderTypingIndicator } from './ui';
import { icons } from './icons';
import { ChatResponse } from '../types/engine';

class SohokariApp {
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
    // 1. Viewport & Virtual Keyboard Handler
    initViewportManager(this.chatStream, this.bottomBar);

    // 2. Register Service Worker for PWA
    this.registerServiceWorker();

    // 3. Form Submit Listener
    this.chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = this.queryInput.value.trim();
      if (!query || this.isProcessing) return;
      this.sendQuery(query);
    });

    // 4. Reset Chat Listener (Header)
    this.btnClearChat.addEventListener('click', () => {
      triggerHaptic('light');
      this.resetChat();
    });

    // 5. Sidebar Listeners (ChatGPT mobile style)
    if (this.btnToggleSidebar) {
      this.btnToggleSidebar.addEventListener('click', () => {
        triggerHaptic('light');
        this.openSidebar();
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
        this.closeSidebar();
      });
    }

    // 6. Delegate click for suggestion pills, sidebar menu & interactive chips
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('[data-query]') as HTMLElement | null;
      if (target) {
        const query = target.getAttribute('data-query');
        if (query && !this.isProcessing) {
          triggerHaptic('light');
          this.closeSidebar();
          this.sendQuery(query);
        }
      }
    });

    // Initial scroll to bottom
    this.scrollToBottom();
  }

  private openSidebar(): void {
    if (this.appSidebar && this.sidebarBackdrop) {
      this.appSidebar.classList.add('open');
      this.sidebarBackdrop.classList.add('open');
    }
  }

  private closeSidebar(): void {
    if (this.appSidebar && this.sidebarBackdrop) {
      this.appSidebar.classList.remove('open');
      this.sidebarBackdrop.classList.remove('open');
    }
  }

  private scrollToBottom(): void {
    requestAnimationFrame(() => {
      this.chatStream.scrollTop = this.chatStream.scrollHeight;
    });
  }

  public async sendQuery(query: string): Promise<void> {
    this.isProcessing = true;
    this.queryInput.value = '';
    triggerHaptic('medium');

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
    } catch (err) {
      typingIndicator.remove();
      this.renderNetworkError();
      triggerHaptic('error');
    } finally {
      this.isProcessing = false;
      this.scrollToBottom();
      this.queryInput.focus();
    }
  }

  private renderNetworkError(): void {
    const row = document.createElement('div');
    row.className = 'message-row bot';
    row.innerHTML = `
      <div class="bot-avatar-wrap">
        <div class="bot-avatar-inner" style="background: #ef4444;">${icons.alertTriangle}</div>
      </div>
      <div class="bubble bot-bubble" style="border-left: 4px solid #ef4444;">
        <p><strong>সংযোগ বিঘ্নিত হয়েছে</strong></p>
        <p style="font-size: 0.88rem; color: #0f172a; margin-top: 4px;">
          সার্ভারের সাথে সংযোগ স্থাপন করা সম্ভব হয়নি। অনুগ্রহ করে ইন্টারনেট কানেকশন চেক করুন।
        </p>
      </div>
    `;
    this.chatStream.appendChild(row);
    showToast('ইন্টারনেট সংযোগ চেক করুন');
  }

  private resetChat(): void {
    this.chatStream.innerHTML = `
      <div class="message-row bot">
        <div class="bot-avatar-wrap">
          <div class="bot-avatar-inner"><img src="/assets/icon-white.png" alt="সহকারী" class="bot-avatar-img" /></div>
        </div>
        <div class="bubble bot-bubble">
          <p><strong>সহকারী</strong>-তে স্বাগতম</p>
          <p style="margin-top: 4px; font-size: 0.95rem; color: #1e293b;">
            কী সেবা সম্পর্কে জানতে চান? নিচে লিখুন অথবা সাজেশনে ট্যাপ করুন।
          </p>
        </div>
      </div>
    `;
    this.queryInput.value = '';
    this.queryInput.focus();
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
  new SohokariApp();
});

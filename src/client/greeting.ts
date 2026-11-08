/**
 * Dynamic Time-Based Greeting in Bangla
 * Secular, polite, modern standard Bengali.
 */
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'শুভ সকাল!';
  } else if (hour >= 12 && hour < 15) {
    return 'শুভ দুপুর!';
  } else if (hour >= 15 && hour < 18) {
    return 'শুভ অপরাহ্ন!';
  } else if (hour >= 18 && hour < 22) {
    return 'শুভ সন্ধ্যা!';
  } else {
    return 'শুভ রাত!';
  }
}

export function renderWelcomeHeroHtml(): string {
  const greeting = getTimeBasedGreeting();
  return `
    <div class="welcome-hero" id="welcome-hero">
      <div class="welcome-badge-wrap">
        <div class="welcome-badge-circle">
          <img src="/assets/icon-black.svg?v=1" alt="Kaaz AI" class="welcome-badge-icon" />
        </div>
      </div>
      
      <h1 class="welcome-greeting-title">${greeting}</h1>
      <p class="welcome-tagline">আজ আপনাকে কীভাবে সহযোগিতা করতে পারি?</p>
      
      <p class="welcome-subtext">
        বাংলাদেশ সরকারের যেকোনো নাগরিক সেবার অফিশিয়াল ফি, প্রয়োজনীয় কাগজপত্র ও দালালমুক্ত সঠিক নিয়ম জানতে নিচে প্রশ্ন করুন:
      </p>

      <div class="hero-chips-grid">
        <button class="hero-card-chip" data-query="জাতীয় পরিচয়পত্র সংশোধন করতে সরকারি ফি কত লাগে?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
              <line x1="12" y1="15" x2="17" y2="15"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">এনআইডি সংশোধন ফি</span>
            <span class="chip-desc">সঠিক ফি ও আবেদনের নিয়ম</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="১০ বছর মেয়াদী ৪৮ পৃষ্ঠার পাসপোর্ট নবায়ন ফি কত?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">পাসপোর্ট নবায়ন ফি</span>
            <span class="chip-desc">জরুরি ও সাধারণ চার্জ</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="জমি নামজারি বা খারিজ করতে মোট সরকারি ফি কত?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">ই-নামজারি ও খারিজ</span>
            <span class="chip-desc">মোট সরকারি ফি ১,১৭০ টাকা</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="উত্তরা পশ্চিম থানার ওসির নাম্বার কত?">
          <div class="chip-icon-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chip-svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div class="chip-content">
            <span class="chip-title">জরুরি থানা ও হটলাইন</span>
            <span class="chip-desc">পুলিশ, বিদ্যুৎ ও গ্যাস সেবা</span>
          </div>
        </button>
      </div>
    </div>
  `;
}

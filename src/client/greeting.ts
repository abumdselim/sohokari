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
          <span class="chip-emoji">🪪</span>
          <div class="chip-content">
            <span class="chip-title">এনআইডি সংশোধন ফি</span>
            <span class="chip-desc">সঠিক ফি ও আবেদনের নিয়ম</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="১০ বছর মেয়াদী ৪৮ পৃষ্ঠার পাসপোর্ট নবায়ন ফি কত?">
          <span class="chip-emoji">🛂</span>
          <div class="chip-content">
            <span class="chip-title">পাসপোর্ট নবায়ন ফি</span>
            <span class="chip-desc">জরুরি ও সাধারণ চার্জ</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="জমি নামজারি বা খারিজ করতে মোট সরকারি ফি কত?">
          <span class="chip-emoji">🏛️</span>
          <div class="chip-content">
            <span class="chip-title">ই-নামজারি ও খারিজ</span>
            <span class="chip-desc">মোট সরকারি ফি ১,১৭০ টাকা</span>
          </div>
        </button>

        <button class="hero-card-chip" data-query="উত্তরা পশ্চিম থানার ওসির নাম্বার কত?">
          <span class="chip-emoji">🚨</span>
          <div class="chip-content">
            <span class="chip-title">জরুরি থানা ও হটলাইন</span>
            <span class="chip-desc">পুলিশ, বিদ্যুৎ ও গ্যাস সেবা</span>
          </div>
        </button>
      </div>
    </div>
  `;
}

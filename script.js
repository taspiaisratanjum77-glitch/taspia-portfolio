/* ==========================================================================
   Israt Anjum Taspia Portfolio - Dynamic Interactive Script
   Includes Language Switcher, Audio Clicks, Starfield Canvas, & Avatar Toggle
   ========================================================================== */

// 1. Language Dictionary (English & Bangla)
const translations = {
  en: {
    tagline: "CSE Student & Dev",
    nav_hello: "HELLO",
    nav_about: "ABOUT ME",
    nav_skills: "SKILLS",
    nav_cp: "CP",
    nav_projects: "PROJECTS",
    contact_label: "Connect With Me",
    badge_status: "Available for projects & hackathons",
    hero_hello_1: "Hello !",
    hero_name: "I'm Israt Anjum Taspia",
    hero_hello_2: "Glad to see you",
    hero_hello_3: "Now let me tell you more about myself",
    hero_hello: "Hi, I'm",
    hero_bio: "Computer Science & Engineering student passionate about crafting sleek frontend user interfaces, exploring intelligent systems, and building creative software that turns ideas into interactive digital reality.",
    stat_repos: "GitHub Repos",
    stat_dedication: "Passion for Code",
    stat_focus: "Full-Stack & AI",
    btn_explore: "Explore Projects",
    btn_get_in_touch: "Get In Touch",
    about_title: "About Me",
    about_p1: "I am a Computer Science & Engineering student, frontend developer, and enthusiastic problem solver. My coding journey is driven by an obsession with beautiful UI design, clean code architecture, and turning complex challenges into delightful user experiences.",
    about_p2: "Currently, I'm immersing myself in modern frontend ecosystems like React and JavaScript (ES6+), while strengthening my foundations in Data Structures, Algorithms, and low-level computing. I also actively explore backend development to craft full-fledged applications.",
    about_p3: "Beyond coding, I have a deep passion for UI/UX Design, participating in hackathons, competitive programming, and video editing. I believe technology thrives at the intersection of creative artistry and robust engineering.",
    pillar_frontend_title: "UI/UX & Frontend",
    pillar_frontend_desc: "Building visually stunning, accessible, and responsive user interfaces with attention to micro-details.",
    pillar_cp_badge: "Codeforces",
    pillar_cp_title: "Problem Solving",
    pillar_cp_desc: "Practicing competitive programming and exploring efficient algorithms & core computer science.",
    pillar_cp_btn: "View Profile & Stats",
    pillar_ai_title: "AI & Innovation",
    pillar_ai_desc: "Aspiring AI engineer eager to integrate machine learning and intelligent automations into the web.",
    pillar_writing_badge: "Side Interest",
    pillar_writing_title: "Thought & Writing",
    pillar_writing_desc: "Authoring reflections on theology, philosophy, Islam, and contemporary faith vs. reason dialogues.",
    pillar_writing_btn: "Explore Page",
    skills_title: "My Skills",
    skills_subtitle: "Technologies, frameworks, and creative tools I work with daily",
    filter_all: "All Skills",
    filter_frontend: "Frontend",
    filter_languages: "Languages",
    filter_tools: "Tools & Design",
    cp_title: "Competitive Programming",
    cp_subtitle: "Algorithmic problem solving, contest ratings, and data structures practice on Codeforces",
    cp_live_synced: "Verified Profile",
    cp_rank_label: "Current Rank",
    cp_rating_label: "Current Rating",
    cp_peak_label: "Peak Rating",
    cp_solved_label: "Problems Solved",
    cp_lang_label: "Primary Languages",
    cp_topics_label: "Problem Solving Domains",
    cp_desc: "Actively participating in Codeforces rounds, sharpening algorithmic logic in Data Structures, Number Theory, Greedy strategies, and problem solving with C++ and C.",
    cp_view_btn: "View Codeforces Profile",
    projects_title: "Projects",
    projects_subtitle: "A curated selection of web applications, experiments, and creative UI works",
    project_estate_desc: "Interactive real estate and properties exploration web app featuring dynamic filtering, responsive grid layouts, and clean user experience.",
    project_chobideh_desc: "Collaborative project featuring a modern responsive authentication panel with hardware-accelerated sliding transitions, layerable 3D cloud memory vault, and curated mint aesthetics.",
    project_koyjabo_desc: "IAIT Hackathon collaborative multimodal transit routing engine for Dhaka (MRT-6 Metro, local buses, legunas) with live road disruption dispatching and interactive map telemetry.",
    project_behance_desc: "Creative wireframes, visual style guides, and design explorations showcasing modern typography, color harmony, and user flows.",
    btn_view_repo: "View Repository",
    btn_explore_behance: "Explore on Behance",
    project_writing_badge: "Side Interest & Writing",
    project_writing_title: "Reflections on Faith & Reason",
    project_writing_desc: "A dedicated platform where I author analytical essays and reflections on Islamic theology, philosophical thought, and intellectual dialogues addressing atheism and modern worldview questions.",
    btn_read_articles: "Read on Facebook",
    footer_star: "Star this project on GitHub:",
    footer_tagline: "\"Turning ideas into delightful, interactive web reality.\"",
    roles: [
      "Frontend Developer",
      "UI/UX Designer",
      "Competitive Programmer",
      "CSE Undergrad",
      "Tech Innovator"
    ],
    toast_email: "Email copied to clipboard!",
    avatar_anime_toast: "Switched to GitHub Profile Avatar",
    avatar_real_toast: "Switched to Real Photo"
  },
  bn: {
    tagline: "সিএসই শিক্ষার্থী ও ডেভেলপার",
    nav_hello: "স্বাগতম",
    nav_about: "আমার সম্পর্কে",
    nav_skills: "দক্ষতা",
    nav_cp: "সিপি",
    nav_projects: "প্রকল্পসমূহ",
    contact_label: "যোগাযোগ করুন",
    badge_status: "প্রজেক্ট এবং হ্যাকাথনের জন্য প্রস্তুত",
    hero_hello_1: "স্বাগতম !",
    hero_name: "আমি ইসরাত আনজুম তাসপিয়া",
    hero_hello_2: "আপনাকে দেখে আনন্দিত",
    hero_hello_3: "এবার আমার সম্পর্কে বিস্তারিত জেনে নিন",
    hero_hello: "হ্যালো, আমি",
    hero_bio: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ের শিক্ষার্থী। দৃষ্টিনন্দন ফ্রন্টএন্ড ইউজার ইন্টারফেস তৈরি, অ্যালগরিদম অনুশীলন এবং ক্রিয়েটিভ ওয়েব সলিউশন তৈরিতে আগ্রহী।",
    stat_repos: "গিটহাব রিপোজিটরি",
    stat_dedication: "কোডিংয়ের প্রতি ভালোবাসা",
    stat_focus: "ফুল-স্ট্যাক ও এআই",
    btn_explore: "প্রজেক্টগুলো দেখুন",
    btn_get_in_touch: "যোগাযোগ করুন",
    about_title: "আমার সম্পর্কে",
    about_p1: "আমি একজন সিএসই শিক্ষার্থী, ফ্রন্টএন্ড ডেভেলপার এবং সমস্যা সমাধানকারী। চমৎকার ইউআই ডিজাইন এবং মানসম্মত কোড আর্কিটেকচারের মাধ্যমে মানুষের জন্য প্রয়োজনীয় ডিজিটাল অভিজ্ঞতা তৈরিতে আমি অনুপ্রাণিত।",
    about_p2: "বর্তমানে আমি রিয়্যাক্ট (React) ও আধুনিক জাভাস্ক্রিপ্ট ইকোসিস্টেম নিয়ে কাজ করছি, সাথে ডেটা স্ট্রাকচার, অ্যালগরিদম এবং ব্যাকএন্ড প্রযুক্তির মৌলিক ধারণা আরও সমৃদ্ধ করছি।",
    about_p3: "প্রোগ্রামিংয়ের পাশাপাশি ইউআই/ইউএক্স ডিজাইন, হ্যাকাথনে অংশগ্রহণ, প্রতিযোগিতামূলক প্রোগ্রামিং এবং ভিডিও এডিটিংয়ে আমার গভীর আগ্রহ রয়েছে।",
    pillar_frontend_title: "ইউআই/ইউএক্স ও ফ্রন্টএন্ড",
    pillar_frontend_desc: "রেসপনসিভ, আধুনিক এবং ব্যবহারকারী-বান্ধব ইন্টারফেস নিখুঁতভাবে তৈরি করা।",
    pillar_cp_badge: "কোডফোর্সেস",
    pillar_cp_title: "প্রবলেম সলভিং",
    pillar_cp_desc: "দক্ষ অ্যালগরিদম ও ডেটা স্ট্রাকচারের মাধ্যমে সমস্যার সমাধান ও প্রতিযোগিতামূলক কোডিং।",
    pillar_cp_btn: "প্রোফাইল ও পরিসংখ্যান",
    pillar_ai_title: "এআই ও উদ্ভাবন",
    pillar_ai_desc: "ভবিষ্যতের বুদ্ধিমত্তাভিত্তিক ও অটোমেশন প্রযুক্তিকে ওয়েব প্ল্যাটফর্মে যুক্ত করার স্বপ্ন।",
    pillar_writing_badge: "অন্যান্য আগ্রহ",
    pillar_writing_title: "চিন্তা ও দর্শন",
    pillar_writing_desc: "ধর্মতত্ত্ব, দর্শন, ইসলাম এবং আস্তিকতা-নাস্তিকতা সম্পর্কিত সমসাময়িক যুক্তিনির্ভর বিশ্লেষণ ও চিন্তাধারা।",
    pillar_writing_btn: "পেজটি দেখুন",
    skills_title: "আমার দক্ষতাসমূহ",
    skills_subtitle: "যেসব প্রযুক্তি, ফ্রেমওয়ার্ক এবং টুলস নিয়ে আমি প্রতিনিয়ত কাজ করি",
    filter_all: "সকল দক্ষতা",
    filter_frontend: "ফ্রন্টএন্ড",
    filter_languages: "প্রোগ্রামিং ভাষা",
    filter_tools: "টুলস ও ডিজাইন",
    cp_title: "প্রতিযোগিতামূলক প্রোগ্রামিং",
    cp_subtitle: "কোডফোর্সেস প্ল্যাটফর্মে অ্যালগরিদম ও ডেটা স্ট্রাকচার অনুশীলন, কনটেস্ট ও সমস্যা সমাধান",
    cp_live_synced: "ভেরিফায়েড প্রোফাইল",
    cp_rank_label: "বর্তমান র‍্যাঙ্ক",
    cp_rating_label: "বর্তমান রেটিং",
    cp_peak_label: "সর্বোচ্চ রেটিং",
    cp_solved_label: "সমাধানকৃত সমস্যা",
    cp_lang_label: "প্রধান ভাষা",
    cp_topics_label: "যেসব বিষয়ে অনুশীলন",
    cp_desc: "কোডফোর্সেস রাউন্ডে সক্রিয়ভাবে অংশগ্রহণ, ডেটা স্ট্রাকচার, নাম্বার থিওরি, গ্রিডি অ্যালগরিদম ও গণিতভিত্তিক সমস্যা সমাধানে দক্ষতা বৃদ্ধি।",
    cp_view_btn: "কোডফোর্সেস প্রোফাইল দেখুন",
    projects_title: "প্রকল্পসমূহ",
    projects_subtitle: "আমার তৈরি করা নির্বাচিত ওয়েব অ্যাপ্লিকেশন, প্রটোটাইপ ও ডিজাইন কাজ",
    project_estate_desc: "ইন্টারেক্টিভ রিয়েল এস্টেট ও লোকেশন ব্রাউজিং ওয়েব অ্যাপ, যাতে রয়েছে ডায়নামিক ফিল্টারিং ও মসৃণ ইউজার এক্সপেরিয়েন্স।",
    project_chobideh_desc: "কোলাবোরেটিভ প্রজেক্ট — হার্ডওয়্যার-অ্যাক্সিলারেটেড স্লাইডিং প্যানেল, থ্রিডি ক্লাউড মেমোরি ভল্ট ও আধুনিক মিন্ট কালার প্যালেট সমৃদ্ধ অথেন্টিকেশন সিস্টেম।",
    project_koyjabo_desc: "আইএআইটি হ্যাকাথন কোলাবোরেশন — ঢাকার মাল্টিমোডাল ট্রানজিট (মেট্রোরেল, বাস, লেগুনা) রাউটিং ইঞ্জিন, লাইভ ডিসরাপশন ট্র্যাকিং ও ম্যাপ ইন্টারফেস।",
    project_behance_desc: "বিহ্যান্সে প্রদর্শিত আধুনিক ইউআই ডিজাইন, ওয়্যারফ্রেম ও টাইপোগ্রাফি ভিত্তিক প্রটোটাইপ।",
    btn_view_repo: "রিপোজিটরি দেখুন",
    btn_explore_behance: "বিহ্যান্সে দেখুন",
    project_writing_badge: "অন্যান্য আগ্রহ ও লেখালেখি",
    project_writing_title: "ধর্মতত্ত্ব ও দর্শন বিশ্লেষণ",
    project_writing_desc: "ফেসবুকভিত্তিক একটি প্ল্যাটফর্ম, যেখানে ইসলামি দর্শন, ধর্মতত্ত্ব ও সমসাময়িক নাস্তিকতাবাদের তুলনামূলক যুক্তি ও বুদ্ধিবৃত্তিক বিশ্লেষণমূলক প্রবন্ধ লেখা হয়।",
    btn_read_articles: "ফেসবুকে পড়ুন",
    footer_star: "গিটহাবে প্রজেক্টটি স্টার করুন:",
    footer_tagline: "\"ক্রিয়েটিভ ধারণাকে আকর্ষণীয় ও সক্রিয় ওয়েব অভিজ্ঞতায় রূপান্তর করাই আমার লক্ষ্য।\"",
    roles: [
      "ফ্রন্টএন্ড ডেভেলপার",
      "ইউআই/ইউএক্স ডিজাইনার",
      "প্রতিযোগিতামূলক প্রোগ্রামার",
      "সিএসই শিক্ষার্থী",
      "প্রযুক্তি উদ্ভাবক"
    ],
    toast_email: "ইমেইল ক্লিপবোর্ডে কপি হয়েছে!",
    avatar_anime_toast: "গিটহাব প্রোফাইল অবতারে পরিবর্তিত",
    avatar_real_toast: "আসল ছবিতে পরিবর্তিত"
  }
};

let currentLang = 'en';
let soundEnabled = true;
let isAnimeAvatar = false;

// 2. Audio Synthesizer (Zero External Dependencies)
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  
  init() {
    if (!this.ctx && typeof (window.AudioContext || window.webkitAudioContext) !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playClick() {
    if (!soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playPop() {
    if (!soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {
      // Audio fallback
    }
  }
}

const sfx = new SoundFX();

// 3. Ambient Particle Canvas Animation
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.floor((width * height) / 22000);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

// 4. Role Typing Animation
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;

function typeRole() {
  const typedRoleElem = document.getElementById('typedRole');
  if (!typedRoleElem) return;

  const roles = translations[currentLang].roles;
  const currentRole = roles[roleIndex % roles.length];

  if (isDeleting) {
    charIndex--;
    typedRoleElem.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    typedRoleElem.textContent = currentRole.substring(0, charIndex);
  }

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1800; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  clearTimeout(typeTimeout);
  typeTimeout = setTimeout(typeRole, delay);
}

// 5. Language Switch Handler
function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  // Reset typewriter with new words
  charIndex = 0;
  isDeleting = false;
  clearTimeout(typeTimeout);
  typeRole();
}

// 6. Toast Notification Helper
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// 6b. Live Codeforces API Synchronizer
async function fetchCodeforcesStats() {
  const handle = 'israt_anjum_taspia';
  const ratingEl = document.getElementById('cfCurrentRating');
  const maxRatingEl = document.getElementById('cfMaxRating');
  const rankEl = document.getElementById('cfRank');
  const solvedEl = document.getElementById('cfSolvedCount');
  const syncStatusEl = document.getElementById('cfSyncStatus');

  try {
    const userRes = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    if (userRes.ok) {
      const userData = await userRes.json();
      if (userData.status === 'OK' && Array.isArray(userData.result) && userData.result.length > 0) {
        const u = userData.result[0];
        if (ratingEl && u.rating) ratingEl.textContent = u.rating;
        if (maxRatingEl && u.maxRating) maxRatingEl.textContent = u.maxRating;
        if (rankEl && u.rank) rankEl.textContent = u.rank;
        if (syncStatusEl) {
          syncStatusEl.textContent = currentLang === 'bn' ? 'কোডফোর্সেস লাইভ সিঙ্কড' : 'Live Synced with Codeforces';
        }
      }
    }

    // Fetch problem submissions to dynamically calculate solved problems
    const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=200`);
    if (subRes.ok) {
      const subData = await subRes.json();
      if (subData.status === 'OK' && Array.isArray(subData.result)) {
        const solved = new Set();
        subData.result.forEach((sub) => {
          if (sub.verdict === 'OK' && sub.problem) {
            solved.add(`${sub.problem.contestId || ''}${sub.problem.index || ''}`);
          }
        });
        if (solvedEl && solved.size > 0) {
          solvedEl.textContent = `${solved.size}+`;
        }
      }
    }
  } catch (err) {
    // Graceful fallback to verified hardcoded baseline (Rating 737, Max 792, 108+ solved)
    console.debug('Codeforces live fetch fallback:', err);
  }
}

// 7. Initialize DOM Elements & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Ambient Canvas
  initAmbientCanvas();

  // Role Typer
  typeRole();

  // Language Switch Button
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      sfx.playClick();
      const nextLang = currentLang === 'en' ? 'bn' : 'en';
      setLanguage(nextLang);
    });
  }

  // Audio Toggle Button
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      const svg = audioToggleBtn.querySelector('svg');
      if (soundEnabled) {
        audioToggleBtn.setAttribute('title', 'Sound Effects: ON');
        sfx.playPop();
        if (svg) {
          svg.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          `;
        }
      } else {
        audioToggleBtn.setAttribute('title', 'Sound Effects: MUTED');
        if (svg) {
          svg.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="22" y1="9" x2="16" y2="15"></line>
            <line x1="16" y1="9" x2="22" y2="15"></line>
          `;
        }
      }
    });
  }

  // Avatar Switcher (Toggle between Real Photo taspia.jpg & GitHub Avatar)
  const avatarContainer = document.getElementById('avatarContainer');
  const avatarImage = document.getElementById('avatarImage');
  if (avatarContainer && avatarImage) {
    avatarContainer.addEventListener('click', () => {
      sfx.playPop();
      isAnimeAvatar = !isAnimeAvatar;
      if (isAnimeAvatar) {
        avatarImage.src = './assets/avatar-github.jpg';
        showToast(translations[currentLang].avatar_anime_toast);
      } else {
        avatarImage.src = './assets/taspia.jpg?v=6';
        showToast(translations[currentLang].avatar_real_toast);
      }
    });
  }

  // Footer Back To Top Button
  const footerBackToTopBtn = document.getElementById('footerBackToTopBtn');
  if (footerBackToTopBtn) {
    footerBackToTopBtn.addEventListener('click', () => {
      sfx.playClick();
      const mainContent = document.getElementById('mainContent');
      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  // Copy Email Button
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      sfx.playClick();
      navigator.clipboard.writeText('taspiaisratanjum77@gmail.com').then(() => {
        showToast(translations[currentLang].toast_email);
      }).catch(() => {
        showToast('taspiaisratanjum77@gmail.com');
      });
    });
  }

  // Navigation Links & Active Highlighting on Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      sfx.playClick();
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          targetSection.scrollIntoView({ behavior: 'smooth' });

          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  // Hero Quick Explore button
  const exploreBtn = document.querySelector('[data-section-link="projects"]');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      sfx.playClick();
      e.preventDefault();
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Quick CP jump links (from About Me pillar, etc.)
  document.querySelectorAll('[data-section-link="cp"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      sfx.playClick();
      e.preventDefault();
      document.querySelector('#cp')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Fetch real-time Codeforces stats asynchronously
  fetchCodeforcesStats();

  // Scroll Spy on Main Content Scroll
  const mainContent = document.getElementById('mainContent');

  const onScrollUpdate = () => {
    const scrollY = mainContent ? mainContent.scrollTop : window.scrollY;


    let current = '';
    const scrollPos = scrollY + 180;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  };

  if (mainContent) {
    mainContent.addEventListener('scroll', onScrollUpdate);
  }
  window.addEventListener('scroll', onScrollUpdate);

  // Skills Filter & Interactive Card Selection
  const filterPills = document.querySelectorAll('.filter-pill');
  const skillCards = document.querySelectorAll('.skill-card-item, .skill-tile');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      sfx.playClick();
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // Click on any skill card to elevate & highlight it (like reference JS card)
  skillCards.forEach((card) => {
    card.addEventListener('click', () => {
      sfx.playPop();
      skillCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Add click sound to interactive buttons
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      // gentle hover aura
    });
  });
});

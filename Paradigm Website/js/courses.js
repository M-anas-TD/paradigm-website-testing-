/* ==========================================================================
   Paradigm Traders - Courses Data & LMS Logic
   ========================================================================== */

const COURSES_DATA = [
  {
    id: "forex-foundations",
    title: "Forex Foundations",
    category: "forex",
    badge: "BEGINNER",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    trending: false,
    lessonsCount: 12,
    duration: "4 Hours",
    students: "2.4k+",
    level: "Beginner",
    description: "Master the core mechanics of currency pairs, pip calculation, and basic charting techniques to build an unbreakable trading bedrock.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    progress: 100,
    status: "Completed",
    modules: [
      { title: "1. What is Forex & Currency Quotations", duration: "18 mins", completed: true },
      { title: "2. Pips, Lots, and Leverage Mathematics", duration: "25 mins", completed: true },
      { title: "3. Bid/Ask Spread, Slippage & Broker Types", duration: "22 mins", completed: true },
      { title: "4. Chart Types: Candlesticks vs Heikin Ashi", duration: "30 mins", completed: true },
      { title: "5. Support, Resistance & Dynamic Trendlines", duration: "35 mins", completed: true }
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "advanced-price-action",
    title: "Advanced Price Action",
    category: "forex",
    badge: "INTERMEDIATE",
    badgeColor: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    trending: true,
    lessonsCount: 20,
    duration: "10 Hours",
    students: "3.8k+",
    level: "Intermediate",
    description: "Decode naked charts without relying on lagging indicators. Learn to read market sentiment, identify liquidity zones, and execute precise entries based purely on raw price data.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    progress: 45,
    status: "In Progress",
    activeModule: "Module 3: Supply & Demand Zones identifying institutional footprints.",
    modules: [
      { title: "1. Market Structure Shifts (BOS vs CHoCH)", duration: "28 mins", completed: true },
      { title: "2. Premium vs Discount Zones & Fibonacci Confluence", duration: "34 mins", completed: true },
      { title: "3. Supply & Demand Zones identifying institutional footprints", duration: "42 mins", completed: false, current: true },
      { title: "4. Multi-Timeframe Alignment (Daily to 1-Min)", duration: "45 mins", completed: false },
      { title: "5. London & New York Session Open Setups", duration: "50 mins", completed: false },
      { title: "6. Liquidity Pools, BSL/SSL Sweeps", duration: "38 mins", completed: false }
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U"
  },
  {
    id: "algorithmic-systems",
    title: "Algorithmic Systems",
    category: "algorithmic",
    badge: "ADVANCED",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    trending: false,
    lessonsCount: 15,
    duration: "Python Masterclass",
    students: "1.6k+",
    level: "Advanced",
    description: "Automate your strategies. Build, backtest, and deploy robust trading bots using Python, vectorbt, and MetaTrader 5 API integration.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    progress: 0,
    status: "Not Started",
    modules: [
      { title: "1. Python for Financial Quant Basics", duration: "35 mins", completed: false },
      { title: "2. Historical Tick Data Retrieval & Cleaning", duration: "40 mins", completed: false },
      { title: "3. Vectorized Backtesting with Slippage Simulation", duration: "55 mins", completed: false },
      { title: "4. Connecting MT5 Python Socket Server", duration: "48 mins", completed: false },
      { title: "5. Cloud Deployment on VPS with Docker", duration: "60 mins", completed: false }
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "risk-mastery",
    title: "Risk Mastery & Capital Preservation",
    category: "psychology",
    badge: "ALL LEVELS",
    badgeColor: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    trending: false,
    lessonsCount: 8,
    duration: "3 Hours",
    students: "4.1k+",
    level: "All Levels",
    description: "The holy grail of trading survival. Learn position sizing mathematics, portfolio variance, drawdown recovery, and mental resilience under pressure.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    progress: 80,
    status: "In Progress",
    modules: [
      { title: "1. The Mathematics of Ruin & Kelly Criterion", duration: "20 mins", completed: true },
      { title: "2. Fixed Fractional vs Dynamic Risk Allocation", duration: "25 mins", completed: true },
      { title: "3. Stop Loss Placement Tactics Beyond ATR", duration: "30 mins", completed: true },
      { title: "4. Surviving Tilt & High Drawdown Regimes", duration: "35 mins", completed: false, current: true }
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U"
  },
  {
    id: "crypto-derivatives",
    title: "Crypto Perpetual Futures & Funding Arbitrage",
    category: "crypto",
    badge: "ADVANCED",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    trending: true,
    lessonsCount: 14,
    duration: "6 Hours",
    students: "2.1k+",
    level: "Advanced",
    description: "Master crypto orderbook liquidity, open interest heatmaps, funding rate carry trades, and perpetual futures liquidation hunting.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    progress: 20,
    status: "In Progress",
    modules: [
      { title: "1. Perpetual Contracts vs Traditional Futures", duration: "25 mins", completed: true },
      { title: "2. Interpreting Coinglass & Liquidations Heatmap", duration: "40 mins", completed: false },
      { title: "3. Delta-Neutral Funding Rate Harvesting", duration: "45 mins", completed: false }
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "trader-psychology",
    title: "Institutional Mindset & Trade Journaling",
    category: "psychology",
    badge: "ALL LEVELS",
    badgeColor: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
    trending: false,
    lessonsCount: 10,
    duration: "5 Hours",
    students: "3.3k+",
    level: "All Levels",
    description: "Rewire your subconscious mind to trade like a cold, disciplined hedge fund executioner. Eliminate fear of missing out and revenge trades.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    progress: 100,
    status: "Completed",
    modules: [
      { title: "1. Cognitive Biases in Financial Speculation", duration: "30 mins", completed: true },
      { title: "2. Setting Up Notion / Excel Trading Journals", duration: "45 mins", completed: true },
      { title: "3. Post-Trade Statistical Review Protocols", duration: "35 mins", completed: true }
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U"
  }
];

let currentFilter = 'all';
let currentDifficulty = 'all';
let searchQuery = '';

function initCourses() {
  renderCoursesGrid();
  setupCourseEventListeners();
}

function renderCoursesGrid() {
  const container = document.getElementById('courses-grid');
  if (!container) return;

  const filtered = COURSES_DATA.filter(course => {
    const matchesFilter = currentFilter === 'all' || course.category === currentFilter;
    const matchesDifficulty = currentDifficulty === 'all' || course.level.toLowerCase() === currentDifficulty.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesDifficulty && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 glass-card rounded-2xl">
        <div class="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h4 class="text-xl font-bold text-white mb-2">No courses match your criteria</h4>
        <p class="text-gray-400 text-sm mb-4">Try searching for a different keyword or resetting your filters.</p>
        <button onclick="resetCourseFilters()" class="px-5 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium text-sm transition-colors">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => {
    const isTrending = course.trending;
    const hasProgress = course.progress > 0;
    const isLarge = isTrending && currentFilter === 'all' && searchQuery === '';

    return `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 border border-gray-800/80 hover:border-primary/40 relative ${isLarge ? 'md:col-span-2' : ''}">
        
        <!-- Course thumbnail -->
        <div class="relative h-52 w-full overflow-hidden bg-gray-900">
          <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100">
          <div class="absolute inset-0 bg-gradient-to-t from-[#121819] via-transparent to-transparent"></div>
          
          <!-- Badges -->
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-md uppercase tracking-wider ${course.badgeColor}">
              ${course.badge}
            </span>
            ${isTrending ? `
              <span class="px-2.5 py-1 text-xs font-semibold rounded-md uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.316.492-.633.991-1.002 1.48-1.077 1.428-2.43 2.766-3.79 4.316C4.16 10.22 3 12.072 3 14c0 3.314 2.686 6 6 6 2.457 0 4.577-1.48 5.518-3.601a1 1 0 00-.737-1.353c-.502-.11-1.01.078-1.393.388-.675.545-1.54.866-2.488.866-2.209 0-4-1.791-4-4 0-1.492.812-2.924 1.83-4.08.97-1.101 2.05-2.222 3.013-3.414.288-.357.575-.722.825-1.104.22-.335.437-.698.544-1.056a1 1 0 00-.28-1.092z" clip-rule="evenodd"></path></svg>
                TRENDING
              </span>
            ` : ''}
          </div>

          <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10">
            ${course.duration}
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-grow flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                ${course.lessonsCount} Lessons
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                ${course.students} Traders
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              ${course.title}
            </h3>

            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              ${course.description}
            </p>
          </div>

          <!-- Bottom progress & CTA -->
          <div>
            ${hasProgress ? `
              <div class="mb-4">
                <div class="flex justify-between text-xs text-gray-400 mb-1.5 font-medium">
                  <span>Course Progress</span>
                  <span class="text-primary font-semibold">${course.progress}%</span>
                </div>
                <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-primary to-accent-purple h-2 rounded-full progress-fill" style="width: ${course.progress}%"></div>
                </div>
              </div>
            ` : ''}

            <div class="flex items-center justify-between pt-2 border-t border-gray-800/80">
              <div class="flex items-center gap-2">
                <div class="flex -space-x-2 overflow-hidden">
                  <span class="inline-block h-7 w-7 rounded-full ring-2 ring-[#121819] bg-gradient-to-tr from-teal-500 to-emerald-400 text-[10px] font-bold text-black flex items-center justify-center">PK</span>
                  <span class="inline-block h-7 w-7 rounded-full ring-2 ring-[#121819] bg-gradient-to-tr from-purple-500 to-indigo-500 text-[10px] font-bold text-white flex items-center justify-center">AB</span>
                </div>
                <span class="text-xs text-gray-400 font-medium">+2k enrolled</span>
              </div>

              ${hasProgress ? `
                <button onclick="openCourseModal('${course.id}')" class="px-5 py-2.5 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-background-dark font-semibold text-xs tracking-wider uppercase transition-all">
                  Resume Learning
                </button>
              ` : `
                <button onclick="openCourseModal('${course.id}')" class="px-5 py-2.5 rounded-lg bg-primary hover:bg-teal-400 text-background-dark font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(38,217,177,0.3)] hover:shadow-[0_0_20px_rgba(38,217,177,0.5)]">
                  Enroll Now
                </button>
              `}
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

function setupCourseEventListeners() {
  // Category pills
  document.querySelectorAll('.course-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.course-filter-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-background-dark', 'font-bold');
        b.classList.add('bg-gray-800/60', 'text-gray-300', 'hover:bg-gray-800');
      });
      btn.classList.remove('bg-gray-800/60', 'text-gray-300', 'hover:bg-gray-800');
      btn.classList.add('bg-primary', 'text-background-dark', 'font-bold');

      currentFilter = btn.dataset.category;
      renderCoursesGrid();
    });
  });

  // Search input
  const searchInput = document.getElementById('course-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCoursesGrid();
    });
  }

  // Difficulty select
  const diffSelect = document.getElementById('course-difficulty-select');
  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      currentDifficulty = e.target.value;
      renderCoursesGrid();
    });
  }
}

function resetCourseFilters() {
  currentFilter = 'all';
  currentDifficulty = 'all';
  searchQuery = '';
  
  const searchInput = document.getElementById('course-search-input');
  if (searchInput) searchInput.value = '';
  
  const diffSelect = document.getElementById('course-difficulty-select');
  if (diffSelect) diffSelect.value = 'all';

  document.querySelectorAll('.course-filter-btn').forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.classList.add('bg-primary', 'text-background-dark', 'font-bold');
      btn.classList.remove('bg-gray-800/60', 'text-gray-300');
    } else {
      btn.classList.remove('bg-primary', 'text-background-dark', 'font-bold');
      btn.classList.add('bg-gray-800/60', 'text-gray-300');
    }
  });

  renderCoursesGrid();
}

// Course Player Modal
function openCourseModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('course-modal');
  const modalContent = document.getElementById('course-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="relative bg-[#0e1415] border border-gray-700/80 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
      <!-- Modal Header -->
      <div class="sticky top-0 z-20 bg-[#0e1415]/95 backdrop-blur-md px-6 py-4 border-b border-gray-800 flex justify-between items-center">
        <div>
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded ${course.badgeColor}">${course.level}</span>
          <h3 class="text-xl font-bold text-white mt-1">${course.title}</h3>
        </div>
        <button onclick="closeCourseModal()" class="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors">
          ✕
        </button>
      </div>

      <!-- Video Player Simulator -->
      <div class="p-6">
        <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-gray-800 shadow-2xl group">
          <img src="${course.image}" class="w-full h-full object-cover opacity-60">
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <button onclick="simulatePlayVideo(this)" class="w-16 h-16 rounded-full bg-primary text-background-dark flex items-center justify-center text-2xl shadow-[0_0_25px_rgba(38,217,177,0.7)] hover:scale-110 transition-transform">
              ▶
            </button>
            <p class="text-white text-sm font-semibold mt-3">Preview Lecture: ${course.modules[0]?.title || 'Introduction'}</p>
          </div>
          <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-300 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg">
            <span>HD 1080p • 60 FPS</span>
            <span>Paradigm Institutional Streaming</span>
          </div>
        </div>

        <!-- Curriculum & Modules -->
        <div class="mt-8">
          <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            Course Curriculum (${course.lessonsCount} Modules)
          </h4>
          <div class="space-y-3">
            ${course.modules.map((mod, i) => `
              <div class="glass-card p-4 rounded-xl flex items-center justify-between hover:border-primary/40 transition-colors cursor-pointer" onclick="selectModule('${mod.title}')">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full ${mod.completed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-gray-800 text-gray-400'} text-xs font-bold flex items-center justify-center">
                    ${mod.completed ? '✓' : i + 1}
                  </span>
                  <div>
                    <h5 class="text-sm font-semibold text-white ${mod.current ? 'text-primary' : ''}">${mod.title}</h5>
                    <span class="text-xs text-gray-400">${mod.duration} • Video & Practical Markup</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  ${mod.completed ? '<span class="text-xs text-emerald-400 font-semibold">Completed</span>' : '<button class="text-xs px-3 py-1 bg-gray-800 hover:bg-primary hover:text-black rounded text-gray-200 transition-colors font-medium">Watch</button>'}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Action Footer -->
        <div class="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="text-sm text-gray-400">
            Includes cheat sheets, PineScript indicators, and live Q&A discord access.
          </div>
          <div class="flex gap-3 w-full sm:w-auto">
            <button onclick="downloadCourseMaterial('${course.title}')" class="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-gray-700 hover:bg-gray-800 text-gray-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              PDF Notes
            </button>
            <button onclick="enrollInCourse('${course.title}')" class="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg bg-primary hover:bg-teal-400 text-background-dark font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(38,217,177,0.3)]">
              ${course.progress > 0 ? 'Continue Lesson' : 'Start Curriculum'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCourseModal() {
  const modal = document.getElementById('course-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function simulatePlayVideo(btn) {
  btn.innerHTML = '⏸';
  showToast('Streaming Paradigm Institutional Lesson (1080p)');
}

function selectModule(title) {
  showToast(`Loaded lesson: ${title}`);
}

function downloadCourseMaterial(courseTitle) {
  showToast(`Downloaded: ${courseTitle} - Cheat Sheet & Framework (PDF)`);
}

function enrollInCourse(courseTitle) {
  closeCourseModal();
  showToast(`Successfully enrolled in "${courseTitle}"! Redirecting to Dashboard...`);
  if (window.switchView) {
    window.switchView('dashboard');
  }
}

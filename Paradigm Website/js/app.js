/* ==========================================================================
   Paradigm Traders - Main Application Engine & Navigation
   ========================================================================== */

let isAnnualPricing = false;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCourses();
  initSignals();
  initParadigmChart();
  initPricingToggle();
  initMobileMenu();
  setupHashRouting();
});

// Toast System
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
      <span class="text-xs font-semibold text-gray-100">${message}</span>
    </div>
    <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-white text-xs">✕</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Navigation & View Switching
function switchView(viewName) {
  // Update view containers
  document.querySelectorAll('.app-view').forEach(view => {
    if (view.id === `view-${viewName}`) {
      view.classList.remove('hidden');
      view.classList.add('block');
    } else {
      view.classList.add('hidden');
      view.classList.remove('block');
    }
  });

  // Update Nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.target === viewName) {
      link.classList.add('active', 'text-white');
      link.classList.remove('text-gray-400');
    } else {
      link.classList.remove('active', 'text-white');
      link.classList.add('text-gray-400');
    }
  });

  // If switched to dashboard or signals, trigger chart re-render
  if (viewName === 'signals' || viewName === 'dashboard') {
    setTimeout(() => {
      if (activeChart) activeChart.resize();
    }, 100);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update URL hash without reload
  history.replaceState(null, null, `#${viewName}`);
}

window.switchView = switchView;

function initNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      if (target) switchView(target);
      
      // Close mobile menu if open
      closeMobileMenu();
    });
  });
}

function setupHashRouting() {
  const hash = window.location.hash.replace('#', '');
  if (hash && ['home', 'courses', 'dashboard', 'signals', 'pricing', 'mentors'].includes(hash)) {
    switchView(hash);
  } else {
    switchView('home');
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '');
    if (newHash && ['home', 'courses', 'dashboard', 'signals', 'pricing', 'mentors'].includes(newHash)) {
      switchView(newHash);
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (toggleBtn && menuDrawer) {
    toggleBtn.addEventListener('click', () => {
      menuDrawer.classList.toggle('hidden');
    });
  }

  if (closeBtn && menuDrawer) {
    closeBtn.addEventListener('click', () => {
      menuDrawer.classList.add('hidden');
    });
  }
}

function closeMobileMenu() {
  const menuDrawer = document.getElementById('mobile-drawer');
  if (menuDrawer) menuDrawer.classList.add('hidden');
}

// Pricing Toggle Logic
function initPricingToggle() {
  const toggle = document.getElementById('pricing-billing-toggle');
  if (!toggle) return;

  toggle.addEventListener('change', (e) => {
    isAnnualPricing = e.target.checked;
    updatePricingCards();
  });
}

function updatePricingCards() {
  const basicPrice = document.getElementById('price-basic');
  const proPrice = document.getElementById('price-pro');
  const elitePrice = document.getElementById('price-elite');

  const basicPeriod = document.getElementById('period-basic');
  const proPeriod = document.getElementById('period-pro');
  const elitePeriod = document.getElementById('period-elite');

  if (isAnnualPricing) {
    // 20% discount on yearly billing
    if (basicPrice) basicPrice.textContent = '$39';
    if (proPrice) proPrice.textContent = '$79';
    if (elitePrice) elitePrice.textContent = '$159';

    [basicPeriod, proPeriod, elitePeriod].forEach(p => {
      if (p) p.textContent = '/month (billed annually)';
    });
    showToast('Applied 20% Annual Membership Discount!');
  } else {
    if (basicPrice) basicPrice.textContent = '$49';
    if (proPrice) proPrice.textContent = '$99';
    if (elitePrice) elitePrice.textContent = '$199';

    [basicPeriod, proPeriod, elitePeriod].forEach(p => {
      if (p) p.textContent = '/month';
    });
  }
}

// Auth Modal
function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;

  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  const formLogin = document.getElementById('form-login');
  const formSignup = document.getElementById('form-signup');
  const modalTitle = document.getElementById('auth-modal-title');

  if (mode === 'login') {
    tabLogin?.classList.add('border-primary', 'text-primary');
    tabLogin?.classList.remove('text-gray-400', 'border-transparent');
    tabSignup?.classList.remove('border-primary', 'text-primary');
    tabSignup?.classList.add('text-gray-400', 'border-transparent');
    formLogin?.classList.remove('hidden');
    formSignup?.classList.add('hidden');
    if (modalTitle) modalTitle.textContent = 'Welcome Back, Trader';
  } else {
    tabSignup?.classList.add('border-primary', 'text-primary');
    tabSignup?.classList.remove('text-gray-400', 'border-transparent');
    tabLogin?.classList.remove('border-primary', 'text-primary');
    tabLogin?.classList.add('text-gray-400', 'border-transparent');
    formSignup?.classList.remove('hidden');
    formLogin?.classList.add('hidden');
    if (modalTitle) modalTitle.textContent = 'Create Paradigm Account';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleAuthSubmit(e, type) {
  e.preventDefault();
  closeAuthModal();
  showToast(type === 'login' ? 'Welcome back! Signed in as Alex Vance (Elite Member).' : 'Account created! Welcome to Paradigm Traders.');
  switchView('dashboard');
}

// Platform Tour Modal
function openTourModal() {
  const modal = document.getElementById('tour-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeTourModal() {
  const modal = document.getElementById('tour-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Checkout Modal
function openCheckoutModal(planName, price) {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  const planNameEl = document.getElementById('checkout-plan-name');
  const planPriceEl = document.getElementById('checkout-plan-price');
  const planPeriodEl = document.getElementById('checkout-plan-period');

  const finalPrice = isAnnualPricing ? (planName === 'Basic' ? '$39' : (planName === 'Pro' ? '$79' : '$159')) : price;

  if (planNameEl) planNameEl.textContent = `${planName} Tier Membership`;
  if (planPriceEl) planPriceEl.textContent = finalPrice;
  if (planPeriodEl) planPeriodEl.textContent = isAnnualPricing ? 'billed annually (save 20%)' : 'billed monthly, cancel anytime';

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  closeCheckoutModal();
  showToast('Payment successful! Your Paradigm Elite Terminal is now activated.');
  switchView('dashboard');
}

// Mentor Office Hours Booking
function bookMentorSession(mentorName) {
  showToast(`Booking request sent to ${mentorName}. You'll receive a Google Meet invite shortly.`);
}

// Theme Toggle (Dark / Light mode)
function initTheme() {
  const savedTheme = localStorage.getItem('paradigm_theme') || 'dark';
  applyTheme(savedTheme);
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  const newTheme = isCurrentlyDark ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const moonIcon = document.getElementById('theme-moon-icon');
  const sunIcon = document.getElementById('theme-sun-icon');
  const settingsThemeToggle = document.getElementById('settings-theme-toggle');

  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    if (moonIcon) moonIcon.classList.add('hidden');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (settingsThemeToggle) settingsThemeToggle.checked = false;
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    if (moonIcon) moonIcon.classList.remove('hidden');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (settingsThemeToggle) settingsThemeToggle.checked = true;
  }
  localStorage.setItem('paradigm_theme', theme);

  if (window.activeChart) {
    window.activeChart.render();
  }
}

// Settings Modal
function openSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}


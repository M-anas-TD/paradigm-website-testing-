/* ==========================================================================
   Paradigm Traders - Live Signals & Trading Room Logic
   ========================================================================== */

const SIGNALS_DATA = [
  {
    id: "eurusd-1",
    pair: "EUR/USD",
    type: "BUY",
    timeAgo: "Just now",
    entry: "1.0850",
    tp: "1.0920",
    sl: "1.0810",
    pips: "+70 Pips",
    status: "ACTIVE",
    statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    notes: "H4 Liquidity sweep of Asian low followed by bullish CHoCH. Risk reward 1:1.75."
  },
  {
    id: "gbpjpy-1",
    pair: "GBP/JPY",
    type: "SELL",
    timeAgo: "15m ago",
    entry: "188.25",
    tp: "187.50",
    sl: "188.80",
    pips: "+75 Pips",
    status: "ACTIVE",
    statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    notes: "Rejection from 4H supply order block with bearish momentum divergence on RSI."
  },
  {
    id: "xauusd-1",
    pair: "XAU/USD",
    type: "BUY",
    timeAgo: "1h ago",
    entry: "2045.50",
    tp: "2060.00",
    sl: "2038.00",
    pips: "+145 Pips",
    status: "TARGET 1 HIT",
    statusColor: "bg-primary/20 text-primary border-primary/40",
    notes: "Institutions defending $2,045 daily support confluence. Move SL to Breakeven."
  },
  {
    id: "btcusdt-1",
    pair: "BTC/USDT",
    type: "BUY",
    timeAgo: "3h ago",
    entry: "64,200",
    tp: "67,500",
    sl: "62,800",
    pips: "+3,300 Pts",
    status: "TARGET 2 HIT",
    statusColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    notes: "Bull flag continuation breakout. Volume expanding."
  }
];

function initSignals() {
  renderLiveSignals();
  initWebinarCountdown();
  setupCalculator();
}

function renderLiveSignals() {
  // Render in Dashboard
  const dashContainer = document.getElementById('dashboard-signals-list');
  if (dashContainer) {
    dashContainer.innerHTML = SIGNALS_DATA.slice(0, 3).map(sig => `
      <div class="glass-card p-4 rounded-xl border border-gray-800 hover:border-primary/40 transition-all group">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="font-bold text-white tracking-wide">${sig.pair}</span>
            <span class="px-2 py-0.5 text-[10px] font-extrabold rounded ${sig.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'}">
              ${sig.type}
            </span>
          </div>
          <span class="text-xs text-gray-500">${sig.timeAgo}</span>
        </div>

        <div class="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-2.5">
          <div>
            <span class="text-gray-500 block text-[10px] uppercase">Entry</span>
            <span class="font-mono text-gray-200">${sig.entry}</span>
          </div>
          <div>
            <span class="text-gray-500 block text-[10px] uppercase">TP</span>
            <span class="font-mono text-emerald-400">${sig.tp}</span>
          </div>
          <div>
            <span class="text-gray-500 block text-[10px] uppercase">SL</span>
            <span class="font-mono text-rose-400">${sig.sl}</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-gray-800/80">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded border ${sig.statusColor}">
            ${sig.status}
          </span>
          <button onclick="copySignalDetails('${sig.pair}', '${sig.type}', '${sig.entry}', '${sig.tp}', '${sig.sl}')" class="text-xs text-primary hover:text-white flex items-center gap-1 font-medium transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
            Copy Signal
          </button>
        </div>
      </div>
    `).join('');
  }

  // Render in Full Signals View
  const fullContainer = document.getElementById('full-signals-list');
  if (fullContainer) {
    fullContainer.innerHTML = SIGNALS_DATA.map(sig => `
      <div class="glass-card p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center font-black text-sm text-primary border border-gray-700">
                ${sig.pair.split('/')[0]}
              </div>
              <div>
                <h4 class="font-extrabold text-lg text-white">${sig.pair}</h4>
                <span class="text-xs text-gray-400">${sig.timeAgo} • Institutional Order Flow</span>
              </div>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="px-3 py-1 text-xs font-black rounded-lg ${sig.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'}">
                ${sig.type}
              </span>
              <span class="text-[11px] font-semibold text-primary">${sig.pips}</span>
            </div>
          </div>

          <p class="text-sm text-gray-400 leading-relaxed mb-6 bg-black/30 p-3 rounded-lg border border-gray-800/80">
            ${sig.notes}
          </p>

          <div class="grid grid-cols-3 gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-800 mb-6 font-mono text-center">
            <div>
              <span class="block text-[11px] font-sans uppercase tracking-wider text-gray-500 mb-1">Entry Price</span>
              <span class="text-base font-bold text-white">${sig.entry}</span>
            </div>
            <div>
              <span class="block text-[11px] font-sans uppercase tracking-wider text-gray-500 mb-1">Take Profit</span>
              <span class="text-base font-bold text-emerald-400">${sig.tp}</span>
            </div>
            <div>
              <span class="block text-[11px] font-sans uppercase tracking-wider text-gray-500 mb-1">Stop Loss</span>
              <span class="text-base font-bold text-rose-400">${sig.sl}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-gray-800/80">
          <span class="px-2.5 py-1 text-xs font-bold rounded border ${sig.statusColor}">
            ${sig.status}
          </span>
          <div class="flex gap-2">
            <button onclick="openCalcWithSignal('${sig.pair}', ${parseFloat(sig.entry.replace(',', ''))}, ${parseFloat(sig.sl.replace(',', ''))})" class="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold transition-colors flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              Calc Lots
            </button>
            <button onclick="copySignalDetails('${sig.pair}', '${sig.type}', '${sig.entry}', '${sig.tp}', '${sig.sl}')" class="px-4 py-1.5 rounded-lg bg-primary hover:bg-teal-400 text-background-dark text-xs font-bold transition-all shadow-[0_0_12px_rgba(38,217,177,0.3)]">
              Copy Parameters
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function copySignalDetails(pair, type, entry, tp, sl) {
  const text = `PARADIGM TRADERS SIGNAL:\nPair: ${pair}\nAction: ${type}\nEntry: ${entry}\nTP: ${tp}\nSL: ${sl}\nPlatform: MT4/MT5/cTrader`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
  showToast(`Copied ${pair} ${type} parameters to clipboard!`);
}

// Webinar Countdown
function initWebinarCountdown() {
  const el = document.getElementById('webinar-countdown');
  if (!el) return;

  // 2 hours countdown simulation
  let totalSeconds = 2 * 3600 + 14 * 60 + 35;
  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      el.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

function remindWebinar() {
  showToast("Reminder registered! You'll receive an SMS & Email 10 minutes prior to session start.");
}

function joinWebinarRoom() {
  const modal = document.getElementById('webinar-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeWebinarRoom() {
  const modal = document.getElementById('webinar-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Position Size Calculator
function setupCalculator() {
  const balanceInput = document.getElementById('calc-balance');
  const riskInput = document.getElementById('calc-risk');
  const slInput = document.getElementById('calc-sl');

  const calculate = () => {
    if (!balanceInput || !riskInput || !slInput) return;
    const balance = parseFloat(balanceInput.value) || 10000;
    const riskPercent = parseFloat(riskInput.value) || 1.0;
    const slPips = parseFloat(slInput.value) || 30;

    const riskAmount = (balance * (riskPercent / 100));
    // Standard forex pip value: 1 lot = $10 per pip on EUR/USD
    const lotSize = (riskAmount / (slPips * 10)).toFixed(2);

    const outRisk = document.getElementById('calc-out-risk');
    const outLots = document.getElementById('calc-out-lots');
    const outReward = document.getElementById('calc-out-reward');

    if (outRisk) outRisk.textContent = `$${riskAmount.toFixed(2)}`;
    if (outLots) outLots.textContent = `${lotSize} Lots`;
    if (outReward) outReward.textContent = `$${(riskAmount * 2).toFixed(2)} (1:2 RR)`;
  };

  [balanceInput, riskInput, slInput].forEach(inp => {
    if (inp) inp.addEventListener('input', calculate);
  });
  calculate();
}

function openCalcWithSignal(pair, entry, sl) {
  const modal = document.getElementById('calc-modal');
  if (!modal) return;

  const slInput = document.getElementById('calc-sl');
  if (slInput) {
    const diff = Math.abs(entry - sl);
    // Rough estimate pips for major pairs
    let pips = Math.round(diff * 10000);
    if (pair.includes('JPY') || pair.includes('XAU')) {
      pips = Math.round(diff * 100);
    }
    slInput.value = pips > 0 ? pips : 30;
  }

  setupCalculator();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCalcModal() {
  const modal = document.getElementById('calc-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

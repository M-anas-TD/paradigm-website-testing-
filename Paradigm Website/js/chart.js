/* ==========================================================================
   Paradigm Traders - Interactive Candlestick Chart Engine
   ========================================================================== */

class ParadigmChart {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.symbol = 'XAU/USD';
    this.basePrice = 2045.50;
    this.candles = [];
    this.timeframe = '15M';
    this.hoverPos = null;
    this.animId = null;

    this.initData();
    this.setupListeners();
    this.startLiveTicks();
    this.resize();
  }

  initData() {
    this.candles = [];
    let price = this.basePrice - 18;
    const numCandles = 50;

    for (let i = 0; i < numCandles; i++) {
      const delta = (Math.random() - 0.48) * (this.basePrice * 0.003);
      const open = price;
      const close = open + delta;
      const high = Math.max(open, close) + Math.random() * (this.basePrice * 0.002);
      const low = Math.min(open, close) - Math.random() * (this.basePrice * 0.002);
      const volume = Math.floor(Math.random() * 800) + 150;

      this.candles.push({ open, close, high, low, volume });
      price = close;
    }
  }

  setSymbol(symbol, basePrice) {
    this.symbol = symbol;
    this.basePrice = basePrice;
    this.initData();
    this.render();
  }

  setTimeframe(tf) {
    this.timeframe = tf;
    this.initData();
    this.render();
  }

  setupListeners() {
    window.addEventListener('resize', () => this.resize());

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.hoverPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      this.render();
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.hoverPos = null;
      this.render();
    });
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = (rect.height || 360) * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.width = rect.width;
    this.height = rect.height || 360;
    this.render();
  }

  startLiveTicks() {
    setInterval(() => {
      if (this.candles.length === 0) return;
      const last = this.candles[this.candles.length - 1];
      const tick = (Math.random() - 0.49) * (this.basePrice * 0.0006);
      last.close += tick;
      if (last.close > last.high) last.high = last.close;
      if (last.close < last.low) last.low = last.close;
      last.volume += Math.floor(Math.random() * 5);

      // Update price banner on page if exists
      const livePriceEl = document.getElementById('chart-live-price');
      if (livePriceEl) {
        livePriceEl.textContent = last.close.toFixed(this.symbol.includes('JPY') || this.symbol.includes('XAU') ? 2 : 4);
      }

      this.render();
    }, 1200);
  }

  render() {
    if (!this.ctx || !this.width) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    // Clear canvas
    ctx.fillStyle = '#0d1213';
    ctx.fillRect(0, 0, w, h);

    // Margin & boundaries
    const paddingRight = 65;
    const paddingBottom = 30;
    const chartW = w - paddingRight;
    const chartH = h - paddingBottom;

    if (this.candles.length === 0) return;

    // Calculate Min & Max
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let maxVol = 0;

    this.candles.forEach(c => {
      if (c.low < minPrice) minPrice = c.low;
      if (c.high > maxPrice) maxPrice = c.high;
      if (c.volume > maxVol) maxVol = c.volume;
    });

    const priceRange = maxPrice - minPrice || 1;
    const getY = (val) => chartH - ((val - minPrice) / priceRange) * (chartH - 40) - 20;

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    const gridLines = 5;
    ctx.font = '10px monospace';
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'left';

    for (let i = 0; i <= gridLines; i++) {
      const y = (chartH / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(chartW, y);
      ctx.stroke();

      const priceAtGrid = maxPrice - (i / gridLines) * priceRange;
      ctx.fillText(priceAtGrid.toFixed(this.symbol.includes('JPY') || this.symbol.includes('XAU') ? 2 : 4), chartW + 8, y + 3);
    }

    // Draw Volume Bars
    const candleSpacing = chartW / this.candles.length;
    const candleW = Math.max(candleSpacing * 0.7, 3);

    this.candles.forEach((c, idx) => {
      const x = idx * candleSpacing + candleSpacing / 2;
      const volH = (c.volume / (maxVol || 1)) * 40;
      ctx.fillStyle = c.close >= c.open ? 'rgba(38, 217, 177, 0.15)' : 'rgba(239, 68, 68, 0.15)';
      ctx.fillRect(x - candleW / 2, chartH - volH, candleW, volH);
    });

    // Draw EMA Line (20 period)
    ctx.beginPath();
    ctx.strokeStyle = '#8a2be2';
    ctx.lineWidth = 1.5;
    let ema = this.candles[0].close;
    const k = 2 / (20 + 1);

    this.candles.forEach((c, idx) => {
      ema = c.close * k + ema * (1 - k);
      const x = idx * candleSpacing + candleSpacing / 2;
      const y = getY(ema);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw Candlesticks
    this.candles.forEach((c, idx) => {
      const x = idx * candleSpacing + candleSpacing / 2;
      const isBull = c.close >= c.open;
      const color = isBull ? '#26d9b1' : '#f43f5e';

      // Wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x, getY(c.high));
      ctx.lineTo(x, getY(c.low));
      ctx.stroke();

      // Body
      const yOpen = getY(c.open);
      const yClose = getY(c.close);
      const top = Math.min(yOpen, yClose);
      const height = Math.max(Math.abs(yOpen - yClose), 2);

      ctx.fillStyle = color;
      ctx.fillRect(x - candleW / 2, top, candleW, height);
    });

    // Current Price Pulsing Line
    const lastCandle = this.candles[this.candles.length - 1];
    const curY = getY(lastCandle.close);
    const isBullLast = lastCandle.close >= lastCandle.open;

    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = isBullLast ? '#26d9b1' : '#f43f5e';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, curY);
    ctx.lineTo(chartW, curY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Current Price Badge on Right Axis
    ctx.fillStyle = isBullLast ? '#26d9b1' : '#f43f5e';
    ctx.fillRect(chartW + 2, curY - 9, 58, 18);
    ctx.fillStyle = '#0a0e0f';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(lastCandle.close.toFixed(this.symbol.includes('JPY') || this.symbol.includes('XAU') ? 2 : 4), chartW + 31, curY + 4);

    // Crosshair on hover
    if (this.hoverPos && this.hoverPos.x < chartW && this.hoverPos.y < chartH) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);

      // Vertical line
      ctx.beginPath();
      ctx.moveTo(this.hoverPos.x, 0);
      ctx.lineTo(this.hoverPos.x, chartH);
      ctx.stroke();

      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(0, this.hoverPos.y);
      ctx.lineTo(chartW, this.hoverPos.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Price at hover
      const hoverPrice = maxPrice - ((this.hoverPos.y - 20) / (chartH - 40)) * priceRange;
      ctx.fillStyle = '#374151';
      ctx.fillRect(chartW + 2, this.hoverPos.y - 8, 58, 16);
      ctx.fillStyle = '#f3f4f6';
      ctx.font = '10px monospace';
      ctx.fillText(hoverPrice.toFixed(this.symbol.includes('JPY') || this.symbol.includes('XAU') ? 2 : 4), chartW + 31, this.hoverPos.y + 4);
    }
  }
}

let activeChart = null;

function initParadigmChart() {
  const canvas = document.getElementById('tradingview-canvas');
  if (canvas) {
    activeChart = new ParadigmChart('tradingview-canvas');
    window.activeChart = activeChart;
  }
}

function switchChartSymbol(symbol, basePrice, btn) {
  if (activeChart) {
    activeChart.setSymbol(symbol, basePrice);
  }
  document.querySelectorAll('.chart-symbol-btn').forEach(b => {
    b.classList.remove('bg-primary/20', 'text-primary', 'border-primary/40');
    b.classList.add('text-gray-400', 'border-transparent');
  });
  if (btn) {
    btn.classList.add('bg-primary/20', 'text-primary', 'border-primary/40');
    btn.classList.remove('text-gray-400', 'border-transparent');
  }

  const nameEl = document.getElementById('chart-symbol-name');
  if (nameEl) nameEl.textContent = symbol;
}

function switchChartTf(tf, btn) {
  if (activeChart) {
    activeChart.setTimeframe(tf);
  }
  document.querySelectorAll('.chart-tf-btn').forEach(b => {
    b.classList.remove('bg-gray-800', 'text-white');
    b.classList.add('text-gray-500');
  });
  if (btn) {
    btn.classList.add('bg-gray-800', 'text-white');
    btn.classList.remove('text-gray-500');
  }
}

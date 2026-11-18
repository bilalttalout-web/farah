/* ============================================================
   BILAL'S WHEEL OF FORTUNE (عجلة الحظ الخاصة ببلال 🎡)
   10 Mandatory Segments, Physics-based Deceleration, Tactile Sound,
   Winning Celebration Modal & Instant WhatsApp Integration (+212779985378)
   ============================================================ */

class WheelOfFortune {
  constructor() {
    this.canvas = document.getElementById('wheel-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.btnSpin = document.getElementById('btn-spin-wheel');
    this.counterEl = document.getElementById('spin-counter-value');
    this.modal = document.getElementById('wheel-modal');
    this.modalWinnerText = document.getElementById('wheel-winner-text');
    this.btnModalSpinAgain = document.getElementById('btn-modal-spin-again');
    this.btnModalWhatsapp = document.getElementById('btn-modal-whatsapp');
    this.btnCloseModal = document.getElementById('btn-close-wheel-modal');
    this.pointerEl = document.getElementById('wheel-pointer');

    // Exactly 10 Segments in required order
    this.segments = [
      'غني لبلال 🎤',
      'أرسل لبلال بعض الذكريات 📸',
      'أعد تدوير العجلة 🔄',
      'بلال يذهب للتخييم معك على الشاطئ 🏕️',
      'خالتك تعزمني على الغداء 😂',
      'أعطني 100 درهم 💸',
      'بلال يشتري لك أبطال 🎁',
      'بلال يشتري لك البسكويت 🍪',
      'غني لبلال 🎶',
      'غني لبلال مرة أخرى 😂'
    ];

    this.numSegments = this.segments.length;
    this.segmentAngle = (2 * Math.PI) / this.numSegments; // 36° (0.6283 rad)

    // Palette: Pink, Purple, Sky, Gold, Mint, Lavender, Coral, Teal, Rose, Violet
    this.colors = [
      '#ff758c', // 1: Rose Pink
      '#9d4edd', // 2: Vivid Purple
      '#0ea5e9', // 3: Bright Cyan/Sky
      '#f59e0b', // 4: Amber Gold
      '#10b981', // 5: Emerald Mint
      '#ec4899', // 6: Hot Pink
      '#6366f1', // 7: Indigo Purple
      '#f97316', // 8: Coral Orange
      '#14b8a6', // 9: Vibrant Teal
      '#8b5cf6'  // 10: Rich Violet
    ];

    this.currentRotation = 0; // Current rotation in radians
    this.isSpinning = false;
    this.animId = null;
    this.lastTickSegment = -1;

    // Load or initialize spin counter
    this.spinCount = parseInt(localStorage.getItem('farah_wheel_spins') || '0', 10);

    this.init();
  }

  init() {
    this.updateCounterDisplay();
    this.setupCanvasDPI();
    this.drawWheel(this.currentRotation);
    this.bindEvents();
    window.addEventListener('resize', () => {
      this.setupCanvasDPI();
      this.drawWheel(this.currentRotation);
    });
  }

  updateCounterDisplay() {
    if (this.counterEl) {
      this.counterEl.textContent = this.spinCount;
    }
  }

  setupCanvasDPI() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const size = Math.min(rect.width || 420, 440);

    this.canvas.width = size * dpr;
    this.canvas.height = size * dpr;
    this.ctx.resetTransform?.();
    this.ctx.scale(dpr, dpr);
    this.displaySize = size;
  }

  drawWheel(rotation) {
    const ctx = this.ctx;
    const size = this.displaySize || 420;
    const cx = size / 2;
    const cy = size / 2;
    const radius = cx - 18;

    ctx.clearRect(0, 0, size, size);

    // Outer Glow / Ring Shadow
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.shadowColor = 'rgba(123, 44, 191, 0.35)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 6;
    ctx.fill();
    ctx.restore();

    // Outer Golden Rim
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 8, 0, 2 * Math.PI);
    const rimGrad = ctx.createLinearGradient(0, 0, size, size);
    rimGrad.addColorStop(0, '#ffd166');
    rimGrad.addColorStop(0.5, '#f59e0b');
    rimGrad.addColorStop(1, '#ff8fa3');
    ctx.lineWidth = 10;
    ctx.strokeStyle = rimGrad;
    ctx.stroke();
    ctx.restore();

    // Draw 10 Segments
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);

    for (let i = 0; i < this.numSegments; i++) {
      const startAngle = i * this.segmentAngle - Math.PI / 2;
      const endAngle = (i + 1) * this.segmentAngle - Math.PI / 2;

      // Slice background
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();

      // Subtle gradient per slice
      const sliceGrad = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius);
      sliceGrad.addColorStop(0, '#ffffff');
      sliceGrad.addColorStop(0.2, this.colors[i]);
      sliceGrad.addColorStop(1, this.colors[i]);
      ctx.fillStyle = sliceGrad;
      ctx.fill();

      // Slice border line
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Text and Emoji in Slice
      ctx.save();
      const midAngle = startAngle + this.segmentAngle / 2;
      ctx.rotate(midAngle);

      // Label
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      // Adaptive Font Size
      const fontSize = size < 360 ? 12.5 : 14.5;
      ctx.font = `bold ${fontSize}px 'Cairo', 'Noto Sans Arabic', sans-serif`;

      // Format label: keep it neat
      const text = this.segments[i];
      // Draw text positioned along radius
      ctx.fillText(text, radius - 16, 0);

      ctx.restore();
    }

    // Outer Rim Golden Studs / Bulbs
    for (let i = 0; i < this.numSegments * 2; i++) {
      const studAngle = (i * Math.PI) / this.numSegments;
      const sx = Math.cos(studAngle) * (radius + 4);
      const sy = Math.sin(studAngle) * (radius + 4);

      ctx.beginPath();
      ctx.arc(sx, sy, 3.5, 0, 2 * Math.PI);
      ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#ffd166';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowBlur = 4;
      ctx.fill();
    }

    ctx.restore(); // End rotated canvas

    // Center Hub (Pin / Bevel)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 32, 0, 2 * Math.PI);
    const hubGrad = ctx.createRadialGradient(cx - 6, cy - 6, 4, cx, cy, 32);
    hubGrad.addColorStop(0, '#fff');
    hubGrad.addColorStop(0.3, '#ffd166');
    hubGrad.addColorStop(0.7, '#f59e0b');
    hubGrad.addColorStop(1, '#d97706');
    ctx.fillStyle = hubGrad;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    ctx.fill();

    ctx.lineWidth = 3.5;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    // Center Star Icon
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 4;
    ctx.fillText('✨', cx, cy);
    ctx.restore();
  }

  getWinningIndexForRotation(rot) {
    const twoPi = 2 * Math.PI;
    const unrotated = (twoPi - (rot % twoPi)) % twoPi;
    const idx = Math.floor(unrotated / this.segmentAngle) % this.numSegments;
    return idx;
  }

  spin() {
    if (this.isSpinning) return;
    this.isSpinning = true;
    this.btnSpin.disabled = true;
    this.btnSpin.classList.add('disabled');

    // Sound context
    if (window.soundEngine) {
      window.soundEngine.ensureContext();
      window.soundEngine.playTap();
    }

    // Pick random target winning segment (0 to 9)
    const winningIndex = Math.floor(Math.random() * this.numSegments);

    // Exact angle that puts the center of winning segment at 12 o'clock pointer
    const twoPi = 2 * Math.PI;
    const targetMod = (twoPi - (winningIndex + 0.5) * this.segmentAngle) % twoPi;

    // Current modulo
    const currentMod = this.currentRotation % twoPi;
    let delta = (targetMod - currentMod) % twoPi;
    if (delta < 0) delta += twoPi;

    // Add between 6 to 9 full spins for dramatic tension
    const fullSpins = Math.floor(Math.random() * 4) + 6;
    const totalRotationDelta = fullSpins * twoPi + delta;

    const startRotation = this.currentRotation;
    const finalRotation = startRotation + totalRotationDelta;

    const duration = 5200; // 5.2 seconds for realistic suspense
    const startTime = performance.now();

    // Animate with cubic ease-out physics
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom smooth deceleration: easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);

      this.currentRotation = startRotation + totalRotationDelta * ease;
      this.drawWheel(this.currentRotation);

      // Sound tick on sector boundaries
      const currentIdx = this.getWinningIndexForRotation(this.currentRotation);
      if (currentIdx !== this.lastTickSegment) {
        this.lastTickSegment = currentIdx;
        if (window.soundEngine && progress < 0.95) {
          window.soundEngine.playTap();
        }
        // Pointer wiggle animation
        if (this.pointerEl) {
          this.pointerEl.classList.remove('tick');
          void this.pointerEl.offsetWidth;
          this.pointerEl.classList.add('tick');
        }
      }

      if (progress < 1) {
        this.animId = requestAnimationFrame(animate);
      } else {
        // Spin Finished!
        this.currentRotation = finalRotation;
        this.drawWheel(this.currentRotation);
        this.isSpinning = false;
        this.btnSpin.disabled = false;
        this.btnSpin.classList.remove('disabled');

        // Increment spin count
        this.spinCount++;
        localStorage.setItem('farah_wheel_spins', this.spinCount.toString());
        this.updateCounterDisplay();

        // Reveal Winner
        const verifiedWinnerIdx = this.getWinningIndexForRotation(this.currentRotation);
        this.handleSpinComplete(verifiedWinnerIdx);
      }
    };

    this.animId = requestAnimationFrame(animate);
  }

  handleSpinComplete(winnerIdx) {
    const winningResult = this.segments[winnerIdx];

    // Sound celebration
    if (window.soundEngine) {
      window.soundEngine.playVictoryFanfare();
      setTimeout(() => {
        window.soundEngine.playCuteCheer();
      }, 700);
    }

    // Canvas particle explosion
    const rect = this.canvas.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    if (window.particleEngine) {
      window.particleEngine.triggerExplosion(cx, cy);
    }
    this.spawnCelebrationConfetti(cx, cy);

    // Setup modal content
    if (this.modalWinnerText) {
      this.modalWinnerText.textContent = winningResult;
    }

    // Build WhatsApp URL with the EXACT specified message template and number
    const whatsappPhone = '212779985378';
    const messageTemplate = `😂🚨 تقرير رسمي من عجلة حظ بلال!\nلقد لعبت عجلة حظ بلال، وكانت النتيجة التي فزت بها هي: ${winningResult}.\nبلال، هذه هي النتيجة التي اختارتها لي العجلة! ماذا تقول؟ 😂❤️`;
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(messageTemplate)}`;

    if (this.btnModalWhatsapp) {
      this.btnModalWhatsapp.href = whatsappUrl;
      this.btnModalWhatsapp.setAttribute('href', whatsappUrl);
    }

    // Show Modal with slight delay for dramatic effect
    setTimeout(() => {
      this.openModal();
    }, 450);
  }

  spawnCelebrationConfetti(originX, originY) {
    const emojis = ['🎉', '✨', '⭐', '🎡', '💖', '🥳', '🍪', '🎁', '💸', '🎶'];
    for (let i = 0; i < 35; i++) {
      const el = document.createElement('div');
      el.className = 'wheel-burst-emoji';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${originX}px`;
      el.style.top = `${originY}px`;
      el.style.fontSize = `${Math.random() * 24 + 18}px`;

      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 220 + 80;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 50;
      const rot = (Math.random() - 0.5) * 450;

      el.style.setProperty('--tx', `${tx}px`);
      el.style.setProperty('--ty', `${ty}px`);
      el.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }
  }

  openModal() {
    if (!this.modal) return;
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
  }

  bindEvents() {
    if (this.btnSpin) {
      this.btnSpin.addEventListener('click', () => this.spin());
    }

    if (this.canvas) {
      this.canvas.addEventListener('click', () => {
        if (!this.isSpinning) this.spin();
      });
    }

    if (this.btnCloseModal) {
      this.btnCloseModal.addEventListener('click', () => this.closeModal());
    }

    if (this.btnModalSpinAgain) {
      this.btnModalSpinAgain.addEventListener('click', () => {
        this.closeModal();
        setTimeout(() => {
          this.spin();
        }, 300);
      });
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.wheelOfFortune = new WheelOfFortune();
});

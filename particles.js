/* ============================================================
   PARTICLE ENGINE - FRIENDSHIP EDITION
   High-performance HTML5 Canvas with smooth 60fps animations.
   Pastel sparkles, stars & celebration bursts.
   ============================================================ */

class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.sparkles = [];
    this.fireworks = [];
    this.width = 0;
    this.height = 0;
    this.animId = null;
    this.isCalm = false;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    // Spawn ambient floating stars & soft petals
    const count = window.innerWidth < 600 ? 18 : 30;
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(true));
    }

    // Spawn ambient twinkling sparkles
    for (let i = 0; i < 25; i++) {
      this.sparkles.push(this.createSparkle());
    }

    // Touch & pointer interaction
    const handlePointer = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      if (clientX !== undefined && clientY !== undefined) {
        for (let i = 0; i < 3; i++) {
          this.sparkles.push({
            x: clientX + (Math.random() - 0.5) * 30,
            y: clientY + (Math.random() - 0.5) * 30,
            vx: (Math.random() - 0.5) * 2.5,
            vy: (Math.random() - 0.5) * 2.5 - 1.5,
            size: Math.random() * 4 + 2,
            alpha: 1,
            color: ['#ff8fa3', '#b388eb', '#ffd166', '#fff'][Math.floor(Math.random() * 4)]
          });
        }
      }
    };

    window.addEventListener('pointermove', handlePointer, { passive: true });
    window.addEventListener('touchmove', handlePointer, { passive: true });

    this.start();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
  }

  createParticle(initial = false) {
    const colors = [
      'rgba(255, 143, 163, 0.45)',
      'rgba(179, 136, 235, 0.45)',
      'rgba(255, 209, 102, 0.5)',
      'rgba(167, 139, 250, 0.45)',
      'rgba(254, 215, 170, 0.5)'
    ];

    return {
      x: Math.random() * this.width,
      y: initial ? Math.random() * this.height : this.height + 20,
      size: Math.random() * 12 + 6,
      speedY: Math.random() * 0.8 + 0.35,
      speedX: (Math.random() - 0.5) * 0.5,
      wobbleSpeed: Math.random() * 0.03 + 0.01,
      wobbleAngle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.3,
      rotation: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: Math.random() > 0.4 ? 'star' : 'circle'
    };
  }

  createSparkle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: Math.random() * 3 + 1.5,
      alpha: Math.random() * 0.8 + 0.2,
      pulseSpeed: Math.random() * 0.04 + 0.01,
      angle: Math.random() * Math.PI * 2,
      color: '#ffffff'
    };
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color, alpha, rotation = 0) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;

    let rot = Math.PI / 2 * 3;
    let x = 0;
    let y = 0;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(0, -outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = Math.cos(rot) * outerRadius;
      y = Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = Math.cos(rot) * innerRadius;
      y = Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(0, -outerRadius);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Climax Friendship Star Burst Explosion
  triggerExplosion(originX, originY) {
    const count = window.innerWidth < 600 ? 55 : 85;
    const colors = ['#ffd166', '#ff8fa3', '#b388eb', '#a78bfa', '#38bdf8', '#4ade80', '#ffffff'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      this.fireworks.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        gravity: 0.18,
        friction: 0.965,
        size: Math.random() * 12 + 6,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        alpha: 1,
        fadeSpeed: Math.random() * 0.012 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  setCalmMode(calm = true) {
    this.isCalm = calm;
  }

  start() {
    const loop = () => {
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Render sparkles
      for (let i = 0; i < this.sparkles.length; i++) {
        const s = this.sparkles[i];
        if (s.vx !== undefined) {
          s.x += s.vx;
          s.y += s.vy;
          s.alpha -= 0.025;
          if (s.alpha <= 0) {
            this.sparkles.splice(i, 1);
            i--;
            continue;
          }
        } else {
          s.angle += s.pulseSpeed;
          s.alpha = Math.sin(s.angle) * 0.4 + 0.5;
        }

        this.ctx.fillStyle = s.color;
        this.ctx.globalAlpha = Math.max(0, s.alpha);
        this.ctx.beginPath();
        this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Render floating particles
      const speedMultiplier = this.isCalm ? 0.6 : 1;
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.wobbleAngle += p.wobbleSpeed;
        p.x += Math.sin(p.wobbleAngle) * 0.6 + p.speedX;
        p.y -= p.speedY * speedMultiplier;

        if (p.y < -30) {
          this.particles[i] = this.createParticle(false);
          continue;
        }

        if (p.type === 'star') {
          this.drawStar(this.ctx, p.x, p.y, 5, p.size, p.size * 0.5, p.color, p.opacity, p.rotation);
        } else {
          this.ctx.save();
          this.ctx.globalAlpha = p.opacity;
          this.ctx.fillStyle = p.color;
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.restore();
        }
      }

      // Render fireworks
      for (let i = 0; i < this.fireworks.length; i++) {
        const f = this.fireworks[i];
        f.x += f.vx;
        f.y += f.vy;
        f.vy += f.gravity;
        f.vx *= f.friction;
        f.vy *= f.friction;
        f.rotation += f.rotSpeed;
        f.alpha -= f.fadeSpeed;

        if (f.alpha <= 0) {
          this.fireworks.splice(i, 1);
          i--;
          continue;
        }

        this.drawStar(this.ctx, f.x, f.y, 5, f.size, f.size * 0.45, f.color, f.alpha, f.rotation);
      }

      this.animId = requestAnimationFrame(loop);
    };

    loop();
  }
}

window.ParticleEngine = ParticleEngine;

/* ============================================================
   AUDIO ENGINE - PROCEDURAL WEB AUDIO SYNTHESIZER
   Full cartoon soundboard: Anime fights, school comedy, SFX & music.
   100% offline, zero external dependencies, mobile-optimized!
   ============================================================ */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.musicPlaying = false;
    this.musicMuted = false;
    this.sfxMuted = false;
    this.musicTimer = null;
    this.brawlTimer = null;
    this.stepIndex = 0;

    // Master gains
    this.musicGain = null;
    this.sfxGain = null;

    // Warm & comforting friendship chords (in Hz)
    // Progression: Cmaj9 -> Am9 -> Fmaj9 -> G6
    this.chords = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // C, E, G, B, D
      [220.00, 261.63, 329.63, 392.00, 493.88], // A, C, E, G, B
      [174.61, 261.63, 329.63, 349.23, 440.00], // F, C, E, F, A
      [196.00, 246.94, 293.66, 392.00, 440.00]  // G, B, D, G, A
    ];
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.musicGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.38, this.ctx.currentTime);
      this.sfxGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /* ---------------- BACKGROUND MUSIC ---------------- */
  playMusicNote(freq, time, duration = 1.6) {
    if (!this.ctx || this.musicMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(0.2, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  startMusic() {
    this.ensureContext();
    if (this.musicPlaying) return;
    this.musicPlaying = true;
    this.stepIndex = 0;

    const tempo = 440; // ms per note

    const tick = () => {
      if (!this.musicPlaying || !this.ctx) return;

      const chordIdx = Math.floor((this.stepIndex / 8) % this.chords.length);
      const chord = this.chords[chordIdx];
      
      const pattern = [0, 2, 1, 3, 4, 3, 2, 1];
      const noteIdx = pattern[this.stepIndex % pattern.length];
      const freq = chord[noteIdx];
      const octaveMultiplier = (this.stepIndex % 4 === 0) ? 2 : 1;

      this.playMusicNote(freq * octaveMultiplier, this.ctx.currentTime, 1.4);

      this.stepIndex++;
      this.musicTimer = setTimeout(tick, tempo);
    };

    tick();
  }

  stopMusic() {
    this.musicPlaying = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  toggleMusic() {
    this.ensureContext();
    if (this.musicPlaying && !this.musicMuted) {
      this.musicMuted = true;
      if (this.musicGain) this.musicGain.gain.setValueAtTime(0, this.ctx.currentTime);
      return false;
    } else {
      this.musicMuted = false;
      if (this.musicGain) this.musicGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      if (!this.musicPlaying) this.startMusic();
      return true;
    }
  }

  toggleSfx() {
    this.ensureContext();
    this.sfxMuted = !this.sfxMuted;
    if (this.sfxGain) {
      this.sfxGain.gain.setValueAtTime(this.sfxMuted ? 0 : 0.38, this.ctx.currentTime);
    }
    return !this.sfxMuted;
  }

  /* ---------------- SOUND EFFECTS ---------------- */

  // UI Tap / Bubble Pop
  playTap() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(750, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  // Anime Energy Clash
  playAnimeClash() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(200, now + 0.25);
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc1.connect(gain1);
    gain1.connect(this.sfxGain);
    osc1.start(now);
    osc1.stop(now + 0.28);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(140, now);
    osc2.frequency.exponentialRampToValueAtTime(30, now + 0.35);
    gain2.gain.setValueAtTime(0.5, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc2.connect(gain2);
    gain2.connect(this.sfxGain);
    osc2.start(now);
    osc2.stop(now + 0.36);
  }

  // Rapid flurry punches
  startRapidBrawlLoop(durationMs = 3800) {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const startTime = Date.now();
    const playPunchHit = () => {
      if (Date.now() - startTime >= durationMs) return;
      if (this.sfxMuted || !this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const types = ['square', 'triangle', 'sawtooth'];
      osc.type = types[Math.floor(Math.random() * types.length)];
      
      const freq = 180 + Math.random() * 220;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);

      gain.gain.setValueAtTime(0.32, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 0.09);

      const nextDelay = 80 + Math.random() * 60;
      this.brawlTimer = setTimeout(playPunchHit, nextDelay);
    };

    playPunchHit();
  }

  stopBrawlLoop() {
    if (this.brawlTimer) {
      clearTimeout(this.brawlTimer);
      this.brawlTimer = null;
    }
  }

  playSilence() {
    this.stopBrawlLoop();
  }

  // Comic Explosion / BOOM
  playBoom() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.4);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.42);
  }

  // Comical Slide Whistle / KO Falling Sound
  playSlideFall() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(850, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.65);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.68);
  }

  // Cute Cheer for Frayha
  playCuteCheer() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [587.33, 783.99, 1046.50];
    notes.forEach((f, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.22);
      }, idx * 110);
    });
  }

  // Victory Fanfare
  playVictoryFanfare() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const fanfare = [
      { f: 523.25, d: 0.12 },
      { f: 659.25, d: 0.12 },
      { f: 783.99, d: 0.15 },
      { f: 1046.50, d: 0.5 }
    ];

    let delay = 0;
    fanfare.forEach((n) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, now);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.d);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + n.d);
      }, delay * 1000);
      delay += n.d * 0.9;
    });
  }

  // Magical Sparkles
  playFriendshipSparkles() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const pentatonic = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51, 1567.98];
    for (let i = 0; i < 14; i++) {
      setTimeout(() => {
        if (!this.ctx) return;
        const note = pentatonic[i % pentatonic.length];
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note * (1 + Math.random() * 0.08), now);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.36);
      }, i * 65);
    }
  }

  /* ---------------- NEW SOUNDS FOR SCENES 2, 3, 4 ---------------- */

  // Scene 2: Snitch Bell / Ding!
  playSnitchBell() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.08);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.52);
  }

  // Scene 2: Teacher Shock / Gasp Whistle
  playTeacherGasp() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(900, now + 0.25);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.32);
  }

  // Scene 2: Frayha Clapping
  playApplause() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(350 + Math.random() * 200, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.07);
      }, i * 90);
    }
  }

  // Scene 3: Catwalk Heels & Strut Beat
  playCatwalkBeats() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.06);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.08);
      }, i * 320);
    }
  }

  // Scene 3: Catcall Whistle
  playCatcallWhistle() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.linearRampToValueAtTime(1300, now + 0.22);
    osc.frequency.linearRampToValueAtTime(900, now + 0.4);

    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.46);
  }

  // Scene 3 & 4: Crowd Laughter
  playCrowdLaughter() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [450, 520, 480, 560, 500, 600, 520];
    notes.forEach((f, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.09);
      }, idx * 110);
    });
  }

  // Scene 3: Frayha Anime Crying Water Stream
  playAnimeCrying() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.linearRampToValueAtTime(450, now + 0.35);

    // Wah-wah vibrato
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 12;
    lfoGain.gain.value = 35;
    lfo.connect(osc.frequency);
    lfo.start(now);
    lfo.stop(now + 0.4);

    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.42);
  }

  // Scene 4: Romantic Chime Swell
  playRomanticSwell() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const chords = [523.25, 659.25, 783.99, 1046.50];
    chords.forEach((freq, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(now);
        osc.stop(now + 0.75);
      }, idx * 120);
    });
  }

  // Scene 4: Rimshot Comedy Punchline (Ba-dum Tss!)
  playComedyRimshot() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Hit 1: Ba
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(220, now);
    osc1.frequency.exponentialRampToValueAtTime(60, now + 0.08);
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc1.connect(gain1);
    gain1.connect(this.sfxGain);
    osc1.start(now);
    osc1.stop(now + 0.09);

    // Hit 2: Dum
    setTimeout(() => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(180, t);
      osc2.frequency.exponentialRampToValueAtTime(50, t + 0.09);
      gain2.gain.setValueAtTime(0.4, t);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
      osc2.connect(gain2);
      gain2.connect(this.sfxGain);
      osc2.start(t);
      osc2.stop(t + 0.1);
    }, 110);

    // Hit 3: Tsss (Cymbal)
    setTimeout(() => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc3 = this.ctx.createOscillator();
      const gain3 = this.ctx.createGain();
      osc3.type = 'sawtooth';
      osc3.frequency.setValueAtTime(1600, t);
      osc3.frequency.exponentialRampToValueAtTime(800, t + 0.35);
      gain3.gain.setValueAtTime(0.35, t);
      gain3.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc3.connect(gain3);
      gain3.connect(this.sfxGain);
      osc3.start(t);
      osc3.stop(t + 0.36);
    }, 240);
  }
}

// Global Sound Engine
window.soundEngine = new SoundEngine();

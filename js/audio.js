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

  /* ============================================================
     NEW EPISODES AUDIO: PORSCHE ENGINE & CARTOON COMEDY SFX
     ============================================================ */

  // 1. Porsche Engine Startup (Starter crank + Flat-6 ignition roar + Idle)
  playPorscheStartup() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Phase 1: Starter Motor Cranking (4 rhythmic compression pulses)
    for (let i = 0; i < 4; i++) {
      const crankTime = now + i * 0.11;
      const crankOsc = this.ctx.createOscillator();
      const crankGain = this.ctx.createGain();

      crankOsc.type = 'sawtooth';
      crankOsc.frequency.setValueAtTime(80, crankTime);
      crankOsc.frequency.exponentialRampToValueAtTime(35, crankTime + 0.08);

      crankGain.gain.setValueAtTime(0.25, crankTime);
      crankGain.gain.exponentialRampToValueAtTime(0.01, crankTime + 0.09);

      crankOsc.connect(crankGain);
      crankGain.connect(this.sfxGain);

      crankOsc.start(crankTime);
      crankOsc.stop(crankTime + 0.1);
    }

    // Phase 2: Combustion Roar (at t = 0.5s)
    const roarTime = now + 0.5;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const roarGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    subOsc.type = 'sine';

    // Flat-6 rev surge from 55Hz to 195Hz then settling down to 80Hz idle
    osc1.frequency.setValueAtTime(55, roarTime);
    osc1.frequency.linearRampToValueAtTime(195, roarTime + 0.35);
    osc1.frequency.exponentialRampToValueAtTime(75, roarTime + 1.2);

    osc2.frequency.setValueAtTime(58, roarTime); // slightly detuned for throaty grit
    osc2.frequency.linearRampToValueAtTime(202, roarTime + 0.35);
    osc2.frequency.exponentialRampToValueAtTime(78, roarTime + 1.2);

    subOsc.frequency.setValueAtTime(45, roarTime);
    subOsc.frequency.linearRampToValueAtTime(85, roarTime + 0.35);
    subOsc.frequency.exponentialRampToValueAtTime(40, roarTime + 1.2);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, roarTime);
    filter.frequency.linearRampToValueAtTime(950, roarTime + 0.35);
    filter.frequency.exponentialRampToValueAtTime(320, roarTime + 1.2);
    filter.Q.value = 3.0;

    roarGain.gain.setValueAtTime(0.001, roarTime);
    roarGain.gain.linearRampToValueAtTime(0.42, roarTime + 0.2);
    roarGain.gain.exponentialRampToValueAtTime(0.12, roarTime + 1.2);
    roarGain.gain.exponentialRampToValueAtTime(0.0001, roarTime + 1.8);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(roarGain);
    roarGain.connect(this.sfxGain);

    osc1.start(roarTime);
    osc2.start(roarTime);
    subOsc.start(roarTime);

    osc1.stop(roarTime + 1.85);
    osc2.stop(roarTime + 1.85);
    subOsc.stop(roarTime + 1.85);
  }

  // 2. Porsche Engine Revving (High Throttle Flat-6 Blip + Turbo Spool & Blow-off Hiss)
  playPorscheRev(intensity = 1.0) {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const revGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    subOsc.type = 'sine';

    const maxFreq = 260 * intensity;
    osc1.frequency.setValueAtTime(75, now);
    osc1.frequency.exponentialRampToValueAtTime(maxFreq, now + 0.32);
    osc1.frequency.exponentialRampToValueAtTime(80, now + 0.85);

    osc2.frequency.setValueAtTime(78, now);
    osc2.frequency.exponentialRampToValueAtTime(maxFreq + 8, now + 0.32);
    osc2.frequency.exponentialRampToValueAtTime(83, now + 0.85);

    subOsc.frequency.setValueAtTime(42, now);
    subOsc.frequency.exponentialRampToValueAtTime(95, now + 0.32);
    subOsc.frequency.exponentialRampToValueAtTime(44, now + 0.85);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.exponentialRampToValueAtTime(1600 * intensity, now + 0.32);
    filter.frequency.exponentialRampToValueAtTime(360, now + 0.85);
    filter.Q.value = 3.5;

    revGain.gain.setValueAtTime(0.12, now);
    revGain.gain.linearRampToValueAtTime(0.45, now + 0.28);
    revGain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(revGain);
    revGain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + 1.0);
    osc2.stop(now + 1.0);
    subOsc.stop(now + 1.0);

    // Turbo Blow-Off Valve Hiss (at throttle lift-off: t = 0.42s)
    setTimeout(() => {
      if (!this.ctx || this.sfxMuted) return;
      const blowTime = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(2600, blowTime);
      bandpass.frequency.exponentialRampToValueAtTime(1400, blowTime + 0.24);
      bandpass.Q.value = 2.0;

      const blowGain = this.ctx.createGain();
      blowGain.gain.setValueAtTime(0.22, blowTime);
      blowGain.gain.exponentialRampToValueAtTime(0.001, blowTime + 0.24);

      noise.connect(bandpass);
      bandpass.connect(blowGain);
      blowGain.connect(this.sfxGain);

      noise.start(blowTime);
      noise.stop(blowTime + 0.25);
    }, 380);
  }

  // 3. Porsche Acceleration & High Speed Driving
  playPorscheAcceleration(duration = 2.8) {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const driveGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';

    // Gear 1 climbing, shifting down then climbing Gear 2
    osc1.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(240, now + 0.9);
    osc1.frequency.setValueAtTime(150, now + 0.95); // gear shift drop
    osc1.frequency.exponentialRampToValueAtTime(320, now + duration);

    osc2.frequency.setValueAtTime(84, now);
    osc2.frequency.exponentialRampToValueAtTime(246, now + 0.9);
    osc2.frequency.setValueAtTime(155, now + 0.95);
    osc2.frequency.exponentialRampToValueAtTime(328, now + duration);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.linearRampToValueAtTime(1800, now + duration);
    filter.Q.value = 2.5;

    driveGain.gain.setValueAtTime(0.15, now);
    driveGain.gain.linearRampToValueAtTime(0.38, now + 0.5);
    driveGain.gain.linearRampToValueAtTime(0.42, now + duration - 0.4);
    driveGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(driveGain);
    driveGain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
  }

  // 4. Porsche Brake Squeal & Stop
  playPorscheBrake() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(2800, now);
    osc.frequency.linearRampToValueAtTime(2200, now + 0.45);
    osc.frequency.linearRampToValueAtTime(1600, now + 0.7);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.78);
  }

  // 5. Porsche Luxury European Horn (Beep-Beep!)
  playPorscheHorn() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const playBeep = (startTime) => {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(440, startTime); // A4
      osc2.frequency.setValueAtTime(554.37, startTime); // C#5 (Luxury European Major 3rd)

      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.sfxGain);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + 0.19);
      osc2.stop(startTime + 0.19);
    };

    const now = this.ctx.currentTime;
    playBeep(now);
    playBeep(now + 0.22);
  }

  // 6. Window Roll Down (Smooth DC electric motor)
  playWindowRollDown() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.linearRampToValueAtTime(230, now + 0.5);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.56);
  }

  // 7. Luxury Car Door Solid Thunk
  playCarDoor() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.14);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  // 8. Farah Angry Steam Kettle Fume (Psssshhhh!)
  playFarahAngryFume() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.linearRampToValueAtTime(1750, now + 0.6);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.72);
  }

  // 9. Comedic Rapid Running Footsteps Loop
  playCartoonChaseScramble(duration = 3.5) {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const startTime = Date.now();
    const stepInterval = 110; // ms

    const runLoop = () => {
      if (Date.now() - startTime > duration * 1000 || !this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const pitch = (Math.random() > 0.5 ? 420 : 540) + (Math.random() * 40 - 20);
      osc.frequency.setValueAtTime(pitch, t);
      osc.frequency.exponentialRampToValueAtTime(80, t + 0.05);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t);
      osc.stop(t + 0.06);

      setTimeout(runLoop, stepInterval);
    };

    runLoop();
  }

  // 10. Cartoon Slipper Bonk / Playful Slap (BONK!)
  playCartoonBonk() {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(85, now + 0.12);

    gain.gain.setValueAtTime(0.48, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.14);
  }

  // 11. Slide Whistle (Up or Down)
  playSlideWhistle(direction = 'up') {
    if (this.sfxMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    if (direction === 'up') {
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.45);
    } else {
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.45);
    }

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.52);
  }
}

// Global Sound Engine
window.soundEngine = new SoundEngine();

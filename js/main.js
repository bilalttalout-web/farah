/* ============================================================
   MAIN CONTROLLER - MULTI-SCENE CARTOON SERIES & NAVIGATION
   Manages all 4 Cartoon Episodes, Sad Message & Audio.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Engines & Controllers
  const particleEngine = new ParticleEngine('particles-canvas');

  const fightController = new CartoonFightController();
  const classroomController = new ClassroomExamController();
  const courtyardController = new CourtyardController();
  const dialogueController = new DialogueSceneController();
  const porscheController = new MarrakechPorscheController();
  const farahAngryController = new FarahAngryController();

  fightController.init();
  classroomController.init();
  courtyardController.init();
  dialogueController.init();
  porscheController.init();
  farahAngryController.init();

  // Scene Elements
  const sceneWelcome = document.getElementById('scene-welcome');
  const sceneSad = document.getElementById('scene-sad');
  const scene1Fight = document.getElementById('scene-happy');
  const scene2Classroom = document.getElementById('scene-classroom');
  const scene3Courtyard = document.getElementById('scene-courtyard');
  const scene4Dialogue = document.getElementById('scene-dialogue');
  const scenePorsche = document.getElementById('scene-porsche');
  const sceneFarahAngry = document.getElementById('scene-farah-angry');
  const sceneNewEp6 = document.getElementById('scene-new-ep6');

  const allScenes = [
    sceneWelcome,
    sceneSad,
    scene1Fight,
    scene2Classroom,
    scene3Courtyard,
    scene4Dialogue,
    scenePorsche,
    sceneFarahAngry,
    sceneNewEp6
  ];

  // Welcome elements
  const letters = document.querySelectorAll('.letter');
  const questionBox = document.getElementById('question-box');
  const btnHappy = document.getElementById('btn-happy');
  const btnSad = document.getElementById('btn-sad');

  // Audio buttons
  const btnMusicToggle = document.getElementById('btn-music-toggle');
  const btnSfxToggle = document.getElementById('btn-sfx-toggle');

  // Sad scene elements (English Only)
  const sadParagraphs = document.querySelectorAll('.letter-paragraph');
  const btnSurprise = document.getElementById('btn-friendship-surprise');
  const finalSurpriseBox = document.getElementById('final-surprise-box');

  let sadLetterTimeout = null;

  /* ---------------- AUDIO CONTROLS ---------------- */
  btnMusicToggle.addEventListener('click', () => {
    const isPlaying = window.soundEngine.toggleMusic();
    btnMusicToggle.classList.toggle('active', isPlaying);
    btnMusicToggle.innerHTML = isPlaying ? '🎵 Music: On' : '🔇 Music: Off';
  });

  btnSfxToggle.addEventListener('click', () => {
    const sfxActive = window.soundEngine.toggleSfx();
    btnSfxToggle.classList.toggle('active', sfxActive);
    btnSfxToggle.innerHTML = sfxActive ? '🔊 SFX: On' : '🔇 SFX: Off';
  });

  const handleFirstInteraction = () => {
    window.soundEngine.ensureContext();
    if (!window.soundEngine.musicPlaying && !window.soundEngine.musicMuted) {
      window.soundEngine.startMusic();
      btnMusicToggle.classList.add('active');
      btnMusicToggle.innerHTML = '🎵 Music: On';
    }
    window.removeEventListener('click', handleFirstInteraction);
    window.removeEventListener('touchstart', handleFirstInteraction);
  };
  window.addEventListener('click', handleFirstInteraction, { passive: true });
  window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

  /* ---------------- SCENE SWITCHER ---------------- */
  function showScene(targetScene) {
    allScenes.forEach((s) => {
      if (s) {
        s.classList.remove('active');
        s.style.display = 'none';
      }
    });

    if (targetScene) {
      targetScene.style.display = 'flex';
      void targetScene.offsetWidth; // Force reflow
      targetScene.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ---------------- SCENE 0: WELCOME INTRO ---------------- */
  function initWelcomeScene() {
    particleEngine.setCalmMode(false);
    showScene(sceneWelcome);

    letters.forEach((letter, index) => {
      letter.style.opacity = '0';
      letter.style.animation = 'none';
      setTimeout(() => {
        letter.style.animation = `letterDropGlow 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
      }, 180 * (index + 1));
    });

    questionBox.classList.remove('show');
    setTimeout(() => {
      questionBox.classList.add('show');
    }, 2400);
  }

  /* ---------------- SAD PATH: ENGLISH ONLY COMFORT MESSAGE ---------------- */
  function goToSadPath() {
    window.soundEngine.playTap();
    showScene(sceneSad);
    particleEngine.setCalmMode(true);

    sadParagraphs.forEach((p) => p.classList.remove('visible'));
    if (finalSurpriseBox) finalSurpriseBox.classList.remove('show');
    if (btnSurprise) btnSurprise.style.display = 'inline-flex';

    if (sadLetterTimeout) clearTimeout(sadLetterTimeout);

    let delay = 350;
    sadParagraphs.forEach((p) => {
      sadLetterTimeout = setTimeout(() => {
        p.classList.add('visible');
      }, delay);
      delay += 850;
    });
  }

  // Climax Surprise Button in Sad Path
  if (btnSurprise) {
    btnSurprise.addEventListener('click', () => {
      window.soundEngine.playFriendshipSparkles();

      const rect = btnSurprise.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      particleEngine.triggerExplosion(originX, originY);
      spawnDOMSparkleBursts(originX, originY);

      btnSurprise.style.transform = 'scale(0.85)';
      btnSurprise.style.opacity = '0.3';
      setTimeout(() => {
        btnSurprise.style.display = 'none';
        if (finalSurpriseBox) finalSurpriseBox.classList.add('show');
      }, 400);
    });
  }

  function spawnDOMSparkleBursts(x, y) {
    const emojis = ['✨', '⭐', '🌸', '💫', '🤍', '🎉', '🌟', '🌷'];
    for (let i = 0; i < 28; i++) {
      const el = document.createElement('div');
      el.className = 'burst-sparkle';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.fontSize = `${Math.random() * 22 + 16}px`;

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 180 + 70;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance - 35;
      const rot = (Math.random() - 0.5) * 360;

      el.style.setProperty('--tx', `${tx}px`);
      el.style.setProperty('--ty', `${ty}px`);
      el.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1700);
    }
  }

  /* ---------------- CARTOON SERIES SCENE TRANSITIONS ---------------- */

  // SCENE 1: OMAR VS BILAL FIGHT
  function goToScene1Fight() {
    window.soundEngine.playTap();
    showScene(scene1Fight);
    particleEngine.setCalmMode(false);
    fightController.init();
    fightController.startFightTimeline();
  }

  // SCENE 2: CLASSROOM EXAM
  function goToScene2Classroom() {
    window.soundEngine.playTap();
    showScene(scene2Classroom);
    particleEngine.setCalmMode(false);
    classroomController.init();
    classroomController.startTimeline();
  }

  // SCENE 3: SCHOOL COURTYARD
  function goToScene3Courtyard() {
    window.soundEngine.playTap();
    showScene(scene3Courtyard);
    particleEngine.setCalmMode(false);
    courtyardController.init();
    courtyardController.startTimeline();
  }

  // SCENE 4: BILAL AND FRAYHA
  function goToScene4Dialogue() {
    window.soundEngine.playTap();
    showScene(scene4Dialogue);
    particleEngine.setCalmMode(false);
    dialogueController.init();
    dialogueController.startTimeline();
  }

  // SCENE 5: FARAH AND BILAL'S PORSCHE IN MARRAKECH 🏎️🌴
  function goToScene5Porsche() {
    window.soundEngine.playTap();
    showScene(scenePorsche);
    particleEngine.setCalmMode(false);
    porscheController.init();
    porscheController.startTimeline();
  }

  // SCENE 6: FARAH GETS ANGRY AT BILAL AND TAHA 😡🏃‍♂️
  function goToScene6FarahAngry() {
    window.soundEngine.playTap();
    showScene(sceneFarahAngry);
    particleEngine.setCalmMode(false);
    farahAngryController.init();
    farahAngryController.startTimeline();
  }

  // SCENE 7 (EP6 NEW): OMAR WANTS TO MARRY 💍😂
  function goToNewEp6() {
    window.soundEngine.playTap();
    showScene(sceneNewEp6);
    particleEngine.setCalmMode(false);
    startNewEp6Timeline();
  }

  /* ---------------- EPISODES DRAWER / MENU ---------------- */
  const btnEpisodesMenu = document.getElementById('btn-episodes-menu');
  const episodesDrawer = document.getElementById('episodes-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const drawerItems = document.querySelectorAll('.drawer-item');

  if (btnEpisodesMenu && episodesDrawer) {
    btnEpisodesMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      window.soundEngine.playTap();
      episodesDrawer.classList.toggle('active');
    });
  }

  if (btnCloseDrawer && episodesDrawer) {
    btnCloseDrawer.addEventListener('click', () => {
      window.soundEngine.playTap();
      episodesDrawer.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (episodesDrawer && !episodesDrawer.contains(e.target) && e.target !== btnEpisodesMenu) {
      episodesDrawer.classList.remove('active');
    }
  });

  drawerItems.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.dataset.scene;
      episodesDrawer.classList.remove('active');
      window.soundEngine.playTap();

      switch (target) {
        case 'welcome':
          initWelcomeScene();
          break;
        case 'sad':
          goToSadPath();
          break;
        case 'happy':
          goToScene1Fight();
          break;
        case 'classroom':
          goToScene2Classroom();
          break;
        case 'courtyard':
          goToScene3Courtyard();
          break;
        case 'dialogue':
          goToScene4Dialogue();
          break;
        case 'porsche':
          goToScene5Porsche();
          break;
        case 'farah-angry':
          goToScene6FarahAngry();
          break;
        case 'new-ep6':
          goToNewEp6();
          break;
      }
    });
  });

  /* ---------------- EVENT LISTENERS ---------------- */

  // Scene 0: Welcome Choices
  btnHappy.addEventListener('click', goToScene1Fight);
  btnSad.addEventListener('click', goToSadPath);

  // Scene 1 Navigation
  const btnReplayFight = document.getElementById('btn-replay-fight');
  if (btnReplayFight) {
    btnReplayFight.addEventListener('click', () => {
      window.soundEngine.playTap();
      fightController.startFightTimeline();
    });
  }

  const btnScene1To2 = document.getElementById('btn-scene1-to-2');
  if (btnScene1To2) btnScene1To2.addEventListener('click', goToScene2Classroom);

  const btnScene1Restart = document.getElementById('btn-happy-restart');
  if (btnScene1Restart) {
    btnScene1Restart.addEventListener('click', () => {
      window.soundEngine.playTap();
      fightController.reset();
      initWelcomeScene();
    });
  }

  // Scene 2 Navigation
  const btnReplayClassroom = document.getElementById('btn-replay-classroom');
  if (btnReplayClassroom) {
    btnReplayClassroom.addEventListener('click', () => {
      window.soundEngine.playTap();
      classroomController.startTimeline();
    });
  }

  const btnScene2To3 = document.getElementById('btn-scene2-to-3');
  if (btnScene2To3) btnScene2To3.addEventListener('click', goToScene3Courtyard);

  const btnScene2To1 = document.getElementById('btn-scene2-to-1');
  if (btnScene2To1) btnScene2To1.addEventListener('click', goToScene1Fight);

  // Scene 3 Navigation
  const btnReplayCourtyard = document.getElementById('btn-replay-courtyard');
  if (btnReplayCourtyard) {
    btnReplayCourtyard.addEventListener('click', () => {
      window.soundEngine.playTap();
      courtyardController.startTimeline();
    });
  }

  const btnScene3To4 = document.getElementById('btn-scene3-to-4');
  if (btnScene3To4) btnScene3To4.addEventListener('click', goToScene4Dialogue);

  const btnScene3To2 = document.getElementById('btn-scene3-to-2');
  if (btnScene3To2) btnScene3To2.addEventListener('click', goToScene2Classroom);

  // Scene 4 Navigation
  const btnScene4To5 = document.getElementById('btn-scene4-to-5');
  if (btnScene4To5) btnScene4To5.addEventListener('click', goToScene5Porsche);

  const btnReplayDialogue = document.getElementById('btn-replay-dialogue');
  if (btnReplayDialogue) {
    btnReplayDialogue.addEventListener('click', () => {
      window.soundEngine.playTap();
      dialogueController.startTimeline();
    });
  }

  const btnScene4ReplayAll = document.getElementById('btn-scene4-replay-all');
  if (btnScene4ReplayAll) btnScene4ReplayAll.addEventListener('click', () => {
    window.soundEngine.playTap();
    dialogueController.startTimeline();
  });

  const btnScene4ToSad = document.getElementById('btn-scene4-to-sad');
  if (btnScene4ToSad) btnScene4ToSad.addEventListener('click', goToSadPath);

  const btnScene4Restart = document.getElementById('btn-scene4-restart');
  if (btnScene4Restart) {
    btnScene4Restart.addEventListener('click', () => {
      window.soundEngine.playTap();
      initWelcomeScene();
    });
  }

  // Scene 5 (Porsche in Marrakech) Navigation
  const btnScene5To6 = document.getElementById('btn-scene5-to-6');
  if (btnScene5To6) btnScene5To6.addEventListener('click', goToScene6FarahAngry);

  const btnReplayPorsche = document.getElementById('btn-replay-porsche');
  if (btnReplayPorsche) {
    btnReplayPorsche.addEventListener('click', () => {
      window.soundEngine.playTap();
      porscheController.startTimeline();
    });
  }

  const btnScene5To4 = document.getElementById('btn-scene5-to-4');
  if (btnScene5To4) btnScene5To4.addEventListener('click', goToScene4Dialogue);

  // Scene 6 (Farah Gets Angry at Bilal & Taha) Navigation
  const btnReplayAngry = document.getElementById('btn-replay-angry');
  if (btnReplayAngry) {
    btnReplayAngry.addEventListener('click', () => {
      window.soundEngine.playTap();
      farahAngryController.startTimeline();
    });
  }

  const btnAngryReplayAll = document.getElementById('btn-angry-replay-all');
  if (btnAngryReplayAll) btnAngryReplayAll.addEventListener('click', goToScene1Fight);

  const btnAngryToPorsche = document.getElementById('btn-angry-to-porsche');
  if (btnAngryToPorsche) btnAngryToPorsche.addEventListener('click', goToScene5Porsche);

  const btnAngryRestart = document.getElementById('btn-angry-restart');
  if (btnAngryRestart) {
    btnAngryRestart.addEventListener('click', () => {
      window.soundEngine.playTap();
      initWelcomeScene();
    });
  }

  // Sad Path Navigation
  const btnSadToHappy = document.getElementById('btn-sad-to-happy');
  if (btnSadToHappy) btnSadToHappy.addEventListener('click', goToScene1Fight);

  const btnSadRestart = document.getElementById('btn-sad-restart');
  if (btnSadRestart) {
    btnSadRestart.addEventListener('click', () => {
      window.soundEngine.playTap();
      initWelcomeScene();
    });
  }

  // ── NEW: Homepage Episode Cards ──
  document.querySelectorAll('.btn-watch-ep').forEach((btn) => {
    btn.addEventListener('click', () => {
      const goto = btn.dataset.goto;
      window.soundEngine.playTap();
      switch (goto) {
        case 'happy':        goToScene1Fight();     break;
        case 'classroom':    goToScene2Classroom(); break;
        case 'courtyard':    goToScene3Courtyard(); break;
        case 'dialogue':     goToScene4Dialogue();  break;
        case 'porsche':      goToScene5Porsche();   break;
        case 'farah-angry':  goToScene6FarahAngry(); break;
      }
    });
  });

  // ── NEW: Personal Message Button ──
  const btnOpenPersonalMsg = document.getElementById('btn-open-personal-msg');
  if (btnOpenPersonalMsg) {
    btnOpenPersonalMsg.addEventListener('click', goToSadPath);
  }

  // Welcome Star Icon
  const starIcon = document.querySelector('.star-icon') || document.querySelector('.heart-icon');
  if (starIcon) {
    starIcon.addEventListener('click', () => {
      window.soundEngine.playTap();
      const rect = starIcon.getBoundingClientRect();
      particleEngine.triggerExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
  }

  // Boot on Scene 0
  initWelcomeScene();
});

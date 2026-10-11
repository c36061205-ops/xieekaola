// sound.js - 音频提示音模块
(function() {
  var SOUND_URLS = {
    send:     'send.mp3',
    message:  'msg.mp3',
    moment:   'msg.mp3',
    gift:     'msg.mp3',
    transfer: 'msg.mp3'
  };

  var audioCache = {};
  var isUnlocked = false;
  var lastPlayTime = 0;

  function initAudio() {
    for (var key in SOUND_URLS) {
      var audio = new Audio(SOUND_URLS[key]);
      audio.preload = 'auto';
      audioCache[key] = audio;
    }
  }
  initAudio();

  // ★ 完美解决出戏：手机端【静音】解锁音频
  function unlockAudio() {
    if (isUnlocked) return;
    for (var key in audioCache) {
      var a = audioCache[key];
      a.muted = true; // 强制静音，绝对不会响
      var p = a.play();
      if (p !== undefined) {
        p.then(function() {
          a.pause();
          a.currentTime = 0;
        }).catch(function(){});
      }
    }
    isUnlocked = true;
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('click', unlockAudio);
  }
  window.addEventListener('pointerdown', unlockAudio);
  window.addEventListener('click', unlockAudio);

  // 加了一个 forcePlay 参数，如果是测试音量就强制播放
  function playNoticeSound(type, forcePlay) {
    type = type || 'message';
    
    // 1. 检查开关
    if (window.DB && window.DB.settings && window.DB.settings.soundEnabled === false) return;
    
    // 2. 防连响（如果不是强制播放，且距离上次不到 2 秒，则拦截）
    var now = Date.now();
    if (!forcePlay && (now - lastPlayTime < 2000)) return;

    var audio = audioCache[type] || audioCache['message'];
    if (!audio) return;

    // 3. 读取设置音量并做“指数处理”，让人耳感觉变化更明显
    var vol = 0.5;
    if (window.DB && window.DB.settings && window.DB.settings.soundVolume !== undefined) {
      // 用平方算法：滑块 50% 时输出 25% 物理音量，这样调小音量时才会明显变轻
      vol = Math.pow(window.DB.settings.soundVolume / 100, 2);
    }

    try {
      audio.muted = false; 
      audio.volume = vol;  
      audio.currentTime = 0;
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(function(){});
      }
      lastPlayTime = now; 
    } catch (e) {}
  }

  window.playNoticeSound = playNoticeSound;
})();
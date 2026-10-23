/* ============================================================
   桌面小组件 · 样式切换（骨架 + 欧式指针钟版）
   ============================================================ */
(function(){

  /* ---------- 1. 注入新样式 CSS ---------- */
  if (!document.getElementById('widgets-style')) {
    var st = document.createElement('style');
    st.id = 'widgets-style';
    st.textContent = `
      /* ---- 天气 · 占位款 ---- */
      .wg-weather-minimal{
        width:100%;padding:14px 16px;border-radius:18px;box-sizing:border-box;
        background:color-mix(in srgb, var(--card) 60%, transparent);
        border:1px solid color-mix(in srgb, var(--theme) 22%, transparent);
        color:var(--text);
        backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
      }
      .wg-weather-minimal .wm-loc{font-size:12px;color:var(--sub);margin-bottom:4px;}
      .wg-weather-minimal .wm-temp{font-size:34px;font-weight:200;line-height:1;color:var(--text);letter-spacing:-1px;}
      .wg-weather-minimal .wm-unit{font-size:13px;color:var(--theme);margin-left:2px;}
      .wg-weather-minimal .wm-desc{font-size:11px;color:var(--sub);margin-top:6px;line-height:1.4;}

      /* ---- 时间 · 欧式经典指针钟 ---- */
      .wg-clock-analog{
        grid-column: 1 / span 2 !important;
        grid-row: 1 / span 2 !important;
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        position: relative !important;
        box-sizing: border-box !important;
      }
      
      /* 表盘：欧式多层嵌套 + 金属立体感 */
      .wg-clock-analog .analog-inner {
        width: 135px; 
        height: 135px;
        position: relative;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        margin-top: -8px;
        
        /* 欧式三重边框 */
        border: 1px solid color-mix(in srgb, var(--text) 30%, transparent); /* 最外圈实线 */
        box-shadow: 
          inset 0 0 0 1px color-mix(in srgb, var(--bg) 50%, transparent), /* 留白线 */
          inset 0 0 0 3px color-mix(in srgb, var(--text) 15%, transparent), /* 内圈细实线 */
          inset 0 0 12px color-mix(in srgb, var(--text) 8%, transparent), /* 内部暗角 */
          0 2px 6px rgba(0,0,0,0.06); /* 外部立体阴影 */
      }
      
      .wg-clock-analog .analog-face {
        width: 108px; height: 108px;
        position: relative;
      }
      
      /* 刻度：加深颜色，做成经典长条 */
      .wg-clock-analog .ticks { position: absolute; inset: 0; }
      .wg-clock-analog .tick {
        position: absolute; top: -4px; left: 50%; width: 1.5px; height: 6px;
        /* 从 40% 加深到 70% */
        background: color-mix(in srgb, var(--text) 70%, transparent);
        transform-origin: 50% 58px; margin-left: -0.75px;
      }
      
      /* 罗马数字 */
      .wg-clock-analog .num {
        position: absolute; top: -10px; left: 50%;
        font-family: "Times New Roman", serif; font-size: 12px; font-weight: 700;
        color: var(--text); transform-origin: 50% 64px;
        margin-left: -10px; width: 20px; text-align: center;
        /* 取消白色糊边，改用极细黑影增加锐利度 */
        text-shadow: 0 1px 2px rgba(0,0,0,0.15);
      }
      
      /* 指针：做成带有金属反光的宝剑形（用渐变） */
      .wg-clock-analog .hand {
        position: absolute; bottom: 50%; left: 50%;
        transform-origin: bottom center; z-index: 10;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
      }
      .wg-clock-analog .hour {
        width: 4px; height: 28px; 
        background: linear-gradient(to right, var(--text) 0%, color-mix(in srgb, var(--text) 60%, transparent) 50%, var(--text) 100%);
        margin-left: -2px; 
        border-radius: 4px 4px 2px 2px;
      }
      .wg-clock-analog .minute {
        width: 2px; height: 40px; 
        /* 分针用主题色渐变，更精致 */
        background: linear-gradient(to right, var(--theme) 0%, color-mix(in srgb, var(--theme) 50%, var(--text)) 50%, var(--theme) 100%);
        margin-left: -1px; 
        border-radius: 2px;
      }
      
      /* 中心轴承：做成带齿轮的金属扣 */
      .wg-clock-analog .center-dot {
        position: absolute; top: 50%; left: 50%; width: 8px; height: 8px;
        background: var(--text); border-radius: 50%;
        transform: translate(-50%, -50%); z-index: 20;
        box-shadow: 
          0 0 0 2px var(--card), /* 留白边 */
          0 0 0 3.5px color-mix(in srgb, var(--theme) 40%, transparent), /* 主题色金属圈 */
          0 2px 5px rgba(0,0,0,0.3); /* 阴影 */
      }
      
      /* 星期 */
      .wg-clock-analog .wd {
        position: absolute; bottom: 18px; left: 0; right: 0;
        text-align: center; font-family: "Georgia", serif; font-style: italic;
        font-size: 11px; font-weight: 600; color: var(--text); 
        z-index: 5;
        text-shadow: 0 1px 1px var(--bg, #fff);
      }
      
      /* 欧式年月日 */
      .wg-clock-analog .fdate {
        margin-top: 12px; 
        font-size: 11px; 
        color: var(--sub); 
        font-family: "Georgia", "Times New Roman", serif; 
        letter-spacing: 2px; 
        font-weight: 600;
        text-shadow: 0 1px 1px var(--bg, #fff);
        font-variant-numeric: tabular-nums;
      }      /* ---- 纪念日 · 占位款 ---- */
      .wg-anniv-capsule{
        grid-column: 3 / span 2 !important;
        grid-row: 3 / span 2 !important;
        width: 100% !important; height: 100% !important;
        box-sizing: border-box !important; border-radius:18px;cursor:pointer;
        display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:16px;
        background:color-mix(in srgb, var(--card) 65%, transparent);
        border:1px solid color-mix(in srgb, var(--theme) 20%, transparent);
        color:var(--text);
        backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
      }
      .wg-anniv-capsule .wa-title{font-size:12px;color:var(--sub);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}
      .wg-anniv-capsule .wa-days{font-size:20px;font-weight:600;color:var(--theme);text-align:center;}
      .wg-anniv-capsule .wa-days .num{font-size:26px;font-weight:700;margin:0 2px;}
    `;
    document.head.appendChild(st);
  }

  /* ---------- 2. 样式清单 ---------- */
  var OPTIONS = {
    weather: [
      { id:'classic', name:'经典款（现款）' },
      { id:'minimal', name:'极简款（仅温度）' }
    ],
    clock: [
      { id:'classic', name:'经典款（现款）' },
      { id:'flip',    name:'指针钟（欧式复古）' }
    ],
    anniv: [
      { id:'classic', name:'经典款（现款）' },
      { id:'capsule', name:'极简款（仅天数）' }
    ]
  };
  var LABEL = { weather:'天气', clock:'时间', anniv:'纪念日' };
  var ICON  = { weather:'🌤', clock:'⏰', anniv:'🎂' };

  /* ---------- 3. 存取 ---------- */
  function ensureStore(){
    if (!DB.settings) DB.settings = {};
    if (!DB.settings.widgetStyle || typeof DB.settings.widgetStyle !== 'object') {
      DB.settings.widgetStyle = {};
    }
    ['weather','clock','anniv'].forEach(function(t){
      if (!DB.settings.widgetStyle[t]) DB.settings.widgetStyle[t] = 'classic';
    });
  }
  function getStyle(type){
    ensureStore();
    return DB.settings.widgetStyle[type] || 'classic';
  }
  function setStyle(type, id){
    ensureStore();
    DB.settings.widgetStyle[type] = id;
    save();
    if (typeof renderHome === 'function') renderHome();
  }

  /* ---------- 4. 三个渲染入口 ---------- */
  function renderWeather(data, worldName){
    var styleId = getStyle('weather');
    if (styleId === 'minimal') {
      var loc = worldName || '未关联';
      var temp = (data && data.temp !== undefined && data.temp !== null && data.temp !== '--') ? data.temp : '--';
      var desc = (data && data.desc) ? data.desc : '加载天气…';
      return '<div class="wg-weather-minimal" id="weatherWidget">' +
        '<div class="wm-loc">' + esc(loc) + '</div>' +
        '<div class="wm-temp">' + esc(String(temp)) + '<span class="wm-unit">℃</span></div>' +
        '<div class="wm-desc">' + esc(desc) + '</div>' +
        '</div>';
    }
    return '';
  }

  function renderClock(){
    var styleId = getStyle('clock');
    if (styleId === 'flip') {
      var now = new Date();
      var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var yyyy = now.getFullYear();
      var mm = String(now.getMonth() + 1).padStart(2, '0');
      var dd = String(now.getDate()).padStart(2, '0');
      
      // 注意：去掉了 widget-2x2，改用自定义类，并在 CSS 里强制跨两列两行
      var html = '<div class="wg-clock-analog" id="homeClock">' +
        '<div class="analog-inner">' +
          '<div class="analog-face">' +
            '<div class="ticks" id="analogTicks"></div>' +
            '<div class="wd">' + weekdays[now.getDay()] + '</div>' +
            '<div class="hand hour" id="analogHour"></div>' +
            '<div class="hand minute" id="analogMinute"></div>' +
            '<div class="center-dot"></div>' +
          '</div>' +
        '</div>' +
        '<div class="fdate" id="analogDate">' + yyyy + ' | ' + mm + ' | ' + dd + '</div>' +
      '</div>';      
      setTimeout(function(){
        if (typeof window._initAnalogClock === 'function') {
          window._initAnalogClock();
        }
      }, 50);

      return html;
    }
    return '';
  }

  function renderAnniv(){
    var styleId = getStyle('anniv');
    if (styleId === 'capsule') {
      var list = DB.anniversaries || [];
      var pin = null;
      for (var i=0;i<list.length;i++){ if(list[i].pinned){ pin=list[i]; break; } }
      if (!pin && list.length) pin = list[0];
      var title = '纪念日', daysHtml = '--';
      if (pin) {
        title = pin.title || '纪念日';
        if (pin.type === '生日') {
          daysHtml = '还有<span class="num">' + Math.abs(daysBetween(nextBirthday(pin.date))) + '</span>天';
        } else {
          daysHtml = '已经<span class="num">' + Math.abs(daysBetween(pin.date)) + '</span>天';
        }
      }
      return '<div class="wg-anniv-capsule" onclick="openAnniversary()">' +
        '<div class="wa-title">' + esc(title) + '</div>' +
        '<div class="wa-days">' + daysHtml + '</div>' +
        '</div>';
    }
    return '';
  }

  /* ---------- 5. 切换面板 ---------- */
  function openStylePanel(){
    var old = document.getElementById('widgetStylePanel');
    if (old) old.remove();
    var phoneEl = document.getElementById('phone') || document.body;

    var wrap = document.createElement('div');
    wrap.id = 'widgetStylePanel';
    wrap.style.cssText = 'position:absolute;inset:0;z-index:99998;background:rgba(0,0,0,.45);display:flex;align-items:flex-end;justify-content:center;';
    wrap.onclick = function(e){ if (e.target === wrap) closeStylePanel(); };

    var box = document.createElement('div');
    box.style.cssText = 'width:100%;max-width:420px;max-height:80%;overflow-y:auto;background:var(--card,#fff);color:var(--text,#111);border-radius:16px 16px 0 0;padding:16px 16px 24px;box-sizing:border-box;';

    var html = '<div style="font-size:16px;font-weight:700;text-align:center;margin-bottom:4px;">🎨 桌面小组件样式</div>' +
               '<div style="font-size:12px;color:var(--sub,#888);text-align:center;margin-bottom:14px;">选完立刻生效，自动保存</div>';

    ['weather','clock','anniv'].forEach(function(t){
      var cur = getStyle(t);
      html += '<div style="margin-bottom:16px;">';
      html +=   '<div style="font-size:13px;font-weight:600;margin-bottom:8px;">' + ICON[t] + ' ' + LABEL[t] + '</div>';
      html +=   '<div style="display:flex;flex-direction:column;gap:8px;">';
      OPTIONS[t].forEach(function(opt){
        var on = (opt.id === cur);
        var border = on ? 'var(--theme,#07c160)' : 'var(--line,#ddd)';
        var bg = on ? 'color-mix(in srgb, var(--theme,#07c160) 12%, transparent)' : 'transparent';
        html += '<div onclick="Widgets._pick(\'' + t + '\',\'' + opt.id + '\')" ' +
                'style="display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-radius:10px;border:1.5px solid ' + border + ';background:' + bg + ';cursor:pointer;">' +
                  '<span style="font-size:14px;">' + opt.name + '</span>' +
                  '<span style="font-size:12px;color:' + (on ? 'var(--theme,#07c160)' : 'var(--sub,#888)') + ';">' + (on ? '✓ 使用中' : '点击切换') + '</span>' +
                '</div>';
      });
      html +=   '</div>';
      html += '</div>';
    });

    html += '<button onclick="Widgets.closeStylePanel()" style="width:100%;padding:12px;border:none;border-radius:12px;background:var(--theme,#07c160);color:#fff;font-size:15px;font-weight:600;cursor:pointer;margin-top:6px;">完成</button>';

    box.innerHTML = html;
    wrap.appendChild(box);
    phoneEl.appendChild(wrap);
  }
  function closeStylePanel(){
    var el = document.getElementById('widgetStylePanel');
    if (el) el.remove();
  }
  function _pick(type, id){
    setStyle(type, id);
    openStylePanel();   // 重开刷新高亮
  }

  /* ---------- 6. 桌面长按 ---------- */
  function bindLongPress(){
    var home = document.getElementById('home');
    if (!home) return;
    if (home._wgLongPressBound) return;
    home._wgLongPressBound = true;

    var timer = null, moved = false, startX = 0, startY = 0;

    home.addEventListener('pointerdown', function(e){
      var el = e.target.closest ? e.target.closest('#weatherWidget, #homeClock, .anniv-widget, .wg-weather-minimal, .wg-clock-analog, .wg-anniv-capsule') : null;
      if (!el) return;
      moved = false;
      startX = e.clientX; startY = e.clientY;
      clearTimeout(timer);
      timer = setTimeout(function(){
        if (moved) return;
        var t = null;
        if (el.id === 'weatherWidget' || el.classList.contains('wg-weather-minimal')) t = 'weather';
        else if (el.id === 'homeClock' || el.classList.contains('wg-clock-analog')) t = 'clock';
        else if (el.classList.contains('anniv-widget') || el.classList.contains('wg-anniv-capsule')) t = 'anniv';
        if (t) openStylePanel();
      }, 600);
    });
    home.addEventListener('pointermove', function(e){
      if (Math.abs(e.clientX-startX) > 10 || Math.abs(e.clientY-startY) > 10) { moved = true; clearTimeout(timer); }
    });
    home.addEventListener('pointerup', function(){ clearTimeout(timer); });
    home.addEventListener('pointercancel', function(){ clearTimeout(timer); });
  }

  /* ---------- 7. 暴露 ---------- */
  window.Widgets = {
    getStyle:getStyle,
    setStyle:setStyle,
    renderWeather:renderWeather,
    renderClock:renderClock,
    renderAnniv:renderAnniv,
    openStylePanel:openStylePanel,
    closeStylePanel:closeStylePanel,
    bindLongPress:bindLongPress,
    _pick:_pick
  };

  try { ensureStore(); } catch(e) {}

  /* renderHome 跑完后，绑定长按 */
  var _origRenderHome = window.renderHome;
  if (_origRenderHome) {
    window.renderHome = function(){
      var r = _origRenderHome.apply(this, arguments);
      setTimeout(bindLongPress, 0);
      return r;
    };
  }

})();

/* ============================================================
   指针钟的动画驱动（全局函数）
   ============================================================ */
window._initAnalogClock = function() {
  var ticksBox = document.getElementById('analogTicks');
  if (!ticksBox) return;

  // 防止重复生成刻度
  if (ticksBox.children.length === 0) {
    var romans = { 0: 'XII', 3: 'III', 6: 'VI', 9: 'IX' };
    for (var i = 0; i < 12; i++) {
      var el = document.createElement('div');
      el.className = (i % 3 === 0) ? 'num' : 'tick';
      if (i % 3 === 0) el.innerText = romans[i];
      el.style.transform = 'rotate(' + (i * 30) + 'deg)';
      ticksBox.appendChild(el);
    }
  }

  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  function update() {
    var hourEl = document.getElementById('analogHour');
    if (!hourEl) return; // 如果被切走或者不在桌面，停止动画

    var now = new Date();
    var ms = now.getMilliseconds();
    var sec = now.getSeconds() + ms / 1000; 
    var min = now.getMinutes() + sec / 60;  
    var hr  = now.getHours() % 12 + min / 60; 

    document.getElementById('analogMinute').style.transform = 'rotate(' + (min * 6) + 'deg)';
    hourEl.style.transform = 'rotate(' + (hr * 30) + 'deg)';

    if (sec < 0.1) {
      var wdEl = document.querySelector('.wg-clock-analog .wd');
      if (wdEl) wdEl.innerText = weekdays[now.getDay()];
      var dateEl = document.getElementById('analogDate');
      if (dateEl) {
        var yyyy = now.getFullYear();
        var mm = String(now.getMonth() + 1).padStart(2, '0');
        var dd = String(now.getDate()).padStart(2, '0');
        dateEl.innerText = yyyy + '.' + mm + '.' + dd;
      }
    }

    window._analogClockReq = requestAnimationFrame(update);
  }
  
  update();
};
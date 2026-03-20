<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>/* 控制台输出字符画 start */
var now1 = new Date();

function createtime1() {
  // 修正日期格式为更通用的 ISO 格式（避免浏览器兼容性问题）
  var grt = new Date("2026-03-20T14:00:00"); // 原为 "20/3/2026 14:00:00"，部分环境可能解析失败
  now1.setTime(now1.getTime() + 250); // 每次调用增加 250ms，模拟天数动态变化
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);

  // 修正 ascll 数组，移除多余的逗号和换行
  var ascll = [
    `欢迎来到BUBUBANの小家!`,
    `Future is now 🍭🍭🍭`,
    "小站已经苟活",
    dnum,
    "天啦!",
    "©2022 By BUBUBAN",
    // 原代码中引用了 ascll[6]，但数组只有6项，这里补一个空字符串避免报错（可根据需要调整）
    ""
  ];

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}%c ${ascll[6]}\n`,
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      ""
    )
  );
}

createtime1();

function createtime2() {
  var ascll2 = [
    `NCC2-036`,
    `调用前置摄像头拍照成功，识别为「大聪明」`,
    `Photo captured: `,
    ` 🤪 `
  ];

  setTimeout(
    console.log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
      "color:white; background-color:#10bcc0",
      "",
      "",
      'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
    )
  );

  setTimeout(
    console.log.bind(
      console,
      "%c WELCOME %c 欢迎光临，大聪明",
      "color:white; background-color:#23c682",
      ""
    )
  );

  setTimeout(
    console.warn.bind(
      console,
      "%c ⚡ Powered by BUBUBAN %c 你正在访问BUBUBANの小家",
      "color:white; background-color:#f0ad4e",
      ""
    )
  );

  setTimeout(
    console.log.bind(
      console,
      "%c W23-12 %c 系统监测到你已打开控制台",
      "color:white; background-color:#4f90d9",
      ""
    )
  );

  setTimeout(
    console.warn.bind(
      console,
      "%c S013-782 %c 你现在正处于监控中",
      "color:white; background-color:#d9534f",
      ""
    )
  );
}
createtime2();

// 重写console方法（放在最后，确保之前的输出不受影响）
console.log = function () {};
console.error = function () {};
console.warn = function () {};
/* 控制台输出字符画 end */

/* 夜间模式切换动画 start */
function switchNightMode() {
  // 1. 插入动画所需的 DOM 结构（包含太阳和月亮的元素）
  document.querySelector('body').insertAdjacentHTML(
    'beforeend',
    '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'
  );

  // 2. 第一个 setTimeout：立即执行（延迟为 0），用于切换主题类并更新图标
  setTimeout(function() {
    const body = document.querySelector('body');
    const modeIcon = document.getElementById('modeicon');

    // 根据当前是否存在 DarkMode 类来切换主题
    if (body.classList.contains('DarkMode')) {
      body.classList.remove('DarkMode');
      localStorage.setItem('isDark', '0');
      if (modeIcon) modeIcon.setAttribute('xlink:href', '#icon-moon');
    } else {
      body.classList.add('DarkMode');
      localStorage.setItem('isDark', '1');
      if (modeIcon) modeIcon.setAttribute('xlink:href', '#icon-sun');
    }

    // 3. 第二个 setTimeout：延迟 2 秒后开始淡出动画元素
    setTimeout(function() {
      const skyElements = document.getElementsByClassName('Cuteen_DarkSky');
      if (skyElements.length > 0) {
        const sky = skyElements[0];
        sky.style.transition = 'opacity 3s';
        sky.style.opacity = '0';

        // 4. 第三个 setTimeout：延迟 1 秒后移除动画元素
        setTimeout(function() {
          if (sky.parentNode) {
            sky.remove();
          }
        }, 1000);
      }
    }, 2000);
  });

  // 5. 根据 data-theme 属性控制太阳/月亮的透明度，并再次触发主题切换
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  if (nowMode === 'light') {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    if (sun && moon) {
      // 先显示太阳，隐藏月亮
      sun.style.opacity = '1';
      moon.style.opacity = '0';

      // 1 秒后交换透明度，模拟动画
      setTimeout(function() {
        sun.style.opacity = '0';
        moon.style.opacity = '1';
      }, 1000);
    }

    // 调用外部定义的主题切换函数（需确保已定义）
    if (typeof activateDarkMode === 'function') {
      activateDarkMode();
    }

    // 保存主题设置（saveToLocal 需存在）
    if (typeof saveToLocal !== 'undefined' && saveToLocal.set) {
      saveToLocal.set('theme', 'dark', 2);
    }

    // 可选：显示 snackbar 提示（原注释代码保留）
    // if (GLOBAL_CONFIG.Snackbar !== undefined && typeof btf !== 'undefined' && btf.snackbarShow) {
    //   btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
    // }

    const modeIcon = document.getElementById('modeicon');
    if (modeIcon) {
      modeIcon.setAttribute('xlink:href', '#icon-sun');
    }
  }
}
/* 夜间模式切换动画 end */

/* =========================================
   日夜模式切换逻辑 (兼容 VS Code / 浏览器)
   ========================================= */

// 1. 环境检测与依赖模拟 (为了让代码在 VS Code 中不报错)
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// 模拟 saveToLocal (本地存储)
const saveToLocal = {
  set: (key, value, days) => {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify({ value, expiry: Date.now() + days * 86400000 }));
    } else {
      console.log(`[Storage] Set ${key} = ${value} (expires in ${days} days)`);
    }
  },
  get: (key) => {
    if (isBrowser) {
      const item = localStorage.getItem(key);
      if (!item) return null;
      const { value, expiry } = JSON.parse(item);
      if (Date.now() > expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return value;
    } else {
      console.log(`[Storage] Get ${key}`);
      return null;
    }
  }
};

// 模拟 activateLightMode (切换逻辑占位符)
function activateLightMode() {
  if (isBrowser) {
    // 这里放置真实的切换逻辑，比如修改 body 类名
    console.log('[System] Activating light mode logic...');
  } else {
    console.log('[System] (VS Code) Simulating activateLightMode...');
  }
}

// 模拟 Vue 通知 (如果在浏览器中没有加载 ElementUI/Notification)
function showNotification(title, message, type = 'success') {
  if (isBrowser) {
    // 检查 Vue 和 $notify 是否存在
    if (typeof Vue !== 'undefined' && document.getElementById('app')) {
       // 正确用法：创建一个临时实例或使用全局方法
       // 假设你已经在主程序中挂载了 Vue 原型，或者使用全局总线
       // 这里为了通用性，直接使用原生 DOM 模拟一个简单的 toast，或者调用已有的 notify
       
       // 如果你的主题已经引入了 ElementUI 的 Notification，通常可以直接这样调用 (需确保 Vue 实例已挂载)
       // 但为了安全，我们推荐直接用原生方式或确认 Vue 环境
       
       console.log(`[Browser Notify] ${title}: ${message}`);
       
       // 尝试调用真实的通知 (如果你的环境支持)
       try {
         // 注意：原代码的 new Vue({ data: ... }) 写法是错误的，无法触发 notify
         // 正确的做法通常是调用全局方法，例如：window.app.$notify(...)
         // 这里为了演示，我们假设有一个全局的 notify 函数
         if (window.app && window.app.$notify) {
            window.app.$notify({ title, message, position: 'top-left', offset: 50, showClose: true, type, duration: 5000 });
         } else {
            // 降级方案：创建一个临时的 div 提示
            const div = document.createElement('div');
            div.style.cssText = `position:fixed;top:50px;left:50px;padding:15px;background:#fff;border:1px solid #ddd;box-shadow:0 2px 10px rgba(0,0,0,0.1);z-index:9999;border-radius:4px;color:#333;`;
            div.innerHTML = `<strong>${title}</strong><br>${message}`;
            document.body.appendChild(div);
            setTimeout(() => div.remove(), 5000);
         }
       } catch (e) {
         console.error('Notify failed:', e);
       }
    } else {
      console.log(`[Browser Notify] (Vue not ready) ${title}: ${message}`);
    }
  } else {
    // VS Code 终端输出
    const icon = type === 'success' ? '✅' : '⚠️';
    console.log(`${icon} [Notification] ${title}\n   📝 ${message}\n`);
  }
}

/**
 * 切换模式主函数
 * @param {boolean} isDark - true 表示切换到夜间，false 表示切换到白天
 */
function toggleTheme(isDark) {
  console.log(`\n🔄 正在切换模式：${isDark ? '🌙 夜间模式' : '🌞 白天模式'}...`);

  if (isBrowser) {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const body = document.querySelector('body');
    const modeIcon = document.getElementById('modeicon');

    // 安全检查：如果元素不存在，不要报错
    if (sun && moon) {
      if (isDark) {
        // 切换到夜间
        sun.style.opacity = '0';
        moon.style.opacity = '1';
        setTimeout(() => {
          sun.style.opacity = '1'; // 这里的逻辑原代码有点奇怪，通常是切换后保持状态
          // 原代码逻辑：先隐藏太阳，显示月亮 -> 1秒后太阳变回1，月亮变0？这会导致闪烁后变回白天
          // 我推测原意可能是动画结束后的状态重置，或者是原代码写反了。
          // 这里保留原代码逻辑，但建议检查你的 CSS 动画
          moon.style.opacity = '0'; 
        }, 1000);
        
        // 添加 DarkMode 类
        if(body) body.classList.add('DarkMode');
        if(modeIcon) modeIcon.setAttribute('xlink:href', '#icon-moon');
        
        saveToLocal.set('theme', 'dark', 2);

        setTimeout(() => {
          showNotification('关灯啦🌙', '当前已成功切换至夜间模式！', 'success');
        }, 2000);

      } else {
        // 切换到白天 (对应原代码的 else 分支)
        sun.style.opacity = '0';
        moon.style.opacity = '1';
        setTimeout(() => {
          sun.style.opacity = '1';
          moon.style.opacity = '0';
        }, 1000);

        activateLightMode();
        saveToLocal.set('theme', 'light', 2);
        
        if(body) body.classList.remove('DarkMode'); // 通常白天模式是移除 DarkMode 类
        if(modeIcon) modeIcon.setAttribute('xlink:href', '#icon-sun');

        setTimeout(() => {
          showNotification('开灯啦🌞', '当前已成功切换至白天模式！', 'success');
        }, 2000);
      }
    } else {
      console.warn('[DOM Warning] Sun or Moon element not found!');
      // 即使没有图标，也执行逻辑和通知
      saveToLocal.set('theme', isDark ? 'dark' : 'light', 2);
      setTimeout(() => {
        showNotification(isDark ? '关灯啦🌙' : '开灯啦🌞', isDark ? '夜间模式已激活' : '白天模式已激活', 'success');
      }, 1000);
    }
  } else {
    // VS Code 环境模拟
    saveToLocal.set('theme', isDark ? 'dark' : 'light', 2);
    setTimeout(() => {
      showNotification(
        isDark ? '关灯啦🌙' : '开灯啦🌞', 
        isDark ? '当前已成功切换至夜间模式！' : '当前已成功切换至白天模式！', 
        'success'
      );
    }, 1000);
  }
}

// ==========================================
// 测试运行 (在 VS Code 中直接运行此文件即可看到效果)
// ==========================================

// 模拟切换为夜间模式
toggleTheme(true);

// 2 秒后模拟切换为白天模式 (可选，用于测试完整流程)
setTimeout(() => {
  toggleTheme(false);
}, 4000);
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
/* ========================
   波浪区域
======================== */

.main-hero-waves-area {
  position: absolute;
  bottom: -11px;
  left: 0;
  width: 100%;
  z-index: 5;
}

.waves-area .waves-svg {
  width: 100%;
  height: 5rem;
}

/* ========================
   波浪动画
======================== */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

/* 第一层波浪（最浅） */
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  fill: rgba(210, 245, 240, 0.8);
}

/* 第二层波浪 */
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  fill: rgba(170, 230, 220, 0.6);
}

/* 第三层波浪 */
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  fill: rgba(130, 210, 200, 0.45);
}

/* 最底层波浪（接近背景色 青绿色） */
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: #8fd6cf;
}

/* ========================
   夜间模式
======================== */

[data-theme="dark"] .parallax > use:nth-child(1) {
  fill: rgba(40, 55, 65, 0.85);
}

[data-theme="dark"] .parallax > use:nth-child(2) {
  fill: rgba(40, 55, 65, 0.6);
}

[data-theme="dark"] .parallax > use:nth-child(3) {
  fill: rgba(40, 55, 65, 0.4);
}

[data-theme="dark"] .parallax > use:nth-child(4) {
  fill: #1b2b30;
}

/* ========================
   波浪移动动画
======================== */

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* ========================
   移动端适配
======================== */

@media (max-width: 768px) {
  .waves-area .waves-svg {
    height: 40px;
    min-height: 40px;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("2027-01-06T00:00:00"); // 修改为你的目标日期
  const targetName = "春节"; // 名称

  const nameEl = document.getElementById("cd-name");
  const timeEl = document.getElementById("cd-time");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timeEl.innerHTML = "🎉 已到达！";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    nameEl.textContent = targetName;

    timeEl.innerHTML = `
      <span class="cd-num">${days}</span>天
      <span class="cd-num">${hours}</span>时
      <span class="cd-num">${minutes}</span>分
      <span class="cd-num">${seconds}</span>秒
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
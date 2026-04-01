fetch("https://api.vvhan.com/api/ipInfo")
.then(res => res.json())
.then(data => {
  const city = data.info.city
  const ip = data.ip

  const welcome = document.getElementById("welcome-info")

  if(welcome){
    welcome.innerHTML =
    `欢迎来自 <b>${city}</b> 的小伙伴，
    祝你在本站玩得开心！<br>
    当前IP地址：${ip}`
  }
})

// /source/js/welcome.js

document.addEventListener("DOMContentLoaded", function () {
  new Vue({
    mounted() {
      this.$notify({
        title: "你已被发现😜",
        message: "小伙子，扒源记住要遵循 GPL 协议！",
        position: "top-left",
        offset: 50,
        showClose: true,
        type: "warning",
        duration: 5000
      });
    }
  });
});
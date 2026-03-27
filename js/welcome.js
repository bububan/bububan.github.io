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
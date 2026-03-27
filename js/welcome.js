fetch("https://api.vvhan.com/api/ipInfo")
.then(res => res.json())
.then(data => {
  const city = data.info.city
  const welcome = document.getElementById("welcome-info")
  if(welcome){
    welcome.innerHTML = "欢迎来自 " + city + " 的小伙伴"
  }
})
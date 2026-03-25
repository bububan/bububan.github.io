fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(data => {

    const city = data.city
    const region = data.region
    const ip = data.ip

    const welcome = document.getElementById("welcome-info")

    let time = new Date().getHours()
    let greeting = ""

    if (time < 11) greeting = "早上好"
    else if (time < 13) greeting = "中午好"
    else if (time < 18) greeting = "下午好"
    else greeting = "晚上好"

    welcome.innerHTML = `
    🎉 欢迎信息 🎉<br>
    欢迎来自 <b>${region} ${city}</b> 的伙伴，${greeting}！<br>
    您的IP地址为：<b>${ip}</b>
    `
  })
fetch('https://ipapi.co/json/')
.then(res => res.json())
.then(data => {

  const city = data.city
  const region = data.region
  const ip = data.ip
  const lat = data.latitude
  const lon = data.longitude

  // 站长位置（东莞）
  const blogLat = 23.02067
  const blogLon = 113.75179

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180

    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI/180) *
      Math.cos(lat2 * Math.PI/180) *
      Math.sin(dLon/2) *
      Math.sin(dLon/2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    return Math.round(R * c)
  }

  const distance = getDistance(lat, lon, blogLat, blogLon)

  const hour = new Date().getHours()

  let greeting = ""

  if(hour < 11) greeting = "早上好"
  else if(hour < 13) greeting = "中午好"
  else if(hour < 18) greeting = "下午好"
  else greeting = "晚上好"

  const welcome = document.getElementById("welcome-info")

  welcome.innerHTML = `
  🎉 欢迎信息 🎉<br>
  欢迎来自 <b>${region} ${city}</b> 的伙伴，${greeting}<br>
  距离站长 <b>${distance}</b> 公里<br>
  IP：<b>${ip}</b>
  `
})
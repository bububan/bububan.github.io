const username="bububan"

// GitHub Calendar
GitHubCalendar("#github-calendar", username)

// 获取仓库
fetch(`https://api.github.com/users/${username}/repos`)
.then(res=>res.json())
.then(data=>{

let languages={}

data.forEach(repo=>{
if(repo.language){
languages[repo.language]=(languages[repo.language]||0)+1
}
})

// 绘制语言图
const ctx=document.getElementById('languageChart')

new Chart(ctx,{
type:'doughnut',
data:{
labels:Object.keys(languages),
datasets:[{
data:Object.values(languages)
}]
}
})

})

// Commit timeline
fetch(`https://api.github.com/users/${username}/events`)
.then(res=>res.json())
.then(data=>{

let commits=data
.filter(e=>e.type==="PushEvent")
.slice(0,6)

let list=document.getElementById("commitTimeline")

commits.forEach(c=>{
let li=document.createElement("li")

li.innerHTML=`
<b>${c.repo.name}</b>
<br>
${c.payload.commits[0]?.message||""}
`

list.appendChild(li)
})

})
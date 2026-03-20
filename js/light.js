<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>// 霓虹灯效果
// 颜色数组
var arr = ["#39c5bb", "#f14747", "#f1a247", "#f1ee47", "#b347f1", "#1edbff", "#ed709b", "#5636ed"];
// 颜色索引
var idx = 0;

// 切换颜色
function changeColor() {
    // 仅夜间模式才启用
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark') {
        if (document.getElementById("site-name"))
            document.getElementById("site-name").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-title"))
            document.getElementById("site-title").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-subtitle"))
            document.getElementById("site-subtitle").style.textShadow = arr[idx] + " 0 0 10px";
        if (document.getElementById("post-info"))
            document.getElementById("post-info").style.textShadow = arr[idx] + " 0 0 5px";
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = arr[idx] + " 0 0 12px";
            document.getElementsByClassName("author-info__description")[0].style.textShadow = arr[idx] + " 0 0 12px";
        } catch {
            
        }
        idx++;
        if (idx == 8) {
            idx = 0;
        }
    } else {
        // 白天模式恢复默认
        if (document.getElementById("site-name"))
            document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-title"))
            document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-subtitle"))
            document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("post-info"))
            document.getElementById("post-info").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = "";
            document.getElementsByClassName("author-info__description")[0].style.textShadow = "";
        } catch {
            
        }
    }
}

// 开启计时器
window.onload = setInterval(changeColor, 1200);

function switchVisitChart() {
  // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
  let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)'
  if (document.getElementById('map-chart') && mapOption) {
    try {
      let mapOptionNew = mapOption
      mapOptionNew.title.textStyle.color = color
      mapOptionNew.visualMap.textStyle.color = color
      mapChart.setOption(mapOptionNew)
    } catch (error) {
      console.log(error)
    }
  }
  if (document.getElementById('trends-chart') && trendsOption) {
    try {
      let trendsOptionNew = trendsOption
      trendsOptionNew.title.textStyle.color = color
      trendsOptionNew.xAxis.nameTextStyle.color = color
      trendsOptionNew.yAxis.nameTextStyle.color = color
      trendsOptionNew.xAxis.axisLabel.color = color
      trendsOptionNew.yAxis.axisLabel.color = color
      trendsOptionNew.xAxis.axisLine.lineStyle.color = color
      trendsOptionNew.yAxis.axisLine.lineStyle.color = color
      trendsOptionNew.series[0].markLine.data[0].label.color = color
      trendsChart.setOption(trendsOptionNew)
    } catch (error) {
      console.log(error)
    }
  }
  if (document.getElementById('sources-chart') && sourcesOption) {
    try {
      let sourcesOptionNew = sourcesOption
      sourcesOptionNew.title.textStyle.color = color
      sourcesOptionNew.legend.textStyle.color = color
      sourcesOptionNew.series[0].label.color = color
      sourcesChart.setOption(sourcesOptionNew)
    } catch (error) {
      console.log(error)
    }
  }
}

if (document.getElementById('map-chart')) mapChart()
if (document.getElementById('trends-chart')) trendsChart()
if (document.getElementById('sources-chart')) sourcesChart()

// 切换夜间模式字体颜色适应
var censusTimer;
try {
  document.addEventListener("click", function () {
    clearTimeout(censusTimer);
    censusTimer = setTimeout(switchVisitChart, 100);
  });
} catch (err) { }
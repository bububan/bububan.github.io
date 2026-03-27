function getProgress() {
  const now = new Date();
  const start = new Date(now.getFullYear(),0,1);
  const end = new Date(now.getFullYear()+1,0,1);

  const yearProgress = ((now-start)/(end-start)*100).toFixed(2);

  document.getElementById("year-progress").innerHTML = yearProgress + "%";
}

getProgress();
const modeButtons=document.querySelectorAll(".btn");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds")
const start=document.querySelector(".start")
const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    
  };

////Event listeners

document.addEventListener('DOMContentLoaded', () => {
  changeMode('pomodoro');
});

  modeButtons.forEach(button=>{
    button.addEventListener("click",handleMode)
  })

  start.addEventListener("click",()=>{
    if(start.innerHTML=="start"){
      startTimer()
    }else{
      stopTimer()
    }
  })
/////
function handleMode(event) {
  const { mode } = event.target.dataset;
  changeMode(mode);
  stopTimer();
}

function changeMode(mode){
    timer.mode=mode;
    timer.remainingTime={
      total:timer[mode]*60,
      minutes:timer[mode],
      seconds:0
    };
    modeButtons.forEach(button=>button.classList.remove("active"));
    document.querySelector(`[data-mode="${mode}"]`).classList.add("active");
    updateClock();

}


function updateClock(){
    const{remainingTime}=timer;
    const min=`${remainingTime.minutes}`.padStart(2,"0");
    const sec=`${remainingTime.seconds}`.padStart(2,"0");
    minutes.textContent=min;
    seconds.textContent=sec;
}

let interval;

function startTimer(){
      let {total}=timer.remainingTime;
      const endTime=Date.parse(new Date())+total*1000;
      start.innerHTML="stop"
      interval=setInterval(()=>{
         timer.remainingTime=getRemainingTime(endTime);
         updateClock();
         total=timer.remainingTime.total;
         total<=0? clearInterval(interval):false
      },1000)   
}

function getRemainingTime(endTime){
      const currentTime=Date.parse(new Date());
      const difference=endTime-currentTime;
      const total = Number.parseInt(difference / 1000, 10);
      const minutes = Number.parseInt((total / 60) % 60, 10);
      const seconds = Number.parseInt(total % 60, 10);

      return {
        total,
        minutes,
        seconds,
      }
}

function stopTimer(){
  clearInterval(interval);
  start.innerHTML="start"
  
}







function disco() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	document.body.style.background=thergb;
}




var on=-1;
var ibo;
function change(){
  
    on=on*-1;
    console.log(on)
    
    if (on==1){
      ibo=setInterval(disco,100)

    }else if(on==-1){
      console.log("heloooo")
      clearInterval(ibo); 
    }
}


var deneme=document.querySelector(".disco")
deneme.addEventListener("click",change)

change();
disco();
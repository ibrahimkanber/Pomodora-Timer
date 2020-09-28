const modeButtons=document.querySelectorAll(".btn");
const minutes=document.querySelector(".minutes");
const seconds=document.querySelector(".seconds")
const start=document.querySelector(".start")

class Pomodoro {

    constructor(){
        this.pomodoro=25;
        this.shortBreak=5,
        this.longBreak=15,
        this.longBreakInterval=4,
        this.remainingTime=0,
        this.mode="";
        this.interval;
        
    }

    handleMode(event){
        const {mode}=event.target.dataset;
        this.changeMode(mode);
        this.stopTimer();
    }

    changeMode(mode){
        this.mode=mode;
        console.log(this.mode)
        this.remainingTime={
            total:this[mode]*60,
            minutes:this[mode],
            seconds:0

        }
        modeButtons.forEach(button=>button.classList.remove("active"));
        document.querySelector(`[data-mode="${this.mode}"]`).classList.add("active");
        console.log(this.remainingTime,this.mode);
        this.updateClock();   
    }



    updateClock(){
        
        const{remainingTime}=this;
        console.log(remainingTime);
        const min=`${remainingTime.minutes}`.padStart(2,"0");
        const sec=`${remainingTime.seconds}`.padStart(2,"0");
        minutes.textContent=min;
        seconds.textContent=sec;
        console.log("hallooo111")
    }
    startTimer(){
        let {total}=this.remainingTime;
        const endTime=Date.parse(new Date())+total*1000;
        start.innerHTML="stop";
        this.interval=setInterval(()=>{
           this.remainingTime=this.getRemainingTime(endTime);
           this.updateClock();
           total=this.remainingTime.total;
           total<=0? clearInterval(this.interval):false
        },1000)    
    }

    getRemainingTime(endTime){
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

    stopTimer(){
        clearInterval(this.interval);
        start.innerHTML="start";
    }

}


let myPomodora=new Pomodoro();




////eventlisteners
document.addEventListener('DOMContentLoaded', () => {
    myPomodora.changeMode('pomodoro');
  });
  
    modeButtons.forEach(button=>{
      button.addEventListener("click",(event)=>{
            myPomodora.handleMode(event)
      })
    })
  
    start.addEventListener("click",()=>{
      if(start.innerHTML=="start"){
            myPomodora.startTimer()
      }else{
            myPomodora.stopTimer()
      }
    })

////
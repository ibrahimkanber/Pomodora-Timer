const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const btn3=document.querySelector(".btn3");
const deneme=document.querySelector(".deneme")


// btn1.addEventListener("click",fnc1);
// // btn2.addEventListener("click",fnc2);
// // btn3.addEventListener("click",fnc3);
// var on=-1;

// function fnc1(e){
//     on=on*-1
//     console.log(on,on==true)
//     console.log(e.target)
// }

// const timer = {
//     pomodoro: 25,
//     shortBreak: 5,
//     longBreak: 15,
//     longBreakInterval: 4,
//   };
  


// const modeButtons = document.querySelector('#js-mode-buttons');
btn1.addEventListener('click', handleMode);

function handleMode(event) {
  const { mode } = event.target.dataset;
    // console.log(mode)
  if (!mode){
      console.log("helloo")
  };
    

//   switchMode(mode);
}










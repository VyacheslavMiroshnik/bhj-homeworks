let timerElements = document.getElementById('timer')
let timerCount = +timerElements.textContent;
let timerId = setInterval(()=>{
    timerCount--;
    timerElements.textContent = timerCount;
    if (timerCount === 0){
        timerElements.textContent = timerCount;
       clearInterval(timerId);
       window.alert('Поздравляем вы попедили')
    };
 },1000)
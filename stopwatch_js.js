let timer = document.getElementById('timerDisplay');
let stopbtn = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;


start.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }    
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

reset.addEventListener('click',function(){
    clearInterval(timerId);
    timer.innerHTML = '00 : 00 : 00';
    msec = sec = min = 0;
});



function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 100){
            sec = 0;
            min++;
        }
    }
    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secstring = sec < 10 ? `0${sec}` : sec;
    let minstring = min < 10 ? `0${min}` : min;
    timer.innerHTML = `${minstring} : ${secstring} : ${msecstring}`;
}
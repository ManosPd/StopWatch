'use strict';

let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');

let watch = document.getElementById('watch');
let seconds=0;
let timer;

start.addEventListener('click', startTimer);

function startTimer(){
    clearInterval(timer);
    timer = setInterval(() => {
    seconds += 1000;

    let dateTimer = new Date(seconds);

    watch.innerHTML = ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2)
      
    }, 1000);
}

reset.addEventListener('click', resetTimer);

function resetTimer() {
   setInterval(timer);
   seconds =0;
   watch.innerHTML= "00:00";
}

stop.addEventListener('click', stopTimer);

function stopTimer() {
    clearInterval(timer);
}

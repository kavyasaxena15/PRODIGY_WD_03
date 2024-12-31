// var timer = document.querySelector('.timer');
// var toggleBtn = document.querySelector('.toggle');
// var resetBtn = document.querySelector('.reset');
// var lapBtn = document.querySelector('.lap');
// var lap_box = document.querySelector('lap_box');

// var watch = new stopwatch(timer);

// function start(){
//     toggleBtn.textContent = 'Stop';
//     toggleBtn.classList.toggle("on");
//     watch.start();
// }

// function stop(){
//     toggleBtn.textContent = 'Start';
//     toggleBtn.classList.toggle("on");
//     watch.stop();
// }


// function stopWhenOn(){
//     toggleBtn.textContent = 'Start';
//     toggleBtn.classList.toggle("on");
//     watch.stop();
//     watch.reset();
// }



// toggleBtn.addEventListener('click',function(){

//     //stop
//     watch.isOn ? watch.lapOn() : watch.reset();
// });


// lapBtn.addEventListener('click',function(){
//     watch.isOn ? watch.lapOn() : watch.lapOff();

// });

var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var lapBtn = document.querySelector('.lap');
var lap_box = document.querySelector('.lap_box'); // Corrected selector

var watch = new stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.add("on");
    watch.start();
}

function stop() {
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.remove("on");
    watch.stop();
}

toggleBtn.addEventListener('click', function() {
    if (watch.isOn) {
        stop();
    } else {
        start();
    }
});

resetBtn.addEventListener('click', function() {
    watch.reset();
});

lapBtn.addEventListener('click', function() {
    if (watch.isOn) {
        watch.lapOn();
    } else {
        watch.lapOff();
    }
});
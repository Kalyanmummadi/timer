const timerDisplay = document.getElementById("timer1");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");
const shortBreakBtn = document.querySelector(".shortBreakBtn");
const longBreakBtn = document.querySelector(".longBreakBtn");
const alarm = new Audio("alarm.mp3");

let time = 25 * 60;
let timer;
let isRunning = false;


const formatTime = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

const updateTimerDisplay = () => {
    timerDisplay.textContent = formatTime(time);
};

const start = () => {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        time--;
        updateTimerDisplay();
        if (time <= 0) {
            clearInterval(timer);
            isRunning = false;
            alarm.play();
        }
    }, 1000);
};

const stop = () => {
    clearInterval(timer);
    isRunning = false;
};

const reset = () => {
    stop();
    time = 25 * 60;
    updateTimerDisplay();
};

const short = () => {
    stop();
    time = 5 * 60;
    updateTimerDisplay();
};

const long = () => {
    stop();
    time = 15 * 60;
    updateTimerDisplay();
};


updateTimerDisplay();
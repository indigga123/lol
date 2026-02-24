let time = 25 * 60;
let interval;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
    if (interval) return;

    interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            alert("Great job! Time to take a short break.");
            return;
        }

        time--;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerDisplay.textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

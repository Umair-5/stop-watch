const inputs = document.querySelectorAll("input");
function time() {
    const date = new Date();
    let amPm = date.toLocaleTimeString();
    amPm = amPm.slice(8, 10);
    inputs[0].value = `${date.getHours()}  :`
    inputs[1].value = `${date.getMinutes()}  :`;
    inputs[2].value = date.getSeconds();
    inputs[3].value = amPm
}
setInterval(time, 1000)
time();
var hour = 0, min = 0, sec = 0, msec = 0;
var startBtn = document.querySelector("#start-btn");
var resumeBtn = document.querySelector("#resume-btn");
var hourH2 = document.getElementById("hour");
var minH2 = document.getElementById("min");
var secH2 = document.getElementById("sec");
var msecH2 = document.getElementById("msec");
resumeBtn.disabled = false;
resumeBtn.style.cursor = "not-allowed"
var timerStarted = false;
function startTimer() {
    if (!timerStarted) {

        timerInterval = setInterval(function () {
            msec++;
            msecH2.innerHTML = msec;
            if (msec >= 100) {
                sec++;
                secH2.innerHTML = sec;
                msec = 0;
            }
            if (sec >= 60) {
                min++;
                minH2.innerHTML = min;
                sec = 0;
            }
            if (min >= 60) {
                hour++;
                hourH2.innerHTML = hour;
                min = 0;
            }
        }, 10);
        startBtn.disabled = true;
        startBtn.style.cursor = "not-allowed"

    }
}
function pause() {
    if (!timerStarted) {
        clearInterval(timerInterval);
        timerStarted = false;
    }
    resumeBtn.disabled = false;
    resumeBtn.style.cursor = "pointer"
}
function resume() {
    if (!timerStarted) {
        startTimer();
    }
    resumeBtn.disabled = true;
    resumeBtn.style.cursor = "not-allowed"
}
var i = 0
function lap() {
    i++;
    var laps = document.querySelector("#laps");
    var lapInfo = document.createElement('p');
    lapInfo.setAttribute('class', 'lapInfo')
    lapInfo.innerHTML = `Lap ${i}: ${hour}:${min}:${sec}:${msec}`
    laps.appendChild(lapInfo)

}
function reset() {
    clearInterval(timerInterval);
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    timerStarted = false;
    msecH2.innerHTML = msec;
    secH2.innerHTML = sec;
    minH2.innerHTML = min;
    hourH2.innerHTML = hour;
    startBtn.disabled = false;
    startBtn.style.cursor = "pointer"
    document.querySelectorAll(".lapInfo").forEach(e => e.remove());
}



let secondsLeft;
let interval;

const buttons = document.querySelectorAll("button");
const timeLeftDisplay = document.querySelector(".display__time-left")
const endTimeDisplay = document.querySelector(".display__end-time");
const minsForm = document.getElementById("custom");

const setTimer = (seconds) => {
    if (interval) clearInterval(interval);
    
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMins = currentTime.getMinutes();
    let currentSecs = currentTime.getSeconds();

    // Calculate minutes and hours from seconds

    currentSecs += seconds;
    while (currentSecs >= 60) {
        currentSecs -= 60;
        currentMins += 1;
    }
    while (currentMins >= 60) {
        currentMins -= 60;
        currentHours += 1;
    }
    while (currentHours >= 24) {
        currentHours -= 24;
    }

    endTimeDisplay.innerHTML = `Be back at ${currentHours}:${currentMins > 9 ? currentMins : "0" + currentMins}`

    interval = setInterval(() => {
        let mins = Math.floor(secondsLeft / 60) + "";
        let secs = secondsLeft % 60 > 9 ?  secondsLeft % 60 : "0" + secondsLeft % 60;
        timeLeftDisplay.innerHTML = `${mins}:${secs}`;
        secondsLeft--;
        if (secondsLeft < 0) clearInterval(interval);
    }, 1000);
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        secondsLeft = Number(e.target.dataset.time);
        setTimer(secondsLeft);
    })
})

minsForm.addEventListener("submit", e => {
    e.preventDefault();
    secondsLeft = (Number(e.target.firstElementChild.value)) * 60;
    setTimer(secondsLeft);
})



/** 
 *  Must have features 
        * Pass time i hours, minutes and seconds.
        * play and pause button.
        * phase 1: Validation check and print timer on console.
        * phase 2: All button should work and UI update.
        * phase 3: Validation so that if user enters any timer greater than 60, then it should move to left bit.
        * 
 *  JavaScript:
           a. We have to listen to five event listners -> H,M,S, Start, Pause, reset, continue
           b. Validation check
           c. Update UI
           
        Edge Case:
           Reset Option.
 */

// Buttons.
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");


// Input Elements.
const hoursInput = document.getElementById("hr");
const minutesInput = document.getElementById("min");
const secondsInput = document.getElementById("sec");

let SECONDS_IN_HOUR = 3600;
let SECONDS_IN_MINUTE = 60;


resetSetup();

// Event Listners.
startBtn.addEventListener("click", (event) => {
    // 1. Take inputs and validate it.
    let hours = getValidInput(hoursInput.value);
    let minutes = getValidInput(minutesInput.value);
    let seconds = getValidInput(secondsInput.value);

    if (!validateInputTime(hours, minutes, seconds)) {
        return;
    }

    let countDownTime = hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds;
    runTimer(countDownTime);


    pauseBtn.style.display = "block";
    resetBtn.style.display = "block";

    startBtn.style.display = "none";
    continueBtn.style.display = "none";
});

pauseBtn.addEventListener("click", (e) => { });

continueBtn.addEventListener("click", (e) => { });

resetBtn.addEventListener("click", (event) => {
    resetSetup();
});

// Helper methods.
function resetSetup() {
    // Change is UIL: reset UI.
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
    resetBtn.style.display = "none";
}

function runTimer(countDownTime) {
    counterId = setInterval(() => {
        updateUiEverySecond(countDownTime);
        countDownTime--;

        if(countDownTime < 0){
            clearInterval(counterId);
            return;
        }

    }, 1000);
}

function updateUiEverySecond(countDownTime) {
    let hour = Math.floor(countDownTime / SECONDS_IN_HOUR);
    let minute = Math.floor((countDownTime % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    let second = Math.floor(countDownTime % SECONDS_IN_MINUTE);

    console.log(hour + ":" + minute + ":" + second);
}

function getValidInput(value) {
    return parseInt(!value ? 0 : value);
}

function validateInputTime(hours, minutes, seconds) {
    if (hours < 0 || minutes < 0 || seconds < 0) {
        alert("Negative value's are not allowed.");
        return false;
    } else if (hours > 24) {
        alert("Hour is greater than 24 which is not a valid hour.");
        return false;
    } else if (minutes > 60) {
        alert("Minute is greater than 60 which is not a valid minute.");
        return false;
    } else if (seconds > 60) {
        alert("Second is greater than 60 which is not a valid second.");
        return false;
    }

    return true;
}
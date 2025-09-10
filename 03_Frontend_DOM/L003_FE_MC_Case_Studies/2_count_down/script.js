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

resetSetup();

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

function printOnConsole() {

}

function validateInputTime(hours, minutes, seconds) {


}
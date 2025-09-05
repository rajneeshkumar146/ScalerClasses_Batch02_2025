

/*****setTimeout -> clearTimeout****/
// console.log("Before");
// function cb() {
//     console.log("Set-timeouts cb has been called.")
// }

// const timerId = setTimeout(cb, 3000);
// setTimeout(canceller, 2000);

// // console.log("Timer Id: ", timerId);

// function canceller() {
//     console.log("Cacelling the timeout.");
//     clearTimeout(timerId);
// }

/************setInterval, clearInterval*********/

console.log("Before");
function cb() {
    console.log("Interval called " + Date.now());
}

// setInterval(cb, 1000)

const timerId = setInterval(cb, 1000);
function cancelInterval() {
    console.timeEnd();
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}

console.time();
setTimeout(cancelInterval, 5000);

console.log("after");

//  cb of setTimout have higher precedence then cb of setInterval -> why precedence of SINt<STime


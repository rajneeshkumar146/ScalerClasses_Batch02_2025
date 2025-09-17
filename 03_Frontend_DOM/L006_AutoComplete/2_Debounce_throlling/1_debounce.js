function debounce(cb, delay = 500) {
    let timerId = null;
    return function (...args) {
        if (timerId) {
            console.log("Restting the timer!!!");
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            cb(...args);
            timerId = null;
        }, delay);
    }
}


function printHello() {
    console.log("Hi all!, Hello from my side.");
}

const debouncedPrintHello = debounce(printHello, 2000);

debouncedPrintHello();
setTimeout(() => {
    debouncedPrintHello();
    setTimeout(() => {
        debouncedPrintHello();
    }, 1000);
}, 1000);

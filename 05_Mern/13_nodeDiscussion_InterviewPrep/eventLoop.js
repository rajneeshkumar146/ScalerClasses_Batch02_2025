// console.log("start");   // Main thread

// process.nextTick(() => {   // event loop: first event in fifo queue
//   console.log("next tick");
// });

// setImmediate(() => { // event loop: second event in fifo queue
//   console.log("set immediate");
// });

// console.log("end"); // Main thread

function heavyComputation(iterations, callback) {
    let count = 0;
    function compute() {
        for (let i = 0; i < iterations; i++) {
            count++;
            if (count >= iterations) {
                // count -> 0 to 9999
                callback();
                return;
            }
        }
    }

    compute();
}

heavyComputation(1e9, () => {
    console.log("Heavy computation complete");
});


// optimised way
function heavyComputation2(iterations, callback) {
    let count = 0;
    function compute() {
        for (let i = 0; i < 100000; i++) {
            if (++count >= iterations) {
                callback();
                return;
            }
        }

        setImmediate(compute);
    }

    compute();
}

heavyComputation2(1e9, () => {
    console.log("Heavy computation complete");
});

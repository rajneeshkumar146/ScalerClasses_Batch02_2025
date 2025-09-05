// function promiseSetTimeOut(delay) {
//     function executorFn(resolve, reject) {
//         setTimeout(() => {
//             if (delay <= 2000) {
//                 resolve("Hi There!!!!");
//             } else {
//                 reject("We can not process your promise!! Sorry");
//             }
//         }, delay);
//     }
//     return new Promise(executorFn);
// }

// promiseSetTimeOut(1000).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log("Error: " + err);
// });

/** Polyfill of promise example using `executeFn`. */

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CustomPromise(executeFn) {
    // Add required properties and methods.
    // Promise does not expose these properties.

    let PROMISE_STATE = PENDING;
    let RESULT_VALUE = undefined;

    let SUCCESS_CALLBACK_ARRAY = []; // It can be queue.
    let FAILURE_CALLBACK_ARRAY = []; // It can be queue.

    // Attach resolve.
    const resolve = (value) => {
        if (PROMISE_STATE != PENDING) return;

        PROMISE_STATE = RESOLVED;
        RESULT_VALUE = value;

        // call your all success from call back array.
        SUCCESS_CALLBACK_ARRAY.forEach((callback) => {
            callback(RESULT_VALUE);
        });
    }


    // Attach reject.
    const reject = (value) => {
        if (PROMISE_STATE != PENDING) return;

        PROMISE_STATE = REJECTED;
        RESULT_VALUE = value;

        // call your all failures from call back array.
        FAILURE_CALLBACK_ARRAY.forEach((callback) => {
            callback(RESULT_VALUE);
        });
    }

    // Thread then with resolve.
    /** 1. If Promise is resolved It doesn't matter how many times we invoke then() everytime we will get same resopose for same promise. Means Promise result should be Idempotent. */
    this.then = function (cb) {
        if (PROMISE_STATE === RESOLVED) {
            cb(RESULT_VALUE);
        } else if (PROMISE_STATE === PENDING) {
            SUCCESS_CALLBACK_ARRAY.push(cb);
        }
    }


    // Thread catch with reject.
    this.catch = function (cb) {
        if (PROMISE_STATE === REJECTED) {
            cb(RESULT_VALUE);
        } else if (PROMISE_STATE === PENDING) {
            FAILURE_CALLBACK_ARRAY.push(cb);
        }
    }

    // Most Important: don't forget to call your executor function.
    executeFn(resolve, reject);
}

const executeFn = (resolve, reject) => {
    // cb based fn.
    setTimeout(() => {
        resolve("Hi!! I'm resolved.");
    }, 3000);

    // cb based fn.
    setTimeout(() => {
        reject("Hi!! I'm Rejcted because of delay.");
    }, 2000);
}


// ***************** usage of your custom *****************
const myPromise = new CustomPromise(executeFn);

console.log("Before");

const cb = (data) => {
    console.log(data);
}

console.log(myPromise);

myPromise.then(cb);

myPromise.then(cb);

myPromise.then(cb);

myPromise.then(cb);

myPromise.then((data) => {
    console.log("I am the second then: ", data);
});

myPromise.catch((err) => {
    console.log("Error: ", err);
})

myPromise.catch((data) => {
    console.log("I am the second catch: ", data);
})

console.log("After");
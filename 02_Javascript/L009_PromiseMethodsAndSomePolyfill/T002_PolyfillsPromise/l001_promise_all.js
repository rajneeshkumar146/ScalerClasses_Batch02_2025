Promise.myPromiseAll = function (arrayOfPromises) {
    return new Promise(function (resolve, reject) {


    });
}

/** --------------------------Consuption-------------------------- */
// when all the promises are resolved.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Foo");
    }, 1000);
});

// // Our Method
Promise.myPromiseAll([p0, p1, p2])
    .then((data) => {
        console.log("Customized One: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });

// // Real.
Promise.all([p0, p1, p2])
    .then((data) => {
        console.log("Customized One: ", data);
    })
    .catch((err) => {
        console.log("Promise got rejected with error: " + err);
    });


// when any of the promises got rejected.

// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Foo");
//     }, 1000);
// });

// // Our Method
// Promise.myPromiseAll([p0, p1, p2])
//     .then(console.log)
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });

// // Real.
// Promise.all([p0, p1, p2])
//     .then((data) => {
//         console.log("Real One: ", data);
//     })
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });
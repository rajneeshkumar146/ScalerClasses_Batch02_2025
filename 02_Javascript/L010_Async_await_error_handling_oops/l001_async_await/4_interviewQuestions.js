// Question 1: 
// const promise = Promise.resolve("Resolved value");
// promise.then(function (value) {
//     console.log("Resolved: ", value);
// });

// const promiseReject = Promise.reject("some error");
// promiseReject.then(function () {
//     console.log("This will not be executed");
// }).catch(function (err) {
//     console.log("Caught an error: ", err.message);
// });

// Question 2:
// let promise = Promise.resolve(10);
// promise.then(function (data) {
//     console.log("Step 1:", data); // Output: Step 1: 10
//     return data * 2;
// }).then(function (firstThenValue) {
//     console.log("Step 2:", firstThenValue); // Output: Step 2: 20
//     return firstThenValue + 3;
// }).then(function (secondThenValue) {
//     console.log("Step 3:", secondThenValue); // Output: Step 3: 23
//     return secondThenValue * 2;
// }).then(function (thirdThenValue) {
//     console.log("Step 4:", thirdThenValue); // Output: Step 4: 46
// });

// Question 3:
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error(300));
//     }, 2000);
//     reject(100);
//     setTimeout(function () {
//         reject(new Error(401));
//     }, 200);
//     resolve(200);
//     setTimeout(function () {
//         reject(new Error(500));
//     }, 2000);
// });

// p.then(function (data) {
//     console.log(1);
// }).catch(function (err) {
//     console.log(2);
//     console.log(err);
// }).finally(function () {
//     console.log(3);
// });

// p.then(
//     function (value) {
//         console.log("44");
//     },
//     function (err) {
//         console.log("Err: " + err);
//     }
// );

// // Question 4:
// Promise.resolve(1).then(() => 2)
//     .then(3)
//     .then((value) => value * 3)
//     .then(Promise.resolve(4)).then(console.log);

// // Question 5:
// Promise.resolve(1).then(() => 2)
//     .then(3)
//     .then((value) => value * 3)
//     .then(() => Promise.resolve(4)).then(console.log);

// Question 6:
// Finally Can't accept any argument.
// Finally can return or throw error only.
// Promise.resolve(1)
//     .finally((data) => {
//         console.log("From Finally: " + data);
//         // return Promise.reject('error');
//     })
//     .catch((error) => {
//         console.error(error);
//         throw 'error2';
//     })
//     .then((data) => {
//         console.log("From Then line no 85: " + data);
//         return Promise.resolve(2);
//     })
//     .then(console.log)
//     .then(console.log)
//     .catch(console.log);


// Question 7:
Promise.resolve(1)
    .finally((data) => {
        console.log("3", data); // Output: 3 undefined
        return Promise.reject('error');
        // console.log("7", error); // Output: 7 error
        // throw error;
    })
    .finally((data) => {
        console.log("11", data); // Output: 11 undefined
        let rPromise = Promise.resolve(2);
        let thenPromise = rPromise.then(console.log); // Output: 2
        return thenPromise;  // this will be ignored because finally can only return error or form of any error.
    })
    .then(console.log)
    .catch(console.log);
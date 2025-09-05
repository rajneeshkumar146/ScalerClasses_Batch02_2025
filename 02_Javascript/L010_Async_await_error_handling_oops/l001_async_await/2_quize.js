function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Value: " + x);
            resolve(x);
        }, delay);
    });
}

// (function () {
//     let a = resolveAfterNSeconds(1000, 1)
//     a.then(async function (x) {
//         // Time: 1s

//         let y = await resolveAfterNSeconds(2000, 2) // Time: 1 + 2 = 3s
//         let z = await resolveAfterNSeconds(1000, 3) // Time: 1 + 2 + 1 = 4s


//         // let p = await resolveAfterNSeconds(2000, 4);  // Time: 1 + 2 + 1 + 2 = 6s
//         // let q = await resolveAfterNSeconds(1000, 5);   // Time: 1 + 2 + 1 + 2 + 1 = 7s

//         let p1 = resolveAfterNSeconds(2000, 4); // Time:  1 + 2 + 1  + 2 = 6s
//         let q1 = resolveAfterNSeconds(1000, 5); // Time: 1 + 2 + 1 + 1 = 5s


//         console.log(x + y + z + await p1 + await q1);  // Total time wil be 6s

//         // console.log(x + y + z + p + q);

//         /**
//          * litreal meaning of await -> waiting for some result 
//          * if result is pdening -> wait
//          * if your result -> use 
//          * **/
//     })
// })();

// Statement 2
// const a = (async function () {
//     return await Promise.resolve('Feraz');
// })();
// console.log(a);
// a.then(function (data) {
//     console.log(data);
// });

// Statement 3
async function getData() {
    return 10
}

// async function print(a) {
//     let b = await a;
//     console.log(b);
// }

// print(getData())

// getData().then(console.log);
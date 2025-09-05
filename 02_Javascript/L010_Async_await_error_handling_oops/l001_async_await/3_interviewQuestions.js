let fs = require("fs");

console.log("before");

// fs.promises.readFile("./f1.txt")
//     .then((data) => {
//         console.log("My Content is: " + data);
//         return fs.promises.readFile("./f2.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//         return fs.promises.readFile("./f3.txt");
//     }).then((data) => {
//         console.log("My Content is: " + data);
//     }).catch((err) => {
//         console.log("Ohh! I hit by error: " + err);
//     });


async function fn() {
    try {
        let data1 = await fs.promises.readFile("./f1.txt");
        console.log("My Content is: " + data1);

        let data2 = await fs.promises.readFile("./f2.txt");
        console.log("My Content is: " + data2);

        let data3 = await fs.promises.readFile("./f3.txt");
        console.log("My Content is: " + data3);

        // console.log("My combined Content is: " + data1 + data2 + data3);
        return "rVal from fn";
    } catch (err) {
        console.log("Ohh! I hit by error: " + err);
    }
}
// let rVal = fn();
// console.log("Rval from line no 30: " + rVal);
// rVal.then((data) => {
//     console.log("rVal from no 30 using then: " + data);
// });

// async function fn2() {
//     try {
//         let rValData = await rVal;
//         console.log("Rval from line no 30 using async: " + rValData);
//     } catch (err) {
//         console.log("Ohh! I hit by error: " + err);
//     }
// }
// fn2();

// console.log("after");
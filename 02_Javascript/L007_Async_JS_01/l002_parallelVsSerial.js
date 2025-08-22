/** 
 * Task:
    * Serial Tasks:
    * Parallel Tasks:
 *
 * Code
 *  Asynchronous
 *  Synchronous code
 *
 * Which type of tasks are done serially
 * Serial Tasks: Dependedend Work
 * video -> 3gb -> cloud
 *  : download -> compress -> upload on our server
 * Parallel Task : task that are independent
 */

const fs = require("fs");

/**
 * synchronous function given by nodejs to read a file
 * */

// console.log("Before");
// const buffer = fs.readFileSync("./f1.txt");
// console.log("" + buffer);
// console.log("After");

/****
 *
 * Asynchrouns function to read a file
 *
 * */

// console.log("Before");
// fs.readFile("./f1.txt", function(err, data){
//     console.log("" + data);
// })
// console.log("After");

/***  Question 1
 * 1. you can block the main thread 
 * 2. given 2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * 
 * */

// // Example of serial task.

// console.log("Before");

// const content1 = fs.readFileSync("./f1.txt");
// const content2 = fs.readFileSync("./f2.txt");
// console.log("Concated Result: " + content1 + " & " + content2);

// console.log("After");

/***  Question 2
 * 1. You do not have to block the main thread
 * 2. given  2 files -> read them  and  print the output in any order.
 * */


// Because of Race condition whatever file completed first will get executed.
// console.log("Before");
// const cb = function (err, data) {
//     console.log("" + data);
// }
// fs.readFile("./f1.txt", cb);
// fs.readFile("./f2.txt", cb);
// console.log("After");

/***
 * 1. You do not have to block the main thread 
 * 2. given  2 files -> read them  and 
 * 3. give me the concatenated result in the order for the file supplied
 * 
 * */

// console.log("Before");
// fs.readFile("./f1.txt", (err, readContent1) => {
//     fs.readFile("./f2.txt", (err, readContent2) => {
//         console.log("Concated Result: " + readContent1 + " " + readContent2);
//     });
// });
// console.log("After");


// Question: You have a list of mutiple file path's  your have to read all of them without blocking the main thread.
// Make sure all the files will get printed in the same order as it is present in list.
// Size of List <= 10000, You are not allowed to use any derivative of promise.

let listOfPath = ["./f1.txt", "./f2.txt"];


// function readFileRec(listOfPath) {
//     if (listOfPath.length === 0) {
//         return "";
//     }


//     fs.readFile(listOfPath.pop(), cb);
//     function cb(err, content) {
//         res = readFileRec(listOfPath);
//         res = "" + content + " & " + res;
//         console.log(res);
//         return res;
//     }
// }

// rsf: result so far.
function readFileRec(listOfPath, idx, rsf) {
    if (idx === listOfPath.length) {
        console.log(rsf);
        return;
    }

    fs.readFile(listOfPath[idx], function (err, content) {
        readFileRec(listOfPath, idx + 1, rsf + " " + content);
    });
}

readFileRec(listOfPath, 0, "");
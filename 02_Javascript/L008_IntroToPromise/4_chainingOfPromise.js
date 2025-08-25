const fs = require("fs");
console.log("before");


/****************** Chaining my then and catch. *****************/

// const promise = fs.promises.readFile("./f1.txt");
// promise
//     .catch((err) => {
//         console.log("Error is: " + err);
//     })
//     .then((futureValue) => {
//         console.log("Data inside in the file is: " + futureValue);
//     });



// fs.promises.readFile("./f1.txt")
//     .then((futureValueFromFile1) => {
//         console.log("Data inside in the file is: " + futureValueFromFile1);
//         fs.promises.readFile("./f2.txt")
//             .then((futureValueFromFile2) => {
//                 console.log("Data inside in the file is: " + futureValueFromFile2);
//                 fs.promises.readFile("./f3.txt")
//                     .then((futureValueFromFile3) => {
//                         console.log("Data inside in the file is: " + futureValueFromFile3);
//                         fs.promises.readFile("./f4.txt")
//                             .then((futureValueFromFile4) => {
//                                 console.log("Data inside in the file is: " + futureValueFromFile4);
//                             }).catch((err) => {
//                                 console.log("Error is: " + err);
//                             })
//                     }).catch((err) => {
//                         console.log("Error is: " + err);
//                     })
//             }).catch((err) => {
//                 console.log("Error is: " + err);
//             })
//     }).catch((err) => {
//         console.log("Error is: " + err);
//     });


/** Chaining */
fs.promises.readFile("./f1.txt")
    .then((data) => {
        console.log("Data inside in the file1: " + data);
        return fs.promises.readFile("./f2.txt");
    }).then((data) => {
        console.log("Data inside in the file2: " + data);
        return fs.promises.readFile("./f3.txt");
    }).then((data) => {
        console.log("Data inside in the file3: " + data);
        return fs.promises.readFile("./f4.txt");
    }).then((data) => {
        console.log("Data inside in the file4: " + data);
    }).catch((err) => {
        console.log("Ohh!!! I hit by error: " + err);
    });
// // Q1_1
// function outer() {
//     let arrFn = [];
//     // var i = 0;
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         });
//     }
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// // Q1_2
function outer() {
    /**
     * arrfns block scope refer to -> functions
     * */
    let arrFn = [];
    // var i = 0;
    // let i = 0;
    for (let i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            i++;
            console.log(i);
        });
    }
    return arrFn;
}

let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();
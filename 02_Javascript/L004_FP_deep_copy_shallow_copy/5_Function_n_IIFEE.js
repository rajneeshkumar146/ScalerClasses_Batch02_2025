/**
 * functions are also object
 * object : key : value pair  
 * */


// Fn defination.
// function fn() {
//     console.log("Hi I am an fn");
//     fn.count++;
// }

// console.log(typeof fn);

// fn.count = 0;  // If function is an object, It should allow to create key-value pair.
// fn();
// fn();
// fn();
// console.log(fn.count);


// Add a property to fn.
// fn.showCount = function () {
//     console.log("Count on fn is: ", this.count);
// }

// fn.showCount();

// for(let key in fn){
//     console.log("Key: ", key, " Value: ", fn[key]);
// }

/*documentation -> function are the object that implements callable constructor
/**Layman: fn is an object that can also be called */

/***
 *  0. function are first class citizens in JS -> 
 *  1. functions also behave as variables in JS
 *  2. Assign a variable , pass a variable as a parameter, return a variable  
 * */

/******a. assignment***/
// let a = [10, 20, 30];
// let b = a;

/**fn experssion**/
// const addrFn = function () {
//     console.log(" I am a variable that's why addrfn stores my address");
// }
// addrFn();

// const fn = function (cb) {
//     console.log("I recived a param: ", cb);
//     Name = "Rajneesh";
//     if (typeof cb === 'function') {
//         cb(Name);
//         return () => {
//             console.log("I am returned function.")
//         }
//     }
// }

// const smallFn = (name) => {
//     console.log("I am smaller fn, My name is: ", name);
// }

// const returnVal = fn(smallFn);
// fn({ "name": "Rajneesh" });
// returnVal();


// A bug in function.

// real();
// // this can cause a bug 
// function real() { console.log("I am real. Always run me"); }
// function real() { console.log("No I am real one "); }
// function real() { console.log("You both are wasted"); }

// Solution of this bug.
// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }


// IIFE.
(function (abc) {
    console.log("IIFE: ", abc);
})(10);
// statement 1 ----------------------------------------
// Native object and a Host object.

/*
    Environment:
        Host object:
            Browser -> [window, document, localStorage]
            Nodejs -> [global, os, process]

    JavaScript:
        Native Object:
           [Date, JSON, Object]
*/


// Global Area
// GEC -> Var will go to global object.
// All the var and non data type variables are become part of window at the time of compilation. 
// Because of that we are able to access these variables before its decalrtion.

// console.log("Line14: ", window);
// console.log(firstVal2);
// firstVal2="steve";
// var firstVal2;
// let secondVal = "loki";
// console.log(firstVal2)
// console.log("Line20: ", window);

// -----------------------------------------------------------------------------

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object, Example: cap.sayHi()
// EC is created with -> function call -> this will be that window, Example: let a =  cap.sayHi and then a(). 
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
//         console.log("Hi from ", this.firstName);
//     }
// };

// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// // var firstName = "loki";
// sayHiAdd();

/********************** Question 2 ******************/

// let cap2 = {
//     firstName: "Steve",
//     sayHi: function (param) {
//         console.log("52", this.firstName);
//         const iAmInner = function (param) {
//             console.log("54", this.firstName);
//         }
//         // EC by this kind of call -> window
//         iAmInner(20);
//     }
// }

// EC by this -> cap
// cap2.sayHi(10);


/*****************Question3 *******************/
// var -> GEC 
let cap3 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName);
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const iAmInner = () => {
            console.log("55", this.firstName);
        }
        iAmInner();
    }
}
cap3.sayHi();


/*****************Question4 *******************/
// var firstName = "thanos";
// let cap4 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("91", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//         const subInner = () => {
//             console.log("94", this.firstName);
//             const iAmInner = () => {
//                 console.log("95", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap4.sayHi();

/*****************Question5 *******************/
//  Homwork.
var firstName = "thanos";
let cap5 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("109", this.firstName);
        const subInner = () => {
            console.log("94", this.firstName);
            const iAmInner = function () {
                console.log("114", this.firstName);

                const iAmSuperInner = () => {
                    console.log("117", this.firstName);
                }
                iAmSuperInner();
            }
            iAmInner();
        }
        subInner();
    }
}
cap5.sayHi();
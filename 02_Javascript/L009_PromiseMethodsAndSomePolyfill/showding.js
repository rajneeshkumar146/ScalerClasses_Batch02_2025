//statement 1:
// All variables are in the same scope and pointing to same address memory.
// var fruits = "apple";
// console.log(fruits); // apple
// {
//     console.log(fruits);  // apple
//     var fruits;
//     console.log(fruits); // apple
//     fruits = "orange";
//     {
//         console.log(fruits) // orange
//     }
//     console.log(fruits); // orange
// }
// console.log(fruits); // orange


//statement 2:
// let fruits = "apple";
// console.log(fruits); // apple
// {
//     console.log(fruits);  // apple, if next line is enabled then it will show error
//     // let fruits;
//     console.log(fruits); // apple
//     fruits = "orange";
//     {
//         console.log(fruits) // orange
//     }
//     console.log(fruits); // orange
// }
// console.log(fruits); // orange


//statement 3:
// let fruits = "apple";
// console.log(fruits); // apple
// {
//     let fruits;
//     console.log(fruits);  // undefined
//     fruits = "orange";
//     {
//         let fruits;
//         console.log(fruits) // undefined
//     }
//     console.log(fruits); // orange
// }
// console.log(fruits); // apple

//statement 4:
// illegal shadowing
// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         var fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);

//statement 5:
// reverse shadowing is allowed.
// var fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits);
//     {
//         let fruits;
//         console.log("28",fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);


let a = [];

a.__proto__.sum = () => {
    console.log("Hi");
}

Array.prototype.sum = () => {
    console.log("Hi");
}

a.__proto__.sum();
a.sum();


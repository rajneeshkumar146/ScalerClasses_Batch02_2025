/*
 *Intro to closures.*
   1. Closure is a JavaScript lexical scoping technique used to preserve variables from 
      a function's outer scope in its inner scope.
   2. In lexical scoping, the scope of a variable is defined by its position in the source code.
   3. Whenever you define a function, the variables it contains are only accessible 
      within the function.
   4. If you try to access variables within a function from outside it will result 
      in a scope error. Closure can solve this problem.
*/

// let varName = "I am here";
// function fn(){
//     // let varName = 10;
//     function inner(){
//         console.log(varName);
//     }
//     console.log(varName);
//     inner();
// }
// fn();

function outerFunction() {
    console.log("first line of outerfunction: ", count);
    var count = 0;
    function innerFunction() {
        count++;
        return count
    }
    // count = 10;
    console.log("second line of outerfunction: ", count);
    return innerFunction
}

const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
const innerFunc2 = outerFunction();
console.log(innerFunc2());
console.log(innerFunc());
console.log(innerFunc());
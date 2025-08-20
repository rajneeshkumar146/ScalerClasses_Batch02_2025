// Function Currying
function counter(args) {

}



console.log(counter(0));  // 1
console.log(counter()(0)); // 2
console.log(counter()()(0)); // 3
console.log(counter()()()()()(0)); // 6



function sum(a) {

}

console.log(sum()); // 0
console.log(sum(1)()); // 1
console.log(sum(3)(4)()); // 7
console.log(sum(3)(7)(8)()); // 18
let obj = {
    age: 26
}

Object.defineProperty(obj, 'name', {
    value: "Rajneesh",
    enumerable: true
});

Object.defineProperty(obj, 'age2', {
    value: "25",
    enumerable: false
});

Object.defineProperty(obj, 'test', {
    value: "fail",
    enumerable: false
});

Object.defineProperty(obj, 'test2', {
    value: "fail2",
    enumerable: true
});

Object.defineProperty(obj, 'test3', {
    value: "fail3",
    enumerable: false
});

// console.log(obj);
// for (let key in obj) {
//     console.log("in loops: ", key);
// 


Object.defineProperty(obj, 'property1', {
    value: 25,
    writable: false,    // Not allowed to override its value.
});

obj.property1 = 100;

console.log(obj);
console.log(obj.property1);





/*
 Use case of enumerable = false.
 1. to declare private key which is not overridden and iterable.

 Example: 
 a. you build a credit card class which have a key amount and it is obly changed by function call when payment is done.
 b. It is used in network call when you are preperaing you response before network call and reponse have metadata information which is not suppose to be iterable and changable.
 

*/

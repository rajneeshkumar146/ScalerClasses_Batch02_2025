/**
 * functions are also object
 * object : key : value pair  
 * */


// Fn defination.
function fn() {
    console.log("Hi I am an fn");
    fn.count++;
}

// console.log(typeof fn);

fn.count = 0;  // If function is an object, It should allow to create key-value pair.
fn();
fn();
fn();
console.log(fn.count);


// Add a property to fn.
fn.showCount = function () {
    console.log("Count on fn is: ", this.count);
}

fn.showCount();

// for(let key in fn){
//     console.log("Key: ", key, " Value: ", fn[key]);
// }

/*documentation -> function are the object that implements callable constructor
/**Layman: fn is an object that can also be called */
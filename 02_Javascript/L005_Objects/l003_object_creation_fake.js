/****1 function constructor before es6*******************/

// function Person(name, age) {
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//         return this;
//     }

//     console.log(this.sayHi());
// }

// // A normal function call.
// // Person("Rajneesh", 27);
// console.log(typeof Person);


// // This will create a object. 
// const abhishek = new Person("Abhishek", 25);
// console.log(typeof abhishek);
// abhishek.sayHi();

/****** after es6 *********/
//  class -> strict mode 


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//     }

//     sayBye() {
//         console.log(`I am ${this.name} and ${this.age} years old, Have a nice day!`);
//     }
// }

// class SuperHuman extends Person {
//     constructor(name, age) {
//         super(name, age); // Super will call parent class constructor.
//     }

//     sayHi() {
//         console.log(`I am ${this.name} and ${this.age} years old, I want to say Hi!`);
//     }
// }

// const rajneesh = new Person("Rajneesh", 26);
// rajneesh.sayHi();

// const abhishek = new SuperHuman("Abhishek", 25);
// abhishek.sayHi();
// abhishek.sayBye();  // It is inherited property.


/***
 * inheritance :  code sharing , saving memory 
 * Prototype is : 
 * In JS we create object from an object ->  that object is your parent or prototype ->that chain goes on 
 * Prototypal Inheritance : you inherit the properties from a parent object/ prototype and that inheritance -> 
 * Prototypal Inheritance.
 * Prottype chain
 * 
 * */


/*
Class over Function/Object
1. readability and easy to understand.
2. Class remove the conflict, That a function can behave like a object.
3.  class is suppose to construct only not called by someone.
*/

// var varName = 10;
// function b() {
//     console.log(varName);
// }

// function fn() {
//     var varName = 20;
//     b();
//     console.log(varName);
// } 

// fn();  // 10 20


// HW
// var varName = 10;
// function fn() {
//     var varName = 20;
//     function b() {
//         console.log(varName);
//     }
//     b();
//     console.log(varName);
// }

// fn(); // 20 20 


class Student {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for fullName
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter for fullName
    set fullName(name) {
        const parts = name.split(" ");
        this._firstName = parts[0];
        this._lastName = parts[1] || "";
    }

    // Getter for firstName
    get firstName() {
        return this._firstName;
    }

    // Setter for firstName
    set firstName(value) {
        if (typeof value !== "string") {
            throw new Error("First name must be a string");
        }
        this._firstName = value;
    }
}

const student = new Student("John", "Doe");
console.log(student.fullName); // "John Doe"

student.fullName = "Jane Smith";
console.log(student.firstName); // "Jane"
console.log(student.fullName); // "Jane Smith"

// Using the validation in the setter
// try {
//     student.firstName = 123; // Throws an error
// } catch (error) {
//     console.error(error.message); // "First name must be a string"
// }
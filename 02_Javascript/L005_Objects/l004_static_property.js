// Static methods cannot access instance properties or methods directly
// Static methods are called on the class, not on instances
// Static properties are shared among all instances of the class

// class MathUtils {
//     // Static property
//     static PI = 3.14159;

//     // Static method
//     static square(x) {
//         return x * x;
//     }

//     static cube(x) {
//         return x * x * x;
//     }

//     // Instance method (for comparison)
//     calculateArea(radius) {
//         // Can access static properties using the class name
//         return MathUtils.PI * MathUtils.square(radius);
//     }
// }

// // Using static methods and properties
// console.log(MathUtils.PI); // 3.14159
// console.log(MathUtils.square(5)); // 25
// console.log(MathUtils.cube(3)); // 27

// // Instance methods need an instance
// const utils = new MathUtils();
// console.log(utils.PI);   // Undefined.
// console.log(utils.calculateArea(2)); // 12.56636


// Ques: What are some practical use cases for static methods in JavaScript classes?

// Answer:
// Static methods are useful for utility functions that don't require an instance, 
// factory methods for creating instances with specific configurations, helper methods
//  that operate on the class level rather than instance level, and for implementing 
// the Singleton pattern. They're also useful for methods that provide functionality 
// related to the class concept but don't need access to instance-specific data.



// Data Model -----------------
// Some Real use case.
// class User {
//     constructor(data = {}) {
//         this.id = data.id || null;
//         this.username = data.username || "";
//         this.email = data.email || "";
//         this.createdAt = data.createdAt || new Date();
//     }

//     validate() {
//         if (!this.username) throw new Error("Username is required");
//         if (!this.email.includes("@")) throw new Error("Invalid email");
//         return true;
//     }

//     toJSON() {
//         return {
//             id: this.id,
//             username: this.username,
//             email: this.email,
//             createdAt: this.createdAt,
//         };
//     }

//     static fromJSON(json) {
//         return new User(json);
//     }
// }

// // Usage example
// const user = new User({
//     username: "john_doe",
//     email: "john@example.com",
// });

// console.log(user.validate()); // true
// console.log(user.toJSON());

// State Management -----------------
class Store {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = new Set();
    }

    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }

    getState() {
        return this.state;
    }

    notify() {
        this.listeners.forEach((listener) => listener(this.state));
    }
}

// Usage example
const store = new Store({ count: 0 });
const unsubscribe = store.subscribe((state) => {
    console.log("State updated:", state);
});

store.setState({ count: 1 }); // logs: State updated: { count: 1 }
unsubscribe(); // Remove listener


//  What are some other real-world applications where you might use classes in JavaScript?

/**
 * 
Building form validation systems
Creating game objects and entities
Implementing design patterns
Managing API connections and data fetching
Building animation systems
Creating custom error types
Implementing plugin architectures
 */
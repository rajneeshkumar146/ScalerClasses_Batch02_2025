// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
    sayHi: function () {
        console.log("Hi Class!");
    }
};

// for(let k in person.friends){
//     console.log("Key: ", k, " value: ", person.friends[k]);
// }

// person.sayHi();

function cloneEffective(input) {

}

let superDeeplyClonedObj = cloneEffective(person);
superDeeplyClonedObj.lastName = "Odinson";
superDeeplyClonedObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyClonedObj);


for (let k in superDeeplyClonedObj.friends) {
    console.log("Key: ", k, " value: ", superDeeplyClonedObj.friends[k]);
}

superDeeplyClonedObj.sayHi();

const eventEmitter = require("events");

const myEmitter = new eventEmitter();


// listners.
myEmitter.on("myEvent", (...args) => {
    console.log("Listner 1, There is a new event! ", args);
});

myEmitter.on("myEvent", (...args) => {
    console.log("Listner 2, There is a new event! ", args);
});

const secondCb = (...args) => {
    console.log("Callback listner for the new events: ", args);
    console.log("-------------------");
}

// listen and fire cb.
// myEmitter.on("myEvent", secondCb);

// Do not listen.
myEmitter.off("myEvent", secondCb);

// Emit an event.
myEmitter.emit("myEvent", 1, 2);
myEmitter.emit("myEvent", 7, 9);


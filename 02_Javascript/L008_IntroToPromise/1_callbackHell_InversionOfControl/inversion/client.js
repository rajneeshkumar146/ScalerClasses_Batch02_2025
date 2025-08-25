const { runMlAlgo, PromiseRunMlAlgo } = require("./lib");

console.log("Before");


let amount = 100;
let priceOfOne = 20;

function logicToDeductAmount() {
    amount = amount - priceOfOne;
    console.log("Amount: ", amount);
}

// runMlAlgo(logicToDeductAmount);
const promise = PromiseRunMlAlgo();
promise.then(() => {
    logicToDeductAmount();
}).catch((err) => {
    console.log("error is: " + err);
});

console.log("After");
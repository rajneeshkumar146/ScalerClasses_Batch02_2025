const { runMlAlgo } = require("./lib");

console.log("Before");


let amount = 100;
let priceOfOne = 20;

function logicToDeductAmount() {
    amount = amount - priceOfOne;
    console.log("Amount: ", amount);
}

// runMlAlgo(logicToDeductAmount);

console.log("After");
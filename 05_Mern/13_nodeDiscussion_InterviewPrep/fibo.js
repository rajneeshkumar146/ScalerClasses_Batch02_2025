const express = require("express");


const app = express();

// serve the static files unser public directory.
app.use(express.static("public"));


function calculateFibo(number) {
    if (number <= 1) {
        return number;
    }

    return calculateFibo(number - 1) + calculateFibo(number - 2);
}

app.get("/fib", (req, res) => {
    const { number, requestNumber } = req.query;
    console.log("Handler function ran for the request number: ", requestNumber);

    if (!number || isNaN(number)) {
        return res.status(400).send("Invalid Number");
    }

    const answer = calculateFibo(parseInt(number));

    res.status(200).json({
        status: "success",
        message: answer,
        requestNumber,
    });
});

app.listen(3000, () => {
    console.log("server is running on port http://localhost:3000");
})
// Import the module.
const express = require("express");



// Create an express application.
const app = express();
app.use(express.json()); // It is a middleware for all post request which help to receive requst body which my server can understand.


// Define a route.
// Base Url: http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello Server");
});

// Base Url: http://localhost:3000/about
// curl --request GET http://localhost:3000/about
app.get("/about", (req, res) => {
    res.send("This is about page.");
});

// Base Url: http://localhost:3000/data
app.post("/data", (req, res) => {
    console.log("Request recived: ", req.body);
    res.send("This is post request");
});

const users = [
    { id: 1, name: "Rishav" },
    { id: 2, name: "Avirup" },
    { id: 3, name: "feraz" }
];

// Base Url: http://localhost:3000/users
app.post("/users", (req, res) => {
    const newUser = req.body;
    
    if(newUser == null || newUser == undefined || newUser.name == undefined){
        return res.status(400).json({message: "Invalid request body"});
    }

    const userExistIndex = users.findIndex((user) => user.name == newUser.name);
    if(userExistIndex != -1){
        return res.status(400).json({message: "Requested User is already in DB"});
    }

    // operation 
    const userId = users.length + 1;
    newUser.id = userId;

    // persist this information in your DB.
    users.push(newUser);

    // send the status code.
    res.status(201).json({ message: "User created: ", user: newUser });

    console.log("Print all users: ", users);
});

// Base Url: http://localhost:3000/payments
const userDb = [];
const notAllowedPayments = ["t", "T", "R"]; 
app.post("/payments", (req, res) => {
    const paymentBody = req.body;
    let isInValidUser = notAllowedPayments.some(indetifier => paymentBody.user.startsWith(indetifier));

    if(isInValidUser){
        res.status(400).json({message: "Invalid User"});
    }else{
        userDb.push(paymentBody);
        res.status(201).json({message: "Valid User, User is saved"});
    }

    console.log("Print all Users: ", userDb);
});

// Base Url: http://localhost:3000/users/1
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    // find the user with id.
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        return res.status(404).json({ message: "user not found" });
    }

    users.splice(userIndex, 1);
    res.status(200).json({message: "User Deleted!"});

    console.log("Print all Users: ", users);
});

const loggerMiddleware_logging = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    res.send("Request is logged and don't call next middleware");  // some condition.
    // next(); // call the next middleware.
}

const loggerMiddleware_validation = (req, res, next) => {
    console.log("Validation process begins: " + `[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // res.send("Request is not Validated and don't call next middleware");  // some condition.
    next(); // call the next middleware.
}

// Base Url: http://localhost:3000/special
app.get("/special", loggerMiddleware_logging,loggerMiddleware_validation, (req, res) => {
    res.send("Welcome to special route");
});


// Base Url: http://localhost:3000/search?name="Rajneesh"
app.get("/search", (req, res) => {
    const queryParam = req.query;
    console.log("Name: ", queryParam);
    res.send(`Your Parameter are ${JSON.stringify(queryParam)}`);
});

app.use((req,res) => {
    res.status(404).send("Page Not Found!!!");
});


// start the server
const port = 3000;
const host = "localhost";
app.listen(port, () => {
    console.log(`server is running on http://${host}:${port}`);
});


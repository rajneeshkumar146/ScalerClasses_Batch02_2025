const mongoose = require("mongoose");
const express = require("express");

// Constants
const PORT = 3000;
const HOST = "localhost";

// Setup
const app = express();
app.use(express.json());

// Global Variables
const CONNECT_DB = require("./config/db");
const PRODUCT_ROUTER = require("./routes/productRouter");
const USER_ROUTER = require("./routes/userRouter");

// Make DB Connection.
CONNECT_DB();


// Routes
app.use("/api/products", PRODUCT_ROUTER);
app.use("/api/users", USER_ROUTER);

app.get("/", (req, res) =>
    res.status(201).send("Welcome to the home page.")
);

app.use((req, res) =>
    res.status(404).json({ message: "page not found" })
);

// start the server
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});
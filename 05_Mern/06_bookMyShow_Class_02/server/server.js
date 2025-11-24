const mongoose = require("mongoose");
const express = require("express");

// Constants
const PORT = 8082;
const HOST = "localhost";

// Setup
const app = express();
app.use(express.json());

// Make DB Connection.
const CONNECT_DB = require("./config/db");
CONNECT_DB();

// Global Variables
const USER_ROUTER = require("./routes/userRouter");

// Routes
app.use("/api/users", USER_ROUTER);


app.use((req, res) =>
    res.status(404).json({ message: "page not found" })
);

// start the server
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});
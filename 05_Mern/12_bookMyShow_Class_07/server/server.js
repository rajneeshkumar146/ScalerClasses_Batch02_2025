const mongoose = require("mongoose");
const express = require("express");

// To access env file.
require('dotenv').config();

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
const MOVIE_ROUTER = require("./routes/movieRoute");
const THEATER_ROUTER = require("./routes/theatreRoute");
const SHOW_ROUTER = require("./routes/showRoute");
const BOOKING_ROUTER = require("./routes/bookingRoute");

// Routes
app.use("/api/users", USER_ROUTER);
app.use("/api/movies", MOVIE_ROUTER);
app.use("/api/theatres", THEATER_ROUTER);
app.use("/api/shows", SHOW_ROUTER);
app.use("/api/bookings", BOOKING_ROUTER);

app.use((req, res) =>
    res.status(404).json({ message: "page not found" })
);

// start the server
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});
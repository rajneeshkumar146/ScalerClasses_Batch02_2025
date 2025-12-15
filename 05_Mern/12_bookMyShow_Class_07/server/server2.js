const mongoose = require("mongoose");
const express = require("express");
const rateLimit = require('express-rate-limit');
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require('helmet');

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

// Use helmet for setting various HTTP headers for security
app.use(helmet());
// Custom Content Security Policy (CSP) configuration
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "example.com"], // Allow scripts from 'self' and example.com
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"], // Allow inline styles (unsafe)
            imgSrc: ["'self'", "data:", "example.com"], // Allow images from 'self', data URLs, and example.com
            connectSrc: ["'self'", "api.example.com"], // Allow connections to 'self' and api.example.com
            fontSrc: ["'self'", "fonts.gstatic.com"], // Allow fonts from 'self' and fonts.gstatic.com
            objectSrc: ["'none'"], // Disallow object, embed, and applet elements
            upgradeInsecureRequests: [], // Upgrade insecure requests to HTTPS
        },
    })
);

// Rate limiter middleware
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`.
    message: "Too many requests from this IP, please try again after 15 minutes"
});

// Apply rate limiter to all API routes
app.use("/api/", apiLimiter);

// Sanitize user input to prevent MongoDB Operator Injection
app.use(mongoSanitize());

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
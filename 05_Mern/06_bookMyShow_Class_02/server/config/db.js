const mongoose = require("mongoose");
require('dotenv').config();

// Important links and URL.
const DB_URL = process.env.DB_URL;

// console.log("\nPrinting DB URL For Debugging purpose only:", DB_URL, "\n");

// Connect to DB.
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to MongoDB.");
    } catch (err) {
        console.log("Error: ", err);
    }
}

module.exports = connectDB;
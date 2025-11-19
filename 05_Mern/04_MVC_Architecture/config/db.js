const mongoose = require("mongoose");

// Important links and URL.
const DB_URL = "mongodb+srv://rajneeshkumar146_db_user:QVh6uVWK4xKBYuhd@cluster0.l2uqpve.mongodb.net/";

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
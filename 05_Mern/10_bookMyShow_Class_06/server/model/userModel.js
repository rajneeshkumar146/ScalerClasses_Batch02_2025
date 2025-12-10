const mongoose = require('mongoose');


/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "isAdmin":false
 */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "partner"],
        default: "user"
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
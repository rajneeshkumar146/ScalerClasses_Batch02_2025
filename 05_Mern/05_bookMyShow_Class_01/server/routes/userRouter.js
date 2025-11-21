const express = require("express");
const {
    register,
    login,
    getCurrentUser 
}   = require("../controller/userController");

const userRouter = express.Router();


// POST 
userRouter.post("/register", register);

module.exports = userRouter;

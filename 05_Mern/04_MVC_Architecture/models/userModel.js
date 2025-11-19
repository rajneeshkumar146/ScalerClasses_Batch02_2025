const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    upadtedAt: Date,
});


// Hooks
userSchema.pre("save", function(next){
    const now = new Date();
    this.upadtedAt = now;
    if(!this.createdAt){
        this.createdAt = now;
    }
    next();
});


userSchema.post('save', (doc, next) => {
    console.log(`User ${doc.name} has been saved`);
    next();
});


const userModel = mongoose.model("Users",  userSchema);
module.exports = userModel;
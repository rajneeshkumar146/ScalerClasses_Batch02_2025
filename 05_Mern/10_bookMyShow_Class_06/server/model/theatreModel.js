const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema(
    {
        // Name of theathre.
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        // Current theathre is approved by admin or not.
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Theatre = mongoose.model("theatre", theatreSchema);

module.exports = Theatre;

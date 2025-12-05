const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");


/**
 "name":"siri",
 "email":"siri@apple.com",
 "password":"steve",
 "isAdmin":false
 */

const getCurrentUser = async (req, res) => {
    try {
        const id = req.body.userId;
        const user = await userModel.findById(id).select("-password");

        // TODO(rajneesh): Remove this line once development is done.
        console.log("User found for id: ", id, " data: ", user);

        return res.status(200).send({
            success: true,
            data: user,
            message: "You are authorized person!"
        });
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user:", err });
    }
};

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User does not exist. Please register!"
            });
        }

        // Simplified password validation.
        if (req.body.password !== user.password) {
            return res.status(401).send({
                success: false,
                message: "Sorry, Invalid password entered! Please try again"
            });
        }

        // Create login token.
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "10d"
        });

        // TODO(rajneesh): Remove this line once development is done.
        console.log("Login Succefully!");
        console.log("\nPrinting token for debugging prupose, In user Controller: ", token);

        res.status(200).send({
            success: true,
            message: "You've successfully logged in!",
            data: token,
        });
    } catch (err) {
        // TODO(rajneesh): Remove this line once development is done.
        console.log("Error encounterd at the login endpoint:", err)
        res.status(500).send({
            success: false,
            message: "An error occurred. Please try again later." + err,
        });
    }

};

const register = async (req, res) => {
    try {
        const isUserExist = await userModel.findOne({ email: req.body.email });

        if (isUserExist) {
            return res.send({
                success: false,
                message: "User already registerd."
            });
        }

        const newuser = await userModel.create(req.body);

        // TODO(rajneesh): Remove this line once development is done.
        console.log("Registraion successfuly. Please login: ", newuser);
        return res.send({
            success: true,
            message: "Registraion successfuly. Please login: ", newuser
        });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


module.exports = {
    register,
    login,
    getCurrentUser,
};


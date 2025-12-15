const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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

async function hashPassword(password){
    console.time("Time taken");

    const salt = await bcrypt.genSalt(20);  // 20 is a huge number it will take minutes to create hashed Password. 
    console.log("Salt: ", salt);

    const hashPassword = await bcrypt.hash(password, salt);
    console.log("hashPassword: ", hashPassword);

    console.timeEnd("Time taken");
    console.log("*********************************************")
}

const login = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User does not exist. Please register!"
            });
        }

        // const pasword = "atish@123";
        // hashPassword(pasword);

        // // Simplified password validation.
        // if (req.body.password !== user.password) {
        //     return res.status(401).send({
        //         success: false,
        //         message: "Sorry, Invalid password entered! Please try again"
        //     });
        // }


         const isMatch = await bcrypt.compare(req.body.password, user.password);
         if (!isMatch) {
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

        // const newUser = await userModel.create(req.body);

        // Hash the password.
        const saltRounds = 10; // The higher the number, the more secure but slower the hasing proccess.
        const hashPasswords = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = new userModel({
            ...req.body,
            password: hashPasswords
        });

        await newUser.save();

        return res.send({
            success: true,
            message: "Registraion successfuly. Please login!",
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


const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    try {
        console.log("Req Headers:", req.headers.authorization);
        if (req.headers == undefined || req.headers.authorization == null || req.headers.authorization == undefined) {
            res.status.json({ success: false, message: "No header is passed!" });
        }


        const token = req.headers.authorization.split(" ")[1];
        console.log("Token: ", token);

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified Token: ", verifiedToken);

        req.body.userId = verifiedToken.userId;
        console.log("Rer.body.userId: ", req.body.userId);
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Token Invalid!" });
    }
};


module.exports = auth;
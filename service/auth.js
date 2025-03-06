const jwt = require("jsonwebtoken");
const secret = "Chetak#$9876@$";

// Create a token
function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,

        }, secret);
}

// Verify a token
function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}


module.exports = {
    setUser,
    getUser,

};
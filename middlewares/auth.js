const userDB = require("../db/user.db");
const Jwt = require("jsonwebtoken");

const isUserExists = async (req, res, next) => {
  try {
    const result = await userDB.findUserByEmail(req.body.email);
    if (result == null) {
      return next();
    }
    throw new Error("User already exits");
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: null,
      data: null,
      error: err.message,
    });
  }
};
const validateToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header)
    return res.status(400).json({ status: 400, error: "Auth token is required" });
  const token = header.split(" ")[1];
  if (!token) return res.status(400).json({ status: 400, error: "Invalid token" });
  try {
    const decoded = Jwt.verify(token, process.env.SIGNIN_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(404).json({
      status: 400,
      message: "invalid token",
      error: err.message,
      data: null,
    });
  }
};

module.exports = {
  isUserExists,
  validateToken,
};

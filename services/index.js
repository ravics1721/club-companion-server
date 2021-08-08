const Jwt = require("jsonwebtoken");
const userDB = require("../db/user.db");
const bcrypt = require("bcrypt");

const services = {
  addNewUser: async (req, res) => {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await userDB.addNewUser({
      name: name,
      email: email,
      password: hashPassword,
    });
    return res.status(200).json({
      status: 200,
      message: "Successfully created new user",
      data: result.email,
      error: null,
    });
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const result = await userDB.findUserByEmail(email);
    if (result == null) {
      return res.status(404).json({
        status: 404,
        data: null,
        message: "User does not exists",
        error: "User does not exists",
      });
    }
    const isValid = await bcrypt.compare(password, result.password);
    if (isValid) {
      const token = await Jwt.sign(
        {
          id: result.id,
          email: result.email,
        },
        process.env.SIGNIN_SECRET,
        {
          expiresIn: "10h",
          algorithm: "HS256",
        },
      );
      return res.status(200).json({
        status: 200,
        data: {
          token: token,
        },
        message: "Successfully logged",
        error: null,
      });
    }
    return res.status(400).json({
      status: 400,
      data: null,
      message: "Invalid password",
      error: "Invalid password",
    });
  },
};

module.exports = services;

const express = require("express");
const authCtr = require("../controllers/auth.ctr");
const authMdle = require("../middlewares/auth");
const services = require("../services/index");
const authRoutes = express.Router();

authRoutes.post("/signup", authCtr.signup, authMdle.isUserExists, services.addNewUser);
authRoutes.post("/login", authCtr.login, services.loginUser);

module.exports = authRoutes;

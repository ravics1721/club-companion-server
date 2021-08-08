const express = require("express");
const authMdle = require("../middlewares/auth");
const router = express.Router();

router.get("/user", authMdle.validateToken, (req, res) => {
  res.json({
    message: "Welcome to the club companion server user 🌈🚀",
    data: req.userData,
  });
});

module.exports = router;

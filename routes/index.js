const express = require("express");
const authRoutes = require("./auth");
const usersRoutes = require("./user");
const commonRoutes = require("./common");

const router = {
  init: (app) => {
    app.use("/", commonRoutes);
    app.use("/api", authRoutes);
    app.use("/api", usersRoutes);
  },
};
module.exports = router;

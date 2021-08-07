const express = require('express');
const authRoutes = require('./auth');
const commonRoute = express.Router();

commonRoute.get("/", (req, res) => {
    res.json({
        message: "Welcome to the club companion server"
    })
})
module.exports = commonRoute
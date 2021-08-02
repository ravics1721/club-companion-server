const express = require('express');
const authRoutes = express.Router();

authRoutes.route("/auth")
    .get((req, res) => {
        res.json({
            message:"Auth routes",
        })
    })

module.exports = authRoutes;
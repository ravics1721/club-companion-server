const express = require('express');
const router = express.Router();


router.get("/user", (req, res) => {
    res.json({
        message: "Welcome to the club companion server user 🌈🚀"
    })
})

module.exports = router
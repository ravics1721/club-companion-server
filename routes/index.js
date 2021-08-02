const express = require('express');
const authRoutes = require('./auth');
const router = express.Router();
const usersRoutes = require('./user');

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to the club companion server"
    })
})

router.use(authRoutes);
router.use(usersRoutes);
module.exports = router;
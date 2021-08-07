const express = require('express');
const authRoutes = require('./auth');
const usersRoutes = require('./user');
const commonRoutes = require('./common');

const router = {
    init: (app) => {
        app.use("/", commonRoutes);
    }
}
module.exports = router;
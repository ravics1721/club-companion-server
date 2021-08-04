const express = require('express');
const Prisma = require("@prisma/client");
const authRoutes = express.Router();

const prisma = new Prisma.PrismaClient();

authRoutes.post("/signup",async (req, res) => {
    const user = await prisma.user.create({
        data: {
            ...req.body
        }
    });
    res.json({
        message: "completed",
        data: user
    })
})

module.exports = authRoutes;
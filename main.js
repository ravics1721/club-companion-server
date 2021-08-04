
const env = require('dotenv');
env.config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./routes")
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Defines all routes
app.use("/", routes);


//PORT Declration
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[33m%s\x1b[0m',` ✔ 🌼 Server is running on 🚀 -->`,` http://localhost:${PORT} `);
});


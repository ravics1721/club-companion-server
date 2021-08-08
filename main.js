const env = require("dotenv");
env.config();
const express = require("express");
const middleware = require("./middlewares/index");
const router = require("./routes");
const app = express();

//initialize middleware
middleware.main(app);

//Defines all routes
router.init(app);

//PORT Declration
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(
    "\x1b[36m%s\x1b[33m%s\x1b[0m",
    ` ✔ 🌼 Server is running on 🚀 -->`,
    ` http://localhost:${PORT} `,
  );
});

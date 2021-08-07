const joi = require("joi");
const auth = {
  signup: (req, res, next) => {
    const { name, email, username, password } = req.body;
    //validate request
  },
};

module.exports = authCtr;

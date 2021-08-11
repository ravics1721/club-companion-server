const authSchema = require("../schema/auth");
const authCtr = {
  signup: async (req, res, next) => {
    try {
      const value = await authSchema.signup.validate(req.body);
      if (value.error) {
        throw value.error.message;
      }
      return next();
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: null,
        error: e,
        data: "",
      });
    }
  },
  login: async (req, res, next) => {
    try {
      const value = await authSchema.login.validate(req.body);
      if (value.error) {
        throw value.error.message;
      }
      return next();
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: null,
        error: e,
        data: "",
      });
    }
  },
};

module.exports = authCtr;

const Joi = require("joi");

const auth = {
  signup: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  }),
  login: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  }),
};

module.exports = auth;

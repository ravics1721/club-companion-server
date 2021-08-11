const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const main = (app) => {
  app.use(cors());
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = main;

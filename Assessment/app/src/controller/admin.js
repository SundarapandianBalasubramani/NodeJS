const admins = require("express").Router();

const adminsMiddleWare = require("../middleware/admin");

const { check } = require("express-validator");

const validator = require("../middleware/validator");

admins.post(
  "/",
  check("email")
    .isEmail()
    .withMessage("invalid email address")
    .normalizeEmail(),
  validator,
  adminsMiddleWare
);

module.exports = admins;

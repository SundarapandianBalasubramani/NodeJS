const signup = require("express").Router();

const { check } = require("express-validator");

const signupMiddleWare = require("../middleware/signup");

const validator = require("../middleware/validator");

signup.post(
  "/",
  [
    check("prefferedName")
      .isLength({ min: 3 })
      .withMessage("the preffered name must have minimum length of 3")
      .trim(),

    check("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    check("pwd")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/, "i")
      .withMessage(
        "your password should have min length 8 one upper case and one lower case with one number"
      ),
    check("confirmPwd").custom((value, { req }) => {
      if (value !== req.body.pwd) {
        throw new Error("confirm password does not match");
      }
      return true;
    }),
  ],
  validator,
  signupMiddleWare
);

module.exports = signup;

const db = require("../util/db");
const jwt = require("jsonwebtoken");
const env = require("../env/constants");
const bcrypt = require("bcryptjs");

const unAuthorized = () => {
  throw new Error("Un Authorized");
};

const getToken = (user) => {
  const token = jwt.sign(user, env.secret);
  return {
    token,
    user,
  };
};

const getUserDetail = async (connection, dbCollection, cred) => {
  return db.getOne(connection, dbCollection, {
    email: new RegExp(cred.email, "i"),
  });
};

const validPwd = (pwd, hash) => bcrypt.compare(pwd, hash);

const getUserInfo = async (connection, dbCollection, cred) => {
  try {
    const user = await getUserDetail(connection, dbCollection, cred);
    if (user) {
      const isValidLogIn = await validPwd(cred.pwd, user.pwd);
      if (isValidLogIn) {
        return getToken({
          email: user.email,
          id: user._id,
          name: user.prefferedName,
        });
      }
    }
  } catch (err) {
    console.error(err);
    return unAuthorized();
  }
};

exports.validPwd = validPwd;

exports.getUserDetail = getUserDetail;

exports.getToken = getToken;

exports.unAuthorized = unAuthorized;

exports.getUserInfo = getUserInfo;

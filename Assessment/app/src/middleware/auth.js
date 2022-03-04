const jwt = require("jsonwebtoken");
const env = require("../env/constants");

const auth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  req.isAuthenticated = false;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      let decodedToken = jwt.verify(token, env.secret);
      req.user = decodedToken;
      req.isAuthenticated = true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  next();
};
module.exports = auth;

const env = require("../env/constants");
const getData = require("../util/data");
const db = require("../util/db");
const products = async (req, res, next) => {
  req.dbCollection = env.products;
  if (req.method === "POST" || req.method === "PATCH") {
    if (
      req.isAuthenticated &&
      req.user.admin === true &&
      req.user.role.products === 1
    ) {
      req.data = getData(req);
    } else {
      res.status(401).json({ error: "Un Authorized" });
    }
  }
  next();
};

module.exports = products;

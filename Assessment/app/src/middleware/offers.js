const env = require("../env/constants");
const getData = require("../util/data");
const offers = (req, res, next) => {
  req.dbCollection = env.offers;
  if (
    req.isAuthenticated &&
    req.user.admin === true &&
    req.user.role.offers === 1
  ) {
    req.data = getData(req);
  } else {
    res.status(401).json({ error: "Un Authorized" });
  }
  next();
};

module.exports = offers;

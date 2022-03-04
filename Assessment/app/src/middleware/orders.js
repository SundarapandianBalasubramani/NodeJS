const env = require("../env/constants");
const getData = require("../util/data");
const db = require("../util/db");
const orders = async (req, res, next) => {
  req.dbCollection = env.orders;
  if (!req.isAuthenticated || req.user.admin) {
    res.status(401).json({ message: "Un Authorized" });
  }
  req.condition = { user: req.user.id };
  if (req.method === "POST" || req.method === "PATCH") {
    req.data = getData(req);
    req.data.user = req.user.id;
    if (req.method === "POST") {
      const lastOrder = await db.getOne(
        req.app.db,
        req.dbCollection,
        {},
        {
          sort: { _id: -1 },
          projection: { _id: 1 },
        }
      );
      req.data._id = parseInt(lastOrder._id) + 1;
    }
  }
  next();
};

module.exports = orders;

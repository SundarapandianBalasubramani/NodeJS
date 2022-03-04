const env = require("../env/constants");
const getAdminDetails = require("../util/admin");

const admins = (req, res, next) => {
  getAdminDetails(req.app.db, env.admins, req.body)
    .then((d) => res.status(200).json(d))
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

module.exports = admins;

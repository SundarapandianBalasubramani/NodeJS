const env = require("../env/constants");
const user = require("../util/user");
const users = (req, res, next) => {
  user
    .getUserInfo(req.app.db, env.users, req.body)
    .then((d) => res.status(200).json(d))
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

module.exports = users;

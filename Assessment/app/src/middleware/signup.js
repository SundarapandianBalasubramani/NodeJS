const env = require("../env/constants");
const db = require("../util/db");
const bcrypt = require("bcryptjs");
const signup = (req, res, next) => {
  req.dbCollection = env.users;
  bcrypt
    .hash(req.body.pwd, 12)
    .then((hasdPwd) => {
      db.getOne(
        req.app.db,
        req.dbCollection,
        {},
        {
          sort: { _id: -1 },
          projection: { _id: 1 },
        }
      )
        .then((d) => {
          req.body.updatedOn = new Date().toISOString();
          req.body.createdOn = new Date().toISOString();
          req.body._id = parseInt(d._id) + 1;
          req.body.pwd = hasdPwd;
          db.addOne(req.app.db, req.dbCollection, req.body)
            .then(() =>
              res.status(201).json({ message: "Your account has been created" })
            )
            .catch((err) => {
              next(err);
            });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = signup;

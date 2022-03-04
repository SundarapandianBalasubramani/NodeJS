const MongoClient = require("mongodb").MongoClient;
const env = require("../env/constants");
const database = (req, res, next) => {
  if (!req.app.db) {
    MongoClient.connect(env.url).then(
      (client) => {
        req.app.db = client.db(env.dbName);
        next();
      },
      (error) => {
        next(error);
      }
    );
  } else {
    next();
  }
};

module.exports = database;

const router = require("express").Router();
const db = require("../util/db");

const getCondition = (req) => {
  return req.condition ? req.condition : {};
};

const getId = (req) => {
  const filter = getCondition(req);
  filter._id = parseInt(req.params.id);
  console.log(filter);
  return filter;
};

router.get("/:id", (req, res, next) => {
  db.getOne(req.app.db, req.dbCollection, getId(req))
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.get("/", (req, res, next) => {
  db.getAll(req.app.db, req.dbCollection, getCondition(req))
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post("/", (req, res, next) => {
  db.addOne(req.app.db, req.dbCollection, req.data)
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.patch("/:id", (req, res, next) => {
  db.updateOne(req.app.db, req.dbCollection, getId(req), req.data)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  db.deleteOne(req.app.db, req.dbCollection, getId(req))
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;

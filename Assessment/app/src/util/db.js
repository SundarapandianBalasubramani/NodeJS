const addOne = (db, collection, item) => {
  return db.collection(collection.name).insertOne(item);
};

const updateOne = (db, collection, condition, item) => {
  return db.collection(collection.name).updateOne(condition, { $set: item });
};

const getAll = (db, collection, condition, projection = {}) => {
  return db
    .collection(collection.name)
    .find(condition, projection)
    .toArray()
    .then((data) => {
      return data;
    });
};

const getOne = (db, collection, condition, projection = {}) => {
  return db
    .collection(collection.name)
    .findOne(condition, projection)
    .then((item) => {
      return item;
    });
};

const deleteOne = (db, collection, condition) => {
  return db
    .collection(collection.name)
    .deleteOne(condition)
    .then((result) => {
      return result;
    });
};

exports.addOne = addOne;
exports.updateOne = updateOne;
exports.deleteOne = deleteOne;
exports.getAll = getAll;
exports.getOne = getOne;

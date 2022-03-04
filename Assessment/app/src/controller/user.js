const users = require("express").Router();

const usersMiddleWare = require("../middleware/user");

users.post("/", usersMiddleWare);

module.exports = users;

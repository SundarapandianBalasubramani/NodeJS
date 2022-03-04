const orders = require("express").Router();

const ordersMiddleWare = require("../middleware/orders");

const router = require("../router/index");

const auth = require("../middleware/auth");

orders.use(auth, ordersMiddleWare, router);

module.exports = orders;

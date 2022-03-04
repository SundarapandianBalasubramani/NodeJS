const products = require("express").Router();

const productsMiddleWare = require("../middleware/products");

const auth = require("../middleware/auth");

const router = require("../router/index");

products.use(auth, productsMiddleWare, router);

module.exports = products;

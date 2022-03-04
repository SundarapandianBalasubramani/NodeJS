const offers = require("express").Router();

const offersMiddleWare = require("../middleware/offers");

const auth = require("../middleware/auth");

const router = require("../router/index");

offers.use(auth, offersMiddleWare, router);

module.exports = offers;

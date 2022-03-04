const express = require("express");

const database = require("./middleware/db");
const error = require("./middleware/error");
const products = require("./controller/products");
const admins = require("./controller/admin");
const users = require("./controller/user");
const offers = require("./controller/offer");
const orders = require("./controller/order");

const signup = require("./controller/signup");

const app = express();

app.use(express.json());

app.use(database);

app.use("/products", products);

app.use("/admins", admins);

app.use("/login", users);

app.use("/offers", offers);

app.use("/orders", orders);

app.use("/signup", signup);

app.use(error);

app.listen(3000);

module.exports = app;

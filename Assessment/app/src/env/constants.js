const env = {
  url: "mongodb://dbAdmin:WelcomeMongoDB2022@127.0.0.1:27017/coffeeShop?authSource=admin&readPreference=primary&ssl=false",
  dbName: "coffeeShop",
  secret: "7+hpGsLzZGfKLqzUhIyavt/iucHpvawqXDhBIf4Mr+A=",
  products: {
    name: "products",
    select: { createdBy: 0, updatedOn: 0, createdOn: 0, updatedBy: 0 },
  },
  users: { name: "users" },
  orders: { name: "orders" },
  cart: { name: "cart" },
  offers: { name: "offers" },
  admins: { name: "admins" },
};

module.exports = env;

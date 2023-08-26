const { DataTypes } = require("sequelize");
const sequelize = require("./database");

let database = {};

database.login = require("./model/Loginschema")(sequelize, DataTypes);
database.cart = rt = require("./model/cart")(sequelize, DataTypes);

database.sequelize;

sequelize.sync();

module.exports = database;

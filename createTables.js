const { DataTypes } = require("sequelize")
const sequelize = require("./database")

let database = {};

database.login = require("./model/Loginschema")(sequelize, DataTypes)
database.cast = require("./model/cast")(sequelize, DataTypes)


database.sequelize;

sequelize.sync()

module.exports = database;
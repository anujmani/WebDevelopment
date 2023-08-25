const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("petshop", "postgres", "root", {
  port: 5432,
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

module.exports = sequelize;

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("carts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
  });
  return Cart;
};

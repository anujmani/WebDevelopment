module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define(
      "users",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          unique: true,
        },
       
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "name must be provides",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
         
        },
    },
    )
    return Login;
  };
module.exports = (sequelize, DataTypes) => {
    const Cast = sequelize.define(
      "casts",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        productname: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "Name must be provided",
            },
          },
        },
       
        username: {
          type: DataTypes.STRING,
          isEmail: true,
          unique: true,
        },
       
      },
    
    );
    return Cast;
  };
const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

class User extends Model {}
// model sequelize pour les Users
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;

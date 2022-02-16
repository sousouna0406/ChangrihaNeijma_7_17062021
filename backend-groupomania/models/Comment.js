const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

class Comment extends Model {}
// model sequilize pour les commentaires
Comment.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    postId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;

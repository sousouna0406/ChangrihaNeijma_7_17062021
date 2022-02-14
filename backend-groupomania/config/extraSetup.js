const { sequelize } = require("../config/dbConfig");
const User = require("../models/User");
const Post = require("../models/Post");

// fonction pour définir les associations entre les models

module.exports = () => {
  //un utilisateur peut avoir plusieurs posts
  User.hasMany(Post);
  //un post appartient a un seul utilisateur
  Post.belongsTo(User);
};

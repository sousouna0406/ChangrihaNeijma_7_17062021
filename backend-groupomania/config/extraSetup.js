const { sequelize } = require("../config/dbConfig");
const User = require("../models/User");
const Post = require("../models/Post");

// fonction pour définir les associations entre les models

module.exports = () => {
  User.hasMany(Post);
  Post.belongsTo(User);
};

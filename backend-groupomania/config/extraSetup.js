const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// fonction pour définir les associations entre les models

module.exports = () => {
  //un utilisateur peut avoir plusieurs posts
  User.hasMany(Post);
  //un post appartient a un seul utilisateur
  Post.belongsTo(User);
  //Un post à plusieurs commentaires
  Post.hasMany(Comment);
  // Un commentaire appartient à un seul utilisateur et à un seul post
  Comment.belongsTo(User);
  Comment.belongsTo(Post);
};

const { sequelize } = require('../config/dbConfig');
const User = require('../models/User')
const Post = require('../models/Post')

module.exports = () => {
    User.hasMany(Post);
    Post.belongsTo(User);
}
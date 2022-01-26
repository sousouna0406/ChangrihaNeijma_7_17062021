const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'Post'
});

module.exports = Post;
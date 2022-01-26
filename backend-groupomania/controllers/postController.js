const Post = require('../models/Post');
const User = require('../models/User');

/**
 * @description
 * @param {*} req 
 * @param {*} res 
 */
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({ include: User });
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
}

/**
 * @description
 * @param {*} req 
 * @param {*} res 
 */
exports.getOnePost = async (req, res) => {
    try {
        const post = await Post.findOne({ include: User, where: { id: req.params.id } });
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
}

/**
 * @description
 * @param {*} req 
 * @param {*} res 
 */
exports.createOnePost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json({ newPost })
    } catch (error) {
        res.status(500).json({ error });
    }
}

/**
 * @description
 * @param {*} req 
 * @param {*} res 
 */
exports.updateOnePost = async (req, res) => {
    try {
        await Post.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        });

        const updatedPost = await Post.findOne({ where: { id: req.params.id } });

        res.status(200).json({ updatedPost });
    } catch (error) {
        res.status(500).json({ error });
    }
}

/**
 * @description
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteOnePost = async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ deletedPost: req.params.id });
    } catch (error) {
        res.status(500).json({ error });
    }
}
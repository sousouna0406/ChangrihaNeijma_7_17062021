const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const fs = require("fs");

/**
 * @description Récupération de tous les posts du plus recents au plus anciens.
 *  Pour récupérer les infos de l'utilisateur on utilise include
 * @param {*} req
 * @param {*} res
 */
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      // posts et commentaires du plus récent au plus anciens
      order: [
        ["createdAt", "desc"],
        [Comment, "createdAt", "asc"],
      ],
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Récuperation d'un seule post grâce a son Id ( Cette fonctions n'est pas utiliser par l'appli )
 * @param {*} req
 * @param {*} res
 */
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      include: [User, Comment],
      where: { id: req.params.id },
    });
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Création d'un post
 * @param {*} req
 * @param {*} res
 */
exports.createOnePost = async (req, res) => {
  try {
    const postToCreate = req.body;
    if (req.file) {
      postToCreate.img = `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`;
    }
    const newPost = new Post(postToCreate);
    await newPost.save();
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Modification d'un post
 * @param {*} req
 * @param {*} res
 */
exports.updateOnePost = async (req, res) => {
  try {
    const postToUpdate = req.body;
    const foundPost = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!foundPost) {
      return res.status(404).json({ error: "Post non trouvé !" });
    }

    if (req.file) {
      postToUpdate.img = `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`;
      if (foundPost.img) {
        fs.unlink(`images/${foundPost.img.split("images/")[1]}`, (err) => {
          console.error(err);
        });
      }
    }

    for (const key in postToUpdate) {
      foundPost[key] = postToUpdate[key];
    }
    await foundPost.save();

    res.status(200).json({ foundPost });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Suppression d'un post
 * @param {*} req
 * @param {*} res
 */
exports.deleteOnePost = async (req, res) => {
  try {
    const foundPost = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!foundPost) {
      return res.status(404).json({ error: "Post non trouvé !" });
    }

    if (foundPost.img) {
      fs.unlink(`images/${foundPost.img.split("images/")[1]}`, (err) => {
        console.error(err);
      });
    }

    await foundPost.destroy();
    res.status(200).json({ deletedPost: req.params.id });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Ajout d'un commentaire sur un post
 * @param {*} req
 * @param {*} res
 */
exports.addOneComment = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });
    if (!post) {
      return res.status(404).json({ error: "Post non trouvé" });
    }
    await Comment.create(req.body);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description suppression d'un commentaire sur un post
 * @param {*} req
 * @param {*} res
 */
exports.deleteOneComment = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });
    if (!post) {
      return res.status(404).json({ error: "Post non trouvé" });
    }
    await Comment.destroy({
      where: { id: req.params.idComment },
    });
    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

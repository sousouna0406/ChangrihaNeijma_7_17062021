const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

/**
 * @description Récuperation d'un User avec tout ses posts du plus recents au plus anciens.
 * @param {*} req
 * @param {*} res
 */
exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({
      include: Post,
      where: { id: req.params.id },
      order: [[Post, "createdAt", "desc"]],
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Modification d'un User (non utiliser dans l'appli)
 * @param {*} req
 * @param {*} res
 */
exports.updateOneUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    await User.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const updatedUser = await User.findOne({ where: { id: req.params.id } });
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description Suppression d'un user si il n'est pas l'admin
 * @param {*} req
 * @param {*} res
 */
exports.deleteOneUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
        isAdmin: false,
      },
    });
    res.status(200).json({ deletedUser: req.params.id });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * @description Fonction pour login création token
 * @param {*} req
 * @param {*} res
 */
exports.signin = async (req, res) => {
  try {
    // const users = await User.findAll();
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const compare = bcrypt.compare(req.body.password, user.password);
    if (!compare) {
      res.status(400).json({ message: "Wrong password" });
    }

    res.status(200).json({
      id: user.id,
      token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      }),
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @description // fonction pour l'inscription d'un utilisateur
 * @param {*} req
 * @param {*} res
 */
exports.signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created", data: newUser.getDataValue() });
  } catch (error) {
    res.status(500).json({ error });
  }
};

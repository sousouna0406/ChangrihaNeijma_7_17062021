const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// middelware qui permet la modification d'un utilisateur
// ou d'un post seulement par son utilisateur et l'admin

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findOne({ where: { id: decodedToken.userId } });

    if (!user) {
      return res
        .status(403)
        .json({ error: "Utilisateur actuel introuvable ou désactivé" });
    } else if (user.isAdmin) {
      return next();
    }
    switch (req.baseUrl) {
      case "/api/users":
        if (user.id != req.params.id) {
          return res
            .status(403)
            .json({ error: "Vous ne pouvez pas modifier cet utilisateur" });
        }
        break;
      case "/api/posts":
        const foundPost = await Post.findOne({
          where: {
            id: req.params.id,
            userId: user.id,
          },
        });
        if (!foundPost) {
          return res
            .status(403)
            .json({ error: "Vous ne pouvez pas modifier ce post" });
        }
        break;
      default:
        return res
          .status(400)
          .json({ error: "ERREUR lors de l'utilisation de ce middleware" });
        break;
    }
    return next();
  } catch (error) {
    return res.status(500).json({ error });
  }
};

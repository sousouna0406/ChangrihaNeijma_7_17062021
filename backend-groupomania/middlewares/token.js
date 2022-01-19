const jwt = require("jsonwebtoken");
// Middleware pour la création d'un token
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(401).json({
      error: error,
    });
  }
};

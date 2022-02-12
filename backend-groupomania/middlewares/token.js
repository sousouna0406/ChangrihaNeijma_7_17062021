const jwt = require("jsonwebtoken");

// vérification de la validité du token

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(401).json({
      error,
    });
  }
};

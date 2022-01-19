const { Router } = require("express");
const { signup, login } = require("../controllers/authControllers");
const router = Router();

// Route pour l'inscription d'un user
router.post("/signup", signup);
// Route pour l'autentification d'un user
router.post("/login", login);

module.exports = router;

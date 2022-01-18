const { Router } = require("express");
const router = Router();

// Route pour l'inscription d'un user
router.post("/signup");
// Route pour l'autentification d'un user
router.post("/login");

module.exports = router;

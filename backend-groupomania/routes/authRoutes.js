const { Router } = require("express");
const { signup, signin } = require("../controllers/authController");
const authParams = require("../middlewares/authParams");

const router = Router();
// route pour s'inscrire
router.post("/signup", authParams, signup);
// route pour se connecter
router.post("/signin", authParams, signin);

module.exports = router;

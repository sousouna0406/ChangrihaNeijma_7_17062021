const { Router } = require("express");
const {
  getOneUser,
  updateOneUser,
  deleteOneUser,
} = require("../controllers/userController");
const isOwnerOrAdmin = require("../middlewares/isOwnerOrAdmin");
const token = require("../middlewares/token");

const router = Router();

//route pour la récupération d'un utilisateur
router.get("/:id", token, getOneUser);
//route pour la modification d'un utilisateur (non utiliser dans l'appli)
router.put("/:id", token, isOwnerOrAdmin, updateOneUser);
//route pour la suppression d'un utilisateur
router.delete("/:id", token, isOwnerOrAdmin, deleteOneUser);

module.exports = router;

const { Router } = require("express");
const {
  getAllPosts,
  getOnePost,
  createOnePost,
  updateOnePost,
  deleteOnePost,
  addOneComment,
  deleteOneComment,
} = require("../controllers/postController");
const isOwnerOrAdmin = require("../middlewares/isOwnerOrAdmin");
const token = require("../middlewares/token");
const multer = require("../middlewares/multer");

const router = Router();
// route pour la récupération de tout les posts
router.get("/", token, getAllPosts);
// route pour la récupération d'un seul posts (non utiliser)
router.get("/:id", token, getOnePost);
// route pour création d'un post
router.post("/", token, multer, createOnePost);
// route pour la modification d'un post
router.put("/:id", token, isOwnerOrAdmin, multer, updateOnePost);
// route pour la suppression d'un post
router.delete("/:id", token, isOwnerOrAdmin, deleteOnePost);
// route pour l'ajout d'un commentaire
router.post("/:id/comment", token, addOneComment);
// route pour la suppression d'un commentaire
router.delete(
  "/:id/comment/:idComment",
  token,
  isOwnerOrAdmin,
  deleteOneComment
);

module.exports = router;

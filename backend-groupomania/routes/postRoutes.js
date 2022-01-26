const { Router } = require("express");
const {
  getAllpost,
  getOnepost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const authParams = require("../middlewares/authParams");
const router = Router();

router.get("/", authParams, getAllpost);
router.get("/:id", authParams, getOnepost);
router.post("/", authParams, createPost);
router.put("/:id", authParams, updatePost);
router.delete("/:id", authParams, deletePost);

module.exports = router;

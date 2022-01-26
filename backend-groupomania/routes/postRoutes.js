const { Router } = require("express");
const {
  getAllpost,
  getOnepost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");

const router = Router();

router.get("/", getAllpost);
router.get("/:id", getOnepost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;

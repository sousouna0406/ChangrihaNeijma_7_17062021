const { Router } = require("express");
const {
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");
const authParams = require("../middlewares/authParams");
const router = Router();

router.get("/:id", authParams, getOneUser);
router.delete("/:id", authParams, deleteUser);
router.put("/:id", authParams, updateUser);

module.exports = router;

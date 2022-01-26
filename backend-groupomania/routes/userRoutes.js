const { Router } = require("express");
const {
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

const router = Router();

router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;

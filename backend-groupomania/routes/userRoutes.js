const { Router } = require("express");

const router = Router();

router.get("/:id");
router.delete("/:id");
router.put("/:id");

module.exports = router;

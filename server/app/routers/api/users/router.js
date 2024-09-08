const express = require("express");

const router = express.Router();

const { hashPassword } = require("../../../middleware/hashPassword");
const { verifyToken } = require("../../../middleware/verifyToken");
const { checkId } = require("../../../middleware/checkId");

const { read, edit, add, destroy } = require("../../../controllers/userAction");

router.get("/:id", verifyToken, checkId, read);
router.put("/:id", verifyToken, checkId, edit);
router.post("/", hashPassword, add);
router.delete("/:id", verifyToken, checkId, destroy);

module.exports = router;

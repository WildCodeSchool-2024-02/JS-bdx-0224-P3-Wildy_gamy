const express = require("express");

const { hashPassword } = require("../../../middleware/hashPassword");

const router = express.Router();

const { verifyToken } = require("../../../middleware/verifyToken");

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/userAction");

router.get("/", browse);

router.get("/:id", verifyToken(true), read);

router.put("/:id", verifyToken(true), edit);

router.post("/", hashPassword, add);

router.delete("/:id", destroy);

module.exports = router;

const express = require("express");

const { hashPassword } = require("../../../middleware/hashPassword");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/userAction");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", edit);

router.post("/", hashPassword, add);

router.delete("/:id", destroy);

module.exports = router;

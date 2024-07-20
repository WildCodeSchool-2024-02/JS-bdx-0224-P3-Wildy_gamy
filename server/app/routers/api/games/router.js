const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/gameActions");

const { verifyToken } = require("../../../middleware/verifyToken");

router.get("/", verifyToken(false), browse);

module.exports = router;

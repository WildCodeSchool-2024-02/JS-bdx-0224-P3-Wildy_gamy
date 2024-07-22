const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/gameActions");

const { getUserId } = require("../../../middleware/getUserId");

router.get("/", getUserId, browse);

module.exports = router;

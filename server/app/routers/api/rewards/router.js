const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/rewardActions");

router.get("/", browse);

module.exports = router;

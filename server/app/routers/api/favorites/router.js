const express = require("express");

const router = express.Router();

const { add, destroy } = require("../../../controllers/favoriteActions");

router.post("/", add);

router.delete("/", destroy);

module.exports = router;

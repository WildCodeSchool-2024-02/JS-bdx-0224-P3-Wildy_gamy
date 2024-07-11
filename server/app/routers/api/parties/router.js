const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/partyActions");

router.post("/", add);

module.exports = router;

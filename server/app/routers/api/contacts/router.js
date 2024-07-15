const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/contactActions");

router.post("/", add);

module.exports = router;

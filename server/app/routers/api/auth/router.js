const express = require("express");

const router = express.Router();

const { verifyAuth } = require("../../../middleware/verifyAuth");
const { generateToken } = require("../../../middleware/generateToken");

const authActions = require("../../../controllers/authActions");

router.post("/",verifyAuth, generateToken, authActions.login);

module.exports = router;

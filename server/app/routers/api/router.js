const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gamesRouter = require("./games/router");
const usersRouter = require("./users/router");
const rewardsRouter = require("./rewards/router");

const { hashPassword } = require("../../middleware/hashPassword");
const authActions = require("../../middleware/authActions");

router.use("/games", gamesRouter);
router.use("/rewards", rewardsRouter);
router.use("/users", hashPassword, usersRouter);
router.post("/login", authActions.login);

/* ************************************************************************* */

module.exports = router;

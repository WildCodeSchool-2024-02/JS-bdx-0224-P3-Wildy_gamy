const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gamesRouter = require("./games/router");
const usersRouter = require("./users/router");
const rewardsRouter = require("./rewards/router");
const contactsRouter = require("./contacts/router");

const { hashPassword } = require("../../middleware/hashPassword");
const { verifyAuth } = require("../../middleware/verifyAuth");
const { generateToken } = require("../../middleware/generateToken");

router.use("/games", gamesRouter);
router.use("/rewards", rewardsRouter);
router.use("/users", hashPassword, usersRouter);
router.post("/login", verifyAuth, generateToken, usersRouter);
router.use("/contacts", contactsRouter);

/* ************************************************************************* */

module.exports = router;

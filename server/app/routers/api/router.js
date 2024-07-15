const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gamesRouter = require("./games/router");
const usersRouter = require("./users/router");
const rewardsRouter = require("./rewards/router");
const partiesRouter = require("./parties/router");
const authRouter = require("./auth/router");
const contactsRouter = require("./contacts/router");
const coinsRouter = require ("./coins/router")

const { hashPassword } = require("../../middleware/hashPassword");

router.use("/games", gamesRouter);
router.use("/rewards", rewardsRouter);
router.use("/users", hashPassword, usersRouter);
router.use("/login", authRouter);
router.use("/parties", partiesRouter);
router.use("/contacts", contactsRouter);
router.use("/coins", coinsRouter);

/* ************************************************************************* */

module.exports = router;

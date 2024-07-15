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
const favoritesRouter = require("./favorites/router")
const contactsRouter = require("./contacts/router");

const { hashPassword } = require("../../middleware/hashPassword");

router.use("/games", gamesRouter);
router.use("/rewards", rewardsRouter);
router.use("/users", hashPassword, usersRouter);
router.use("/login", authRouter);
router.use("/parties", partiesRouter);
router.use("/favorites", favoritesRouter);
router.use("/contacts", contactsRouter);

/* ************************************************************************* */

module.exports = router;

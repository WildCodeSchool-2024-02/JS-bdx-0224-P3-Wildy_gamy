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

router.use("/games", gamesRouter);
router.use("/rewards", rewardsRouter);
router.use("/users", usersRouter);
router.use("/login", authRouter);
router.use("/parties", partiesRouter);
router.use("/contacts", contactsRouter);

/* ************************************************************************* */

module.exports = router;

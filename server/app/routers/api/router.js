const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const gamesRouter = require("./games/router");

router.use("/items", itemsRouter);
router.use("/games", gamesRouter);

const rewardsRouter = require("./rewards/router");

router.use("/rewards", rewardsRouter);

/* ************************************************************************* */

module.exports = router;

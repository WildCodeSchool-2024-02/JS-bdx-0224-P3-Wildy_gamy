const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const rewardsRouter = require("./rewards/router");

router.use("/rewards", rewardsRouter);

/* ************************************************************************* */

module.exports = router;

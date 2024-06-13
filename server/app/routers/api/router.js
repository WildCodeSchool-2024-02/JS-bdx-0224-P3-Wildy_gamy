const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const imagesRouter = require("./images/router");

router.use("/images", imagesRouter);

/* ************************************************************************* */

module.exports = router;

const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const gamesRouter = require("./games/router");

router.use("/items", itemsRouter);
router.use("/games", gamesRouter);

const usersRouter = require("./users/router");
const { hashPassword } = require("../../middelware/hashPassword");

router.use("/users", hashPassword, usersRouter);

const authActions = require("../../middelware/authActions");

router.post("/login", authActions.login);

/* ************************************************************************* */

module.exports = router;

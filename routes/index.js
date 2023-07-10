const express = require("express");
const router = express.Router();

const usersRouter = require("./users.routes");
const postsRouter = require("./posts.routes");

router.use("/", [usersRouter, postsRouter]);

module.exports = router;

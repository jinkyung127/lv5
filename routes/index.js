const express = require("express");
const router = express.Router();

const usersRouter = require("./users.routes");
const postsRouter = require("./posts.routes");
const commentsRouter = require("./comments.routes");

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/posts/", commentsRouter);

module.exports = router;

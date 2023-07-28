import express from "express";
const router = express.Router();

import usersRouter from "./users.routes";
import postsRouter from "./posts.routes";
import commentsRouter from "./comments.routes";

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/posts/", commentsRouter);

export default router;

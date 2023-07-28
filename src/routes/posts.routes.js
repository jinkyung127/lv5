import express from "express";
const router = express.Router();

import PostsController from "../controllers/posts.controller";
const postsController = new PostsController();

import auth from "../middlewares/auth-middleware";

router.get("/", postsController.getPosts);
router.get("/:postId", postsController.getPostById);
router.post("/", auth, postsController.createPost);
router.put("/:postId", auth, postsController.updatePost);
router.delete("/:postId", auth, postsController.deletePost);

export default router;

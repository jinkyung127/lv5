// routes/posts.routes.js

const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

const auth = require("../middlewares/auth-middleware");

router.get("/", postsController.getPosts);
router.get("/:postId", postsController.getPostById);
router.post("/", auth, postsController.createPost);
router.put("/:postId", auth, postsController.updatePost);
router.delete("/:postId", auth, postsController.deletePost);

module.exports = router;

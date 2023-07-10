const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts.controller");
const postsController = new PostsController();

router.get("/posts", postsController.getPosts);
router.post("/posts", postsController.createPost);

module.exports = router;

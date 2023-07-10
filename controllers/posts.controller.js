// controllers/posts.controller.js

const PostService = require("../services/posts.service");

class PostsController {
  postService = new PostService();

  getPosts = async (req, res, next) => {
    const posts = await this.postService.findAllPost();

    res.status(200).json({ data: posts });
  };

  getPostById = async (req, res, next) => {
    const { postId } = req.params;
    const post = await this.postService.findPostById(postId);

    res.status(200).json({ data: post });
  };

  createPost = async (req, res, next) => {
    const user = res.locals.user;
    const { title, content } = req.body;
    try {
      const createPostData = await this.postService.createPost(
        user,
        title,
        content
      );

      res.status(201).json({ data: createPostData });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  updatePost = async (req, res, next) => {
    const user = res.locals.user;
    const { postId } = req.params;
    const { title, content } = req.body;

    const updatePost = await this.postService.updatePost(
      user,
      postId,
      title,
      content
    );

    res.status(200).json({ data: updatePost });
  };

  deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const user = res.locals.user;

    const deletePost = await this.postService.deletePost(user, postId);

    res.status(200).json({ message: "게시글 삭제 성공." });
  };
}

module.exports = PostsController;

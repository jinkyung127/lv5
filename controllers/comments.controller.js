const CommentService = require("../services/comments.service");

class CommentsController {
  commentService = new CommentService();

  createComment = async (req, res, next) => {
    const user = res.locals.user;
    const { postId } = req.params;
    const { comment } = req.body;
    try {
      const createCommentData = await this.commentService.createComment(
        user,
        postId,
        comment
      );

      res.status(201).json({ data: createCommentData });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  getComments = async (req, res, next) => {
    const { postId } = req.params;
    const comments = await this.commentService.findAllComment(postId);

    res.status(200).json({ data: comments });
  };

  updateComment = async (req, res, next) => {
    try {
      const user = res.locals.user;
      const { commentId } = req.params;
      const { comment } = req.body;

      const updateComment = await this.commentService.updateComment(
        user,
        commentId,
        comment
      );

      res.status(200).json({ data: updateComment });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  deleteComment = async (req, res, next) => {
    const { commentId } = req.params;
    const user = res.locals.user;

    const deleteComment = await this.commentService.deleteComment(
      user,
      commentId
    );

    res.status(200).json({ message: "댓글 삭제 성공." });
  };
}

module.exports = CommentsController;

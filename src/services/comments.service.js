import CommentRepository from "../repositories/comments.repository";

class CommentService {
  commentRepository = new CommentRepository();

  createComment = async (user, postId, comment) => {
    const createCommentData = await this.commentRepository.createComment(
      user.id,
      postId,
      comment
    );

    return {
      userId: createCommentData.userId,
      postId: createCommentData.postId,
      commentId: createCommentData.id,
      comment: createCommentData.comment,
      createdAt: createCommentData.createdAt,
      updatedAt: createCommentData.updatedAt,
    };
  };

  findAllComment = async (postId) => {
    const allComment = await this.commentRepository.findAllComment(postId);

    allComment.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return allComment.map((comment) => {
      return {
        commentId: comment.id,
        userId: comment.userId,
        comment: comment.comment,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
      };
    });
  };

  updateComment = async (user, commentId, comment) => {
    const findComment = await this.commentRepository.findCommentById(commentId);
    if (!findComment) throw new Error("Comment doesn't exist");

    await this.commentRepository.updateComment(user, commentId, comment);

    const updateComment = await this.commentRepository.findCommentById(
      commentId
    );

    return {
      commentId: updateComment.id,
      userId: updateComment.userId,
      comment: updateComment.comment,
      createdAt: updateComment.createdAt,
      updatedAt: updateComment.updatedAt,
    };
  };

  deleteComment = async (user, commentId) => {
    const findComment = await this.commentRepository.findCommentById(commentId);
    if (!findComment) throw new Error("Post doesn't exist");

    await this.commentRepository.deleteComment(user, commentId);

    return true;
  };
}

export default CommentService;

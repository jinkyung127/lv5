import { comments } from "../db/models";
import { Op } from "sequelize";

class CommentRepository {
  createComment = async (id, postId, comment) => {
    const createCommentData = await comments.create({
      userId: id,
      postId: postId,
      comment,
    });

    return createCommentData;
  };

  findAllComment = async (postId) => {
    const allComments = await comments.findAll({ where: { postId: postId } });

    return allComments;
  };

  findCommentById = async (commentId) => {
    const comment = await comments.findByPk(commentId);

    return comment;
  };

  updateComment = async (user, commentId, comment) => {
    const updateCommentData = await comments.update(
      { comment },
      { where: { [Op.and]: [{ userId: user.id }, { id: commentId }] } }
    );

    return updateCommentData;
  };

  deleteComment = async (user, commentId) => {
    const deleteteCommentData = await comments.destroy({
      where: { [Op.and]: [{ userId: user.id }, { id: commentId }] },
    });

    return deleteteCommentData;
  };
}

export default CommentRepository;

import { posts } from "../db/models";
import { Op } from "sequelize";

class PostRepository {
  findAllPost = async () => {
    const allPosts = await posts.findAll();

    return allPosts;
  };

  findPostById = async (postId) => {
    const post = await posts.findByPk(postId);

    return post;
  };

  createPost = async (id, title, content) => {
    const createPostData = await posts.create({
      userId: id,
      title,
      content,
    });

    return createPostData;
  };

  updatePost = async (user, postId, title, content) => {
    const updatePostData = await posts.update(
      { title, content },
      { where: { [Op.and]: [{ userId: user.id }, { id: postId }] } }
    );

    return updatePostData;
  };

  deletePost = async (user, postId) => {
    const updatePostData = await posts.destroy({
      where: { [Op.and]: [{ userId: user.id }, { id: postId }] },
    });

    return updatePostData;
  };
}

export default PostRepository;

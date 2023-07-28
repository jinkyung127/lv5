import Post from "../models/posts";
import User from "../models/users";
import Comment from "../models/comments";

export default () => {
  Comment.belongsTo(User, {
    targetKey: "id",
    foreignKey: "userId",
  });

  Comment.belongsTo(Post, {
    targetKey: "id",
    foreignKey: "postId",
  });
};

import Post from "../models/posts";
import User from "../models/users";
import Comment from "../models/comments";

export default () => {
  Post.belongsTo(User, {
    targetKey: "id",
    foreignKey: "userId",
  });

  Post.hasMany(Comment, {
    targetKey: "id",
    foreignKey: "postId",
  });
};

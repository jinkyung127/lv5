import User from "../models/users";
import Post from "../models/posts";
import Comment from "../models/comments";

export default () => {
  User.hasMany(Post, {
    sourceKey: "id",
    foreignKey: "userId",
  });

  User.hasMany(Comment, {
    sourceKey: "id",
    foreignKey: "userId",
  });
};

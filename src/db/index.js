import sequelize from "./sequelize";
import User from "./models/users";
import Post from "./models/posts";
import Comment from "./models/comments";
import Like from "./models/likes";

import relations from "./relations";

Object.values(relations).forEach((relationsFunction) => {
  relationsFunction();
});

export { sequelize, User, Post, Comment, Like };

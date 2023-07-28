"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class likes extends Model {}
  likes.init(
    {
      userId: DataTypes.STRING,
      postId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "likes",
    }
  );
  return likes;
};

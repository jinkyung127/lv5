import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class comments extends Model {}

comments.init(
  {
    id: {
      allowNull: false, // NOT NULL
      autoIncrement: true, // AUTO_INCREMENT
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false, // NOT NULL
      type: DataTypes.INTEGER,
    },
    postId: {
      allowNull: false, // NOT NULL
      type: DataTypes.INTEGER,
    },
    comment: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "comments",
  }
);

export default comments;

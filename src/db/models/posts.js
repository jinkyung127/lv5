import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class posts extends Model {}

posts.init(
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
    title: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
    },
    content: {
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
    likeCnt: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "posts",
  }
);

export default posts;

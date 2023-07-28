import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class users extends Model {}

users.init(
  {
    id: {
      allowNull: false, // NOT NULL
      autoIncrement: true, // AUTO_INCREMENT
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.INTEGER,
    },
    nickname: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
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
    modelName: "users",
  }
);

export default users;

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // 1. Users 모델에서
      this.hasMany(models.posts, {
        // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: "id", // 3. Users 모델의 userId 컬럼을
        foreignKey: "userId", // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      // 1. Users 모델에서
      this.hasMany(models.comments, {
        // 2. Comments 모델에게 1:N 관계 설정을 합니다.
        sourceKey: "id", // 3. Users 모델의 userId 컬럼을
        foreignKey: "userId", // 4. Comments 모델의 UserId 컬럼과 연결합니다.
      });
    }
  }

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
  return users;
};

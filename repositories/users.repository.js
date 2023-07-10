const { users } = require("../models");

class UserRepository {
  findOneUser = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const users = await users.findOne();

    return users;
  };

  createUser = async (nickname, password) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createUserData = await users.create({
      nickname,
      password,
    });

    return createUserData;
  };
}

module.exports = UserRepository;

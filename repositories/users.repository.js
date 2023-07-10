const { users } = require("../models");

class UserRepository {
  createUser = async (nickname, password) => {
    const createUserData = await users.create({
      nickname,
      password,
    });

    return createUserData;
  };

  findUserById = async (id) => {
    const user = await users.findByPk(id);

    return user;
  };

  findLoginUser = async (nickname, password) => {
    const user = await users.findOne({
      where: { nickname, password },
    });

    return user;
  };
}

module.exports = UserRepository;

const { users } = require("../models");

const bcrypt = require("bcrypt");

class UserRepository {
  createUser = async (nickname, password) => {
    const encrypted = await bcrypt.hash(password, 10);
    const createUserData = await users.create({
      nickname,
      password: encrypted,
    });

    return createUserData;
  };

  findUserById = async (id) => {
    const user = await users.findByPk(id);

    return user;
  };

  findLoginUser = async (nickname) => {
    const user = await users.findOne({
      where: { nickname },
    });

    return user;
  };
}

module.exports = UserRepository;

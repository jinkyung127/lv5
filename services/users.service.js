const UserRepository = require("../repositories/users.repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserService {
  userRepository = new UserRepository();

  createUser = async (nickname, password) => {
    const createUserData = await this.userRepository.createUser(
      nickname,
      password
    );

    return {
      userId: createUserData.id,
      nickname: createUserData.nickname,
      createdAt: createUserData.createdAt,
      updatedAt: createUserData.updatedAt,
    };
  };

  findUserById = async (id) => {
    const findUser = await this.userRepository.findUserById(id);

    return {
      userId: findUser.id,
      nickname: findUser.nickname,
      createdAt: findUser.createdAt,
      updatedAt: findUser.updatedAt,
    };
  };

  loginUser = async (nickname, password) => {
    const user = await this.userRepository.findLoginUser(nickname);
    const passwordEqual = await bcrypt.compare(password, user.password);
    if (!user) throw new Error("닉네임을 확인해주세요.");
    if (user) {
      const passwordEqual = await bcrypt.compare(password, user.password);
      if (!passwordEqual) throw new Error("비밀번호를 확인해 주세요.");
    }

    const token = jwt.sign({ userId: user.id }, process.env.COOKIE_SECRET);

    return token;
  };
}

module.exports = UserService;

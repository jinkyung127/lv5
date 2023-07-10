const UserRepository = require("../repositories/users.repository");

class UserService {
  userRepository = new userRepository();

  findOneUser = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const foundUser = await this.userRepository.findOneUser();

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      userId: foundUser.id,
      nickname: foundUser.nickname,
      createdAt: foundUser.createdAt,
      updatedAt: foundUser.updatedAt,
    };
  };

  createUser = async (nickname, password) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createUserData = await this.userRepository.createUser(
      nickname,
      password
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      userId: createUserData.id,
      nickname: createUserData.nickname,
      createdAt: createUserData.createdAt,
      updatedAt: createUserData.updatedAt,
    };
  };
}

module.exports = UserService;

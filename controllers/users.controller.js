const UserService = require("../services/users.service");

// Post의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  userService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getUser = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const user = await this.userService.findOneUser();

    res.status(200).json({ data: user });
  };

  createUser = async (req, res, next) => {
    const { nickname, password } = req.body;

    // 서비스 계층에 구현된 createUser 로직을 실행합니다.
    const createUserData = await this.userService.createUser(
      nickname,
      password
    );

    res.status(201).json({ data: createUserData });
  };
}

module.exports = UsersController;

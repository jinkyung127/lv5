const UserService = require("../services/users.service");

// Post의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  userService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  createUser = async (req, res, next) => {
    const { nickname, password } = req.body;
    const createUserData = await this.userService.createUser(
      nickname,
      password
    );

    res.status(201).json({ data: createUserData });
  };

  getUserById = async (req, res, next) => {
    const { id } = req.params;
    const user = await this.userService.findUserById(id);

    res.status(200).json({ data: user });
  };

  login = async (req, res, next) => {
    const { nickname, password } = req.body;
    try {
      const token = await this.userService.loginUser(nickname, password);

      res.cookie("authorization", `Bearer ${token}`);

      res.status(200).json({ message: "로그인 성공." });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
}

module.exports = UsersController;

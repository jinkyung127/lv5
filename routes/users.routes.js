const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUser);
router.get("/:id", usersController.getUserById);
router.post("/login", usersController.login);

module.exports = router;

const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.get("/users/:id", usersController.getUser);
router.post("/signup", usersController.createUser);

module.exports = router;

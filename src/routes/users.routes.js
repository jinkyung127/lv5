import express from "express";
const router = express.Router();

import UsersController from "../controllers/users.controller";
const usersController = new UsersController();

router.post("/signup", usersController.createUser);
router.get("/:id", usersController.getUserById);
router.post("/login", usersController.login);

export default router;

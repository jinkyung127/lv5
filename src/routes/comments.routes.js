import express from "express";
const router = express.Router();

import CommentsController from "../controllers/comments.controller";
const commentsController = new CommentsController();

import auth from "../middlewares/auth-middleware";

router.get("/:postId/comments", commentsController.getComments);
router.post("/:postId/comments", auth, commentsController.createComment);
router.put(
  "/:postId/comments/:commentId",
  auth,
  commentsController.updateComment
);
router.delete(
  "/:postId/comments/:commentId",
  auth,
  commentsController.deleteComment
);

export default router;

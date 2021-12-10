import express from "express";

import passport from "../configs/passport";
import authMiddleWare from "../middleware/auth";
import userController from "../controllers/user";

const router = express.Router();

console.log("In User Router");

router.get("/", userController.onReadAll);
router.get("/:id", userController.onReadOne);
router.post("/register", userController.onCreateOne);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userController.onLogin
);

router.put("/:id", userController.onEditOne);
router.delete("/:id", userController.onDeleteOne);

export default router;

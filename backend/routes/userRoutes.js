import express from "express";
import { login, register, logout, updateProfile } from "../controller/userController.js";
import {isAuthenticated} from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/updateProfile").post(isAuthenticated, updateProfile);

export default router;

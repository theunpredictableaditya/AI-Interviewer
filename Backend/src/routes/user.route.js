import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller';

const router = express.Router();

/**
 * @route POST /api/user/register-user
 * @description Register a new user
 * @access Public
 */
router.route("/register-user").post(
    registerUser
)

/**
 * @route GET /api/user/login-user
 * @description Login Into Your Account
 * @access Public
 */
router.route("/login-user").get(
    loginUser
)

export default router;
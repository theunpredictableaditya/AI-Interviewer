import express from 'express';
import { getMe, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

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
 * @route POST /api/user/login-user
 * @description Login Into Your Account
 * @access Public
 */
router.route("/login-user").post(
    loginUser
)

/**
 * @route GET /api/user/get-me
 * @description Sends Logged In User's Data in Response
 * @access Private
 */
router.route("/get-me").get(
    verifyJWT,
    getMe
)

/**
 * @route GET /api/user/logout-user
 * @description Loggs Out User Removing The Access Token
 * @access Private
 */
router.route("/logout-user").get(
    verifyJWT,
    logoutUser
)

export default router;
import express from "express";
import multer from "multer";
import { generateAnswerReport, getQuestions, parsePDF } from "../controllers/interview.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const upload = multer({dest: "uploads/"});

const router = express.Router();

/**
 * @route POST /api/parse/parsePDF
 * @description Upload The Resume
 * @access Public
 */
router.route("/parsePDF").post(
    verifyJWT,
    upload.single("resume"),
    parsePDF
);

/**
 * @route GET /api/parse/get-questions
 * @description To return the ai generated questions formed for user on the basis of resume provided
 * @access Public
 */
router.route("/get-questions").get(
    verifyJWT,
    getQuestions
)

router.route("/get-answerReport").get(
    verifyJWT,
    generateAnswerReport
)

export default router;

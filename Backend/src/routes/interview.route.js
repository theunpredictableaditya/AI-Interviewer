import express from "express";
import multer from "multer";
import { generateAnswerReport, generateSpeech, getQuestions, parsePDF } from "../controllers/interview.controller.js";
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

/**
 * @route POST /api/parse/get-answerReport
 * @description It gives a structured report to the users answer to a particular question
 * @access Public
 */
router.route("/get-answerReport").post(
    verifyJWT,
    generateAnswerReport
)

/**
 * @route POSt /api/parse/generate-speech
 * @description It sends a audio buffer to the user to stream at the frontend
 * @access Public
 */
router.route("/generate-speech").post(
    verifyJWT,
    generateSpeech
)

export default router;

import express from "express";
import multer from "multer";
import { parsePDF } from "../controllers/parsePDF.controller.js";

const upload = multer({dest: "uploads/"});

const router = express.Router();

/**
 * @route POST /api/parse/parsePDF
 * @description Upload The Resume
 * @access Public
 */
router.route("/parsePDF").post(
    upload.single("resume"),
    parsePDF
);

export default router;

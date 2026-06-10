import { createRequire } from "module";
const require = createRequire(import.meta.url);
const {PDFParse} = require("pdf-parse");
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { interviewModel } from "../models/interview.model.js";
import { generateBehavioralQuestion, generateTechnicalQuestion } from "../services/ai.services.js";

/**
 * @access Public 
 * @description Parses the Resume PDF to text format
*/
const parsePDF = asyncHandler(async(req, res) => {
    const user = req.user;
    // console.log(user);
    
    if(!req.file){
        throw new apiError(400, "Error while uploading resume");
    }
    
    const parser = new PDFParse({url: req.file.path});
    
    const result = await parser.getText();
    
    const technicalQuestion = await generateTechnicalQuestion(result.text);
    const behavioralQuestion = await generateBehavioralQuestion(result.text);

    console.log(technicalQuestion);
    console.log(behavioralQuestion);

    fs.unlinkSync(req.file.path);
    
    const interview = await interviewModel.create({
        user: user._id,
        resumeText: result.text,
        technicalQuestion,
        behavioralQuestion,
    })

    res
    .status(200)
    .json(new apiResponse(200, {text: result.text}, "PDF Parsed Successfully"));
})

/**
 * @access Public
 * @description Fetches Database to return the ai generated interview questions
 */
const getQuestions = asyncHandler(async(req, res) => {
    const user = req.user;

    if(!user){
        throw new apiError(400, "Cannot Provide Access");
    }

    const interview = await interviewModel.findOne({
        user: user._id
    })

    if(!interview){
        throw new apiError(400, "Submit Your Resume First To Generate Questions");
    }

    res
    .status(200)
    .json(new apiResponse(200, interview, "Interview Questions Returned Successfully"));
})

export {
    parsePDF,
    getQuestions
};
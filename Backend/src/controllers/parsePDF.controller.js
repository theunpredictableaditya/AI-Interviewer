import { createRequire } from "module";
const require = createRequire(import.meta.url);
const {PDFParse} = require("pdf-parse");
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';

/**
 * @access Public 
 * @description Parses the Resume PDF to text format
*/
const parsePDF = asyncHandler(async(req, res) => {

    if(!req.file){
        throw new apiError(400, "Error while uploading resume");
    }

    const parser = new PDFParse({url: req.file.path});

    const result = await parser.getText();

    console.log(result.text);

    res
    .status(200)
    .json(new apiResponse(200, {text: result.text}, "PDF Parsed Successfully"));
})

export {parsePDF};
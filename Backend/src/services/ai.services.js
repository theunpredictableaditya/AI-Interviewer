import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { apiError } from "../utils/apiError.js";



const questionSchema = z.object({
  topic: z.string().describe("Domain of the particular question that is being asked"),
  question: z.string().describe("Question to be asked from the domain in order to judge the capability of the candidate in a particular domain")
})

const technicalQuestionSchema = z.array(questionSchema);
const behavioralQuestionSchema = z.array(questionSchema);

const generateTechnicalQuestion = async (resumeText) => {
  let technicalQuestion;
  const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
  const technicalQuestionPrompt = `You are an expert technical interviewer.

Return ONLY valid JSON. Do NOT include any explanation, markdown, headings, or extra text.

The output must strictly follow this format:
[
  {
    "topic": "string",
    "question": "string"
  }
]

Generate 10 to 15 items.

Resume:
${resumeText}`;
const response = await ai.models.generateContent({
  model: "gemini-3.1-flash-lite",
  contents: technicalQuestionPrompt,
  config: {
    text: {
        mimeType: "application/json", schema: zodToJsonSchema(technicalQuestionSchema)
      }
    }
  });
  
  try {
    technicalQuestion = technicalQuestionSchema.parse(JSON.parse(response.text));
  } catch (error) {
    console.log("Error Occured While Parsing the AI Output");
    throw new apiError(409, "Error Occured while generating output");
  }
  
  return technicalQuestion;
}

const generateBehavioralQuestion = async (resumeText) => {
  let behavioralQuestion;
  const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
  const behavioralQuestionPrompt = `You are an expert HR and behavioral interviewer.

Return ONLY valid JSON. Do NOT include any explanation, markdown, headings, or extra text.

The output must strictly follow this format:
[
  {
    "topic": "string",
    "question": "string"
  }
]

Rules:
- Generate 10 to 15 items.
- Each "topic" must represent a behavioral skill.
- Each "question" must be situational (e.g., "Tell me about a time when...").
- Do NOT wrap the response in backticks or code blocks.
- Do NOT include trailing commas.
- Ensure the output is valid JSON parsable by JSON.parse().

Resume:
${resumeText}`;
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: behavioralQuestionPrompt,
    config: {
      text: {
        mimeType: "application/json", schema: zodToJsonSchema(behavioralQuestionSchema)
      }
    }
  });
  
  try {
    behavioralQuestion = behavioralQuestionSchema.parse(JSON.parse(response.text));
  } catch (error) {
    console.log("Error Occured While Parsing the AI Output");
    throw new apiError(409, "Error Occured while generating output")
  }

  return behavioralQuestion;
}

export {
  generateTechnicalQuestion,
  generateBehavioralQuestion
}

/*
You are an expert technical interviewer. I will provide you with a candidate's resume text. 
  
Your task is to analyze the skills, projects, and work experience mentioned and generate a structured list of exactly 10 to 15 highly relevant technical interview questions. 

Guidelines:
- Create a specific 'topic' for each question (e.g., 'System Design', 'React.js State Management', 'Database Optimization').
- The 'question' should be challenging and directly test the candidate's practical understanding of the technologies they claim to know. Avoid generic definition questions.

Here is the candidate's resume text:
"""
${resumeText}
"""
*/

/*
You are an expert HR and behavioral interviewer. I will provide you with a candidate's resume text. 
  
  Your task is to analyze their career progression, past roles, and overall experience to generate a structured list of exactly 10 to 15 behavioral interview questions tailored to their background.
  
  Guidelines:
  - Create a specific 'topic' for each question (e.g., 'Conflict Resolution', 'Leadership & Ownership', 'Adaptability', 'Time Management').
- Frame the 'question' to elicit situational responses (e.g., "Tell me about a time when...", "Describe a situation where...").

Here is the candidate's resume text:
"""
${resumeText}
"""
*/
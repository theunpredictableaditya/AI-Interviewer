import { GoogleGenAI } from "@google/genai";
import { z } from zod;
import { zodToJsonSchema } from "zod-to-json-schema";

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});


const questionSchema = z.object({
  topic: z.string().describe("Domain of the particular question that is being asked"),
  question: z.string().describe("Question to be asked from the domain in order to judge the capability of the candidate in a particular domain")
})

const technicalQuestionSchema = z.array(questionSchema);
const behavioralQuestionSchema = z.array(questionSchema);

const generateTechnicalQuestion = async (resumeText) => {
  const technicalQuestionPrompt = `You are an expert technical interviewer. I will provide you with a candidate's resume text. 
  
Your task is to analyze the skills, projects, and work experience mentioned and generate a structured list of exactly 10 to 15 highly relevant technical interview questions. 

Guidelines:
- Create a specific 'topic' for each question (e.g., 'System Design', 'React.js State Management', 'Database Optimization').
- The 'question' should be challenging and directly test the candidate's practical understanding of the technologies they claim to know. Avoid generic definition questions.

Here is the candidate's resume text:
"""
${resumeText}
"""`;
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: technicalQuestionPrompt,
    config: {
      text: {
        mimeType: "application/json", schema: zodToJsonSchema(technicalQuestionSchema)
      }
    }
  });
  
  console.log(response.text);
}

const generateBehavioralQuestion = async (resumeText) => {
  const behavioralQuestionPrompt = `You are an expert HR and behavioral interviewer. I will provide you with a candidate's resume text. 
  
Your task is to analyze their career progression, past roles, and overall experience to generate a structured list of exactly 10 to 15 behavioral interview questions tailored to their background.

Guidelines:
- Create a specific 'topic' for each question (e.g., 'Conflict Resolution', 'Leadership & Ownership', 'Adaptability', 'Time Management').
- Frame the 'question' to elicit situational responses (e.g., "Tell me about a time when...", "Describe a situation where...").

Here is the candidate's resume text:
"""
${resumeText}
"""`;
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: behavioralQuestionPrompt,
    config: {
      text: {
        mimeType: "application/json", schema: zodToJsonSchema(behavioralQuestionSchema)
      }
    }
  });

  console.log(response.text);
}

export {
  generateTechnicalQuestion,
  generateBehavioralQuestion
}
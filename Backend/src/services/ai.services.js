import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { apiError } from "../utils/apiError.js";
import { createWavHeader } from "./buffer.services.js";



const questionSchema = z.object({
  topic: z.string().describe("Domain of the particular question that is being asked"),
  question: z.string().describe("Question to be asked from the domain in order to judge the capability of the candidate in a particular domain")
})

// const technicalQuestionSchema = z.array(questionSchema);
// const behavioralQuestionSchema = z.array(questionSchema);
// const mockQuestionSchema = z.array(questionSchema);
const completeQuestionSchema = z.array(questionSchema);
const interviewReportSchema = z.object({
  overallScore: z
    .number()
    .min(0, "Score cannot be less than 0")
    .max(100, "Score cannot be greater than 100"),

  answerQuality: z.object({
    rating: z.enum(["Poor", "Average", "Good", "Excellent"]),
    feedback: z.string().min(10, "Feedback should be descriptive"),
  }),

  clarityAndCommunication: z.object({
    rating: z.enum(["Poor", "Average", "Good", "Excellent"]),
    feedback: z.string().min(10),
  }),

  technicalAccuracy: z.object({
    rating: z.enum(["Poor", "Average", "Good", "Excellent"]),
    feedback: z.string().min(10),
  }),

  conciseness: z.object({
    rating: z.enum(["Too Short", "Optimal", "Too Long"]),
    feedback: z.string().min(10),
  }),

  skillLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),

  summary: z.string().min(20, "Summary should be meaningful"),
});

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
        mimeType: "application/json", schema: zodToJsonSchema(completeQuestionSchema)
      }
    }
  });
  
  try {
    technicalQuestion = completeQuestionSchema.parse(JSON.parse(response.text));
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
        mimeType: "application/json", schema: zodToJsonSchema(completeQuestionSchema)
      }
    }
  });
  
  try {
    behavioralQuestion = completeQuestionSchema.parse(JSON.parse(response.text));
  } catch (error) {
    console.log("Error Occured While Parsing the AI Output");
    throw new apiError(409, "Error Occured while generating output")
  }

  return behavioralQuestion;
}

const geminiAnswerReview = async (userAnswer, questionAttempted ) => {
  let report;
  const ai= new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
  const answerReportPrompt = `You are an expert technical interviewer and evaluator.

Return ONLY valid JSON. Do NOT include any explanation, markdown, headings, or extra text.

The output must strictly follow this format:
{
"overallScore": number,
"answerQuality": {
"rating": "Poor" | "Average" | "Good" | "Excellent",
"feedback": "string"
},
"clarityAndCommunication": {
"rating": "Poor" | "Average" | "Good" | "Excellent",
"feedback": "string"
},
"technicalAccuracy": {
"rating": "Poor" | "Average" | "Good" | "Excellent",
"feedback": "string"
},
"conciseness": {
"rating": "Too Short" | "Optimal" | "Too Long",
"feedback": "string"
},
"skillLevel": "Beginner" | "Intermediate" | "Advanced",
"summary": "string"
}

Rules:

* "overallScore" must be a number between 0 and 100.
* All "rating" fields must EXACTLY match the allowed enum values.
* Each "feedback" must be at least 10 characters long and meaningful.
* "summary" must be at least 20 characters long.
* Do NOT add extra fields.
* Do NOT include trailing commas.
* Ensure the output is valid JSON parsable by JSON.parse().

Evaluation Guidelines:

* Evaluate based on relevance, clarity, correctness, and completeness.
* Be strict but fair, like a real interviewer.
* Penalize vague, incorrect, or incomplete answers.
* Reward structured, accurate, and clear explanations.

Input:
Question: ${questionAttempted}
Answer: ${userAnswer}
`;

  const response = await ai.models.generateContent({
  model: "gemini-3.1-flash-lite",
  contents: answerReportPrompt,
  config: {
    text: {
      mimeType: "application/json", schema: zodToJsonSchema(interviewReportSchema)
    }
  }
  });

  try {
    report = interviewReportSchema.parse(JSON.parse(response.text));
  } catch (error) {
    console.log("Error Occured While Parsing the AI Output");
    throw new apiError(409, "Error Occured while generating output")
  }

  return report;
}

const questionToSpeech = async (questionText) => {
  try {
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: questionText,
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: 'Aoede'
            }
          }
        }
      }
    })

    const base64Audio = response.candidates[0].content.parts[0].inlineData.data;

    const audioBuffer = Buffer.from(base64Audio, 'base64');

    const playableWavBuffer = createWavHeader(audioBuffer, 24000)

    return playableWavBuffer;
  } catch (error) {
    throw new apiError(500, "Error Occured While Generating Audio Buffer");
  }
}

const generateMocks = async (resumeText) => {
  let mockQuestion;
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

    const mockQuestionPrompt = `You are an expert technical assessment designer.

Your task is to generate a mock test consisting of exactly 5 high-quality questions based on the provided resume.

Return ONLY valid JSON. Do NOT include any explanation, markdown, headings, or extra text.

The output must strictly follow this format:
[
{
"topic": "string",
"question": "string"
}
]

Strict Rules:

* Generate exactly 5 questions (not more, not less).
* Each "topic" must represent a clear technical domain derived from the resume (e.g., "React", "Node.js", "MongoDB", "System Design", "JavaScript").
* Each "question" must:

  * Be suitable for a mock test environment (practical, problem-solving, or scenario-based).
  * Be clear, structured, and test real-world application of knowledge.
  * Avoid simple theory or definition-based questions.
  * Avoid yes/no questions.
  * Be answerable in a written or coding format.
* At least:

  * 2 questions must be scenario-based (real-world problems).
  * 2 questions must involve implementation or coding logic.
* Prioritize topics based on the strongest skills and projects mentioned in the resume.
* Avoid repeating the same topic unless necessary.

Difficulty Guidelines:

* Questions should range from medium to hard level.
* Ensure they reflect real mock test standards used in technical assessments.

Validation Requirements:

* Output must be a valid JSON array.
* No trailing commas.
* No comments.
* No extra keys.
* Do NOT wrap the output in backticks or code blocks.

Resume:
${resumeText}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: mockQuestionPrompt,
      config: {
        text: {
          mimeType: "application/json", schema: zodToJsonSchema(completeQuestionSchema)
        }
      }
    })

    try {
      mockQuestion = completeQuestionSchema.parse(JSON.parse(response.text));
    } catch (error) {
      console.log("Error Occured While Parsing the AI Output");
      throw new apiError(409, "Error Occured while generating output")
    }

    return mockQuestion;
}

export {
  generateTechnicalQuestion,
  generateBehavioralQuestion,
  geminiAnswerReview,
  questionToSpeech,
  generateMocks
}

import mongoose, {Schema} from "mongoose";

/**
 * @description Sub Schema for technical and behavioral questions
 */
const questionSchema = new Schema({
    topic: {
        type: String,
        required: [true, "Topic Of Question Is Required"],
        trim: true
    },
    question: {
        type: String,
        required: [true, "Question Is Required"],
        trim: true
    }
})

/**
 * @description creates an interview schema on the reference of user id and stores technical, behavioral questions formed by gemini on the basis of resume text
 * @example{
 *  user: userReferenceId,
 *  resumeText: pdfParsedText,
 *  technicalQuestion: [{topic: systemdesign, question: how to scale?}]
 *  behavioralQuestion: [{topic: interviewer, question: what value can you provide us?}]
 * }
 */
const interviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "USER",
        required: [true, "User Reference Is Required"]
    },
    resumeText: {
        type: String,
        required: [true, "Resume Text Is Required"]
    },
    technicalQuestion: {
        type: [questionSchema],
        default: []
    },
    behavioralQuestion: {
        type: [questionSchema],
        default: []
    }
})

export const interviewModel = mongoose.model("INTERVIEW", interviewSchema);
import React, {useState} from "react";
import "../Styles/Technical.scss";
import { useAuth } from "../../Auth/Hooks/useAuth";
import ReportModal from "../Components/reportModal";

const Technical = () => {
  const {questions, handleGetAnswerReport} = useAuth();
  const technicalQuestions = questions.technicalQuestion;
  const [answers, setAnswers] = useState({})
  const [aiReport, setAiReport] = useState(null)
  const [showTechnical, setShowTechnical] = useState(true)

  const handleSubmit = async(item) => {
    const questionAttempted = item.question;
    const userAnswer = answers[item.question];

    const data = await handleGetAnswerReport(questionAttempted, userAnswer);
    
    setAiReport(data);
    setShowTechnical(false);
  }

  return (
    <div className="technical-page route">
      <div className="technical-hero">
        <div className="basis">
          <ul>
            <li>RESUME PARSED ANALYSIS</li>
          </ul>
        </div>
        <div className="technical-hero-heading">
          <h1>Technical</h1>
          <h1 className="blue">Deep Dive</h1>
        </div>
        <p>
          We've analyzed your experience with React, Distributed Systems, and
          Python. These questions are tailored to challenge your core
          competencies.
        </p>
      </div>
      <div className={`questions-container ${(showTechnical === false)? "hidden" : ""}`}>
        {technicalQuestions.map((item) => (
        <div className="each-question" key={item._id}>
          <div className="topic">{item.topic}</div>
          <div className="question">
            {item.question}
          </div>
          <div className="answer">
            <h5>YOUR IMPLEMENTATION STRATEGY</h5>
            <textarea
              name="answer"
              id="answer"
              placeholder="Describe your implementation strategy to solve this problem efficiently."
              onChange={(e) => {
                setAnswers({
                  ...answers,
                  [item.question]: e.target.value
                })
              }}
            ></textarea>
          </div>
          <button onClick={() => handleSubmit(item)}>Submit Answer</button>
        </div>
        ))}

      </div>
      {aiReport &&  <ReportModal data={aiReport} setShowSection={setShowTechnical}/>}
      <div className="bottom">-THANKS FOR CHOOSING US-</div>
    </div>
  );
};

export default Technical;

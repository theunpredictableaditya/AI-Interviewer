import React, { useEffect, useState } from "react";
import "../Styles/Behavioral.scss";
import "../Styles/Modal.scss"
import { useAuth } from "../../Auth/Hooks/useAuth";
import ReportModal from "../Components/reportModal";

const Behavioral = () => {

  const {questions, handleGetAnswerReport} = useAuth();
  const behavioralQuestions = questions.behavioralQuestion;
  const [answers, setAnswers] = useState({})
  const [aiReport, setAiReport] = useState(null)
  const [showBehavioral, setShowBehavioral] = useState(true)

  const handleSubmit = async(item) => {
    const questionAttempted = item.question;
    const userAnswer = answers[item.question];

    const data = await handleGetAnswerReport(questionAttempted, userAnswer);
    console.log(data);

    setAiReport(data);
    setShowBehavioral(false);
  }

  return (
    <div className="behavioral-page route">
      <div className="behavioral-hero">
        <div className="topic">
          <h1>Master The</h1>
          <h1 className="blue">STAR</h1>
          <h1>Method</h1>
        </div>
        <p>
          Our AI analyzes your structure, emotional intelligence, and narrative
          impact. Practice these behavioral prompts tailored for executive-level
          positions.
        </p>
      </div>

      <div className={`questions-container ${(showBehavioral === false)? "hidden" : ""}`}>
        {behavioralQuestions.map((item) => (
        <div className="each-question" key={item._id}>
          <div className="topic">
            {item.topic}
          </div>
          <div className="question">
            {item.question}
          </div>
          <div className="answer">
            <h5>YOUR IMPLEMENTATION STRATEGY</h5>
            <textarea
              name="answer"
              id="answer"
              placeholder="Start typing your response using the STAR method (Situation, Task, Action, Result)..."
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

        {aiReport && 
      <ReportModal data={aiReport} setShowSection={setShowBehavioral}/>
        }
    </div>
  );
};

export default Behavioral;

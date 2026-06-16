import React from "react";
import "../Styles/Behavioral.scss";
import "../Styles/Modal.scss"
import { useAuth } from "../../Auth/Hooks/useAuth";
import ReportModal from "../Components/reportModal";

const Behavioral = () => {

  const {questions} = useAuth();
  const behavioralQuestions = questions.behavioralQuestion;

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

      <div className="questions-container">
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
            ></textarea>
          </div>
          <button>Submit Answer</button>
        </div>
        ))}

      </div>

      <ReportModal/>
    </div>
  );
};

export default Behavioral;

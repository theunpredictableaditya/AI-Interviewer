import React from "react";
import "../Styles/Technical.scss";
import { useAuth } from "../../Auth/Hooks/useAuth";

const Technical = () => {
  const {questions} = useAuth();
  const technicalQuestions = questions.technicalQuestion;

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
      <div className="questions-container">
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
            ></textarea>
          </div>
          <button>Submit Answer</button>
        </div>
        ))}

      </div>
      <div className="bottom">-THANKS FOR CHOOSING US-</div>
    </div>
  );
};

export default Technical;

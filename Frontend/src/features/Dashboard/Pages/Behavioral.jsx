import React from 'react'
import "../Styles/Behavioral.scss"

const Behavioral = () => {
  return (
    <div className='behavioral-page route'>
      <div className="behavioral-hero">
        <div className="topic">
          <h1>Master The</h1>
        <h1 className='blue'>STAR</h1>
        <h1>Method</h1>
        </div>
        <p>Our AI analyzes your structure, emotional intelligence, and
narrative impact. Practice these behavioral prompts tailored for
executive-level positions.</p>
      </div>

      <div className="questions-container">
        <div className="each-question">
          <div className="topic">CONFLICT MANAGEMENT</div>
          <div className="question">
            "Tell me about a time you had a significant disagreement with a stakeholder. How did you
manage the situation and what was the outcome?"
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
        <div className="each-question">
          <div className="topic">CONFLICT MANAGEMENT</div>
          <div className="question">
            "Tell me about a time you had a significant disagreement with a stakeholder. How did you
manage the situation and what was the outcome?"
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
        <div className="each-question">
          <div className="topic">CONFLICT MANAGEMENT</div>
          <div className="question">
            "Tell me about a time you had a significant disagreement with a stakeholder. How did you
manage the situation and what was the outcome?"
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
      </div>
    </div>
  )
}

export default Behavioral

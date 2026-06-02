import React from "react";
import "../Styles/Mock.scss";
import aihr from "../../../assets/aihr.svg";
import microphone from "../../../assets/microphone.svg";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Mock = () => {

  const { transcript } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-US'
  });
  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div className="mock-page route">
      <div className="left">
        <div className="showAi">
          <div className="ai-image">
            <img src={aihr} alt="aihr" />
          </div>
          <div className="question">
            <div className="topic">SYSTEM DESIGN</div>
            <h3>
              How would you architect a real- time analytics dashboard that
              supports millions of concurrent events per second?
            </h3>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="transcript-box">
          <div className="topic">
            <ul>
              <li>LIVE TRANSCRIPT</li>
            </ul>
          </div>
          <div className="transcript">
            {transcript}
          </div>
        </div>
        <div className="speaking-status">
          <div className="microphone">
            <img src={microphone} alt="microphone" />
          </div>
          <button onClick={startListening}>START SPEAKING</button>
        </div>
        <div className="next-question">
          <button>Next Question</button>
        </div>
      </div>
    </div>
  );
};

export default Mock;

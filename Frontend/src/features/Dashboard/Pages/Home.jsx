import React, { useRef, useEffect } from "react";
import upload from "../../../assets/upload.svg";
import technical from "../../../assets/technical.svg";
import behavioral from "../../../assets/behavioral.svg";
import mock from "../../../assets/mock.svg";
import "../Styles/Home.scss";
import { useAuth } from "../../Auth/Hooks/useAuth";

const Home = () => {
  const fileRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user])
  

  const openFile = () => {
    fileRef.current.click();
  };

  return (
    <div className="home-page route">
      <div className="home-hero">
        <div className="left">
          <div className="upload">
            <img src={upload} alt="upload" />
          </div>
          <h1>Upload Your Career Story</h1>
          <div className="brief">
            Drag and drop your PDF or DOCX resume here. Our Neural Engine will
            decode your experience to generate tailored high-fidelity questions.
          </div>
          <div className="buttons">
            <input type="file" ref={fileRef} name="resume" id="resume" hidden />
            <button className="browse-files" onClick={openFile}>
              Browse Files
            </button>
            <button className="generate-questions">Generate Questions</button>
          </div>
        </div>
        <div className="right">
          <div className="total-questions">
            <h3>TOTAL QUESTIONS</h3>
            <h1>1279</h1>
          </div>
          <div className="strong-areas">
            <h3>STRONG AREAS</h3>
            <ul>
              <li>System Architecture</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="weak-areas">
            <h3>WEAK AREAS</h3>
            <ul>
              <li>System Architecture</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <div className="top">ACCELERATOR</div>
        <div className="topic">Quick Actions</div>
        <div className="cards">
          <div className="card">
            <div className="cardTopicImg">
              <img src={technical} alt="technical" />
            </div>
            <h3 className="topic">Technical Track</h3>
            <div className="brief">
              Algorithm drills, architecture deep- dives, and coding challenges
              calibrated for Senior roles.
            </div>
            <h4 className="action">START TRAINING</h4>
          </div>
          <div className="card">
            <div className="cardTopicImg">
              <img src={behavioral} alt="behavioral" />
            </div>
            <h3 className="topic">Behavioral Core</h3>
            <div className="brief">
              Master the STAR method. AI-driven feedback on your soft skills and
              leadership narratives.
            </div>
            <h4 className="action">PRACTICE RESPONSES</h4>
          </div>
          <div className="card">
            <div className="cardTopicImg">
              <img src={mock} alt="mock" />
            </div>
            <h3 className="topic">Mock Simulation</h3>
            <div className="brief">
              Full-scale 45-minute live simulation with video analysis and
              synthetic pressure testing.
            </div>
            <h4 className="action">LAUNCH SIM</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">
          &copy;2026 Neural Interviewer. Powered by Advanced Synthetic
          Intelligence.
        </div>
        <ul className="services">
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

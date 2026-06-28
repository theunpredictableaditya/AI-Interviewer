import React, {useState, useEffect} from "react";
import "../Styles/Mock.scss";
import aihr from "../../../assets/aihr.svg";
import microphone from "../../../assets/microphone.svg";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useAuth } from "../../Auth/Hooks/useAuth";
import MockReportModal from "../Components/MockReportModal";

const Mock = () => {

  const {questions, handleGenerateSpeech, handleGenerateMock, handleEvaluateMock} = useAuth();
  const [showInitialModal, setShowInitialModal] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mockQuestions, setMockQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentQuestionTopic, setCurrentQuestionTopic] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [mockData, setMockData] = useState(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [mockInterviewReport, setMockInterviewReport] = useState(null);

  const { transcript, resetTranscript } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-US'
  });

  // fetches the 5 mock questions whenever the page is reloaded and sets setMockQuestion
  useEffect(() => {
    const resumeText = questions.resumeText;
    (async()=>{
      const data = await handleGenerateMock(resumeText);
      setMockQuestions(data);
      setCurrentQuestion(data[0].question);
      setCurrentQuestionTopic(data[0].topic);
    })()
  }, []) 

  const handleInitializeInterview = async() => {
    setShowInitialModal(false);

    await askQuestion(currentQuestion);
  }
  

  const stopListening = () => SpeechRecognition.stopListening();

  const askQuestion = async(questionText) => {
    try {
      const audioUrl = await handleGenerateSpeech(questionText);

      const audio = new Audio(audioUrl);

      audio.onended = () => {
        console.log("Question Have Been Asked its now time for candidate to speak");

        URL.revokeObjectURL(audioUrl);
      }

      audio.play();
    } catch (error) {
      console.error("Error Asking The Question", error.response?.data || error.message);
    }
  }

  const handleNextQuestion = async() => {
    if (!mockQuestions) return;
    
    const newIndex = currentIndex + 1;
    
    if(newIndex >= 5){
      const data = await handleEvaluateMock(mockData);
      setMockInterviewReport(() => data);
      setShowReportModal(true);
      return;
    }

    setMockData({
      ...(mockData || {}),
      [currentQuestion]: transcript
    })

    resetTranscript();
    setCurrentIndex(newIndex);
    setCurrentQuestion(mockQuestions[newIndex].question);
    setCurrentQuestionTopic(mockQuestions[newIndex].topic);
    await askQuestion(mockQuestions[newIndex].question);
    console.log(currentQuestion);
  }

  return (
    <div className="mock-page route">
      <div className={`initialModal ${showInitialModal ? "" : "hidden"}`}>
        <button onClick={async() => await handleInitializeInterview()}>Start Interview</button>
      </div>
      <div className="left">
        <div className="showAi">
          <div className="ai-image">
            <img src={aihr} alt="aihr" />
          </div>
          <div className="question">
            <div className="topic">{currentQuestionTopic}</div>
            <h3>
              {currentQuestion}
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
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
      {showReportModal && (
        <MockReportModal data={mockInterviewReport} onClose={() => setShowReportModal(false)} />
      )}
    </div>
  );
};

export default Mock;

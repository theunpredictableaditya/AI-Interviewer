import React, { useState } from 'react'
import "../Styles/Modal.scss"
import close from "../../../assets/close.svg"

const reportModal = ({data, setShowSection}) => {
    const aiReport = data;
    const overallScore = aiReport.overallScore;
    const answerQuality = aiReport.answerQuality;
    const clarityAndCommunication = aiReport.clarityAndCommunication;
    const conciseness = aiReport.conciseness;
    const skillLevel = aiReport.skillLevel;
    const summary = aiReport.summary;
    const technicalAccuracy = aiReport.technicalAccuracy;

  return (
    <div className='modal'>
        <div className="close">
            <div className="close-wrapper" onClick={() => setShowSection(true)}>
              <img src={close} alt="close" />
            </div>
        </div>
        <div className="cardsContainer">
            <div className="overallScoreCard card">
                <h3>Overall Score</h3>
                <h1>{overallScore}</h1>
            </div>
            <div className="descriptionCards">
                <div className="card answerQuality">
                    <h2 className="topic">Answer Quality</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">{answerQuality.rating}</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">{answerQuality.feedback}</div>
                    </div>
                </div>
                <div className="card clarityAndCommunication">
                    <h2 className="topic">Clarity And Communication</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">{clarityAndCommunication.rating}</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">{clarityAndCommunication.feedback}</div>
                    </div>
                </div>
                <div className="card technicalAccuracy">
                    <h2 className="topic">Technical Accuracy</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">{technicalAccuracy.rating}</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">{technicalAccuracy.feedback}</div>
                    </div>
                </div>
                <div className="card conciseness">
                    <h2 className="topic">Conciseness</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">{conciseness.rating}</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">{conciseness.feedback}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default reportModal

import React, { useState } from 'react'
import "../Styles/Modal.scss"
import close from "../../../assets/close.svg"

const reportModal = () => {
  return (
    <div className='modal'>
        <div className="close">
            <div className="close-wrapper">
              <img src={close} alt="close" />
            </div>
        </div>
        <div className="cardsContainer">
            <div className="overallScoreCard card">
                <h3>Overall Score</h3>
                <h1>9.5</h1>
            </div>
            <div className="descriptionCards">
                <div className="card answerQuality">
                    <h2 className="topic">Answer Quality</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">Excellent</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">The candidate provided a concise and accurate definition of OOP, correctly identified all four fundamental pillars, and effectively explained the practical benefits.</div>
                    </div>
                </div>
                <div className="card clarityAndCommunication">
                    <h2 className="topic">Clarity And Communication</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">Excellent</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">The explanation is well-structured, uses clear terminology, and is easy to follow for both technical and non-technical stakeholders.</div>
                    </div>
                </div>
                <div className="card technicalAccuracy">
                    <h2 className="topic">Technical Accuracy</h2>
                    <div className="rating">
                        <h4>Rating</h4>
                        <div className="level">Excellent</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">All technical definitions provided for encapsulation, abstraction, inheritance, and polymorphism are accurate and standard within the industry.</div>
                    </div>
                </div>
                <div className="card conciseness">
                    <h2 className="topic">Conciseness</h2>
                    <div className="rating">
                        <h4>Optimal</h4>
                        <div className="level">Excellent</div>
                    </div>
                    <div className="feedback">
                        <h4>Feedback</h4>
                        <div className="description">The response is appropriately detailed without including unnecessary fluff or tangential information.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default reportModal

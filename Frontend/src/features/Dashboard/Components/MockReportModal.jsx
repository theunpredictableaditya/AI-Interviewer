import React from "react";
import "../Styles/MockReportModal.scss";

const defaultData = {
  statusCode: 200,
  data: {
    overallScore: 88,
    hiringVerdict: "Strong Hire",
    summaryStatement:
      "The candidate demonstrates a strong grasp of core web development concepts, including React performance optimization, RESTful API design patterns, and JavaScript asynchronous execution models.",
    technicalAccuracy: {
      rating: "Excellent",
      feedback:
        "The explanations provided are technically accurate and demonstrate a clear understanding of the underlying mechanics of the technologies discussed.",
    },
    problemSolving: {
      rating: "Good",
      feedback:
        "The candidate provides logical, structured approaches to system design and conceptual explanations, though the API design could benefit from more specific detail regarding request/response schemas or pagination.",
    },
    clarityInAnswer: {
      rating: "Excellent",
      feedback:
        "Answers are well-structured, easy to follow, and get straight to the point without unnecessary jargon or filler.",
    },
    topStrengths: [
      "Clear and concise communication",
      "Strong foundational knowledge of web frameworks",
      "Correct conceptual understanding of asynchronous programming",
    ],
    areasOfImprovement: ["Depth in API design specifics", "Elaboration on edge cases"],
    adviceToImprove: [
      "When discussing API design, mention pagination, filtering, and error handling strategies",
      "In React performance explanations, consider mentioning specific tools like React DevTools or the role of reconciliation",
    ],
  },
};

function MockReportModal({ data = defaultData, onClose }) {
  const report = data?.data || data || {};

  const sections = [
    { title: "Technical Accuracy", item: report.technicalAccuracy },
    { title: "Problem Solving", item: report.problemSolving },
    { title: "Clarity in Answer", item: report.clarityInAnswer },
  ].filter((section) => section.item);

  return (
    <div className="mock-report-modal-overlay">
      <div className="mock-report-modal">
        <div className="mock-report-modal__header">
          <h3>Mock Report</h3>
          <button type="button" onClick={onClose} aria-label="Close report modal">
            ×
          </button>
        </div>

        <div className="mock-report-modal__body">
          <div className="mock-report-modal__summary">
            <div className="summary-card score-card">
              <span>Overall Score</span>
              <strong>{report.overallScore ?? 0}</strong>
            </div>
            <div className="summary-card">
              <h4>{report.hiringVerdict || "Pending"}</h4>
              <p>{report.summaryStatement || "No summary available."}</p>
            </div>
          </div>

          <div className="mock-report-modal__grid">
            {sections.map((section) => (
              <div className="detail-card" key={section.title}>
                <h4>{section.title}</h4>
                <p className="detail-card__rating">{section.item.rating}</p>
                <p className="detail-card__feedback">{section.item.feedback}</p>
              </div>
            ))}
          </div>

          <div className="mock-report-modal__lists">
            <div className="list-card">
              <h4>Top Strengths</h4>
              <ul>
                {(report.topStrengths || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="list-card">
              <h4>Areas of Improvement</h4>
              <ul>
                {(report.areasOfImprovement || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="list-card">
              <h4>Advice to Improve</h4>
              <ul>
                {(report.adviceToImprove || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockReportModal;

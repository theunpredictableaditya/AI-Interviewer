import React from "react";
import "../Styles/GetStartedResources.scss";
import GetStartedResourcesCard from "./GetStartedResourcesCard.jsx";
import message from "../../../assets/message.svg";
import caseIcon from "../../../assets/case.svg";
import analytics from "../../../assets/analytics.svg";

const GetStartedResourcesSection = () => {
  return (
    <div className="resources-section">
      <div className="headings">
        <div className="tag">CORE CAPABILITIES</div>
        <h2>Everything you need to land your dream job</h2>
        <p>
          Our platform utilizes cutting-edge AI to provide a comprehensive
          training environment that feels like the real thing.
        </p>
      </div>
      <div className="cards">
        <GetStartedResourcesCard
          icon={message}
          heading="Real-time Feedback"
          paragraph="Receive instant AI-driven critiques
on your answers, body language,
and vocal tone as you practice."
          activity="Learn more"
        />
        <GetStartedResourcesCard
          icon={caseIcon}
          heading="Industry Questions"
          paragraph="Practice with a library of thousands
of role-specific questions curated
by hiring managers from top firms."
          activity="View library"
        />
        <GetStartedResourcesCard
          icon={analytics}
          heading="Performance Analytics"
          paragraph="Track your growth with detailed
competency breakdowns and
predictive readiness scores for your
target roles."
          activity="See dashboard"
        />
      </div>
    </div>
  );
};

export default GetStartedResourcesSection;

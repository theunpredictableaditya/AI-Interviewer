import React from "react";
import "../Styles/GetStartedHeroMain.scss";

const GetStartedHeroMain = () => {
  return (
    <div className="hero-main">
      <div className="tag">
        <ul>
          <li>NOW IN BETA</li>
        </ul>
      </div>
      <div className="heading">
        <div className="white">Master Your Next Interview</div>
        <div className="blue">with AI Precision</div>
      </div>
      <div className="paragraph">
        Unlock your potential with real-time feedback, industry-specific
        simulations, and deep performance analytics powered by advanced neural
        networks.
      </div>
      <div className="buttons">
        <button className="ctaButton blueButton">Get Started Free</button><button className="ctaButton transButton">Watch Demo</button>
      </div>
    </div>
  );
};

export default GetStartedHeroMain;

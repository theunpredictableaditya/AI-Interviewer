import React from "react";
import "../Styles/loginBody.scss";
import loginLeft from "../../../assets/loginLeftBg.svg";

const LoginBody = () => {
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="left">
          <img src={loginLeft} alt="" />
          <div className="contains">
            <div className="heading">
              Unlock the future of hiring.
            </div>
            <p>
              Our AI-powered platform helps you identify top talent faster with
              unbiased, data-driven interviews.
            </p>
            <div className="userContainer"></div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default LoginBody;

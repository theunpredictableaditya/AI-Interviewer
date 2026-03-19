import React from 'react';
import logo from '../../../assets/logo.svg';
import share from "../../../assets/share.svg";
import setting from "../../../assets/setting.svg";
import "../Styles/GetStartedFooter.scss"

const GetStartedFooter = () => {
  return (
    <footer className='getStartedFooter'>
        <div className="top">
            <div className="left">
                <img src={logo} alt="logo" />
                <span>AI Interviewer</span>
            </div>
            <ul className="mid">
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Cookies</li>
                <li>Contact & Support</li>
            </ul>
            <div className="right">
                <button><img src={share} alt="" /></button><button><img src={setting} alt="" /></button>
            </div>
        </div>
        <div className="bottom">
            <span>&copy;2026 AI Interview Inc. Empowering the future workforce.</span>
        </div>
    </footer>
  )
}

export default GetStartedFooter

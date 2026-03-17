import React from 'react'
import logo from "../../../assets/logo.svg"
import "../Styles/GetStartedNav.scss"

const GetStartedNav = () => {
  return (
    <nav>
        <div className="left">
            <img src={logo} alt="logo" />
            <span>AI Interviewer</span>
        </div>
        <ul className="mid">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
        <div className="right">
            <button className='signIn'>SignIn</button><button className='getStarted'>Get Started</button>
        </div>
    </nav>
  )
}

export default GetStartedNav

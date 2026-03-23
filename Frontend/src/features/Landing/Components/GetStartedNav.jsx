import React from 'react'
import logo from "../../../assets/logo.svg"
import "../Styles/GetStartedNav.scss"
import { useNavigate } from 'react-router-dom'

const GetStartedNav = () => {
    const navigate = useNavigate();

  return (
    <nav className='getStartedNav'>
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
            <button onClick={()=>navigate("/login")} className='signIn'>SignIn</button><button onClick={()=>navigate("/register")} className='getStartedButton'>Get Started</button>
        </div>
    </nav>
  )
}

export default GetStartedNav

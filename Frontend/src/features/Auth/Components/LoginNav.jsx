import React from 'react'
import "../Styles/loginNav.scss"
import logo from "../../../assets/logo.svg"

const LoginNav = () => {
  return (
    <nav className='login-nav'>
        <div className="logo"><img src={logo} alt="" /><span>AI Interviewer</span></div>
    </nav>
  )
}

export default LoginNav

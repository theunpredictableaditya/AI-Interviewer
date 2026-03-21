import React from 'react'
import logo from '../../../assets/logo.svg'
import '../Styles/registerNav.scss'

const RegisterNav = () => {
  return (
    <nav className='register-nav'>
        <div className="logo"><img src={logo} alt="" /><span>AI Interviewer</span></div>
        <span>Documentation</span>
    </nav>
  )
}

export default RegisterNav

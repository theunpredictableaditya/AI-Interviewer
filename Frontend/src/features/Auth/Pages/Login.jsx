import React from 'react'
import "../Styles/login.scss"
import LoginNav from '../Components/LoginNav'
import LoginFoot from '../Components/LoginFoot'
import LoginBody from '../Components/LoginBody'

const Login = () => {
  return (
    <div className='login'>
      <LoginNav/>
      <LoginBody/>
      <LoginFoot/>
    </div>
  )
}

export default Login

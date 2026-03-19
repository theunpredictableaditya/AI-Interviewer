import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/loginFoot.scss"

const LoginFoot = () => {
  return (
    <footer className='login-foot'>
        <span>Don't have an account?</span>
        <Link>Register for free</Link>
    </footer>
  )
}

export default LoginFoot

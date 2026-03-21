import React from 'react'
import RegisterNav from '../Components/RegisterNav'
import "../Styles/register.scss"
import RegisterBody from '../Components/RegisterBody'
import RegisterFoot from '../Components/RegisterFoot'

const Register = () => {
  return (
    <div className='register'>
      <RegisterNav/>
      <RegisterBody/>
      <RegisterFoot/>
    </div>
  )
}

export default Register

import React from 'react'
import "../Styles/registerBody.scss"
import loginLeft from "../../../assets/loginLeftBg.svg"
import blankUser from "../../../assets/blankUser.svg"

const RegisterBody = () => {
  return (
    <div className='register-body'>
      <div className="left">
                <img src={loginLeft} alt="" />
                <div className="blurry"></div>
                <div className="contains">
                  <div className="heading">Unlock the future of hiring.</div>
                  <p>
                    Our AI-powered platform helps you identify top talent faster with
                    unbiased, data-driven interviews.
                  </p>
                  <div className="userContainer">
                    <div className="blankUserContainer item1">
                      <img src={blankUser} alt="" className="blankUsers" />
                    </div>
                    <div className="blankUserContainer item2">
                      <img src={blankUser} alt="" className="blankUsers" />
                    </div>
                    <div className="blankUserContainer item3">
                      <img src={blankUser} alt="" className="blankUsers" />
                    </div>
                    <div className="userButton item4">+10K Users</div>
                  </div>
                </div>
              </div>
      <div className="right">
        <div className="top">Enter your details to get started with our AI platform.</div>
        <form className="register-form">
            <div className="name-section">
                <div className="username-box">
                    <label htmlFor="username">Username</label>
                    <input id='username' type="text" placeholder='johndoe' />
                </div>
                <div className="fullName-box">
                    <label htmlFor="fullname">Full Name</label>
                    <input id='fullname' type="text" placeholder='John Doe' />
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterBody

import React from 'react'
import GetStartedNav from '../Components/GetStartedNav'
import GetStartedCTA from '../Components/GetStartedCTA'
import GetStartedFooter from '../Components/GetStartedFooter'
import "../../../Styles/style.scss"

const GetStarted = () => {
  return (
    <div className='getStarted'>
      <GetStartedNav/>
      <div className="main">
        <GetStartedCTA/>
      </div>
      <GetStartedFooter/>
    </div>
  )
}

export default GetStarted

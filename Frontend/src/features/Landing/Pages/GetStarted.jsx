import React from 'react'
import GetStartedNav from '../Components/GetStartedNav'
import GetStartedCTA from '../Components/GetStartedCTA'
import GetStartedFooter from '../Components/GetStartedFooter'

const GetStarted = () => {
  return (
    <div>
      <GetStartedNav/>
      <div className="main">
        <GetStartedCTA/>
      </div>
      <GetStartedFooter/>
    </div>
  )
}

export default GetStarted

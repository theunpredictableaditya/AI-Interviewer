import React from 'react'
import "../Styles/GetStartedPricing.scss"
import { useNavigate } from 'react-router-dom'

const GetStartedPricingSection = () => {

  const navigate = useNavigate();

  return (
    <div className='pricing-section'>
      <div className="boxInside">
        <h2>Ready to land your dream job?</h2>
        <div className="info">Join 50,000+ candidates who have already aced their interviews using
our AI coaching platform.</div>
      <div className="buttons">
        <button onClick={()=>navigate("/register")} className='free-trial'>Start Your Free Trial</button><button onClick={()=>navigate("/register")} className='no-credit'>No credit card required</button>
      </div>
      </div>
    </div>
  )
}

export default GetStartedPricingSection

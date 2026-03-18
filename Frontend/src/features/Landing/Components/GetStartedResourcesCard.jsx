import React from 'react'
import message from "../../../assets/message.svg"
import caseIcon from "../../../assets/case.svg"
import analytics from "../../../assets/analytics.svg"
import arrow from "../../../assets/arrow.svg"
import "../Styles/GetStartedResourcesCard.scss"

const GetStartedResourcesCard = (props) => {
  return (
    <div className='card'>
        <div className="icon width">
            <img src={props.icon} alt="" />
        </div>
        <h2 className='width'>{props.heading}</h2>
        <p className='width'>{props.paragraph}</p>
        <div className="goto">{props.activity}<img src={arrow} alt='arrow' /></div>
    </div>
  )
}

export default GetStartedResourcesCard

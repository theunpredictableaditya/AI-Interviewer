import React from 'react'
import GetStartedVideo from './GetStartedVideo'
import "../Styles/GetStartedHero.scss"
import GetStartedHeroMain from './GetStartedHeroMain'

const GetStartedHeroComp = () => {
  return (
    <div className='hero-section'>
        <GetStartedHeroMain/>
      <GetStartedVideo/>
    </div>
  )
}

export default GetStartedHeroComp

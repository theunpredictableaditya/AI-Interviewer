import React from 'react'
import intro from "../../../assets/intro.mp4"
import playButton from "../../../assets/playButton.svg"
import "../Styles/GetStartedResourcesVideo.scss"

const GetStartedVideo = () => {
  return (
    <div className='video-container'>
      <video src={intro}></video>
      <img src={playButton} alt="playButton" />
    </div>
  )
}

export default GetStartedVideo

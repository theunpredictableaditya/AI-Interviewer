import React from 'react'
import search from "../../../assets/search.svg"
import setting from "../../../assets/homeSetting.svg"
import notification from "../../../assets/notification.svg"
import "../Styles/NavBar.scss"

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="navRight">
        <div className="white">Intelligence</div>
        <div className="blue">Hub</div>
      </div>
      <div className="navLeft">
        <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder='Search Insight...'/>
        </div>
        <div className="notification">
          <img src={notification} alt="notification" />
        </div>
        <div className="settings">
          <img src={setting} alt="setting" />
        </div>
      </div>
    </div>
  )
}

export default NavBar

import React, {useEffect} from 'react'
import "./layout.scss"
import NavBar from '../features/Dashboard/Pages/NavBar'
import SideBar from '../features/Dashboard/Pages/SideBar'
import Home from '../features/Dashboard/Pages/Home'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  
  return (
    <div className='layout'>
      <SideBar/>
      <div className="right">
        <NavBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout

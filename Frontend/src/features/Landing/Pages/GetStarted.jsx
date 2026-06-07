import React, {useEffect} from 'react'
import GetStartedNav from '../Components/GetStartedNav'
import GetStartedCTA from '../Components/GetStartedCTA'
import GetStartedFooter from '../Components/GetStartedFooter'
import "../../../Styles/style.scss"
import { useAuth } from '../../Auth/Hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
  const navigate = useNavigate();

  const { handleGetMe } = useAuth();

  const handleAutoLogin = async (e) => {
    // e.preventDefault();
    const result = await handleGetMe();
    if(result){
      navigate("/dashboard/home");
    }
  }

  useEffect(() => {
    (async()=>{
      handleAutoLogin();
    }) ();

  }, [])
  

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

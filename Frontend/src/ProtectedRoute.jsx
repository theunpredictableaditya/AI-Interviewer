import React, {useState, useEffect} from 'react'
import { useAuth } from './features/Auth/Hooks/useAuth'
import { Navigate, Outlet} from "react-router-dom"

const ProtectedRoute = () => {
    const {user, handleGetMe, loading} = useAuth();
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        (
            async () => {
                if(!user){
                    const isAuth = await handleGetMe();
                    if(!isAuth){
                        setChecked(true);
                        return;
                    }
                }
                setChecked(true);
            }
        )()
    }, [])

    if(loading || !checked) return <p>Loading....</p>;
    

  return user? <Outlet/> : <Navigate to="/login" replace />
}

export default ProtectedRoute

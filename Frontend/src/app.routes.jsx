import {createBrowserRouter} from 'react-router-dom';
import Login from './features/Auth/Pages/Login';
import Register from './features/Auth/Pages/Register';
import GetStarted from './features/Landing/Pages/GetStarted';
import Layout from './layouts/Layout';
import Home from './features/Dashboard/Pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GetStarted/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },{
        path: "/dashboard",
        element: <Layout/>,
        children: [
            {
                path: "home",
                element: <Home/>
            }
        ]
    }   
])

export {router};
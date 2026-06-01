import {createBrowserRouter} from 'react-router-dom';
import Login from './features/Auth/Pages/Login';
import Register from './features/Auth/Pages/Register';
import GetStarted from './features/Landing/Pages/GetStarted';
import Layout from './layouts/Layout';
import Home from './features/Dashboard/Pages/Home';
import Technical from './features/Dashboard/Pages/Technical';
import Behavioral from './features/Dashboard/Pages/Behavioral';
import Mock from './features/Dashboard/Pages/Mock';

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
            },
            {
                path: "technical",
                element: <Technical/>
            },
            {
                path: "behavioral",
                element: <Behavioral/>
            },
            {
                path: "mock",
                element: <Mock/>
            }
        ]
    }   
])

export {router};
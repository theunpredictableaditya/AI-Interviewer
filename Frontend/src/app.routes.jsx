import {createBrowserRouter} from 'react-router-dom';
import Login from './features/Auth/Pages/Login';
import Register from './features/Auth/Pages/Register';
import GetStarted from './features/Landing/Pages/GetStarted';

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
    }
])

export {router};
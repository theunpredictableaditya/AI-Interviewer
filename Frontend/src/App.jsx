import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './app.routes.jsx';
import "./Styles/style.scss";
import { AuthProvider } from './features/Auth/auth.context.jsx';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App

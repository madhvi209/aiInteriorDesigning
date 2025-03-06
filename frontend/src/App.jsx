import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }


]);

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />


    </>
  )
}

export default App
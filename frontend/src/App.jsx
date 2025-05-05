import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import GiftCards from './components/GiftCards';
import Shop from './components/Shop';
import Profile from './components/Profile';
import AddDesigner from './components/AddDesigner';
import DesignerDetail from './components/DesignerDetail';



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
  },
  {
    path: '/howItWorks',
    element: <HowItWorks />
  },
  {
    path: '/portfolio',
    element: <Portfolio/>
  },
  {
    path: '/giftCards',
    element: <GiftCards />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/designerAdd',
    element: <AddDesigner/>
  },
  {
    path: '/designer/:id',
    element: <DesignerDetail />
  },


]);

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />


    </>
  )
}

export default App
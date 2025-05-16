import React from 'react'
import Navber from '../layout/Navber'
import Sidebar from '../layout/Sidebar'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'
const Rootlayout = () => {
  return (
    <div>
    <Navber/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Rootlayout
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard';


const Navbar = () => {

  const navigate = useNavigate()

  const handlelogout = () => {
    localStorage.removeItem("isLogin")
    navigate("/")


  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="#">Navbar</a>

      <div className=" navbar-collapse d-flex align-items-center justify-content-end " style={{ gap: "15px" }}>
        <Link to={"/about"} >About</Link>
        <Link to={"/dashboard"} >Dashboard</Link>
        <Link to={"/contact"} >Contact</Link>
        <button className='btn btn-outline-primary btn-sm ' onClick={handlelogout}> Logout</button>
      </div>
    </nav>
  )
}

export default Navbar

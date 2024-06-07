import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });
  const Swal = require('sweetalert2')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const getData = JSON.parse(localStorage.getItem("user"))
    // console.log("object", typeof getData)

    if (formData.email === getData?.email && formData.password === getData.password) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login SuccessFully",
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.setItem("isLogin", true)
      navigate("/dashboard")
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={(e) => handleLogin(e)} >
        <label>Email:</label>
        <input type='email' value={formData.email} name='email' placeholder='Email...' onChange={(e) => handleChange(e)}/>
        <label>Password:</label>
        <input type='password' value={formData.password} name='password' placeholder='Password...' onChange={(e) => handleChange(e)} />
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>

    </div>
  )
}

export default Login

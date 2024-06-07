import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
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
  const handleRegister = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.password && formData.mobile) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Register SuccessFully",
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.setItem("user", JSON.stringify(formData))
      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: ""

      })
      navigate("/")
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
      <h3>Register</h3>
      <form onSubmit={(e) => handleRegister(e)}>

        <label>Name:</label>
        <input type='text' value={formData.name} name='name' placeholder='Name...' onChange={(e) => handleChange(e)} />
        <label>Email:</label>
        <input type='email' value={formData.email} name='email' placeholder='Email...' onChange={(e) => handleChange(e)} />
        <label>Password:</label>
        <input type='password' value={formData.password} name='password' placeholder='Password...' onChange={(e) => handleChange(e)} />
        <label>Mobile:</label>
        <input type='number' value={formData.mobile} name='mobile' placeholder='Mobile Number...' onChange={(e) => handleChange(e)} />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

    </div>
  )
}

export default Register

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Pages/Navbar';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivateRoute from './Pages/PrivateRoute';
import Todooo from "./Pages/Todooo";
import NumberToWord from './Compo/NumberToWord';
import TableData from './Compo/TableData';
import Hope from './Compo/Hope';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes> */}
      {/* <Todooo/> */}

      {/* <NumberToWord/> */}
      <TableData/>
      <Hope/>

    </div>
  )
}

export default App

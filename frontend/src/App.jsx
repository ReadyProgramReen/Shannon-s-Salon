import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import Stylist from './pages/Stylist'
import Myappointments from './pages/Myappointments'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='text-green-500'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/stylist' element={<Stylist/>} />
        <Route path='/stylist/:speciality' element={<Stylist/>} />
        <Route path='/my-appointments' element={<Myappointments/>} />
        <Route path='/my-appointments/:id' element={<Myappointments/>} />


      </Routes>
    </div>
  )
}

export default App
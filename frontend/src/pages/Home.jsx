import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'

const Home = () => {
  return (
    <div className='mx-4 sm:mx-[5%]'>
      <Header/>
      <SpecialityMenu/>
    </div>
  )
}

export default Home
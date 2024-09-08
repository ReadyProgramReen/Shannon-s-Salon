import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopStylist from '../components/TopStylist'

const Home = () => {
  return (
    <div className='mx-4 sm:mx-[5%]'>
      <Header/>
      <SpecialityMenu/>
      <TopStylist/>
    </div>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopStylist from '../components/TopStylist'
import Salon from '../components/Salon'

const Home = () => {
  return (
    <div >
      <Header/>
      <SpecialityMenu/>
      <TopStylist/>
      <Salon/>
    </div>
  )
}

// className='mx-4 sm:mx-[5%]'

export default Home
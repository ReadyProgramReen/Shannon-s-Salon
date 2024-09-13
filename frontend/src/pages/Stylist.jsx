import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Stylist = () => {
  const {speciality} = useParams()
  const {location} =useParams()

  const {stylist} = useContext(AppContext)

  const [filterStyl, setFilterStyl] = useState([])

  const appFlilter = ()=>{
    if(speciality){
      setFilterStyl(stylist.filter(styl => styl.speciality === speciality))
    }else{
      setFilterStyl(stylist)
    }
  }
  
  useEffect(()=>{
    appFlilter()
  },[stylist,speciality])

 

  return (
    <div>
      {/* left side */}
      <div>
      <p >Find the best stylist in your area</p>
      <div>
        <p>CUT & STYLE</p>
        <p>COLORING</p>
        <p>BRAIDING</p>
        <p>EXTENSIONS & WIG INSTALLS</p>
        <p>STRAIGHTENING & PERMS</p>
        <p>BRIDAL SERVICES</p>
      </div>
 
      </div>


    {/* RIGHT SIDE */}
    <div>
      {
        <div className='flex flex-wrap gap-4 justify-center'>
  {filterStyl.map((item, index) => (
    <div
      onClick={() => { navigate(`/my-appointments/${item._id}`) }}
      className='border border-green-500 rounded-xl bg-[#ecc3ad] h-[320px] overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-[250px]' // Define width for each card
      key={index}
    >
      <img className='bg-[#b9aa9a] w-full h-48 object-cover' src={item.image} alt={item.name} />
      <div className='p-4 '>
        <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
        </div>
        <p className='font-semibold'>{item.name}</p>
        <p className='text-gray-600'>{item.speciality}</p>
      </div>
    </div>
  ))}
</div>

      }
    </div>
      
      
    </div>
  )
}

export default Stylist
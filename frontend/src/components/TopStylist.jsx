import React from 'react'
import { stylist } from '../assets/assets_frontend/assets'

const TopStylist = () => {
  return (
    <div>
        <h1>Top Stylist</h1>
        <p>Simply browse though our extensive list of licensed stylist</p>
        <div>
            {stylist.slice(0,10).map((item,index)=>(
                <div>
                    <img src={item.image} alt="" />
                    <div>
                        <div>
                            <p></p><p>Available</p>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>
            ))}

        </div>
        <button>More</button>
    </div>
  )
}

export default TopStylist
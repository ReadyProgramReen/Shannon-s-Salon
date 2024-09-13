import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="my-20 mx-40">
      <h1 className="text-[#bb4537] text-center text-5xl font-bold my-9">
        Our Services
      </h1>
      <hr className="mx-auto w-24 border-t-2 border-primary mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialityData.map((item, index) => (
          <Link
            onClick={()=>scrollTo(0,0)}
            key={index}
            to={`/stylist/${item.speciality}`}
            className="relative group"
          >
            <img
              className="w-full h-64 object-cover rounded-lg"
              src={item.image}
              alt={item.speciality}
            />
            <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.speciality}
            </p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

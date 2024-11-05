import React, { useState } from "react";
//import "./styles.css";

const ProfileCard = ({animal}) => {
  
    return (
        <div className="flex flex-col min-h-lg rounded-lg text-white bg-transparent shadow relative group">
            {/* Image section with overlap */}
            <img 
                src={img} 
                alt="logo" 
                className="w-32 h-32 mx-auto mt-[2px] rounded-full border-4 border-blue-500 transition-transform duration-300 transform group-hover:scale-110 z-10" 
            />
            
            {/* Title and description section with background, initially hidden */}
            <div className="p-4  bg-slate-800 rounded-b-lg shadow-lg border-slate-700 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <h1 className="text-gray-300 font-bold text-xl text-center mt-2 hover:text-blue-400 transition-colors duration-300">{title}</h1>
                <p className="text-gray-400 font-semibold text-center mt-2 hover:text-blue-300 transition-colors duration-300">{handle}</p>
            </div>
            </div>


    )

}

export default ProfileCard
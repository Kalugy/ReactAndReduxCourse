import React from "react";
import Heart from "../../assets/svg/heart";

const AnimalComponent = ({animal, Increase}) => {  
    return (
        <div className="flex gap-5 flex-wrap max-w-full rounded-lg text-white bg-transparent  overflow-y-auto">
            {animal.map((a, index) => {
                return (
                <div key={index} className="relative ">
                    <img 
                        src={a.img} 
                        alt="logo" 
                        className="w-32 h-32 mx-auto mt-[2px] rounded-full border-4 border-blue-500 transition-transform duration-300 transform" 
                        onClick={() => Increase(a)}
                    />
                    <div className="absolute right-2 bottom-2 z-20">
                        <Heart size={a.heartSize} fill="#ff667f" />
                    </div>
                </div>
            )
            })}
        </div>
    )
}


export default AnimalComponent
import React, { useState } from "react";
//import "./styles.css";
import ProfileCard from "./ProfileCard";

import Img1 from "../../assets/img/alexa.png"
import Img2 from "../../assets/img/cortana.png"
import Img3 from "../../assets/img/siri.png"

const App = () => {
  
    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-row gap-4 mx-auto">
                <ProfileCard title="text1" img={Img1} handle="text1"/>
                <ProfileCard title="text2" img={Img2} handle="text2"/>
                <ProfileCard title="text3" img={Img3} handle="text3"/>
            </div>
        </div>
    )

}

export default App
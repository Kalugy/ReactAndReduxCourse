import React, { useState } from "react";
//import "./styles.css";
import AnimalComponent from "./AnimalComponent";


const App = () => {
  
    const handleClick = () => {
        console.log('test')
    }

    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-row gap-4 mx-auto">
                <button onClick={handleClick()}>Add Animal</button>
            </div>
        </div>
    )

}

export default App
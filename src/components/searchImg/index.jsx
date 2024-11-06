import React, { useState } from "react";
import SearchImg from "./SearchImg";

const App = () => {


    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-col gap-4 mx-auto">
                <input type="text" className="text-black rounded"/>
            </div>
        </div>
    )

}

export default App
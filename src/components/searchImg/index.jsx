import React, { useState } from "react";
import SearchImg from "./SearchImg";

const App = () => {
    const [text, setText] = useState();

    const searchImg = async () => {
        const response = await fetch(`https://picsum.photos/seed/${text}/600/400`) 
    }

    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-col gap-4 mx-auto">
                <input 
                    type="text" 
                    className="text-black rounded"
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
        </div>
    )

}

export default App
import React, { useState } from "react";
//import SearchImg from "./SearchImg";

const App = () => {
    const [text, setText] = useState();
    const [img, setImg] = useState([]);

    const searchImg = async () => {
        const response = await fetch(`https://picsum.photos/seed/${text}/600/400`) 
        console.log(response.url)
        return response.url
    }
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed:');
          // Add any additional functionality here, like submitting the input
          const newImg = searchImg();
          setImg(...img, newImg)
        }
    }
    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-col gap-4 mx-auto">
                <input 
                    type="text" 
                    className="text-black rounded"
                    onChange={(e)=> setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )

}

export default App
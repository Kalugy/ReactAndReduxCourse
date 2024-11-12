import React, { useState } from "react";
import SearchImg from "./SearchImg";
import ImageList from "./ImageList";
import { fetchImages } from '../../api/api'; // import the API function


const App = () => {
    const [text, setText] = useState();
    const [img, setImg] = useState([]);
    

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            const data = await fetchImages(text);
            setImg(data.results);
        }
    }
    return (
        <div className="min-h-screen bg-slate-800 text-white flex flex-col justify-center ">
            <SearchImg setText={setText} handleKeyDown={handleKeyDown} />
            <ImageList images={img}/>
        </div>
    )

}

export default App
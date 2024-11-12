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

    const fetchImages = async () => {
        const accessKey = "8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y";  // Replace with your Unsplash client ID
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${text}&client_id=${accessKey}&per_page=5`
          );
          const data = await response.json();
          setImg(data.results);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed:');
          // Add any additional functionality here, like submitting the input
        //   const newImages = Array.from({length: 20}, (any, index) => {
        //     const randomSeed = `${text}-${Math.random()*1000}`;
        //     return `https://picsum.photos/seed/${randomSeed}/600/400`
        //   })
            fetchImages()
        //const newImg = searchImg();
//          setImg(newImages)
        }
    }
    console.log(img)
    return (
        <div className="h-screen bg-slate-800 text-white flex flex-col justify-center items-center">
            <div className="max-w-lg flex flex-col gap-4 mx-auto">
                <input 
                    type="text" 
                    className="text-black rounded"
                    onChange={(e)=> setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-wrap gap-2 w-screen justify-center p-8">
                {img.length>0 && img.map((image)=>{
                return <img 
                    className="w-36 h-36" 
                    key={image.id} 
                    src={image.urls.small} 
                    alt={image.alt_description} 
                />
                })}

            </div>
        </div>
    )

}

export default App
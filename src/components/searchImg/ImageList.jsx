import React from "react";
import ImageShow from "./ImageShow";


const ImageList = ({images}) => {  
    return (
        <div className="flex flex-wrap gap-2 w-screen justify-center p-8">
            {images.length > 0 && images.map((image, index)=>{
                return <ImageShow key={index} image={image}/>
            })}
        </div>
    )
}


export default ImageList
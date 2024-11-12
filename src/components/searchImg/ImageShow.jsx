import React from "react";

const ImageShow = ({image}) => {  
    return (
        <img 
            className="w-36 h-36" 
            key={image.id} 
            src={image.urls.small} 
            alt={image.alt_description} 
        />
    )
}


export default ImageShow
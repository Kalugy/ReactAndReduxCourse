import React from "react";

const SearchImg = ({setText, handleKeyDown}) => {  
    return (
        <div className="max-w-lg flex flex-col gap-4 mx-auto">
            <label>Search a name and Enter</label>
            <input 
                type="text" 
                className="text-black rounded"
                onChange={(e)=> setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}


export default SearchImg
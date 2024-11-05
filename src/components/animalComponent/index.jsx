import React, { useState } from "react";
//import "./styles.css";
import AnimalComponent from "./AnimalComponent";


const newAnimal = [{
    name: "",
    icon: "",
},

]


const App = () => {
    const [animal, setAnimal] = useState('')



    const handleClick = () => {
        const newAnimal = {
            name: "",
            icon: "",
        }       
        setAnimal(newAnimal);
    }

    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-row gap-4 mx-auto">
                <button onClick={handleClick()}>Add Animal</button>
                <AnimalComponent animal={animal} />
            </div>
        </div>
    )

}

export default App
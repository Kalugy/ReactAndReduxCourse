import React, { useState } from "react";
import AnimalComponent from "./AnimalComponent";

const App = () => {
    const [animal, setAnimal] = useState([])

    const getCatUrl = async () => {
        try {
          const response = await fetch("https://cataas.com/cat?json=true");
          const data = await response.json();
          return `https://cataas.com/cat/${data._id}`;
        } catch (error) {
          console.error("Error fetching cat image:", error);
        }
      };
    
    const handleClick = async () => {
        const newAnimal = {
            name: animal.length,
            icon: "",
            img: await getCatUrl(),
            heartSize: 15,
        }      
        
        setAnimal([...animal, newAnimal]);
    }

    const IncreaseHeartSize = (updatedAnimal) => {
        const updatedAnimals = animal.map(a => 
            a === updatedAnimal ? { ...a, heartSize: a.heartSize + 1 } : a
        );
        
        // Update the state with the new array
        setAnimal(updatedAnimals);
    }

    return (
        <div className="h-screen bg-slate-800  text-white flex justify-center items-center">
            <div className="max-w-lg flex flex-col gap-4 mx-auto">
                <button className="primary max-w-lg w-lg" onClick={() => handleClick()}>Add Animal</button>
                {animal.length>0 && <AnimalComponent animal={animal} Increase={IncreaseHeartSize} />}
            </div>
        </div>
    )

}

export default App
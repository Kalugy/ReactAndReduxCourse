import React from "react"
import Map from "./Map"
import LocationSearch from "./LocationSearch"
import type { Place } from "./Place"
import { useState } from "react"

function TypeScript() {
  const [ place, setPlace ] = useState<Place | null >(null)    
  
  return (
    <div className="pt-28 h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p)=>setPlace(p)}/>
      </div>
      <div className="col-span-9">
        <Map place={place}/>
      </div>
    </div>
  )
}

export default TypeScript
  
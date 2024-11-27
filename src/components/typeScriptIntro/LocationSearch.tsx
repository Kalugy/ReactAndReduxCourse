import React, { Fragment } from "react"
import type { Place } from "./Place"
import { useState } from "react"
import { Search } from "./Search"

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void
}

function LocationSearch({onPlaceClick}: LocationSearchProps) {
  const [ places, setPlaces ] = useState<Place[]>([])
  
  const [ term, setTerm ] = useState<string>('')
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const results = await Search(term)
    setPlaces(results)
    console.log('seach', term)
  }
    
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <label className="text-2xl p-2" htmlFor="term">Search</label>
        <input className="input" id="term" value={term} onChange={e => setTerm(e.target.value)}/>
      </form>
      <h1 className="py-2">Find Places</h1>
      <div className="grid grid-cols-[1fr-40px] gap-2 mt-2 items-center">
          {places.map((place)=>{
            return <Fragment key={place.id}> 
              <p className="text-sm">{place.name}</p>
              <button className="primary inline-block" onClick={()=> onPlaceClick(place)}>Go</button>
              <div className="border-b w-full col-span-2" />
            </Fragment>
          })}
      </div>
    </div>
  )
}

export default LocationSearch
  
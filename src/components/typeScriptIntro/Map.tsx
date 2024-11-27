import React from "react"
import type { Place } from "./Place"
import 'leaflet/dist/leaflet.css'
import type { Map as LeafletMap } from "leaflet"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useEffect, useRef } from "react"

interface MapProps {
  place: Place | null
}

function Map({place}: MapProps) {
  const element = useRef<LeafletMap | null>(null)
    
  useEffect(()=>{
    if(element.current && place){
      element.current.flyTo([place?.latitude, place.longitude])
    }
  },[place])
  
  return (<MapContainer 
    ref={element} 
    center={[40.70, -74]}
    zoom={12}
    scrollWheelZoom
    className="h-full"
  > 
    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
    {place && <Marker position={[place.latitude, place.longitude]}></Marker>}
  </MapContainer>
  )
}

export default Map
  
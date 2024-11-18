import { useState } from "react"

const CarSearch = ({carName, setCarName}) => {
  
  const handleChange = (e) => {
    setCarName(e.target.value)
  }


  return (
    <div className="bg-gray-800 text-white flex gap-3 justify-center">
      <h1 className="text-4xl font-bold">Cars</h1>
      <input type="text" value={carName} onChange={handleChange} className="input" />
    </div>
  )
}
  
export default CarSearch
  
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../../store"

const CarSearch = () => {
  const dispatch = useDispatch()

  const { searchTerm } = useSelector((state)=> {return state.cars2.searchTerm})


  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }


  return (
    <div className="bg-gray-800 text-white flex gap-3 justify-center">
      <h1 className="text-4xl font-bold">Cars</h1>
      <input type="text" value={searchTerm} onChange={handleChange} className="input" />
    </div>
  )
}
  
export default CarSearch
  
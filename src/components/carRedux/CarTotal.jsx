import { useSelector } from "react-redux"
import { useState, useEffect } from "react"


const CarTotal = () => {
  const cars = useSelector ((state) => {return state.cars})
  const [ total, setTotal ] = useState(0)

  const getTotal = () => {
    if(cars.length > 0 )
      cars.map((car) => setTotal( parseInt(car.price) + total))
  }

  useEffect(()=>{
    getTotal()
  },[cars])

  return (
    <div className=" bg-gray-800 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-300">Total ${total}</h1>
    </div>
  )
}
  
export default CarTotal
  
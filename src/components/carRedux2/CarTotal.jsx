import { useSelector } from "react-redux"


const CarTotal = () => {
  const total = useSelector (({ cars2: { cars, searchTerm } }) => {
    const filteredCard = cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const costRelative = 0
    const totalCost = filteredCard.reduce((increment ,car ) => parseInt(car.cost) + increment, costRelative )
    return totalCost
  })
 

  return (
    <div className=" bg-gray-800 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-300">Total ${total || '0' }</h1>
    </div>
  )
}
  
export default CarTotal
  
import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../../store";
import { useEffect, useState } from "react";

const CarTable = ({carName}) => {

  const dispatch = useDispatch();
  const listCar = useSelector((state) => {
    return state.cars
  })
  const handleDelete = (id) => {
    dispatch(removeCar(id))
  }

  const listCarFilter = listCar.filter((item) => item.name.toLowerCase().includes(carName))
  
  const [ total, setTotal ] = useState(0)

  const getTotal = () => {
    let tempTotal = 0; // Use a temporary variable for accumulation
    if (listCarFilter.length > 0) {
      listCarFilter.forEach((car) => {
        tempTotal += parseInt(car.price, 10); // Accumulate prices
      });
    }
    setTotal(tempTotal); // Set state after calculation
  };

  useEffect(()=>{
    getTotal()
  },[carName])

  return (
    <div className=" bg-gray-800 text-white flex items-center justify-center">
      {total}
      <table className="min-w-full bg-slate-500 rounded shadow p-5">
        <thead className="p-6 bg-blue-400 rounded ">
          <tr className="font-bold">
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="py-2 text-center">
          

          {listCarFilter?.length > 0 && 
            listCarFilter.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>$ {car.price}</td>
                  <th>
                    <button 
                      onClick={() => handleDelete(car.id)} 
                      className="secondary p-1 text-xs">
                        X
                    </button>
                  </th>
                </tr>
            )})
          }
          
        </tbody>
      </table>
    </div>
    )
  }
  
  export default CarTable
  
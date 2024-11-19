import { useSelector, useDispatch } from "react-redux"
import { removeNewCar } from "../../store";
import { useEffect, useState } from "react";
import { createSelector } from "@reduxjs/toolkit";

const memoizedCars = createSelector(
  [(state) => state.cars2.cars, (state) => state.cars2.searchTerm],
  (cars, searchTerm) =>
    cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

const CarTable = () => {

  const dispatch = useDispatch();
  // const listCar = useSelector((state) => {
  //   return state.cars2.cars
  // })
  const listCar = useSelector(memoizedCars);


  const handleDelete = ( id ) => {
    dispatch(removeNewCar(id))
  }

  return (
    <div className=" bg-gray-800 text-white flex items-center justify-center">
      <table className="min-w-full bg-slate-500 rounded shadow p-5">
        <thead className="p-6 bg-blue-400 rounded ">
          <tr className="font-bold">
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="py-2 text-center">
          

          {listCar?.length > 0 && 
            listCar.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>$ {car.cost}</td>
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
  
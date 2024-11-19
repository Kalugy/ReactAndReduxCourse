
import CarForm from "./CarForm"
import CarSearch from "./CarSearch"
import CarTable from "./CarTable"
import CarTotal from "./CarTotal"
import { useState } from "react"

function CarRedux2() {

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col gap-2 items-center justify-center">
      <CarForm />
      <CarSearch />
      <CarTable />
      <CarTotal />
    </div>
  )
}

export default CarRedux2

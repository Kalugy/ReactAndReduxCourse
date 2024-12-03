import React from "react"

import { useLoaderData } from "react-router-dom"
import type { homeLoaderResult } from "./homeLoader"
import { Link } from "react-router-dom"

function HomePage() {
  const { featurePackages } = useLoaderData() as homeLoaderResult

  const renderedingPackage = featurePackages.map((pack)=>{
    return <div key={pack.name} className="flex flex-col justify-between gap-3 border rounded shadow p-4">
      <div className="flex flex-col gap-1 border-bottom border-gray-200">
        <div className="font-bold text-center">{pack.name}</div>
        <div className="text-sm text-gray-200">{pack.description}</div>
        <div className="text-sm text-gray-200">{pack.maintainers.length} Maintainers</div>
      </div>
      <Link to={'/registry/packages/'+pack.name} className="text-center border rounded px-4 py-2 pointer hover:bg-blue-200 hover:text-black">View</Link>
    </div>
  })
  
  return (
    <div className="pt-5">
      <h1 className="text-3xl font-bold text-blue-200">Welcome to npm test</h1>
      <p className="text-md font-semibold text-center py-5">Here you will fine all repositories for npm with details of package</p>
      <div className="flex items-center gap-2 justify-center">
        <div className="border px-2 py-4 bg-gray-800 m-2 rounded max-w-64">
          <h3 className="font-semibold text-md">Top packages</h3>
          <p className="font-normal text-sm">here are list the most usage package over the last month</p>
        </div>
        <div className="border px-2 py-4 bg-gray-800 m-2 rounded max-w-64">
          <h3 className="font-semibold text-md">Top search</h3>
          <p className="font-normal text-sm">Find the most usage package on the week </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedingPackage}
      </div>
    </div>
  )
}

export default HomePage

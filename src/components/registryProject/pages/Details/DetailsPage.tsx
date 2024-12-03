import React from "react"
import { useLoaderData } from "react-router-dom"
import type { DetailsLoaderResult } from "./DetailsLoader"


function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult
  console.log('de', details)
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold m-4">{details.name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-700 rounded">{details.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-700 rounded">{details.license}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Author</h3>
        {/* <div className="p-3 bg-gray-700 rounded">{details.author.name} - {details.author.email}</div> */}
      </div>
    </div>
  )
}

export default DetailsPage
  
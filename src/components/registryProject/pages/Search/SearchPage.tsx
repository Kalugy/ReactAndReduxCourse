import React from "react"
import { useLoaderData } from "react-router-dom"
import { searchLoaderResults } from "./SearchLoader"
import PackageListItem from "../../components/PackageListItem"

function SearchPage() {
  const { searchResults } = useLoaderData() as searchLoaderResults

  const renderResults = searchResults.map((result)=> {
    return <PackageListItem key={result.name} pack={result} /> 
  })

  return (
    <div className="space-y-4 mt-4">
      <h1 className="text-lg font-bold text-left">Search Page</h1>
      {renderResults}
    </div>
  )
}

export default SearchPage
  
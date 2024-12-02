import React from "react"
import { PackageSummary } from "../apis/types/PackageSummary"
import { Link } from "react-router-dom"

interface PackageListItemProps{
    pack: PackageSummary
}

function PackageListItem({ pack }: PackageListItemProps) {

    const renderKeywords = (pack.keywords || [] ).slice(1,8).map((key)=>{
        return <div key={key} className="border py-0.5 px-1 text-xs text-blue-100 font-semibold bg-slate-700 rounded">
            {key}
        </div>
    })

    return (
        <div className="border p-4 rounded flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <Link to={`/registry/packages/${pack.name}`} 
                    className='text-xl font-bold'
                >
                    {pack.name}
                </Link>     
                <p className="text-sm text-gray-500">
                    {pack.description}
                </p>
                <div className="flex gap-1">
                    {renderKeywords}
                </div>
            </div>
            <div className="mr-6">
                <Link to={`/registry/packages/${pack.name}`} 
                    className='py-2 px-3 rounded text-blue-100 bg-slate-600 text-lg'>
                    View
                </Link>   
            </div>
        </div>
    )
}

export default PackageListItem
  
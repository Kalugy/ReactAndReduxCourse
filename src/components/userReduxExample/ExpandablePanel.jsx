import { useState } from "react"

import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const ExpandablePanel = ({header, children}) => {
    const [expanded, setExpanded]= useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return(
        <div className="m-3 rounded border bg-gray-600">
            <div onClick={handleClick} className="flex flex-row cursor-pointer gap-2 items-center justify-between m-3">
                <div className="flex flex-row cursor-pointer gap-2 items-center m-3">{header}</div>
                <div onClick={handleClick}>
                    {expanded ? <GoChevronDown/> : <GoChevronLeft/> }
                </div>
            </div>
            {expanded &&
                <div className="p-2 border-t">
                    {children}
                </div>
            }
            
        </div>
    )


}

export default ExpandablePanel
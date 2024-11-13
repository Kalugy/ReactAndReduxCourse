import React, { useState } from "react";

const Select = () => {
    const option = [
        {'label':'red', 'value': "red" },
        {'label':'blue', 'value': "blue" },
        {'label':'green', 'value': "green" }
    ]
    const [value, setValue] = useState('')

    const handleSelect = (newValue) => {
        console.log(newValue)
        setValue(newValue)
    }

    return(
        <div 
            className="min-h-screen flex justify-center items-center"
        >
            <CustomSelect option={option} value={value} onChange={handleSelect} />
        </div>
    )

}

const CustomSelect = ({option, onChange, value}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="">
            <div 
                className="bg-slate-600 px-5 py-2 min-w-18 font-semibold text-sm rounded" 
                onClick={ () => setIsOpen(!isOpen)}
            >
                {value || 'Select...'}
            </div>
            {isOpen && 
                <div
                    className="absolute"
                >
                    {option.map(option => {
                        return (
                            <div 
                                className="bg-slate-500 px-5 py-2 font-semibold text-sm cursor-pointer hover:bg-slate-300"
                                onClick={() => {onChange(option.value);setIsOpen(!isOpen)  }}
                                key={option.value}
                            >
                                {option.label}
                            </div>
                    )
                })}
                </div>
            }
        </div>
    )
}


export default Select
import React, { useState, useEffect, useRef } from "react";
import Panel from "./Panel";


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
    const divEl = useRef()

    useEffect(()=>{

        if(!divEl.current){
            return;
        }

        const handler = (event) => {
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        }
    },[])

    return (
        <div ref={divEl} className="">
            <Panel 
                className="bg-slate-700 min-w-18 cursor-pointer font-semibold text-sm" 
                onClick={ () => setIsOpen(!isOpen)}
            >
                {value || 'Select...'}
            </Panel>
            {isOpen && 
                <div
                    className="absolute"
                >
                    {option.map(option => {
                        return (
                            <Panel 
                                className="bg-slate-500 font-semibold text-sm cursor-pointer hover:bg-slate-300"
                                onClick={() => {onChange(option.value);setIsOpen(!isOpen)  }}
                                key={option.value}
                            >
                                {option.label}
                            </Panel>
                    )
                })}
                </div>
            }
        </div>
    )
}


export default Select
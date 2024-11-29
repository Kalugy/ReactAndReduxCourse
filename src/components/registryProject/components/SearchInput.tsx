import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const SearchInput = () => {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/registry/search' + '?term=' + term)
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center pl-2">
                <ImSearch className="h-5 w-5 text-gray-800" />
            </div>
            <input placeholder="Search..." className="p-2 pl-8 text-gray-800 italic font-semibold text-md rounded shadow-sm " value={term} onChange={(e) => setTerm(e.target.value)} />   
    
        </div>
    </form>
    )
}

//example form with router-dom
const SearchInput2 = () => {
    return (
    <Form action="/registry/search">
       <input placeholder="Search..." className="input" name='term'/>   
    </Form>
    )
}

export default SearchInput
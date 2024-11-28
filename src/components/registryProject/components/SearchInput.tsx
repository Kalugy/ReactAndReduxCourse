import { useState } from "react";
import React from "react";

const SearchInput = () => {
    const [term, setTerm] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    return (
    <form onSubmit={handleSubmit}>
       <input value={term} onChange={(e) => setTerm(e.target.value)} />   
    </form>
    )
}

export default SearchInput
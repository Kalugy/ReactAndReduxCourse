import React, {useContext, useState} from "react";

import { isRequired, validateLetters } from '../../utils/validations';

import BooksContext from "../../context/Books";


const AddBook = () => {
    const { CreateBook } = useContext(BooksContext)
    const [errors, setErrors] = useState({});
    const [text, setText] = useState('')

    const validate = (name) => {
        const newErrors = {};

        if (!isRequired(name)) {
            newErrors.name = 'Name is required';
        }
        if (!validateLetters(name)) {
            newErrors.validateLetters = 'Only letters is required';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0){
            setText(name)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        CreateBook(text);
        setText('')
    }


    return (
        <div className="bg-slate-500 flex flex-col p-6 m-2 rounded shadow">
            <form
                className="max-w-lg"
                onSubmit={handleSubmit}>
                
                <h1 className="font-bold text-left">Create Book</h1>
                <label className="font-bold ">Name</label>
                <input 
                    className="text-black input" 
                    value={text} 
                    onChange={(e)=>validate(e.target.value)}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <button className="primary max-w-20">Submit</button>
            </form>
        </div>
    )

}

export default AddBook
import React, {useState} from "react";

import { isRequired, validateLetters } from '../../utils/validations';

const AddBook = ({handleSubmit,text, setText}) => {

    const [errors, setErrors] = useState({});

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
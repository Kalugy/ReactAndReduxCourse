import React, {useState} from "react";

import { isRequired, validateLetters } from '../../utils/validations';

import EditIcon from '../../assets/svg/EditIcon';
import DeleteIcon from '../../assets/svg/DeleteIcon';


const BookCard = ({book, handleDelete, handleNewEdit}) => {

    const [bookN, setBookN] = useState(book.name)
    const [edit, setEdit] = useState(false)
    const [errors, setErrors] = useState({});

    const handleEdit = (name) => {
        const newErrors = {};

        if (!isRequired(name)) {
            newErrors.name = 'Name is required';
        }
        if (!validateLetters(name)) {
            newErrors.validateLetters = 'Only letters is required';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0){
            setBookN(name)
        }
    }

    return (
        <div className="bg-slate-500 flex flex-col min-w-28 min-h-28 border-gray-500 border-2 rounded shadow">
            <div className="flex justify-end text-right gap-2">
                <div className="cursor-pointer text-blue-400 hover:text-gray-100"
                    onClick={() => setEdit(!edit)}
                >
                    <EditIcon
                    size={13}
                    />
                </div>
                <div className="cursor-pointer text-red-400 hover:text-gray-100"
                    onClick={() => handleDelete(book)}
                >
                    <DeleteIcon
                    size={13}
                    />
                </div>
            </div>
            {edit && 
            <div className="flex flex-col">
                <label className="p-2 font-bold">Name</label>
                <input 
                    className="text-black input" 
                    value={bookN}
                    onChange={(e)=>handleEdit(e.target.value)}
                />   
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <button
                    className="primary min-w-8" 
                    onClick={()=>{setEdit(!edit);handleNewEdit(bookN,book.name)}}>Save</button>
            </div>
            }
            {!edit && 
                <div className="text-white p-5">
                    <img className="w-26 h-28 rounded py-2" src={book.image} alt="photo" />
                    <h4 className="font-bold">Name</h4>
                    <h5 className="font-semibold">{book.name}</h5>
                </div> 
            }
            
        </div>
    )

}

export default BookCard
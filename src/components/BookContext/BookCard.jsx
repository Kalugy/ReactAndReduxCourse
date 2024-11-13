import React, {useContext, useState} from "react";

import { isRequired, validateLetters } from '../../utils/validations';

import EditIcon from '../../assets/svg/EditIcon';
import DeleteIcon from '../../assets/svg/DeleteIcon';

import BooksContext from "../../context/Books";

const BookCard = ({book}) => {
    const { handleDelete, handleNewEdit } = useContext(BooksContext)

    const [ bookN, setBookN ] = useState(book.name)
    const [ edit, setEdit ] = useState(false)
    const [ errors, setErrors ] = useState({});

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
        <div 
        className="bg-slate-600 flex flex-col w-60 min-h-28 p-4 border-gray-600 border rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
        style={{ backgroundImage: `url(${book.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Top Right Icons (Edit/Delete) */}
        <div className="flex justify-end gap-3 relative z-10 mb-2">
            <div 
                className="cursor-pointer text-blue-400 hover:text-blue-200 transition-colors"
                onClick={() => setEdit(!edit)}
            >
                <EditIcon size={16} />
            </div>
            <div 
                className="cursor-pointer text-red-400 hover:text-red-200 transition-colors"
                onClick={() => handleDelete(book)}
            >
                <DeleteIcon size={16} />
            </div>
        </div>
    
        {/* Content */}
        {edit ? (
            <div className="flex flex-col space-y-3 relative z-10">
                <label className="text-sm font-bold text-gray-200">Name</label>
                <input 
                    className="text-gray-800 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={bookN}
                    onChange={(e) => handleEdit(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                <button
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={() => { setEdit(!edit); handleNewEdit(book, bookN); }}
                >
                    Save
                </button>
            </div>
        ) : (
            <div className="text-white space-y-2 relative z-10">
                <h4 className="text-lg font-bold text-gray-300">Name</h4>
                <h5 className="font-semibold text-gray-100">{book.name}</h5>
            </div>
        )}
    </div>
    

    )

}

export default BookCard
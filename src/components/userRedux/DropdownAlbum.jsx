import axios from "axios"
import { useState } from "react"

import { createAlbum } from "../../store"
import { useDispatch } from "react-redux"
import { faker } from "@faker-js/faker"

const updateAlbum = async (id, newArray) => {
    const response = await axios.patch(`http://localhost:3000/album/${id}`, newArray)
    return response.data
}


const deleteAlbum = async (id) => {
    const response = await axios.delete(`http://localhost:3000/album/${id}`)
    return response.data
}

const DropdownAlbum = ({album, setAlbum}) => {
    const [isOpen, setIsOpen ] = useState(false)

    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleAddImage = async () => {
        const image = faker.image.avatar()
        const newArray = album.images
        newArray.push(image)
        const response = await updateAlbum(album.id, { images: newArray})
        setAlbum()        
    }
    const handleDelete = async () => {
        const response = await deleteAlbum(album.id)
        setAlbum()
    }

    return (
        <div className="flex flex-col w-full justify-center items-center align-middle" >
            <div onClick={()=>handleDropdown()} className="flex w-10/12 justify-between mt-5 px-5 md:mx-30 bg-slate-400 rounded shadow hover:bg-slate-500">
            <div className="flex gap-2 m-3 align-middle">
                <button onClick={()=>handleDelete()} className="secondary p-1 m-1 font-bold">X</button>
                <p className="text-sm md:text-lg font-semibold p-2">{album.title}</p>
            </div>
            <div className="flex items-center font-bold text-white">
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            </div>
            {isOpen && 
            <div className="flex w-10/12 justify-center flex-col ">
                <div className="flex flex-col w-full justify-between p-5 md:px-36 gap-2 bg-slate-600">
                    <div className="flex w-full justify-between p-5 md:px-36 gap-2">
                        <h3 className="text-3xl font-bold ">{album.title}</h3>
                        <button onClick={() => handleAddImage()} className="primary">+ Add pictures</button>
                    </div>
                    <div className="flex gap-2 justify-center">
                        {album.images.length > 0 && album.images.map((relativeValue, index) => {
                            return(
                                <img key={index} src={relativeValue} className="w-8 h-8"/>
                            )
                        })}
                    </div>
                </div>
            </div>  
            }
        </div>
    )
}

export default DropdownAlbum
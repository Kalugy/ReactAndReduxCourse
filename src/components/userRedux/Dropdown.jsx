import axios from "axios"
import { useEffect, useState } from "react"

import { createAlbum } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { faker } from "@faker-js/faker"

import DropdownAlbum from "./DropdownAlbum"

const postAlbum = async (newAlbum) => {
    const response = await axios.post('http://localhost:3000/album', newAlbum)
    return response.data
}

const getByUserId = async (userId) => {
    const response = await axios.get(`http://localhost:3000/album?userId=${userId}`)
    return response.data
}

const Dropdown = ({user}) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen ] = useState(false)

    const albums = useSelector((state) => {return state.users.album})

    const handleDropdown = () => {
        
        setIsOpen(!isOpen)
    }

    const handleAddAlbum = async (userId) => {
        const newAlbum = {
            id: faker.string.uuid(),
            title: faker.music.songName(),
            images: [],
            userId: userId
        }
        const response = await postAlbum(newAlbum)
        dispatch(createAlbum(newAlbum))

    }

    const test = (userId) => {
        if(isOpen){
            const newAlbum = getByUserId(userId)
            console.log('ew',newAlbum)
            {albums.length > 0 && albums.map((relativeValue) => {
                return(
                    <DropdownAlbum key={relativeValue.id} album={relativeValue} />
                )
            })}
        }
        
        return <></>
    }

    return (
        <div className="flex flex-col w-full justify-center items-center align-middle" >
            <div onClick={handleDropdown} className="flex w-10/12 justify-between mt-5 px-5 md:mx-30 bg-slate-400 rounded shadow hover:bg-slate-500">
            <div className="flex gap-2 m-3 align-middle">
                <button className="secondary p-1 m-1 font-bold">X</button>
                <p className="text-sm md:text-lg font-semibold p-2">{user.name}</p>
            </div>
            {isOpen && <div className="flex items-center font-bold">{'>'}</div>}
            {!isOpen && <div className="flex items-center font-bold">{'<'}</div>}
            </div>
            {isOpen && 
            <div className="flex w-10/12 justify-center ">
                <div className="flex w-full justify-between p-5 md:px-36 gap-2 bg-slate-600">
                <h3 className="text-3xl font-bold ">Albums by {user.name}</h3>
                <button onClick={() => handleAddAlbum(user.id)} className="primary">+ Add Albums</button>
                </div>
                {test(user.id)}
            </div>  
            }
        </div>
    )
}

export default Dropdown
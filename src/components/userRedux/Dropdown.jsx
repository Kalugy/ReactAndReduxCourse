import axios from "axios"
import { useEffect, useState } from "react"

import { createAlbum, setAlbum } from "../../store"
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

const deleteUser = async (userId, albums) => {
    const response = await axios.delete(`http://localhost:3000/user/${userId}`)
    console.log('delete user', userId)
    //return response.data
    for(const album of albums){
        await axios.delete(`http://localhost:3000/album/${album.id}`)
        console.log('delete album', album.id)
    }

}


const Dropdown = ({user, getUsers}) => {
    const dispatch = useDispatch()
    const [ isOpen, setIsOpen ] = useState(false)
    const [ albums, setAlbums ] = useState([])
    //const albums = useSelector((state) => {return state.users.album})

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
        console.log(response,'newalbumadded')
        setAlbumss()
        //dispatch(createAlbum(newAlbum))

    }

    const setAlbumss = async () =>{
        if(isOpen){
            const newAlbum = await getByUserId(user.id)
            setAlbums(newAlbum)
            
            //dispatch(setAlbum(newAlbum))
            // dispatch(setAlbum())
        }
    }

    const handleDelete = async () => {
        console.log('deleteing')
        const response = await deleteUser(user.id, albums)
        getUsers()
    }


    useEffect(()=>{
        setAlbumss()
    },[isOpen])

    return (
        //TODO FIX THE on open it should display below and not overlop to the top
        <div className="flex flex-col w-full justify-center items-center" >
            <div onClick={()=>handleDropdown()} className="flex w-10/12 justify-between mt-5 px-5 md:mx-30 bg-slate-400 rounded shadow hover:bg-slate-500">
                <div className="flex gap-2 m-3 align-middle">
                    <button onClick={() => handleDelete()} className="secondary p-1 m-1 font-bold">X</button>
                    <p className="text-sm md:text-lg font-semibold p-2">{user.name}</p>
                </div>
                {/* {isOpen && <div className="flex items-center font-bold">{'>'}</div>}
                {!isOpen && <div className="flex items-center font-bold">{'<'}</div>} */}
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
                        <h3 className="text-3xl font-bold ">Albums by {user.name}</h3>
                        <button onClick={() => handleAddAlbum(user.id)} className="primary">+ Add Albums</button>
                    </div>
                    <div>
                        {albums.length > 0 && albums.map((relativeValue) => {
                            return(
                                <DropdownAlbum key={relativeValue.id} album={relativeValue} setAlbum={setAlbumss} />
                            )
                        })}
                    </div>
                </div>
            </div>  
            }
        </div>
    )
}

export default Dropdown
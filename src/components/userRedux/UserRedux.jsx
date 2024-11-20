import Dropdown from "./Dropdown"
import { useEffect, useState } from "react"
import { faker } from "@faker-js/faker"

import { useDispatch, useSelector } from "react-redux"
import { createUser, setUser } from "../../store"
import axios from "axios"

const postCreateNewUser = async (newUser) => {
  const newC = await axios.post('http://localhost:3000/user', newUser)
  return newC
}

function UserRedux() {
  const dispatch = useDispatch()
  const user = useSelector((state) =>{ return state.users.user} )
  const handleCreateUser = async () => {
    const newUser = {
      id: faker.string.uuid(),
      name: faker.internet.username(),
      album: []
    }
    dispatch(createUser(newUser))
    await postCreateNewUser(newUser)
  }

  const getUsers = async () =>{ 
    const users = await axios.get('http://localhost:3000/user')
    dispatch(setUser(users.data))
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <div className="flex w-full justify-between px-5 md:px-36 gap-2">
        <h3 className="text-3xl font-bold ">Users</h3>
        <button onClick={()=> handleCreateUser()} className="primary">+ Add user</button>
      </div>
      {user.length > 0 && user.map((relativeUser) => {
        return(
          <Dropdown key={relativeUser.id} user={relativeUser} />
        )
      })}
    </div>
  )
}

export default UserRedux

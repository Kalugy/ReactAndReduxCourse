import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, createNewUser } from "../../store"
import Skeleton from "./Skeleton"
import { useThunk } from "../../hooks/useThunk"
import Button from "./Button"

import UserListItem from "./UserListItem"

const UserList = () => {
  const [ doFetchUser, isLoadingUsers, loadingUsersError ]= useThunk(fetchUsers)
  // const [ isLoadingUsers, setIsLoadingUsers ] = useState(false)
  // const [ loadingUsersError, setLoadingUsersErrors ] = useState(null)
  const [ doCreateUser, isCreatingUser, creatingUserError ] = useThunk(createNewUser)
  // const [ isCreatingUser, setIsCreatingUser ] = useState(false)
  // const [ creatingUserError, setCreatingUserError ] = useState(null)

  const { data } = useSelector((state) => {
    return state.usersexample
  })

  useEffect(()=>{
    doFetchUser()
  },[])

  const handleUserAdd = () => {
    doCreateUser()
  }

  // useEffect(() => {
  //   setIsLoadingUsers(true)
  //   dispatch(fetchUsers())
  //     .unwrap()
  //     .catch((error)=> setLoadingUsersErrors(error))
  //     .finally(()=> setIsLoadingUsers(false))
  // },[dispatch])

  // const handleUserAdd = () => {
  //   setIsCreatingUser(true)
  //   dispatch(createNewUser())
  //     .unwrap()
  //     .catch((err) => setCreatingUserError(err))
  //     .finally(() => setIsCreatingUser(false))
  // }

  let content
  if(isLoadingUsers){
    content =<Skeleton times={6} className="h-10 w-full"/>
  }
  else if(loadingUsersError){
    content = <div>error fetching</div>
  }
  else {
    content = data.map((user)=>{
      return <UserListItem key={user.id} user={user} />
    })
  }

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">User list</h1>
        <Button 
          onClick={handleUserAdd} 
          className="primary"
          isLoading={isCreatingUser}
        >
          + Add user
        </Button>
        
        {creatingUserError && 'error creating user...'}
      </div>
      {content}
    </div>
  )
}

export default UserList

import { GoTrash } from "react-icons/go";
import Button from "./Button"
import { removeUsers } from "../../store"
import { useThunk } from "../../hooks/useThunk"
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList"


const UserListItem = ({user}) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUsers)

    const handleClick = () => {
        console.log('click', user)
        doRemoveUser(user)
    }

    const header = <>
        <Button isLoading={isLoading} onClick={()=>handleClick()} className='secondary p-1' > <GoTrash /> </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
    </> 

    return <ExpandablePanel header={header}>
                <AlbumList user={user}/>
    </ExpandablePanel>
}

export default UserListItem
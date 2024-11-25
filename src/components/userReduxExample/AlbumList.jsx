import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../../store"
import Skeleton from "./Skeleton"
import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button"
 

const AlbumList = ({user}) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [ addAlbum, results ] = useAddAlbumsMutation()
    let content
    if(isLoading){
        content= <Skeleton times={2}></Skeleton>
    }
    else if(error){
        content = <div>Error loading...</div>
    }else{
        content = data.map((album) => {
            const header = <div>{album.name }</div>
            return <ExpandablePanel key={album.id} header={header}>
                content
            </ExpandablePanel>
        })
    }

    const handleClick = () => {
        addAlbum(user)
    }

    return(
        <div className="">
            <div className="flex flex-row justify-between items-center">
                <div className="text-md">Albums {user.name}</div>
                <Button className='primary' onClick={handleClick}>+ Add Albums</Button>
            </div>
            <div>{content}</div>

        </div>
    )


}

export default AlbumList
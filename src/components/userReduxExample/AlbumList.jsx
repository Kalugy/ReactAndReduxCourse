import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../../store"
import Skeleton from "./Skeleton"
import Button from "./Button"
import AlbumListItem from "./AlbumListItem" 

const AlbumList = ({user}) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user)
    const [ addAlbum, results ] = useAddAlbumsMutation()
    let content
    //is loading only first time and isfetching every time 
    if(isFetching){
        content= <Skeleton times={2} className="h-20 w-full"></Skeleton>
    }
    else if(error){
        content = <div>Error loading...</div>
    }else{
        content = data.map((album) => {
            return <AlbumListItem key={album.id} album={album} />
        })
    }

    const handleClick = () => {
        addAlbum(user)
    }

    return(
        <div className="">
            <div className="flex flex-row justify-between items-center">
                <div className="text-md">Albums {user.name}</div>
                <Button className='primary' isLoading={results.isLoading} onClick={handleClick}>+ Add Albums</Button>
            </div>
            <div>{content}</div>

        </div>
    )


}

export default AlbumList
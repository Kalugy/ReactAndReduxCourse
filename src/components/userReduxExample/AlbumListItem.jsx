import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button"
import { GoTrash } from "react-icons/go"
import { useRemoveAlbumsMutation } from "../../store"
import PhotoList from "./PhotoList"

const AlbumListItem = ({album}) => {
    const [ removeAlbum, results ] = useRemoveAlbumsMutation()

    const handleClick = () => {
        removeAlbum(album)
        //removeAlbum({album,user})
    }

    const header = <div><Button isLoading={results.isLoading} onClick={handleClick} className='secondary p-1'><GoTrash/></Button> {album.name }</div>
    return <ExpandablePanel key={album.id} header={header}>
        <PhotoList album={album}/>
    </ExpandablePanel>
}

export default AlbumListItem
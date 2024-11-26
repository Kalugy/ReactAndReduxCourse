import ExpandablePanel from "./ExpandablePanel"
import { GoTrash } from "react-icons/go"
import { useRemovePhotoMutation } from "../../store"

const PhotoListItem = ({photo}) => {
    const [ removeAlbum, results ] = useRemovePhotoMutation()


    const handleClick = () => {
        removeAlbum(photo)
    }

    return (
        <div onClick={handleClick} className="relative cursor-pointer ">
            <img src={photo.image} className="h-12 w-12 " />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrash className="text-3xl" />
            </div>
        </div>
    )

}

export default PhotoListItem
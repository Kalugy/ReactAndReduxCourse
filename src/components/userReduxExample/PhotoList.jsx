import { useFetchPhotoQuery, useAddPhotoMutation } from "../../store"
import Button from "./Button"
import PhotoListItem from "./PhotoListItem"
import Skeleton from "./Skeleton"

const PhotoList = ({album}) => {
    const { data, error, isFetching } = useFetchPhotoQuery(album) 
    const [ addPhoto, results ] = useAddPhotoMutation()

    const handleClick = () => {
        addPhoto(album)
    }

    let content
    if(isFetching){
        content = <Skeleton className='w-full h-4' times={2} />
    }
    else if(error){
        content = <div>Error fetching photos</div>
    }
    else {
        content = data.map((photo) => {
            return <PhotoListItem key={photo.id} photo={photo} />
        })
    }

    return (
        <div>
            <div className="p-2 flex flex-row justify-between">
                <div>
                    Photo in {album.name}
                </div>
                <Button onClick={handleClick} isLoading={results.isFetching} className='primary'>++ Add Photo</Button>
            </div>
            <div className="flex flex-row gap-2 justify-center">
                {content}
            </div>
        </div>
    )


}

export default PhotoList
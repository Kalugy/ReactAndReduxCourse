import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photoApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints(builder){
        return {
            fetchPhoto: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map(photo => {
                        return {type: 'Photo', id: photo.id}
                    })
                    tags.push({type: 'AlbumsPhoto', id: album.id})
                    return tags
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET'
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{type: 'AlbumsPhoto', id: album.id}]
                },
                query: (album) => {
                    return {
                        method: 'POST',
                        url: '/photos',
                        body: {
                            image: faker.image.avatar(),
                            albumId: album.id 
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{type: 'Photo', id: photo.id}]
                },
                query: (photo) => {
                    return{
                        url: '/photos/' + photo.id,
                        method: 'DELETE',
                    }
                }
            }),
        }
    }
})

export const {
    useFetchPhotoQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photoApi
export { photoApi }
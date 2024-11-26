import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";


const pauseTest = (timer) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer)
    })
} 

const albumsApi = createApi ({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            //dev test
            await pauseTest(1000)
            return fetch(...args)
        }
    }),
    endpoints(builder){
        return{
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return {type: 'Album', id: album.id}
                    })
                    tags.push({type: 'UserAlbums', id: user.id})
                    return tags
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params:{
                            userId: user.id
                        },
                        method: 'GET',
                    }
                }
            }),
            addAlbums: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{type: 'UserAlbums', id: user.id}]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            name: faker.commerce.productName(),  
                        }
                    }
                }
            }),
            removeAlbums: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{type: 'Album', id: album.id}]
                },
                query: (album) => {
                    return {
                        url: '/albums/' + album.id,
                        method: 'DELETE',
                    }
                }
            })
        }
    }

})

export const { 
    useFetchAlbumsQuery, 
    useAddAlbumsMutation,
    useRemoveAlbumsMutation
} = albumsApi
export { albumsApi }
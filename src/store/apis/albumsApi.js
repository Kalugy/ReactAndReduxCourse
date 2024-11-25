import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi ({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints(builder){
        return{
            fetchAlbums: builder.query({
                providesTags: ['Album'],
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
            })
        }
    }

})

export const { 
    useFetchAlbumsQuery, 
    useAddAlbumsMutation 
} = albumsApi
export { albumsApi }
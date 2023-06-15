import { apiSlice } from "./apiSlice";
const USER_URL ='http://localhost:5000/'

export const usersApiSlice = apiSlice.injectEndpoints({
endpoints: (builder) =>({
    login: builder.mutation({
        query: (data) => ({
            url: USER_URL+ 'login',
            method:'POST',
            body:data
        })
    }),
    register: builder.mutation({
        query: (data) => ({
            url: USER_URL+ 'register',
            method:'POST',
            body:data
        })
    }),
    logout:builder.mutation({
        query:() =>({
            url: USER_URL+ 'logout',
            method: 'POST'
        }) 
    }),
    update: builder.mutation({
        query: (data) => ({
            url: USER_URL+'register',
            method:'PUT',
            body:data
        })
    }),
    
})
})

export const {useLoginMutation, useLogoutMutation,useRegisterMutation, useUpdateMutation} = usersApiSlice
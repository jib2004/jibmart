import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
//import { json } from 'stream/consumers'

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredientials: (state, action)=>{
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout:(state,action) =>{
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setCredientials, logout} = authSlice.actions

export default authSlice.reducer
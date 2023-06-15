import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    productTitle: '',
    states: '',
    from:0,
    to:0,
    fee:0,
    isOpened: false
}

const deliverySlice = createSlice({
    name: "delivery",
    initialState,
    reducers:{
        Title: (state, action) => {
            state.productTitle = action.payload;
          },
          States: (state, action) => {
            state.states = action.payload;
          },
          From: (state, action) => {
            state.from = action.payload;
          },
          To: (state, action) => {
            state.to = action.payload;
          },
          Fee: (state, action) => {
            state.fee = action.payload;
          },
          Opened:(state,action) =>{
            state.isOpened = action.payload
          } ,     
    }
})

export const {
   Title,
   States,
   From,
   To,
   Fee,
   Opened

} = deliverySlice.actions
export default deliverySlice.reducer
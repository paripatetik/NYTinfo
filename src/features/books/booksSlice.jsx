import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    booksItems: [],
    namesItems: [],
    isLoadingN: true,
    isLoadingB: true,
}

export const getItems = createAsyncThunk(
    'books/getItems', async (url)=>{
    try{
        const resp = await axios(url);
        return resp.data.results;
    } catch(err){
        console.log(err);
    }
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      
    },
    extraReducers: (bulder)=>{
        bulder.addCase(getItems.pending, (state, action) =>{
            if(action.meta.arg.includes('names')) state.isLoadingN = true;
            else state.isLoadingB = true;
        }).addCase(getItems.fulfilled,(state, action) =>{
            if(action.payload.books){
                 console.log(action.payload);
                state.booksItems= action.payload;
                state.isLoadingB = false;
            } else{
                state.namesItems= action.payload;
                state.isLoadingN = false;
            }
            
        }).addCase(getItems.rejected, (state) =>{
            state.isLoadingB = false;
            state.isLoadingN = false;
        })
    },
   
})


export default booksSlice.reducer;
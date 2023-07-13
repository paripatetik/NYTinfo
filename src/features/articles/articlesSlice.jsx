import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    articles: [],
    isLoading: true,
}

export const getItems = createAsyncThunk(
    'articles/getItems', async (url)=>{
    try{
        const resp = await axios(url);
        return resp.data.results;
    } catch(err){
        console.log(err);
    }
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
      
    },
    extraReducers: (bulder)=>{
        bulder.addCase(getItems.pending, (state) =>{
            state.isLoading= true;
        }).addCase(getItems.fulfilled,(state, action) =>{
            state.articles= action.payload;
            state.isLoading = false;
        }).addCase(getItems.rejected, (state) =>{
            state.isLoading = false;
        })
    },
   
})

export default articlesSlice.reducer;
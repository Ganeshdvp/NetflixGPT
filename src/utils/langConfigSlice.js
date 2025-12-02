import { createSlice } from "@reduxjs/toolkit";


const langConfigSlice = createSlice({
    name: 'langConfig',
    initialState:{
        languageState : "en"
    },
    reducers:{
        changeLanguage : (state, action)=>{
            state.languageState = action.payload;
        }
    }
})

export const { changeLanguage } = langConfigSlice.actions;
export default langConfigSlice.reducer;
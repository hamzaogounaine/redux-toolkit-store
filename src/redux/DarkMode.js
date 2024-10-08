import { createSlice } from "@reduxjs/toolkit";

const darkModeSLice = createSlice({
    name : 'darkMode' , 
    initialState : {
        isDark : false
    },
    reducers : {
        toggleMode : (state) => {
            state.isDark = !state.isDark
        }
    }
})

export const {toggleMode} = darkModeSLice.actions
export default  darkModeSLice.reducer
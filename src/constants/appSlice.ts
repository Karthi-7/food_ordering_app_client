import {createSlice} from "@reduxjs/toolkit"


interface Toggle{
    isToggle:boolean
}
const initialState:Toggle={
    isToggle:true
}

const appSlice= createSlice({
    name:'app',
   initialState,
    reducers:{
        isTogglemenuOpen: (state) => {
            state.isToggle=!state.isToggle
        }
    }
})

export const{isTogglemenuOpen}=appSlice.actions;
export default appSlice.reducer
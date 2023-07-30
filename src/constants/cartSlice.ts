import { PayloadAction, createSlice } from "@reduxjs/toolkit";



interface Items{
    _id:string,
    name:string,
    price:string,
    image:string
}

interface Item{
   items:Items[]
}
   





const initialState:Item={
   items:[]
}
console.log("intital ",initialState)


const cartSlice=createSlice({
    name:"app",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
           state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            console.log("remove action payload===========",action.payload._id)
            const result=state.items.filter(item=>{

                return action.payload._id !== item._id})
                state.items=result
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }

})
export const {addtoCart,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer
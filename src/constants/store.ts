import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cartSlice from "./cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store=configureStore({
    reducer:{
        app:appSlice,
        cart:cartSlice
    }

})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch =() => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>
import { configureStore } from "@reduxjs/toolkit";
import { squareSlice } from "./SquareSlice";

export const store = configureStore({
    reducer: squareSlice.reducer,
})
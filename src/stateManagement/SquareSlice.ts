import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RootState{
    squares:(string | null)[];
}

const initialState : RootState = {
    squares: Array(9).fill(null),
};

export const squareSlice = createSlice({
    name: "square",
    initialState,
    reducers:{
        updateSquare(state, action: PayloadAction<{index:number; value:string}>){
            const {index,value } = action.payload;
            state.squares[index] = value;
        },
        reset(state) {
            state.squares = initialState.squares;
        }
    }
})

export const {updateSquare,reset}= squareSlice.actions
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RootState{
    squares: (string | null)[];
    currentPlayer: number;
}

const initialState : RootState = {
    squares: Array(9).fill(null),
    currentPlayer: 1,
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
        },
        switchPlayer(state){
            state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        }
    }
})

export const {updateSquare, reset, switchPlayer}= squareSlice.actions
import {createSlice} from "@reduxjs/toolkit";
import {ITurnState} from "../../types/turnReducer";

let initialState: ITurnState = {
    turn: "youTurn"
}
export const turnSlice = createSlice({
    name: 'turn',
    initialState,
    reducers: {
        changeTurn: state => {
            state.turn === "youTurn" ?
                state.turn = "enemyTurn" :
                state.turn = "youTurn"
        }
    },
    extraReducers: {}
})
export const {changeTurn} = turnSlice.actions
export default turnSlice.reducer;

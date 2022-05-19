import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {shuffle, sortCards} from "../../helpers/sortCards";
import {cards} from "../../data/cards";

let initialState = {
    allCards: sortCards(cards)
}
export const cardsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        shuffleCards: state => {
            state.allCards = shuffle(state.allCards)
        }
    },
    extraReducers: {}
})
export const {shuffleCards} = cardsSlice.actions
export default cardsSlice.reducer;

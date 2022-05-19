import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sortCards} from "../../helpers/sortCards";
import {cards} from "../../data/cards";

let initialState = {
    allCards: sortCards(cards)
}
export const cardsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {

    }
})

export default cardsSlice.reducer;

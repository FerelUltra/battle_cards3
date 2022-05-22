import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {shuffle, sortCards} from "../../helpers/sortCards";
import {cards} from "../../data/cards";
import {ICardsState, IReplaceCard} from "../../types/cardsReducer";

let initialState: ICardsState = {
    allCards: sortCards(cards),
    handCards: [],
    enemyCards: sortCards(cards)
}
export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        shuffleCards: state => {
            state.allCards = shuffle(state.allCards)
        },
        setHandCards: (state, action) =>{
            state.handCards = action.payload
        },
        replaceCard: (state, action: PayloadAction<IReplaceCard>) =>{
            state.handCards[action.payload.index!] = action.payload.randomCard
        }
    },
    extraReducers: {}
})
export const {shuffleCards, setHandCards, replaceCard} = cardsSlice.actions
export default cardsSlice.reducer;

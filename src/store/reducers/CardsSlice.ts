import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {shuffle, sortCards} from "../../helpers/sortCards";
import {cards} from "../../data/cards";
import {ICardsState, IReplaceCard} from "../../types/cardsReducer";
import {ICard} from "../../types/cards";

let initialState: ICardsState = {
    allCards: sortCards(cards),
    handCards: [],
    enemyCards: sortCards(cards),
    lastMyCard: null,
    lastEnemyCard: null,
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
        },
        setLastMyCard: (state, action: PayloadAction<ICard | null>) =>{
            state.lastMyCard = action.payload
        },
        setLastEnemyCard: (state, action: PayloadAction<ICard | null>) =>{
            state.lastEnemyCard = action.payload
        },
    },
    extraReducers: {}
})
export const {shuffleCards, setHandCards, replaceCard, setLastMyCard, setLastEnemyCard} = cardsSlice.actions
export default cardsSlice.reducer;

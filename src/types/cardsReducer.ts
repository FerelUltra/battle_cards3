import {ICard, typeDeck} from "./cards";

export interface ICardsState{
    allCards: typeDeck,
    handCards: typeDeck
}
export interface IReplaceCard{
    index: number | undefined,
    randomCard: ICard
}

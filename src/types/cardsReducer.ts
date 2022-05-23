import {ICard, typeDeck} from "./cards";

export interface ICardsState {
    allCards: typeDeck,
    handCards: typeDeck
    enemyCards: typeDeck,
    lastMyCard: ICard | null,
    lastEnemyCard: ICard | null
}

export interface IReplaceCard {
    index: number | undefined,
    randomCard: ICard
}

import {ICards, typeDeck} from "../types/cards";

export function sortCards(cards: ICards){
    let deck: typeDeck = []
    for(let card of cards.attack){
        deck.push(card)
        deck.push(card)
    }
    for(let card of cards.defense){
        deck.push(card)
        deck.push(card)
    }
    return deck
}
export function shuffle(array: typeDeck) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        // мы используем для этого синтаксис "деструктурирующее присваивание"
        // подробнее о нём - в следующих главах
        // то же самое можно записать как:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

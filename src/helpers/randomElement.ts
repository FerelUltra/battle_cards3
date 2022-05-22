import {typeDeck} from "../types/cards";

export function getRandomArrayElement(arr: typeDeck){
    return arr[Math.floor(Math.random()*arr.length)]
}

export interface ICard{
    name: string,
    price: number,
    picture: string,
    effect: string,
    damage?: number,
    repair?: number,
    plusAttack?: number,
    plusAttackGen?: number,
    decrease?: number,
    defenseIncrease?: number,
    defenseGenIncrease?: number
}
export interface ICards{
    attack: ICard[],
    defense: ICard[]
}
export type typeDeck = ICard[]

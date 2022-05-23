export interface ICard {
    type: attackOrDefense
    name: string,
    price: number,
    picture: string,
    effect: typeEffect,
    damage?: number,
    repair?: number,
    attackIncrease?: number,
    attackGenIncrease?: number,
    decrease?: number,
    defenseIncrease?: number,
    defenseGenIncrease?: number,
    index?: number | undefined,
    used?: typeUsed
}

export interface ICards {
    attack: ICard[],
    defense: ICard[]
}

export type typeDeck = ICard[]
type attackOrDefense = "attack" | "defense"
export type typeEffect = "damage" | "radiation" | "attackIncrease" |
    "attackGenIncrease" | "sabotage" | "materialDecrease" | "repair" | "freeze" | "defenseIncrease" |
    "teleport" | "defenseGenIncrease" | "no"
type typeUsed = "used" | "notUsed"

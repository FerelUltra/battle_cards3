export interface IRocketInfoProps{
    youOrEnemy: "you" | "enemy",
    maxHealth: number,
    currentHealth: number,
    attack: number,
    attackGen: number,
    defense: number,
    defenseGen: number,
    healthState: typeHealthState
}
export interface IYouOrEnemy{
    youOrEnemy: "you" | "enemy"
}
export type typeHealthState = "low" | "medium" | "high" | "full"

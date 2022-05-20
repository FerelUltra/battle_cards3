export interface IRocketInfoProps{
    youOrEnemy: "you" | "enemy",
    maxHealth: number,
    currentHealth: number,
    attack: number,
    attackGen: number,
    defense: number,
    defenseGen: number
}
export interface IYouOrEnemy{
    youOrEnemy: "you" | "enemy"
}

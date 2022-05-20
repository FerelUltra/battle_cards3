export interface IRocketState{
    currentHealth: number,
    maxHealth: number,
    attack: number,
    attackGen: number,
    defense: number,
    defenseGen: number
}
export interface IRocketsState{
    myRocket: IRocketState,
    enemyRocket: IRocketState
}

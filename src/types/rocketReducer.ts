export interface IRocketState{
    currentHealth: number,
    maxHealth: number,
    attack: number,
    attackGen: number,
    defense: number,
    defenseGen: number,
    bombed: boolean
}
export interface IRocketsState{
    myRocket: IRocketState,
    enemyRocket: IRocketState
}

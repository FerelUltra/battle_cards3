import {createSlice} from "@reduxjs/toolkit";
import {IRocketsState} from "../../types/rocketReducer";

let initialState: IRocketsState = {
    myRocket: {
        currentHealth: 75,
        maxHealth: 150,
        attack: 50,
        attackGen: 4,
        defense: 50,
        defenseGen: 4,
        bombed: false
    },
    enemyRocket: {
        currentHealth: 75,
        maxHealth: 150,
        attack: 50,
        attackGen: 4,
        defense: 50,
        defenseGen: 4,
        bombed: false
    }
}
export const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {
        attackIncreaseReducer: (state, action) => {
            state.myRocket.attack = state.myRocket.attack + action.payload
        },
        defenseIncreaseReducer: (state, action) => {
            state.myRocket.defense = state.myRocket.defense + action.payload
        },
        damageReducer: (state, action) => {
            state.enemyRocket.currentHealth -= action.payload
        },
        repairReducer: (state, action) => {
            state.myRocket.currentHealth += action.payload
        },
        wasteAttackReducer: (state, action) => {
            state.myRocket.attack -= action.payload
        },
        wasteDefenseReducer: (state, action) => {
            state.myRocket.defense -= action.payload
        },
        attackGenIncreaseReducer: (state, action) => {
            state.myRocket.attackGen += action.payload
        },
        defenseGenIncreaseReducer: (state, action) => {
            state.myRocket.defenseGen += action.payload
        },
        materialDecreaseReducer: state => {
            state.enemyRocket.defense = Math.round(0.6 * state.enemyRocket.defense)
            state.enemyRocket.attack = Math.round(0.6 * state.enemyRocket.attack)
        },
        teleportReducer: state =>{
            const defensePart = Math.round(0.3 * state.enemyRocket.defense)
            const attackPart = Math.round(0.3 * state.enemyRocket.attack)
            state.myRocket.defense += defensePart
            state.myRocket.attack += attackPart
            state.enemyRocket.defense -= defensePart
            state.enemyRocket.attack -= attackPart
        },
        sabotageReducer: (state, action) =>{
          state.enemyRocket.bombed = action.payload
        },
        startNewGame: state => {
            state.myRocket = {
                currentHealth: 75,
                maxHealth: 150,
                attack: 50,
                attackGen: 4,
                defense: 50,
                defenseGen: 4,
                bombed: false
            }
            state.enemyRocket = {
                currentHealth: 75,
                maxHealth: 150,
                attack: 50,
                attackGen: 4,
                defense: 50,
                defenseGen: 4,
                bombed: false
            }
        },
        addTurnMaterial: (state) => {
            state.enemyRocket.attack += state.enemyRocket.attackGen
            state.myRocket.attack += state.myRocket.attackGen
            state.myRocket.defense += state.myRocket.defenseGen
            state.enemyRocket.defense += state.enemyRocket.defenseGen
        },
        enemyAttackIncreaseReducer: (state, action) => {
            state.enemyRocket.attack = state.enemyRocket.attack + action.payload
        },
        enemyDefenseIncreaseReducer: (state, action) => {
            state.enemyRocket.defense = state.enemyRocket.defense + action.payload
        },
        enemyDamageReducer: (state, action) => {
            state.myRocket.currentHealth -= action.payload
        },
        enemyRepairReducer: (state, action) => {
            state.enemyRocket.currentHealth += action.payload
        },
        enemyWasteAttackReducer: (state, action) => {
            state.enemyRocket.attack -= action.payload
        },
        enemyWasteDefenseReducer: (state, action) => {
            state.enemyRocket.defense -= action.payload
        },
        enemyAttackGenIncreaseReducer: (state, action) => {
            state.enemyRocket.attackGen += action.payload
        },
        enemyDefenseGenIncreaseReducer: (state, action) => {
            state.enemyRocket.defenseGen += action.payload
        },
        enemyMaterialDecreaseReducer: state => {
            state.myRocket.defense = Math.round(0.6 * state.myRocket.defense)
            state.myRocket.attack = Math.round(0.6 * state.myRocket.attack)
        },
        enemyTeleportReducer: state =>{
            const defensePart = Math.round(0.3 * state.myRocket.defense)
            const attackPart = Math.round(0.3 * state.myRocket.attack)
            state.enemyRocket.defense += defensePart
            state.enemyRocket.attack += attackPart
            state.myRocket.defense -= defensePart
            state.myRocket.attack -= attackPart
        },
        enemySabotageReducer: (state, action) =>{
            state.myRocket.bombed = action.payload
        },
    },
    extraReducers: {}
})
export const {
    defenseIncreaseReducer,
    attackIncreaseReducer,
    repairReducer,
    damageReducer,
    startNewGame,
    enemyDamageReducer,
    enemyRepairReducer,
    enemyDefenseIncreaseReducer,
    enemyAttackIncreaseReducer,
    wasteDefenseReducer,
    wasteAttackReducer,
    enemyWasteDefenseReducer,
    enemyWasteAttackReducer,
    addTurnMaterial,
    defenseGenIncreaseReducer,
    enemyDefenseGenIncreaseReducer,
    attackGenIncreaseReducer,
    enemyAttackGenIncreaseReducer,
    enemyMaterialDecreaseReducer,
    materialDecreaseReducer,
    teleportReducer,
    enemyTeleportReducer,
    sabotageReducer,
    enemySabotageReducer
} = rocketsSlice.actions
export default rocketsSlice.reducer;

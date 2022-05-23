import {createSlice} from "@reduxjs/toolkit";
import {IRocketsState} from "../../types/rocketReducer";

let initialState: IRocketsState = {
    myRocket: {
        currentHealth: 75,
        maxHealth: 150,
        attack: 50,
        attackGen: 4,
        defense: 50,
        defenseGen: 4
    },
    enemyRocket: {
        currentHealth: 75,
        maxHealth: 150,
        attack: 50,
        attackGen: 4,
        defense: 50,
        defenseGen: 4
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
        wasteAttackReducer: (state, action) =>{
          state.myRocket.attack -= action.payload
        },
        wasteDefenseReducer: (state, action) =>{
          state.myRocket.defense -= action.payload
        },
        startNewGame: state => {
            state.myRocket = {
                currentHealth: 75,
                maxHealth: 150,
                attack: 50,
                attackGen: 4,
                defense: 50,
                defenseGen: 4
            }
            state.enemyRocket = {
                currentHealth: 75,
                maxHealth: 150,
                attack: 50,
                attackGen: 4,
                defense: 50,
                defenseGen: 4
            }
        },
        addTurnMaterial: (state)=>{
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
        enemyWasteAttackReducer: (state, action) =>{
            state.enemyRocket.attack -= action.payload
        },
        enemyWasteDefenseReducer: (state, action) =>{
            state.enemyRocket.defense -= action.payload
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
    addTurnMaterial
} = rocketsSlice.actions
export default rocketsSlice.reducer;

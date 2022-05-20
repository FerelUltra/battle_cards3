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
    name: 'user',
    initialState,
    reducers: {
        increaseAttack: (state, action) => {
            state.myRocket.attack = state.myRocket.attack + action.payload
        },
        increaseDefense: (state, action) => {
            state.myRocket.defense = state.myRocket.defense + action.payload
        },
        damage: (state, action) => {
            state.enemyRocket.currentHealth -= action.payload
        },
        repair: (state, action) => {
            state.myRocket.currentHealth += action.payload
        },
    },
    extraReducers: {}
})
export const {increaseAttack, increaseDefense, repair, damage} = rocketsSlice.actions
export default rocketsSlice.reducer;

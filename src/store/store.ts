import {configureStore, combineReducers} from "@reduxjs/toolkit";
import cardsReducer from "./reducers/CardsSlice";

const rootReducer = combineReducers({
    cardsReducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
